#!/usr/bin/env python3
"""
构建 ZStack 文档索引

用法:
  python scripts/build_doc_index.py [--docs-dir data/docs] [--output data/docs/index.json]

数据源（优先级从高到低）：
1. data/docs/*.md — 本地 Markdown 文档
2. 自定义 URL 爬取（需实现爬虫）

输出: data/docs/index.json — 预构建的搜索索引
"""

import argparse
import json
import sys
from pathlib import Path

# 添加 src 到路径
sys.path.insert(0, str(Path(__file__).parent.parent / "src"))

from zstack_mcp.doc_search import DocSearchEngine


def build_index(docs_dir: str, output: str):
    """扫描文档目录并构建索引"""
    engine = DocSearchEngine()
    docs_path = Path(docs_dir)

    if not docs_path.exists():
        print(f"文档目录不存在: {docs_path}")
        print(f"请创建目录并放入 .md 文件: mkdir -p {docs_path}")
        sys.exit(1)

    # 加载 Markdown 文档
    count = engine.load_from_directory(docs_path)
    print(f"已索引 {count} 个文档片段")

    if count == 0:
        print(f"⚠️  未找到 .md 文件，请在 {docs_path} 下放置文档")
        print("\n推荐的文档目录结构:")
        print("  data/docs/")
        print("  ├── guide/          # 操作指南")
        print("  ├── troubleshooting/ # 故障排查")
        print("  ├── best-practice/   # 最佳实践")
        print("  ├── architecture/    # 架构说明")
        print("  └── faq/            # 常见问题")
        sys.exit(0)

    # 导出索引
    output_path = Path(output)
    output_path.parent.mkdir(parents=True, exist_ok=True)

    index_data = []
    for doc_id, doc in engine.docs.items():
        index_data.append({
            'id': doc.doc_id,
            'title': doc.title,
            'content': doc.content,
            'source': doc.source,
            'category': doc.category,
            'tags': doc.tags
        })

    with open(output_path, 'w', encoding='utf-8') as f:
        json.dump(index_data, f, ensure_ascii=False, indent=2)

    stats = engine.get_stats()
    print(f"\n✅ 索引已生成: {output_path}")
    print(f"   文档片段: {stats['total_docs']}")
    print(f"   索引词数: {stats['total_tokens']}")
    print(f"   分类: {', '.join(stats['categories']) or '无'}")


def main():
    parser = argparse.ArgumentParser(description="构建 ZStack 文档搜索索引")
    parser.add_argument(
        '--docs-dir', default='data/docs',
        help='文档目录路径（默认: data/docs）'
    )
    parser.add_argument(
        '--output', default='data/docs/index.json',
        help='输出索引文件路径（默认: data/docs/index.json）'
    )
    args = parser.parse_args()
    build_index(args.docs_dir, args.output)


if __name__ == '__main__':
    main()
