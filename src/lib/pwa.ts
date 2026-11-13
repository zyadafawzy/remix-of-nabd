export async function registerOffline(){
 if(!('serviceWorker' in navigator))return;
 const host=window.location.hostname.toLowerCase();
 const preview=/^(?:id-preview|preview)(?:-[a-z0-9]+)?--.+$/.test(host.split('.')[0])&&/\.(lovable\.app|gpt-eng\.com|gptengineer\.run)$/.test(host);
 const blocked=!import.meta.env.PROD||window.self!==window.top||preview||/^project--.+-dev\.(lovable\.app|gpt-eng\.com|gptengineer\.run)$/.test(host)||/(^|\.)(lovableproject\.com|lovableproject-dev\.com|beta\.lovable\.dev)$/.test(host)||new URLSearchParams(location.search).get('sw')==='off';
 if(blocked){const registrations=await navigator.serviceWorker.getRegistrations();await Promise.all(registrations.filter(r=>[r.active,r.waiting,r.installing].some(w=>w&&new URL(w.scriptURL).pathname==='/sw.js')).map(r=>r.unregister()));return;}
 await navigator.serviceWorker.register('/sw.js');
}