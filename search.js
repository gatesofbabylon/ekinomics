// Site search (homepage, country pages and every map's city menu): one index of every menu city, Go-to town and station
// (search.json at the site root, written by scripts/search_index.py), loaded on first use and matched without accents, in
// English or Japanese. Results open the city's page, or a station on its map.
// The city menu on map pages is drawn here from cities.json (scripts/place_links.py): the page's own country in full, one
// group per map, then every other country folded to one line, and a last line home. A draft map, absent from cities.json,
// adds itself from its own map.json. Both shared indexes are fetched with cache:'no-cache' (one conditional request), so a
// new city never changes another map's page.
(function(){
  const me=document.currentScript,ROOT=new URL('.',me.src).href;
  let ITEMS=null,loading=null;
  const JA=()=>document.documentElement.lang==='ja';
  const esc=t=>String(t).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const norm=t=>(t||'').normalize('NFD').replace(/[̀-ͯ]/g,'').toLowerCase().replace(/[’'`.]/g,'').replace(/[^a-z0-9぀-ヿ㐀-鿿ｦ-ﾟ]+/g,' ').trim();
  function load(){if(ITEMS)return Promise.resolve(ITEMS);if(loading)return loading;
    loading=fetch(ROOT+'search.json',{cache:'no-cache'}).then(r=>r.json()).then(d=>{const it=[];
      d.cities.forEach(([en,ja,m,key])=>it.push({k:'city',en,ja,m,key,w:3000}));
      d.towns.forEach(([en,ja,m,key])=>it.push({k:'town',en,ja,m,key,w:1500}));
      d.stations.forEach(([en,ja,area,areaJa,m,slug,n])=>it.push({k:'station',en,ja,area,areaJa,m,slug,w:Math.log10(n+1)*40}));
      it.forEach(x=>{x.n=norm(x.en)});ITEMS={items:it,maps:d.maps,countries:d.countries};return ITEMS});return loading}
  function find(q){const n=norm(q),cjk=/[぀-ヿ㐀-鿿]/.test(q),out=[];if(!n&&!cjk)return out;
    for(const x of ITEMS.items){let s=0;
      if(cjk){if(!x.ja)continue;s=x.ja===q?100:x.ja.startsWith(q)?80:x.ja.includes(q)?40:0}
      else s=x.n===n?100:x.n.startsWith(n)?80:(' '+x.n).includes(' '+n)?60:n.length>=3&&x.n.includes(n)?30:0;
      if(s)out.push([s+x.w/100,x])}
    return out.sort((a,b)=>b[0]-a[0]).map(r=>r[1])}
  function row(x){const m=ITEMS.maps[x.m],ja=JA(),main=ja&&x.ja?x.ja:x.en,other=x.ja&&x.ja!==x.en?(ja?x.en:x.ja):'',c=ITEMS.countries[m.c][ja?1:0],tag=m.tag[ja?'ja':'en']||m.tag.en;
    const ctx=x.k==='station'?[ja&&x.areaJa?x.areaJa:x.area,tag,c].filter(Boolean).join(' · '):[tag,c].join(' · ');
    const kind=x.k==='city'?(ja?'都市':'City'):x.k==='town'?(ja?'町':'Town'):(ja?'駅':'Station');
    const url=ROOT+m.path+(x.k==='station'?'?s='+encodeURIComponent(x.slug):x.key+'/');
    return `<a href="${url}"><span><b>${esc(main)}</b>${other?`<em>${esc(other)}</em>`:''}</span><small>${esc(ctx)}</small><span class="kind">${kind}</span></a>`}
  function attach(root){const inp=root.querySelector('input'),box=root.querySelector('.sresults');if(!inp||!box||root.dataset.wired)return;root.dataset.wired='1';let at=-1;
    const show=()=>{const q=inp.value.trim();if(!q){box.hidden=true;return}load().then(()=>{if(inp.value.trim()!==q)return;const r=find(q),ja=JA(),places=r.filter(x=>x.k!=='station').slice(0,5),st=r.filter(x=>x.k==='station').slice(0,8);at=-1;
      box.innerHTML=!places.length&&!st.length?`<div class="none">${ja?'一致する都市・町・駅がない。':'No city, town or station matches.'}</div>`:
        (places.length?`<p>${ja?'都市と町':'Cities and towns'}</p>`+places.map(row).join(''):'')+(st.length?`<p>${ja?'駅':'Stations'}</p>`+st.map(row).join(''):'');box.hidden=false}).catch(()=>{box.innerHTML=`<div class="none">${JA()?'検索を読み込めなかった。':'Search could not load.'}</div>`;box.hidden=false})};
    inp.addEventListener('input',show);inp.addEventListener('focus',()=>{load();if(inp.value.trim())show()});
    inp.addEventListener('keydown',e=>{const as=[...box.querySelectorAll('a')];
      if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();if(!as.length)return;at=Math.max(0,Math.min(as.length-1,at+(e.key==='ArrowDown'?1:-1)));as.forEach((a,i)=>a.classList.toggle('on',i===at));as[at].scrollIntoView({block:'nearest'})}
      else if(e.key==='Enter'&&as.length){e.preventDefault();location.href=as[Math.max(0,at)].href}else if(e.key==='Escape'){box.hidden=true}});
    document.addEventListener('click',e=>{if(!root.contains(e.target))box.hidden=true})}
  document.querySelectorAll('[data-search]').forEach(attach);
  // The menu's other countries, folded to one line each until opened.
  document.addEventListener('click',e=>{const b=e.target.closest('.mfold');if(!b)return;e.stopPropagation();const open=b.getAttribute('aria-expanded')!=='true';b.setAttribute('aria-expanded',String(open));const c=b.nextElementSibling;if(c)c.hidden=!open});
  // cities.json, fetched once and shared with web/app.js (the links between maps).
  let cities=null;const CITIES=()=>cities||(cities=fetch(ROOT+'cities.json',{cache:'no-cache'}).then(r=>{if(!r.ok)throw Error('cities.json '+r.status);return r.json()}));
  const both=x=>`<span class="l-en">${esc(x.en)}</span><span class="l-ja" lang="ja">${esc(x.ja)}</span>`;
  async function drawMenu(){const nav=document.getElementById('placeMenu'),key=nav&&nav.dataset.map;if(!key||nav.dataset.drawn)return;
    const d=await CITIES(),menu=d.menu.map(c=>({name:c.name,maps:c.maps.slice()}));let here=null;
    for(const c of menu)for(const m of c.maps)if(m.key===key)here={c:c.name,m};
    if(!here){// a draft's own page: its map joins the menu here only
      const M=await fetch(new URL('map.json',document.baseURI),{cache:'no-cache'}).then(r=>r.json());const m={key,path:M.path,tag:M.tag,population:M.population,cities:M.cities};
      let c=menu.find(c=>c.name===M.country);if(!c)menu.push(c={name:M.country,maps:[]});c.maps.push(m);c.maps.sort((a,b)=>b.cities[0].population-a.cities[0].population);
      const sum=(c,f)=>c.maps.reduce((s,m)=>s+f(m),0);const lead=c=>['United Kingdom','Japan'].includes(c.name)?0:1;menu.sort((a,b)=>lead(a)-lead(b)||sum(b,m=>m.cities.length)-sum(a,m=>m.cities.length)||sum(b,m=>m.population)-sum(a,m=>m.population));here={c:M.country,m}}
    // Links are relative to the map's address; city pages carry <base href="../">, so the same links work there.
    const up=here.m.path?'../':'',cur=window.EKI_CITY||here.m.cities[0].key,href=(p,c)=>(p.key===key?'./':up+p.path)+c.key+'/';
    const groups=ps=>'<div class="mcls">'+ps.map(p=>`<span class="mcl" title="${esc(p.tag.en)}">`+p.cities.map(c=>`<a href="${href(p,c)}"${p.key===key&&c.key===cur?' aria-current="true"':''}>${both(c)}</a>`).join('<i aria-hidden="true">·</i>')+'</span>').join('')+'</div>';
    const parts=[...menu.filter(c=>c.name===here.c),...menu.filter(c=>c.name!==here.c)].map(c=>{const [en,ja,slug]=d.countries[c.name]||[c.name,c.name,''];
      if(c.name===here.c)return `<div class="mcountry"><p><a href="${up}${slug}/"><span class="l-en">${esc(en)}</span><span class="l-ja">${esc(ja)}</span></a></p>${groups(c.maps)}</div>`;
      const big=c.maps.flatMap(m=>m.cities).sort((a,b)=>b.population-a.population),k=big.length,prev=(f,sep,more)=>big.slice(0,5).map(x=>esc(x[f])).join(sep)+(k>5?more:'');
      return `<div class="mcountry"><button type="button" class="mfold" aria-expanded="false"><b><span class="l-en">${esc(en)}</span><span class="l-ja">${esc(ja)}</span></b>`+
        `<span class="mprev"><span class="l-en">${prev('en',', ','…')}</span><span class="l-ja">${prev('ja','、',' ほか')}</span></span>`+
        `<i><span class="l-en">${k} ${k>1?'cities':'city'}</span><span class="l-ja">${k}都市</span></i></button><div class="mfolded" hidden>${groups(c.maps)}</div></div>`});
    nav.insertAdjacentHTML('beforeend',parts.join('')+`<a class="mall" href="${up}"><span class="l-en">All countries and the world map →</span><span class="l-ja">すべての国と地図 →</span></a>`);
    nav.dataset.drawn='1';if(window.EkiMenuDrawn)window.EkiMenuDrawn()}
  drawMenu().catch(e=>console.error('City menu:',e));
  window.EkiSearch={attach,cities:CITIES};
})();
