import crypto from 'crypto';
const EP = 'http://172.24.0.254:8080';
const hash = crypto.createHash('sha512').update('zstack.172.24.0.254').digest('hex');
const login = await fetch(EP+'/zstack/v1/accounts/login', {method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({logInByAccount:{accountName:'admin',password:hash}})});
const sess = (await login.json()).inventory.uuid;
const h = {'Content-Type':'application/json','Authorization':'OAuth '+sess};

// Test different ZQL syntaxes
const tests = [
  "count vminstance where state='Running'",
  "count vminstance where state=Running",
  "query vminstance where state='Running' limit 3",
  "query vminstance where state=Running limit 3",
  "count vminstance where state='Stopped'",
  "count vminstance where state=Stopped",
];

for (const zql of tests) {
  const p = new URLSearchParams(); p.set('zql', zql);
  const r = await fetch(EP+'/zstack/v1/zql?'+p, {headers:h});
  const d = await r.json();
  const total = d?.results?.[0]?.total;
  const inv = d?.results?.[0]?.inventories?.length;
  console.log(zql, '→ total:', total, 'inv:', inv, 'err:', d?.error?.details?.slice(0,100) || 'none');
}

// Check all distinct states via query
const p3 = new URLSearchParams(); p3.set('limit','500');
const r3 = await fetch(EP+'/zstack/v1/vm-instances?'+p3, {headers:h});
const d3 = await r3.json();
const allStates = {};
(d3?.inventories || []).forEach(v => { allStates[v.state] = (allStates[v.state]||0)+1; });
console.log('\nVM state distribution (first 500):', allStates);
