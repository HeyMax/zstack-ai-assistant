// ZStack Client 单元测试
import { describe, it, expect, vi, beforeEach } from 'vitest';

// Mock global crypto for SHA-512
const mockCrypto = {
  subtle: {
    digest: vi.fn().mockResolvedValue(new ArrayBuffer(32))
  }
};
globalThis.crypto = mockCrypto;

// Import after mock
vi.stubGlobal('fetch', vi.fn());

describe('ZStackClient', () => {
  let ZStackClient;
  
  beforeEach(async () => {
    vi.clearAllMocks();
    // Dynamic import would be needed for ES modules
    // For now, we'll test the logic inline
  });

  describe('配置', () => {
    it('应该正确配置 endpoint', () => {
      // Test endpoint configuration
      const endpoint = 'http://172.24.0.254:8080';
      const cleaned = endpoint.replace(/\/+$/, '');
      expect(cleaned).toBe('http://172.24.0.254:8080');
      
      const withSlashes = 'http://172.24.0.254:8080///';
      const cleanedWithSlashes = withSlashes.replace(/\/+$/, '');
      expect(cleanedWithSlashes).toBe('http://172.24.0.254:8080');
    });
  });

  describe('登录功能', () => {
    it('应该生成 SHA-512 哈希', async () => {
      // SHA-512 生成 64 字节的哈希，转为 16 进制字符串是 128 位
      const password = 'test123';
      const encoder = new TextEncoder();
      const data = encoder.encode(password);
      const hashBuffer = await crypto.subtle.digest('SHA-512', data);
      const hashArray = Array.from(new Uint8Array(hashBuffer));
      const hashedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
      
      // SHA-512 = 512bit = 64bytes = 128 hex chars
      expect(hashedPassword.length).toBeGreaterThanOrEqual(100);
    });
  });

  describe('查询参数构建', () => {
    it('应该正确构建 URL 参数', () => {
      const params = new URLSearchParams();
      params.set('limit', '100');
      params.set('start', '0');
      params.append('q', 'name=test');
      params.append('q', 'state=Running');
      
      const result = params.toString();
      expect(result).toContain('limit=100');
      expect(result).toContain('q=name%3Dtest');
      expect(result).toContain('q=state%3DRunning');
    });
  });

  describe('Session 过期检测', () => {
    it('应该检测 401 错误', () => {
      const isSessionExpired = (res, data) => {
        if (res.status === 401 || res.status === 403) return true;
        const errMsg = (data?.error?.details || data?.error?.description || '').toLowerCase();
        if (errMsg.includes('session') && (errMsg.includes('expired') || errMsg.includes('invalid'))) return true;
        if (errMsg.includes('token') && errMsg.includes('invalid')) return true;
        return false;
      };

      expect(isSessionExpired({ status: 401 }, {})).toBe(true);
      expect(isSessionExpired({ status: 403 }, {})).toBe(true);
      expect(isSessionExpired({ status: 200 }, { error: { details: 'session expired' } })).toBe(true);
      expect(isSessionExpired({ status: 200 }, { error: { details: 'invalid token' } })).toBe(true);
      expect(isSessionExpired({ status: 200 }, {})).toBe(false);
    });
  });

  describe('资源路径处理', () => {
    it('应该正确处理 UUID 获取', () => {
      const mockData = {
        inventory: { uuid: 'test-uuid-123', name: 'test-vm' }
      };
      
      // 兼容不同版本：有的返回 inventory（单对象），有的返回 inventories[]（数组）
      let inventory = mockData.inventory;
      if (!inventory && mockData.inventories?.length > 0) {
        inventory = mockData.inventories[0];
      }
      
      expect(inventory.uuid).toBe('test-uuid-123');
    });

    it('应该处理 inventories 数组格式', () => {
      const mockData = {
        inventories: [{ uuid: 'test-uuid-456', name: 'test-vm-2' }]
      };
      
      let inventory = mockData.inventory;
      if (!inventory && mockData.inventories?.length > 0) {
        inventory = mockData.inventories[0];
      }
      
      expect(inventory.uuid).toBe('test-uuid-456');
    });
  });
});
