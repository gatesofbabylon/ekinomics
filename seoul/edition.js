(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Seoul (2026-11-02; a draft): Observed. MOLIT's real transaction prices for Seoul, contract years 2015 to 2025, in three
// types never pooled (the type switch): 0 apartments (아파트), 1 villas (연립다세대: row and multi-household houses),
// 2 detached and multi-unit houses (단독다가구). Apartments are placed at their OSM building or complex (tier A) or along
// their road in their dong (tier B); villas and houses along their road only. A tier A sale counts at the nearest station
// within 1.2 km; a tier B sale is spread along its road, each 25 m counting at the nearest station within 1.2 km.
// Per m² of exclusive area (apartments, villas) or gross floor area (houses); per home is the whole property sold.
const KTYPE={en:['apartment','villa','house'],ja:['アパート','ヴィラ','一戸建て・多家口住宅']},
  AREA_EN=['exclusive floor area','exclusive floor area','gross floor area'],AREA_JA=['専有面積','専有面積','延床面積'];
EDITIONS.seoul={...EDITIONS.paris,baseYear:'2015',obs:{en:'Weighted median of placed sales',ja:'配置した取引の加重中央値'},cur:'₩',miles:false,
  priceBreaks:[6e6,9e6,12e6,15e6,20e6,28e6],homeBreaks:[300e6,500e6,750e6,1000e6,1500e6,2500e6],countBreaks:[10,30,60,100,160,250],
  view:[37.55,126.99,11],home:'서울역',region:{en:'District',ja:'区'},ranges:{type:2,size:0,age:0},mixLabels:undefined,outer:undefined,
  groupJa:{'Jongno-gu':'鍾路区','Jung-gu':'中区','Yongsan-gu':'龍山区','Seongdong-gu':'城東区','Gwangjin-gu':'広津区','Dongdaemun-gu':'東大門区','Jungnang-gu':'中浪区','Seongbuk-gu':'城北区','Gangbuk-gu':'江北区','Dobong-gu':'道峰区','Nowon-gu':'蘆原区','Eunpyeong-gu':'恩平区','Seodaemun-gu':'西大門区','Mapo-gu':'麻浦区','Yangcheon-gu':'陽川区','Gangseo-gu':'江西区','Guro-gu':'九老区','Geumcheon-gu':'衿川区','Yeongdeungpo-gu':'永登浦区','Dongjak-gu':'銅雀区','Gwanak-gu':'冠岳区','Seocho-gu':'瑞草区','Gangnam-gu':'江南区','Songpa-gu':'松坡区','Gangdong-gu':'江東区'},
  short:b=>JA?`${fmt(b/1e4)}万`:`${b/1e6}m`,chartDiv:1e6,chartStep:5e6,chartUnit:{en:'₩ million per m²',ja:'百万ウォン/㎡'},chartAria:{en:'million won',ja:'百万ウォン'},
  homeX:{chartDiv:1e8,chartStep:5e8,chartUnit:{en:'₩100 million per home',ja:'億ウォン/戸'},chartAria:{en:'hundred million won',ja:'億ウォン'},
    short:b=>JA?`${b/1e8}億`:b>=1e9?`${b/1e9}bn`:`${b/1e6}m`,
    legend:()=>JA?KTYPE.ja[state.type]+'の1戸あたり価格（₩）':`Price per ${KTYPE.en[state.type]} (₩)`},
  legend:()=>JA?KTYPE.ja[state.type]+'の㎡単価（₩、'+AREA_JA[state.type]+'）':`${['Apartment','Villa','House'][state.type]} price per m² of ${AREA_EN[state.type]} (₩)`,
  stats:[[{en:'Median year built',ja:'建築年の中央値'},v=>JA?`${v}年`:String(v),{en:'Median year built',ja:'建築年の中央値'}],
    [{en:'At the building',ja:'建物単位'},v=>`${v}%`,{en:'Share of the weighted sales placed at their building or complex (%); the rest are spread along their road',ja:'建物または団地の位置に置いた取引の割合（％）。残りは道路沿いに分けて置く'}]],
  noRange:{en:'The middle 50% is shown from 10 weighted sales.',ja:'中央50%の範囲は加重件数10件以上で示す。'},
  note:{en:'Gaps mean fewer than 5 weighted sales in a year; hollow points are indicative (5–9). Observed: MOLIT\'s records give each sale\'s road and dong but no coordinates, so apartments are placed at their building or complex where OpenStreetMap has it, and otherwise, like villas and houses, spread along their road within the dong; each part counts at the nearest station within 1.2 km. Types are never pooled. Prices reflect the mix of homes sold.',
    ja:'空白は1年の加重件数が5件未満、白抜きの点は参考値（5〜9件）を示す。観測値：国土交通部の記録には各取引の道路名と洞があるが座標はないため、アパートは OpenStreetMap に建物や団地があればその位置に置き、なければヴィラや一戸建てと同じく洞の中の道路沿いに分けて置く。各部分は1.2 km以内の最寄り駅に数える。種別は合算しない。価格は取引された住宅の構成を反映する。'},
  noSales:{en:'No placed sale of this type is nearer this station than another one within 1.2 km in this year.',ja:'この年は、この種別で配置できた取引のうち、1.2 km以内でこの駅が最寄りとなるものがない。'},
  pooled:{en:'Station nodes of one name within 500 m share one price area.',ja:'500 m以内にある同名の駅は1つの価格エリアにまとめている。'},
  homesNote:{en:'The Per home switch shows the median total price of the homes sold instead of the price per m². It is what buyers pay, but it mixes location with size. For detached and multi-unit houses it is the price of the whole building, which for a multi-unit house (다가구) holds several rented rooms or flats.',
    ja:'「1戸あたり」に切り替えると、㎡単価の代わりに取引された住宅の総額の中央値を示す。買い手が実際に払う額だが、立地と広さが混ざる。一戸建て・多世帯住宅では建物全体の価格で、多家口住宅（다가구）では複数の賃貸住戸を含む。'},
  priceSource:{en:'Prices: MOLIT real transaction prices (KOGL Type 1)',ja:'価格：韓国国土交通部 実取引価格（KOGL Type 1）'},
  attribution:'Prices: MOLIT real transaction prices (KOGL Type 1) · Stations, lines, streets and outlines: © OpenStreetMap contributors (ODbL)',
  coverage:()=>{const c=D.coverage,TJ=['アパート','ヴィラ（連立・多世帯住宅）','一戸建て・多家口住宅'],TE=['Apartments','Villas (row and multi-household houses)','Detached and multi-unit houses'],
    pc=v=>`${Math.round(v*1000)/10}%`,
    blocks=[0,1,2].map(t=>{const x=c.types[t],k=x.counts,s=x.shares,a=(s.building||0)+(s.complex||0)+(s['complex (contained name)']||0),b=(s.street||0)+(s['street (name in gu)']||0),wh=s['road found only as a whole road in the gu']||0,nf=(s['road not found']||0)+(s['no road name']||0),
      table=`<div class="tablewrap"><table>${heads(JA?['年','記録','取消','有効','配置','駅に示した取引']:['Year','Records','Cancelled','Valid','Placed','Used at a station'])}<tbody>${Object.entries(x.by_year).map(([y,v])=>`<tr><td>${y}</td><td>${fmt(v.records||0)}</td><td>${fmt(v.cancelled||0)}</td><td>${fmt(v.valid||0)}</td><td>${fmt(v.placed||0)}</td><td>${fmt(v.used||0)}</td></tr>`).join('')}</tbody></table></div>`;
      return JA?`<h3>${TJ[t]}</h3><p>記録${fmt(k.raw)}件のうち、取消${fmt(k.cancelled||0)}件を除き、${fmt(k.placed)}件を配置した。${t===0?`建物または団地の位置に置いたもの${pc(a)}、洞の中の道路沿いに置いたもの${pc(b)}。`:`すべて洞の中の道路沿いに置く（${pc(b)}）。`}道路が区全体でしか見つからないもの${pc(wh)}と、道路が見つからないもの${pc(nf)}は数えたうえで除く。道路の長さの中央値は${fmt(x.street_len_median_m)} m。駅に示すのは${fmt(k.in_windows)}件で、どの駅からも1.2 kmより遠いもの${fmt(k['more than 1.2 km from every station']||0)}件は除く。</p>${table}`
        :`<h3>${TE[t]}</h3><p>Of ${fmt(k.raw)} records, ${fmt(k.cancelled||0)} were cancelled; ${fmt(k.placed)} are placed: ${t===0?`${pc(a)} at their building or complex and ${pc(b)} along their road in their dong.`:`all along their road in their dong (${pc(b)}).`} ${pc(wh)} whose road is found only as a whole road in the district, and ${pc(nf)} whose road is not found, are counted and left out. The median road piece is ${fmt(x.street_len_median_m)} m long. ${fmt(k.in_windows)} are shown at a station; ${fmt(k['more than 1.2 km from every station']||0)} lie more than 1.2 km from every station.</p>${table}`});
    return (JA?`<p>2026年11月2日作成。観測値（Observed）の地図である。韓国国土交通部の実取引価格（契約日2015〜2025年、ソウル市）から、アパート、ヴィラ、一戸建て・多家口住宅の売買を種別ごとに${fmt(c.sites_shown)}駅に示す。対象はソウル市の25区だけである。</p>`
      :`<p>Built 2 November 2026. An Observed map. From MOLIT's real transaction prices (contract dates 2015–2025, Seoul city), the sales of apartments, villas and detached and multi-unit houses are shown, type by type, at ${fmt(c.sites_shown)} stations. The map covers Seoul city's 25 districts only.</p>`)+blocks.join('')},
  area:{en:'Seoul',ja:'ソウル'},
  headline:()=>{const n=D.coverage.types[state.type].counts.in_windows,T3=JA?['アパート','ヴィラ','一戸建て・多家口住宅']:['apartment','villa','house'];return JA?`${T3[state.type]}の売買${fmt(n)}件 · ${fmt(D.stations.length)}駅 · ソウル`:`${fmt(n)} ${T3[state.type]} sales · ${fmt(D.stations.length)} stations · Seoul`},
  presets:[[{en:'Biggest risers since 2015',ja:'2015年からの上昇率上位'},{metric:'growth',baseline:0,sortKey:'change',sortDir:-1}],[{en:'Villas',ja:'ヴィラ'},{type:1}],[{en:'Houses',ja:'一戸建て・多家口住宅'},{type:2}],
    [{en:'Cheapest on Line 2',ja:'2号線で価格の安い駅'},{line:'line-2',sortKey:'price',sortDir:1}],[{en:'Priciest on Line 9',ja:'9号線で価格の高い駅'},{line:'line-9',sortKey:'price',sortDir:-1}],[{en:'Busiest markets',ja:'取引の多いエリア'},{metric:'count',sortKey:'sales',sortDir:-1}]]};
});
