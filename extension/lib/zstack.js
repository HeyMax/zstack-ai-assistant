// ZStack API Client - Full Coverage
export class ZStackClient {
  constructor() {
    this.endpoint = '';
    this.sessionId = null;
    this._accountName = null;
    this._password = null;
    this._relogging = false;
  }

  configure(endpoint) {
    this.endpoint = endpoint.replace(/\/+$/, '');
  }

  isLoggedIn() {
    return !!this.sessionId;
  }

  async login(accountName, password) {
    // Save credentials for auto-reconnect on session expiry
    this._accountName = accountName;
    this._password = password;

    // ZStack requires SHA-512 hashed password
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest('SHA-512', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashedPassword = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    const res = await this._rawPost('/v1/accounts/login', {
      logInByAccount: { accountName, password: hashedPassword }
    });
    this.sessionId = res.inventory?.uuid;
    if (!this.sessionId) throw new Error('登录失败：未获取到 session');
    return res;
  }

  // 获取 ZStack 版本
  async getVersion() {
    // PUT /v1/management-nodes/actions with {"getVersion": {}}
    const res = await this._put('/v1/management-nodes/actions', { getVersion: {} });
    return res.version;
  }

  // Re-login when session expires, returns true if successful
  async _relogin() {
    if (this._relogging || !this._accountName || !this._password) return false;
    this._relogging = true;
    try {
      this.sessionId = null;
      await this.login(this._accountName, this._password);
      return true;
    } catch {
      return false;
    } finally {
      this._relogging = false;
    }
  }

  // ========== Generic API Methods ==========

  async query(resourcePath, conditions = [], limit = 100, start = 0, sortBy, sortDirection) {
    const params = new URLSearchParams();
    params.set('limit', String(limit));
    if (start) params.set('start', String(start));
    if (sortBy) params.set('sort', `${sortDirection === 'desc' ? '-' : '+'}${sortBy}`);
    conditions.forEach(c => params.append('q', c));
    return this._get(`/${resourcePath}?${params}`);
  }

  async get(resourcePath, uuid) {
    const data = await this._get(`/${resourcePath}/${uuid}`);
    // 兼容不同 ZStack 版本：有的返回 inventory（单对象），有的返回 inventories[]（数组）
    if (!data.inventory && data.inventories?.length > 0) {
      data.inventory = data.inventories[0];
    }
    return data;
  }

  async create(resourcePath, body) {
    return this._rawPost(`/${resourcePath}`, body);
  }

  async update(resourcePath, uuid, body) {
    return this._put(`/${resourcePath}/${uuid}`, body);
  }

  async remove(resourcePath, uuid, deleteMode = 'Permissive') {
    return this._delete(`/${resourcePath}/${uuid}?deleteMode=${deleteMode}`);
  }

  async action(resourcePath, uuid, body) {
    return this._put(`/${resourcePath}/${uuid}/actions`, body);
  }

  // ========== System ==========
  
  // 获取 ZStack 版本
  async getVersion() {
    try {
      // PUT /zstack/v1/management-nodes/actions with {"getVersion": {}}
      const res = await this._put('/v1/management-nodes/actions', { getVersion: {} });
      return res;
    } catch (e) {
      console.warn('Failed to get version:', e);
      return { version: 'unknown' };
    }
  }

  // ========== Convenience Methods (common operations) ==========

  // VM
  async queryVmInstances(conditions = []) { return this.query('v1/vm-instances', conditions); }
  async startVm(uuid) { return this.action('v1/vm-instances', uuid, { startVmInstance: {} }); }
  async stopVm(uuid, type = 'grace') { return this.action('v1/vm-instances', uuid, { stopVmInstance: { type } }); }
  async rebootVm(uuid) { return this.action('v1/vm-instances', uuid, { rebootVmInstance: {} }); }
  async deleteVm(uuid) { return this.remove('v1/vm-instances', uuid); }
  async migrateVm(uuid, hostUuid) { return this.action('v1/vm-instances', uuid, { migrateVm: { hostUuid } }); }

  async createVm(params) {
    return this._rawPost('/v1/vm-instances', { params });
  }

  // Host
  async queryHosts(conditions = []) { return this.query('v1/hosts', conditions); }

  // Image
  async queryImages(conditions = []) { return this.query('v1/images', conditions); }

  // Network
  async queryL3Networks(conditions = []) { return this.query('v1/l3-networks', conditions); }
  async queryL2Networks(conditions = []) { return this.query('v1/l2-networks', conditions); }

  // Storage
  async queryPrimaryStorage(conditions = []) { return this.query('v1/primary-storage', conditions); }
  async queryBackupStorage(conditions = []) { return this.query('v1/backup-storage', conditions); }
  async queryVolumes(conditions = []) { return this.query('v1/volumes', conditions); }
  async queryVolumeSnapshots(conditions = []) { return this.query('v1/volume-snapshots', conditions); }

  // Offerings
  async queryInstanceOfferings(conditions = []) { return this.query('v1/instance-offerings', conditions); }
  async queryDiskOfferings(conditions = []) { return this.query('v1/disk-offerings', conditions); }

  // Infrastructure
  async queryZones(conditions = []) { return this.query('v1/zones', conditions); }
  async queryClusters(conditions = []) { return this.query('v1/clusters', conditions); }

  // Load Balancer
  async queryLoadBalancers(conditions = []) { return this.query('v1/load-balancers', conditions); }
  async queryLBListeners(conditions = []) { return this.query('v1/load-balancers/listeners', conditions); }
  async queryLBServerGroups(conditions = []) { return this.query('v1/load-balancers/servergroups', conditions); }

  // VIP / EIP / Port Forwarding
  async queryVips(conditions = []) { return this.query('v1/vips', conditions); }
  async queryEips(conditions = []) { return this.query('v1/eips', conditions); }
  async queryPortForwarding(conditions = []) { return this.query('v1/port-forwarding', conditions); }

  // Security Group
  async querySecurityGroups(conditions = []) { return this.query('v1/security-groups', conditions); }

  // VPC / VRouter
  async queryVpcRouters(conditions = []) { return this.query('v1/vpc/virtual-routers', conditions); }
  async queryRouteEntries(conditions = []) { return this.query('v1/vrouter-route-tables/route-entries', conditions); }

  // IPsec
  async queryIpsec(conditions = []) { return this.query('v1/ipsec', conditions); }

  // Account / IAM
  async queryAccounts(conditions = []) { return this.query('v1/accounts', conditions); }
  async queryIAM2Projects(conditions = []) { return this.query('v1/iam2/projects', conditions); }
  async queryIAM2VirtualIds(conditions = []) { return this.query('v1/iam2/virtual-ids', conditions); }

  // Monitoring
  async queryAlarms(conditions = []) { return this.query('v1/zwatch/alarms', conditions); }
  async queryEventSubscriptions(conditions = []) { return this.query('v1/zwatch/events/subscriptions', conditions); }

  // Scheduler
  async querySchedulerJobs(conditions = []) { return this.query('v1/scheduler/jobs', conditions); }
  async querySchedulerTriggers(conditions = []) { return this.query('v1/scheduler/triggers', conditions); }

  // System
  async queryManagementNodes(conditions = []) { return this.query('v1/management-nodes', conditions); }
  async queryGlobalConfigs(conditions = []) { return this.query('v1/global-configurations', conditions); }
  async querySystemTags(conditions = []) { return this.query('v1/system-tags', conditions); }

  // ZQL - powerful query language
  async zql(zql) {
    const params = new URLSearchParams();
    params.set('zql', zql);
    return this._get(`/v1/zql?${params}`);
  }

  // ========== HTTP Methods ==========

  async _get(path) {
    return this._withRetry(async () => {
      const res = await fetch(`${this.endpoint}/zstack${path}`, {
        headers: this._headers()
      });
      return this._handleResponse(res);
    });
  }

  async _rawPost(path, body) {
    // Login requests should not retry (avoid infinite loop)
    const isLogin = path.includes('/accounts/login');
    const doRequest = async () => {
      const res = await fetch(`${this.endpoint}/zstack${path}`, {
        method: 'POST',
        headers: this._headers(),
        body: JSON.stringify(body)
      });
      return this._handleResponse(res);
    };
    return isLogin ? doRequest() : this._withRetry(doRequest);
  }

  async _put(path, body) {
    return this._withRetry(async () => {
      const res = await fetch(`${this.endpoint}/zstack${path}`, {
        method: 'PUT',
        headers: this._headers(),
        body: JSON.stringify(body)
      });
      return this._handleResponse(res);
    });
  }

  async _delete(path) {
    return this._withRetry(async () => {
      const res = await fetch(`${this.endpoint}/zstack${path}`, {
        method: 'DELETE',
        headers: this._headers()
      });
      return this._handleResponse(res);
    });
  }

  _headers() {
    const h = { 'Content-Type': 'application/json;charset=UTF-8' };
    if (this.sessionId) h['Authorization'] = `OAuth ${this.sessionId}`;
    return h;
  }

  _isSessionExpired(res, data) {
    if (res.status === 401 || res.status === 403) return true;
    const errMsg = (data?.error?.details || data?.error?.description || '').toLowerCase();
    if (errMsg.includes('session') && (errMsg.includes('expired') || errMsg.includes('invalid'))) return true;
    if (errMsg.includes('token') && errMsg.includes('invalid')) return true;
    return false;
  }

  async _handleResponse(res) {
    const text = await res.text();
    let data;
    try { data = JSON.parse(text); } catch { data = text; }
    if (!res.ok) {
      const msg = data?.error?.details || data?.error?.description
        || (typeof data === 'string' && data.length < 200 ? data : null)
        || `HTTP ${res.status}`;
      throw new Error(msg);
    }
    return data;
  }

  // Wrap a request fn with auto-retry on session expiry
  async _withRetry(requestFn) {
    try {
      return await requestFn();
    } catch (e) {
      // Check if this looks like a session expiry error
      const msg = (e.message || '').toLowerCase();
      const isExpiry = msg.includes('session') || msg.includes('token') || msg.includes('401') || msg.includes('403');
      if (isExpiry && !this._relogging) {
        const ok = await this._relogin();
        if (ok) return await requestFn();
      }
      throw e;
    }
  }
}
