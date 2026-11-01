(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Poznań (a draft, 2026-11-01): the city of Poznań, its tram stops and railway stations, from GEOPOZ's register of real estate
// prices (RCN; scripts/build_poland.py with scripts/rcn.py). Flats only, per home and per m² over the same sales; types by rooms,
// the third filter by floor (the register gives no year built for flats).
const RJ={'sales of a flat with land or a building':'土地や建物と一緒の住戸の売買','sales of several flats':'複数の住戸の売買','not a free-market sale (tenders, sales without tender, other modes)':'自由市場以外の売買（入札、入札なしの売却など）','shares of a flat':'住戸の持分','flats sold with other premises, without a price of their own':'他の区画と一緒に売られ、住戸自体の価格がないもの','floor areas missing or outside 15–300 m²':'床面積がない、または15〜300㎡の範囲外','prices per m² outside 1,000–50,000 zł':'㎡単価が1,000〜50,000ズウォティの範囲外','prices under 20,000 zł':'20,000ズウォティ未満','deed dates missing or impossible':'証書の日付がない、またはありえない日付','flats without a position':'位置のない住戸'};
const TY=()=>JA?['住戸','1〜2部屋の住戸','3部屋以上の住戸'][state.type]:['Flat','Flat of one or two rooms','Flat of three rooms or more'][state.type];
EDITIONS.poznan={...EDITIONS.northwest,cur:'PLN ',unitHome:true,homesNote:{en:'The map opens on the median price of the flats sold, which is what buyers pay but mixes location with size. Price per m² divides each sale by the flat\'s usable floor area; every sale used has one, so both views cover the same sales.',ja:'地図は取引された住戸の価格の中央値で開く。買い手が実際に払う額だが、立地と広さが混ざる。㎡単価は各取引の価格を住戸の使用床面積で割ったもので、使う取引にはすべて床面積があるため、どちらの表示も同じ取引を対象とする。'},
  groupJa:{'Poznań':'ポズナン'},homeBreaks:[450000,485000,520000,580000,640000,760000],priceBreaks:[9500,10100,10900,11500,12400,14000],countBreaks:[10,25,50,100,200,350],view:[52.405,16.925,12],
  homeX:{chartDiv:1000,chartStep:100000,chartUnit:{en:'PLN thousand per home',ja:'千ズウォティ/戸'},chartAria:{en:'thousand złoty',ja:'千ズウォティ'},short:b=>b>=1e6?`${b/1e6}m`:`${b/1e3}k`,
    legend:()=>JA?TY()+'1戸あたりの価格（PLN）':`Price per ${TY().toLowerCase()} (PLN)`},
  home:'Pl. Wielkopolski',region:{en:'Osiedle',ja:'地区'},ranges:{type:2,size:4,age:4},outer:undefined,
  mixLabels:{en:['1–2 rooms','3+ rooms'],ja:['1〜2部屋','3部屋以上']},chartUnit:{en:'PLN thousand per m²',ja:'千ズウォティ/㎡'},chartAria:{en:'thousand złoty',ja:'千ズウォティ'},chartDiv:1000,chartStep:2000,
  stats:[[{en:'Median floor',ja:'階の中央値'},v=>JA?(v<=0?'地上階':`${v}階`):(v<=0?'ground':String(v)),{en:'Median floor (0 = ground floor)',ja:'階の中央値（0は地上階）'}],EDITIONS.london.stats[1]],
  note:{en:'Gaps mean fewer than 5 sales; hollow points are indicative (5–9 sales). Each sale counts at the nearest station within 1.2 km of the flat. Prices reflect the mix of flats sold.',ja:'空白は取引5件未満、白抜きの点は参考値（5〜9件）である。各取引は住戸から1.2 km以内の最寄り駅に数える。価格は取引された住戸の構成を反映する。'},
  pooled:{en:'A tram stop within 250 m of a railway station shares its price area.',ja:'鉄道駅から250 m以内の路面電車停留所は、その価格エリアを共有する。'},
  legend:()=>JA?TY()+'の㎡単価（PLN）':TY()+' price per m² (PLN)',
  priceSource:{en:'Prices: GEOPOZ, City of Poznań, register of real estate prices (RCN, CC BY 4.0)',ja:'価格：ポズナン市 GEOPOZ 不動産価格登録簿（RCN、CC BY 4.0）'},
  attribution:'Stations and lines: ZTM Poznań and PKP PLK GTFS (mkuran.pl) · Outlines: City of Poznań SIP',
  coverage:()=>{const c=D.coverage,H=c.homes.counts,far='more than 1.2 km from a station',
    list=o=>Object.entries(o).sort((a,b)=>b[1]-a[1]).map(([r,v])=>JA?`${esc(RJ[r]||r)} ${fmt(v)}件`:`${fmt(v)} ${esc(r)}`).join(J('; ','、')),
    table=`<div class="tablewrap"><table>${heads(JA?['年','住戸の取引','条件に合い位置の分かる取引','使用']:['Year','Flat transactions','Kept and placed','Used'])}<tbody>${Object.entries(c.by_year).map(([y,v])=>`<tr><td>${y}</td><td>${fmt(v.raw||0)}</td><td>${fmt(v.eligible||0)}</td><td>${fmt(v.used||0)}</td></tr>`).join('')}</tbody></table></div>`;
    return JA?`<p>2026年11月1日作成、ポズナン市 GEOPOZ の不動産価格登録簿（証書の日付2012年1月〜2025年12月）による。ポズナン市の住戸を含む取引${fmt(H.raw)}件のうち${fmt(H.eligible)}件が条件に合い位置が分かり、そのうち${fmt(H.in_windows)}件が${fmt(c.sites_shown)}駅のいずれかから${c.radius_km} km以内にある。</p>${table}<p>使っていないもの：駅から${c.radius_km} kmより遠い取引${fmt(H[far])}件、${list(c.homes.exclusions)}。</p>`
      :`<p>Built 1 November 2026 from GEOPOZ's register of real estate prices for the city of Poznań, deeds dated January 2012 to December 2025. Of ${fmt(H.raw)} transactions including a flat, ${fmt(H.eligible)} pass the filters and are placed; ${fmt(H.in_windows)} of them lie within ${c.radius_km} km of one of ${fmt(c.sites_shown)} stations.</p>${table}<p>Not used: ${fmt(H[far])} sales more than ${c.radius_km} km from a station, and ${list(c.homes.exclusions)}.</p>`},
  headline:()=>JA?`取引${fmt(D.coverage.homes.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · ポズナン`:`${fmt(D.coverage.homes.counts.in_windows)} sales · ${fmt(D.stations.length)} stations · Poznań`,
  presets:[[{en:'Biggest risers since 2012–13',ja:'2012〜13年からの上昇率上位'},{metric:'growth',baseline:0,sortKey:'change',sortDir:-1}],[{en:'One or two rooms',ja:'1〜2部屋'},{type:1}],[{en:'Three rooms or more',ja:'3部屋以上'},{type:2}],[{en:'Under 40 m²',ja:'40㎡未満'},{size:1}],
    [{en:'Floor 8 and up',ja:'8階以上'},{age:4}],[{en:'Cheapest on the PKM2',ja:'PKM2で価格の安い駅'},{line:'pkm2',sortKey:'price',sortDir:1}],[{en:'Busiest markets',ja:'取引の多いエリア'},{metric:'count',sortKey:'sales',sortDir:-1}]]};
});
