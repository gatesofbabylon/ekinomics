(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Singapore (Phil, 2026-10-30): HDB resale flats only (private homes are not in the open data), by flat type, floor area and the
// year the 99-year lease began; planning areas grouped by region; km only. Town boxes are set from their stations (build step).
EDITIONS.singapore={...EDITIONS.northwest,groupJa:{'Central Region':'中央地域','East Region':'東部地域','North Region':'北部地域','North-East Region':'北東部地域','West Region':'西部地域'},cur:'S$',miles:false,homeBreaks:[490000,575000,630000,700000,830000,1050000],priceBreaks:[5700,6200,6800,7500,9000,11500],view:[1.35,103.82,11],
  homeX:{chartDiv:1000,chartStep:300000,chartUnit:{en:'S$ thousand per home',ja:'千シンガポールドル/戸'},chartAria:{en:'thousand Singapore dollars',ja:'千シンガポールドル'},short:b=>b>=1e6?`${b/1e6}m`:`${b/1e3}k`,
    legend:()=>JA?['住宅','1〜2ルーム','3ルーム','4ルーム','5ルーム・エグゼクティブ'][state.type]+'1戸あたりの価格（S$）':`Price per ${['flat','1–2 room flat','3 room flat','4 room flat','5 room or executive flat'][state.type]} (S$)`},
  home:'Tanjong Pagar',region:{en:'Area',ja:'区域'},ranges:{type:4,size:4,age:5},outer:undefined,
  mixLabels:{en:['1–2 room','3 room','4 room','5 room+'],ja:['1〜2ルーム','3ルーム','4ルーム','5ルーム以上']},chartUnit:{en:'S$ thousand per m²',ja:'千シンガポールドル/㎡'},chartAria:{en:'thousand Singapore dollars',ja:'千シンガポールドル'},chartDiv:1000,chartStep:2000,
  stats:[[{en:'Median lease left',ja:'残りリースの中央値'},v=>JA?`${fmt(v)}年`:`${fmt(v)} years`,{en:'Median lease left at sale (years)',ja:'売却時の残りリースの中央値（年）'}],EDITIONS.london.stats[1]],
  note:{en:'Gaps mean fewer than 5 sales; hollow points are indicative (5–9 sales). Each resale counts at the nearest station within 1.2 km of its block. Prices reflect the mix of flats sold.',ja:'空白は取引5件未満、白抜きの点は参考値（5〜9件）である。各再販は棟から1.2 km以内の最寄り駅に数える。価格は取引されたフラットの構成を反映する。'},
  legend:()=>JA?['住宅','1〜2ルーム','3ルーム','4ルーム','5ルーム・エグゼクティブ'][state.type]+'の㎡単価（S$）':['Flat','1–2 room flat','3 room flat','4 room flat','5 room or executive flat'][state.type]+' price per m² (S$)',
  priceSource:{en:'Prices: HDB resale flat prices (data.gov.sg, Singapore Open Data Licence)',ja:'価格：HDB 再販価格（data.gov.sg、Singapore Open Data Licence）'},
  attribution:'Stations: LTA and OneMap · Outlines: URA Master Plan 2019 · Singapore Open Data Licence',
  coverage:()=>sgCoverage(),
  headline:()=>JA?`HDB の再販${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · シンガポール`:`${fmt(D.coverage.counts.in_windows)} HDB resales · ${fmt(D.stations.length)} stations · Singapore`,
  presets:[[{en:'Biggest risers since 2014–15',ja:'2014〜15年からの上昇率上位'},{metric:'growth',baseline:4,sortKey:'change',sortDir:-1}],[{en:'4 room flats',ja:'4ルームのフラット'},{type:3}],[{en:'Leases from 2010',ja:'2010年以降のリース'},{age:5}],
    [{en:'Leases before 1980',ja:'1980年より前のリース'},{age:1}],[{en:'Cheapest on the Circle Line',ja:'Circle Line で価格の安い駅'},{line:'cc',sortKey:'price',sortDir:1}],[{en:'Busiest markets',ja:'取引の多いエリア'},{metric:'count',sortKey:'sales',sortDir:-1}]]};
});
