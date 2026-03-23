"""
ZStack 文档搜索模块 - 提供运维知识库的搜索功能

支持两种数据源：
1. 本地 JSON 索引文件（data/docs/index.json）
2. Markdown 文档目录扫描（data/docs/*.md）

搜索策略：TF-IDF 关键词匹配 + 中文分词（基于字符 n-gram）
"""

import json
import math
import os
import re
from collections import Counter, defaultdict
from dataclasses import dataclass, field
from pathlib import Path
from typing import Optional


@dataclass
class DocChunk:
    """文档片段"""
    doc_id: str             # 唯一标识
    title: str              # 文档/章节标题
    content: str            # 文档内容（500-1000 字符的片段）
    source: str             # 来源文件名或 URL
    category: str = ''      # 分类：guide / troubleshooting / api-ref / best-practice / faq
    tags: list[str] = field(default_factory=list)  # 标签
    tokens: list[str] = field(default_factory=list)  # 分词后的 token 列表


class DocSearchEngine:
    """文档搜索引擎 — 轻量级 TF-IDF 实现，无外部依赖"""

    def __init__(self):
        self.docs: dict[str, DocChunk] = {}       # doc_id -> DocChunk
        self.inverted_index: dict[str, set[str]] = defaultdict(set)  # token -> doc_ids
        self.doc_freq: dict[str, int] = defaultdict(int)  # token -> 出现在多少文档中
        self.categories: set[str] = set()
        self._loaded = False

    def load_from_index(self, index_path: str | Path) -> int:
        """从预构建的 JSON 索引文件加载"""
        index_path = Path(index_path)
        if not index_path.exists():
            return 0

        with open(index_path, 'r', encoding='utf-8') as f:
            data = json.load(f)

        count = 0
        for item in data:
            doc = DocChunk(
                doc_id=item.get('id', f"doc_{count}"),
                title=item.get('title', ''),
                content=item.get('content', ''),
                source=item.get('source', ''),
                category=item.get('category', ''),
                tags=item.get('tags', [])
            )
            self._index_doc(doc)
            count += 1

        self._loaded = True
        return count

    def load_from_directory(self, docs_dir: str | Path) -> int:
        """扫描 Markdown 文档目录，自动切割并索引"""
        docs_dir = Path(docs_dir)
        if not docs_dir.exists():
            return 0

        count = 0
        for md_file in sorted(docs_dir.glob('**/*.md')):
            chunks = self._split_markdown(md_file)
            for chunk in chunks:
                self._index_doc(chunk)
                count += 1

        self._loaded = True
        return count

    def search(self, query: str, category: str = None, limit: int = 5) -> list[dict]:
        """
        搜索文档

        Args:
            query: 搜索关键词（中文/英文混合）
            category: 按分类过滤
            limit: 返回结果数量上限

        Returns:
            匹配的文档片段列表，按相关度排序
        """
        if not self._loaded or not query.strip():
            return []

        query_tokens = self._tokenize(query)
        if not query_tokens:
            return []

        # 收集候选文档
        candidates = set()
        for token in query_tokens:
            if token in self.inverted_index:
                candidates.update(self.inverted_index[token])
            # 前缀匹配（支持部分输入）
            for idx_token in self.inverted_index:
                if idx_token.startswith(token) or token.startswith(idx_token):
                    candidates.update(self.inverted_index[idx_token])

        if not candidates:
            return []

        # 按分类过滤
        if category:
            cat_lower = category.lower()
            candidates = {
                doc_id for doc_id in candidates
                if self.docs[doc_id].category.lower() == cat_lower
            }

        # TF-IDF 评分
        total_docs = max(len(self.docs), 1)
        scored = []

        for doc_id in candidates:
            doc = self.docs[doc_id]
            score = 0.0

            # 文档中各 token 的词频
            doc_token_counts = Counter(doc.tokens)
            doc_len = max(len(doc.tokens), 1)

            for qt in query_tokens:
                # TF: 查询 token 在文档中出现的频率
                tf = doc_token_counts.get(qt, 0) / doc_len

                # 前缀匹配也算（降权 0.5）
                if tf == 0:
                    for dt in doc_token_counts:
                        if dt.startswith(qt) or qt.startswith(dt):
                            tf = (doc_token_counts[dt] / doc_len) * 0.5
                            break

                # IDF: 逆文档频率
                df = self.doc_freq.get(qt, 0)
                idf = math.log((total_docs + 1) / (df + 1)) + 1

                score += tf * idf

            # 标题匹配加权
            title_lower = doc.title.lower()
            for qt in query_tokens:
                if qt in title_lower:
                    score *= 1.5

            # 标签匹配加权
            tags_text = ' '.join(doc.tags).lower()
            for qt in query_tokens:
                if qt in tags_text:
                    score *= 1.2

            if score > 0:
                scored.append((score, doc_id))

        scored.sort(key=lambda x: -x[0])

        return [
            {
                'title': self.docs[doc_id].title,
                'content': self.docs[doc_id].content[:800],
                'source': self.docs[doc_id].source,
                'category': self.docs[doc_id].category,
                'tags': self.docs[doc_id].tags,
                'relevance': round(score, 3)
            }
            for score, doc_id in scored[:limit]
        ]

    def get_stats(self) -> dict:
        """返回索引统计信息"""
        return {
            'total_docs': len(self.docs),
            'total_tokens': len(self.inverted_index),
            'categories': sorted(self.categories),
            'loaded': self._loaded
        }

    # ========== 内部方法 ==========

    def _index_doc(self, doc: DocChunk):
        """索引一个文档片段"""
        doc.tokens = self._tokenize(doc.title + ' ' + doc.content + ' ' + ' '.join(doc.tags))
        self.docs[doc.doc_id] = doc

        if doc.category:
            self.categories.add(doc.category)

        # 更新倒排索引
        seen_tokens = set()
        for token in doc.tokens:
            self.inverted_index[token].add(doc.doc_id)
            if token not in seen_tokens:
                self.doc_freq[token] += 1
                seen_tokens.add(token)

    def _tokenize(self, text: str) -> list[str]:
        """
        混合分词：
        1. 英文单词 → 小写
        2. 中文 → 2-gram 字符切割
        3. 驼峰拆分（CamelCase → camel, case）
        4. 停用词过滤
        """
        if not text:
            return []

        tokens = []
        text = text.lower()

        # 英文单词（含数字）
        for word in re.findall(r'[a-z][a-z0-9]+', text):
            # 驼峰拆分
            parts = re.findall(r'[a-z]+', re.sub(r'([A-Z])', r' \1', word).lower())
            tokens.extend(parts)
            if len(parts) > 1:
                tokens.append(word)  # 也保留完整词

        # 中文字符 2-gram
        chinese_chars = re.findall(r'[\u4e00-\u9fa5]+', text)
        for segment in chinese_chars:
            # 保留完整短词（<=4字）
            if len(segment) <= 4:
                tokens.append(segment)
            # 2-gram 切割
            for i in range(len(segment) - 1):
                tokens.append(segment[i:i+2])
            # 3-gram（更精确的短语匹配）
            for i in range(len(segment) - 2):
                tokens.append(segment[i:i+3])

        # 过滤停用词和太短的 token
        stopwords = {'的', '了', '在', '是', '和', '与', '或', '不', '有', '可以',
                     'the', 'a', 'an', 'is', 'are', 'in', 'on', 'to', 'for', 'of', 'and'}
        tokens = [t for t in tokens if t not in stopwords and len(t) >= 2]

        return tokens

    def _split_markdown(self, file_path: Path, max_chunk_size: int = 800) -> list[DocChunk]:
        """
        按标题切割 Markdown 文件为多个片段

        策略：
        1. 按 ## 标题分割为章节
        2. 超长章节再按段落切割
        3. 保留上下文（父标题）
        """
        try:
            content = file_path.read_text(encoding='utf-8')
        except Exception:
            return []

        filename = file_path.stem
        chunks = []

        # 按 ## 标题分割
        sections = re.split(r'^(#{1,3}\s+.+)$', content, flags=re.MULTILINE)

        current_title = filename
        current_content = ''
        chunk_idx = 0

        for part in sections:
            part = part.strip()
            if not part:
                continue

            if re.match(r'^#{1,3}\s+', part):
                # 保存之前的内容
                if current_content.strip():
                    chunks.extend(self._create_chunks(
                        filename, current_title, current_content, chunk_idx, max_chunk_size
                    ))
                    chunk_idx += len(chunks)
                current_title = re.sub(r'^#+\s+', '', part)
                current_content = ''
            else:
                current_content += part + '\n'

        # 最后一段
        if current_content.strip():
            chunks.extend(self._create_chunks(
                filename, current_title, current_content, chunk_idx, max_chunk_size
            ))

        return chunks

    def _create_chunks(self, filename: str, title: str, content: str,
                       start_idx: int, max_size: int) -> list[DocChunk]:
        """将内容切割为指定大小的片段"""
        content = content.strip()
        if not content:
            return []

        if len(content) <= max_size:
            return [DocChunk(
                doc_id=f"{filename}_{start_idx}",
                title=title,
                content=content,
                source=f"{filename}.md",
                category=self._infer_category(filename, title, content)
            )]

        # 按段落切割
        paragraphs = content.split('\n\n')
        chunks = []
        current_chunk = ''
        idx = start_idx

        for para in paragraphs:
            if len(current_chunk) + len(para) > max_size and current_chunk:
                chunks.append(DocChunk(
                    doc_id=f"{filename}_{idx}",
                    title=title,
                    content=current_chunk.strip(),
                    source=f"{filename}.md",
                    category=self._infer_category(filename, title, current_chunk)
                ))
                idx += 1
                current_chunk = ''
            current_chunk += para + '\n\n'

        if current_chunk.strip():
            chunks.append(DocChunk(
                doc_id=f"{filename}_{idx}",
                title=title,
                content=current_chunk.strip(),
                source=f"{filename}.md",
                category=self._infer_category(filename, title, current_chunk)
            ))

        return chunks

    @staticmethod
    def _infer_category(filename: str, title: str, content: str) -> str:
        """根据文件名和内容自动推断分类"""
        text = (filename + ' ' + title + ' ' + content[:200]).lower()

        if any(kw in text for kw in ['故障', '排查', '错误', 'error', 'troubleshoot', 'debug', '修复']):
            return 'troubleshooting'
        if any(kw in text for kw in ['api', '接口', '参数', 'endpoint']):
            return 'api-reference'
        if any(kw in text for kw in ['最佳实践', 'best practice', '建议', '推荐']):
            return 'best-practice'
        if any(kw in text for kw in ['常见问题', 'faq', '问答']):
            return 'faq'
        if any(kw in text for kw in ['安装', '部署', '配置', 'install', 'deploy']):
            return 'deployment'
        if any(kw in text for kw in ['架构', '设计', '原理', 'architecture']):
            return 'architecture'
        return 'guide'
