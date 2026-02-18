// Read-only test script for ZStack AI Assistant
// Tests all query operations - NO modifications allowed
import crypto from 'crypto';

const ENDPOINT = 'http://172.24.0.254:8080';
const ACCOUNT = 'admin';
const PASSWORD = 'zstack.172.24.0.254';
let sessionId = null;

async function login() {
  const hash = crypto.createHash('sha512').update(PASSWORD).digest('hex');
  const res = await fetch(`${ENDPOINT}/zstack/v1/accounts/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json;charset=UTF-8' },
    body: JSON.stringify({ logInByAccount: { accountName: ACCOUNT, password: hash } })
  });
  const data = await res.json();
  sessionId = data.inventory?.uuid;
  if (!sessionId) throw new Error('Login failed: ' + JSON.stringify(data));
  console.log('✅ Login OK, session:', sessionId.slice(0, 8) + '...');
}

function headers() {
  return { 'Content-Type': 'application/json;charset=UTF-8', 'Authorization': `OAuth ${sessionId}` };
}

async function query(path, conditions = [], limit = 100, start = 0) {
  const params = new URLSearchParams();
  params.set('limit', String(limit));
  if (start) params.set('start', String(start));
  conditions.forEach(c => params.append('q', c));
  const res = await fetch(`${ENDPOINT}/zstack/${path}?${params}`, { headers: headers() });
  return res.json();
}

async function zql(zqlStr) {
  const params = new URLSearchParams();
  params.set('zql', zqlStr);
  const res = await fetch(`${ENDPOINT}/zstack/v1/zql?${params}`, { headers: headers() });
  return res.json();
}

async function testResource(name, path, zqlName) {
  try {
    // Count via ZQL
    const countRes = await zql(`count ${zqlName}`);
    const total = countRes?.results?.[0]?.total ?? countRes?.results?.[0]?.count ?? 'N/A';
    
    // Query first 5
    const queryRes = await query(path, [], 5);
    const inventories = queryRes?.inventories || [];
    const fields = inventories.length > 0 ? Object.keys(inventories[0]).slice(0, 6).join(', ') : 'empty';
    
    console.log(`  ${name}: total=${total}, sample=${inventories.length}, fields=[${fields}]`);
    return { name, total, sample: inventories.length, firstItem: inventories[0] || null };
  } catch (e) {
    console.log(`  ${name}: ❌ ${e.message}`);
    return { name, error: e.message };
  }
}

async function main() {
  await login();
  console.log('\n📊 Testing all resource queries (READ ONLY):\n');

  const resources = [
    ['云主机', 'v1/vm-instances', 'vminstance'],
    ['物理机', 'v1/hosts', 'host'],
    ['镜像', 'v1/images', 'image'],
    ['L3网络', 'v1/l3-networks', 'l3network'],
    ['L2网络', 'v1/l2-networks', 'l2network'],
    ['云盘', 'v1/volumes', 'volume'],
    ['快照', 'v1/volume-snapshots', 'volumesnapshot'],
    ['计算规格', 'v1/instance-offerings', 'instanceoffering'],
    ['云盘规格', 'v1/disk-offerings', 'diskoffering'],
    ['主存储', 'v1/primary-storage', 'primarystorage'],
    ['镜像仓库', 'v1/backup-storage', 'backupstorage'],
    ['区域', 'v1/zones', 'zone'],
    ['集群', 'v1/clusters', 'cluster'],
    ['VIP', 'v1/vips', 'vip'],
    ['弹性IP', 'v1/eips', 'eip'],
    ['安全组', 'v1/security-groups', 'securitygroup'],
    ['负载均衡', 'v1/load-balancers', 'loadbalancer'],
    ['VPC路由器', 'v1/vpc/virtual-routers', 'virtualrouter'],
    ['账户', 'v1/accounts', 'account'],
    ['管理节点', 'v1/management-nodes', 'managementnode'],
  ];

  const results = [];
  for (const [name, path, zqlName] of resources) {
    const r = await testResource(name, path, zqlName);
    results.push(r);
  }

  // Test pagination for VMs (the most common resource)
  console.log('\n📄 Pagination test (VMs):');
  const vmCount = await zql('count vminstance');
  const vmTotal = vmCount?.results?.[0]?.total ?? 0;
  console.log(`  Total VMs: ${vmTotal}`);
  
  if (vmTotal > 0) {
    // Test fetching first 20 (compact mode)
    const first20 = await query('v1/vm-instances', [], 20);
    console.log(`  First 20: got ${first20?.inventories?.length || 0} records`);
    
    // Test fetching with offset
    if (vmTotal > 20) {
      const next20 = await query('v1/vm-instances', [], 20, 20);
      console.log(`  Next 20 (start=20): got ${next20?.inventories?.length || 0} records`);
    }
    
    // Show sample VM fields
    if (first20?.inventories?.[0]) {
      const vm = first20.inventories[0];
      console.log(`\n  Sample VM fields: ${Object.keys(vm).join(', ')}`);
      console.log(`  Sample VM: name=${vm.name}, state=${vm.state}, uuid=${vm.uuid?.slice(0,8)}...`);
    }
  }

  // Test ZQL with conditions
  console.log('\n🔍 ZQL condition tests:');
  const runningCount = await zql('count vminstance where state=Running');
  const stoppedCount = await zql('count vminstance where state=Stopped');
  console.log(`  Running VMs: ${runningCount?.results?.[0]?.total ?? 'N/A'}`);
  console.log(`  Stopped VMs: ${stoppedCount?.results?.[0]?.total ?? 'N/A'}`);

  // Test ZQL query with fields
  const zqlQuery = await zql('query vminstance where state=Running limit 3');
  const zqlResults = zqlQuery?.results?.[0]?.inventories || [];
  console.log(`  ZQL query (Running, limit 3): got ${zqlResults.length} records`);

  console.log('\n✅ All tests complete. No resources were modified.');
}

main().catch(e => console.error('Fatal:', e));
