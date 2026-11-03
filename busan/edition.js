(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Busan (2026-11-03; a draft): Observed, built like Seoul (scripts/build_korea.py busan). MOLIT's real transaction prices for
// Busan, contract years 2015 to 2025, in two types never pooled (the type switch): 0 apartments (아파트), 1 villas
// (연립다세대). Detached and multi-unit houses are placed and counted but not shown (69% placed, below the 70% bar).
// Apartments are placed at their OSM building or complex (tier A) or along their road in their dong (tier B; the dong is
// OSM's administrative dong with its address points, Gijang-gun's at its 읍 or 면); villas along their road only. A tier A sale counts at the nearest station
// within 1.2 km; a tier B sale is spread along its road, each 25 m counting at the nearest station within 1.2 km.
// Per m² of exclusive area (apartments, villas) or gross floor area (houses); per home is the whole property sold.
const KTYPE={en:['apartment','villa','house'],ja:['アパート','ヴィラ','一戸建て・多家口住宅']},
  AREA_EN=['exclusive floor area','exclusive floor area','gross floor area'],AREA_JA=['専有面積','専有面積','延床面積'];
EDITIONS.busan={...EDITIONS.paris,baseYear:'2015',obs:{en:'Weighted median of placed sales',ja:'配置した取引の加重中央値'},cur:'₩',miles:false,
  priceBreaks:[2e6,3e6,4e6,5.5e6,7.5e6,10e6],homeBreaks:[100e6,175e6,250e6,350e6,500e6,750e6],countBreaks:[10,30,60,100,160,250],
  view:[35.16,129.06,11],home:'부산역',region:{en:'District',ja:'区'},ranges:{type:1,size:0,age:0},mixLabels:undefined,outer:undefined,
  groupJa:{'Jung-gu':'中区','Seo-gu':'西区','Dong-gu':'東区','Yeongdo-gu':'影島区','Busanjin-gu':'釜山鎮区','Dongnae-gu':'東莱区','Nam-gu':'南区','Buk-gu':'北区','Haeundae-gu':'海雲台区','Saha-gu':'沙下区','Geumjeong-gu':'金井区','Gangseo-gu':'江西区','Yeonje-gu':'蓮堤区','Suyeong-gu':'水営区','Sasang-gu':'沙上区','Gijang-gun':'機張郡'},
  short:b=>JA?`${fmt(b/1e4)}万`:`${b/1e6}m`,chartDiv:1e6,chartStep:2e6,chartUnit:{en:'₩ million per m²',ja:'百万ウォン/㎡'},chartAria:{en:'million won',ja:'百万ウォン'},
  homeX:{chartDiv:1e8,chartStep:2e8,chartUnit:{en:'₩100 million per home',ja:'億ウォン/戸'},chartAria:{en:'hundred million won',ja:'億ウォン'},
    short:b=>JA?`${b/1e8}億`:b>=1e9?`${b/1e9}bn`:`${b/1e6}m`,
    legend:()=>JA?KTYPE.ja[state.type]+'の1戸あたり価格（₩）':`Price per ${KTYPE.en[state.type]} (₩)`},
  legend:()=>JA?KTYPE.ja[state.type]+'の㎡単価（₩、'+AREA_JA[state.type]+'）':`${['Apartment','Villa','House'][state.type]} price per m² of ${AREA_EN[state.type]} (₩)`,
  stats:[[{en:'Median year built',ja:'建築年の中央値'},v=>JA?`${v}年`:String(v),{en:'Median year built',ja:'建築年の中央値'}],
    [{en:'At the building',ja:'建物単位'},v=>`${v}%`,{en:'Share of the weighted sales placed at their building or complex (%); the rest are spread along their road',ja:'建物または団地の位置に置いた取引の割合（％）。残りは道路沿いに分けて置く'}]],
  noRange:{en:'The middle 50% is shown from 10 weighted sales.',ja:'中央50%の範囲は加重件数10件以上で示す。'},
  note:{en:'Gaps mean fewer than 5 weighted sales in a year; hollow points are indicative (5–9). Observed: MOLIT\'s records give each sale\'s road and dong but no coordinates, so apartments are placed at their building or complex where OpenStreetMap has it, and otherwise, like villas, spread along their road within the dong; each part counts at the nearest station within 1.2 km. Types are never pooled; detached houses are not shown. Prices reflect the mix of homes sold.',
    ja:'空白は1年の加重件数が5件未満、白抜きの点は参考値（5〜9件）を示す。観測値：国土交通部の記録には各取引の道路名と洞があるが座標はないため、アパートは OpenStreetMap に建物や団地があればその位置に置き、なければヴィラと同じく洞の中の道路沿いに分けて置く。各部分は1.2 km以内の最寄り駅に数える。種別は合算せず、一戸建ては示さない。価格は取引された住宅の構成を反映する。'},
  noSales:{en:'No placed sale of this type is nearer this station than another one within 1.2 km in this year.',ja:'この年は、この種別で配置できた取引のうち、1.2 km以内でこの駅が最寄りとなるものがない。'},
  pooled:{en:'Station nodes of one name within 500 m share one price area.',ja:'500 m以内にある同名の駅は1つの価格エリアにまとめている。'},
  homesNote:{en:'The Per home switch shows the median total price of the homes sold instead of the price per m². It is what buyers pay, but it mixes location with size.',
    ja:'「1戸あたり」に切り替えると、㎡単価の代わりに取引された住宅の総額の中央値を示す。買い手が実際に払う額だが、立地と広さが混ざる。'},
  priceSource:{en:'Prices: MOLIT real transaction prices (KOGL Type 1)',ja:'価格：韓国国土交通部 実取引価格（KOGL Type 1）'},
  attribution:'Prices: MOLIT real transaction prices (KOGL Type 1) · Stations, lines, streets and outlines: © OpenStreetMap contributors (ODbL)',
  coverage:()=>{const c=D.coverage,TJ=['アパート','ヴィラ（連立・多世帯住宅）','一戸建て・多家口住宅'],TE=['Apartments','Villas (row and multi-household houses)','Detached and multi-unit houses'],
    pc=v=>`${Math.round(v*1000)/10}%`,
    blocks=[0,1].map(t=>{const x=c.types[t],k=x.counts,s=x.shares,a=(s.building||0)+(s.complex||0)+(s['complex (contained name)']||0),b=(s.street||0)+(s['street (name in gu)']||0),wh=s['road found only as a whole road in the gu']||0,nf=(s['road not found']||0)+(s['no road name']||0),
      table=`<div class="tablewrap"><table>${heads(JA?['年','記録','取消','有効','配置','駅に示した取引']:['Year','Records','Cancelled','Valid','Placed','Used at a station'])}<tbody>${Object.entries(x.by_year).map(([y,v])=>`<tr><td>${y}</td><td>${fmt(v.records||0)}</td><td>${fmt(v.cancelled||0)}</td><td>${fmt(v.valid||0)}</td><td>${fmt(v.placed||0)}</td><td>${fmt(v.used||0)}</td></tr>`).join('')}</tbody></table></div>`;
      return JA?`<h3>${TJ[t]}</h3><p>記録${fmt(k.raw)}件のうち、取消${fmt(k.cancelled||0)}件を除き、${fmt(k.placed)}件を配置した。${t===0?`建物または団地の位置に置いたもの${pc(a)}、洞の中の道路沿いに置いたもの${pc(b)}。`:`すべて洞の中の道路沿いに置く（${pc(b)}）。`}道路が区全体でしか見つからないもの${pc(wh)}と、道路が見つからないもの${pc(nf)}は数えたうえで除く。道路の長さの中央値は${fmt(x.street_len_median_m)} m。駅に示すのは${fmt(k.in_windows)}件で、どの駅からも1.2 kmより遠いもの${fmt(k['more than 1.2 km from every station']||0)}件は除く。</p>${table}`
        :`<h3>${TE[t]}</h3><p>Of ${fmt(k.raw)} records, ${fmt(k.cancelled||0)} were cancelled; ${fmt(k.placed)} are placed: ${t===0?`${pc(a)} at their building or complex and ${pc(b)} along their road in their dong.`:`all along their road in their dong (${pc(b)}).`} ${pc(wh)} whose road is found only as a whole road in the district, and ${pc(nf)} whose road is not found, are counted and left out. The median road piece is ${fmt(x.street_len_median_m)} m long. ${fmt(k.in_windows)} are shown at a station; ${fmt(k['more than 1.2 km from every station']||0)} lie more than 1.2 km from every station.</p>${table}`});
    const h=c.types[2],hs=h&&h.shares?(h.shares.street||0):null;
    return (JA?`<p>2026年11月3日作成。観測値（Observed）の地図である。韓国国土交通部の実取引価格（契約日2015〜2025年、釜山広域市）から、アパートとヴィラの売買を種別ごとに${fmt(c.sites_shown)}駅に示す。対象は釜山市の15区と機張郡である。</p><p>一戸建て・多家口住宅は示さない。OpenStreetMap に路地（번길）の名前が少なく、道路沿いに置けるのは有効な記録の${hs==null?'約7割未満':pc(hs)}で、基準の70%に届かないためである（件数はカバレッジ報告に残す）。</p>`
      :`<p>Built 3 November 2026. An Observed map. From MOLIT's real transaction prices (contract dates 2015–2025, Busan city), the sales of apartments and villas are shown, type by type, at ${fmt(c.sites_shown)} stations. The map covers Busan city's 15 districts and Gijang-gun.</p><p>Detached and multi-unit houses are not shown: OpenStreetMap names few of Busan's alleys (번길), so only ${hs==null?'under 70%':pc(hs)} of their valid records can be placed along their road, below the 70% bar (they are counted in the coverage report).</p>`)+blocks.join('')},
  area:{en:'Busan',ja:'釜山'},
  headline:()=>{const n=D.coverage.types[state.type].counts.in_windows,T3=JA?['アパート','ヴィラ']:['apartment','villa'];return JA?`${T3[state.type]}の売買${fmt(n)}件 · ${fmt(D.stations.length)}駅 · 釜山`:`${fmt(n)} ${T3[state.type]} sales · ${fmt(D.stations.length)} stations · Busan`},
  presets:[[{en:'Biggest risers since 2015',ja:'2015年からの上昇率上位'},{metric:'growth',baseline:0,sortKey:'change',sortDir:-1}],[{en:'Villas',ja:'ヴィラ'},{type:1}],
    [{en:'Cheapest on Line 1',ja:'1号線で価格の安い駅'},{line:'line-1',sortKey:'price',sortDir:1}],[{en:'Priciest on Line 2',ja:'2号線で価格の高い駅'},{line:'line-2',sortKey:'price',sortDir:-1}],[{en:'Busiest markets',ja:'取引の多いエリア'},{metric:'count',sortKey:'sales',sortDir:-1}]]};
});
