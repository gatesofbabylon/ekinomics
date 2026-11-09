(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Oslo (2026-11-01; a draft): Area statistics. Oslo kommune's statistics bank: the number of homes sold, their mean price per m²
// (BOL018) and median total price (BOL013) by grunnkretsområde, year and home type, from Boligmappa AS's sales, blended around
// each station; 2018–2025, yearly. Prices in NOK.
const TY=()=>JA?['住宅','集合住宅（ブロック）','小規模住宅'][state.type]:['Home','Flat','House'][state.type];
EDITIONS.oslo={...EDITIONS.helsinki,cur:'NOK ',avg:()=>state.unit!=='home',obs:()=>state.unit==='home'?{en:'Blended area median',ja:'地区中央値の合成'}:{en:'Blended area average',ja:'地区平均の合成'},
  priceBreaks:[75000,85000,95000,105000,115000,125000],countBreaks:[150,300,500,800,1100,1400],
  chartUnit:{en:'NOK thousand per m²',ja:'千クローネ/㎡'},chartAria:{en:'thousand kroner',ja:'千クローネ'},chartDiv:1000,chartStep:20000,
  homeBreaks:[5000000,6000000,7000000,8500000,10000000,12500000],
  homeX:{chartDiv:1e6,chartStep:2e6,chartUnit:{en:'NOK million per home',ja:'百万クローネ/戸'},chartAria:{en:'million kroner',ja:'百万クローネ'},short:b=>`${b/1e6}m`,
    legend:()=>JA?TY()+'の1戸あたり価格・地区中央値の合成（NOK）':`${TY()} price, blend of area medians (NOK)`},
  homesNote:{en:'The Per home switch shows the blended median total price of the homes sold (the purchase price including any shared debt) instead of the mean price per m². It is what buyers pay, but it mixes location with size: stations where small flats sell look cheaper per home than per m², and those where large homes sell look dearer. Both are Oslo kommune\'s own figures for each area, blended with each table\'s own sales.',ja:'「1戸あたり」に切り替えると、㎡単価の平均の代わりに、取引された住宅の総額（共同債務を含む購入価格）の中央値を合わせて示す。買い手が実際に払う額だが、立地と広さが混ざる。小さな住戸が多く売れる駅は㎡単価で見るより安く、大きな住宅が多い駅は高く見える。どちらもオスロ市が地区ごとに公表する数値で、それぞれの表の取引件数で合わせる。'},
  view:[59.915,10.75,12],home:'Oslo S',region:{en:'District (bydel)',ja:'区（ビデル）'},ranges:{type:2,size:0,age:0},mixLabels:{en:['Flats','Houses'],ja:['集合住宅','小規模住宅']},
  noRange:{en:'The source publishes each area\'s mean or median only, so there is no range.',ja:'出典は地区ごとの平均または中央値だけを公表しており、範囲はない。'},
  stats:[[{en:'Areas blended',ja:'合わせた地区'},v=>fmt(v),{en:'Grunnkretsområder blended',ja:'合わせた基本統計地区（グルンクレツオムローデ）の数'}],[{en:'To area centres',ja:'地区の中心まで'},v=>`${fmt(v)} m`,{en:'Weighted median distance from the station to the area centres (m)',ja:'駅から地区の中心までの距離の加重中央値（m）'}]],
  note:{en:'Gaps mean too few sales; hollow points are indicative (5–9 sales). Area statistics: each price blends the mean prices per m² of the homes sold in the small areas (grunnkretsområder) within 1.2 km of the station, weighted by their sales and the share of their land inside the circle; it is a blend of area figures (a weighted mean of means per m², a weighted median of medians per home), not a median of individual sales. Prices reflect the mix of homes sold.',ja:'空白は取引が少なすぎること、白抜きの点は参考値（5〜9件）を示す。地域統計：各価格は駅から1.2 km以内の小地区（グルンクレツオムローデ）で取引された住宅の㎡単価の平均を、取引件数と円に入る陸地の割合で重み付けして合わせたもので、地区の数値の合成（㎡単価は平均の加重平均、1戸あたりは中央値の加重中央値）であり個々の取引の中央値ではない。価格は取引された住宅の構成を反映する。'},
  noSales:{en:'No area within 1.2 km has a published price for this year.',ja:'この年は、1.2 km以内に価格が公表された地区がない。'},
  pooled:{en:'A tram stop within 250 m of a T-bane or railway station shares its price area (such as Jernbanetorget, Nationaltheatret, Majorstuen and Storo).',ja:'地下鉄（T-bane）や鉄道の駅から250 m以内のトラム停留所は、その駅と価格エリアを共有する（Jernbanetorget、Nationaltheatret、Majorstuen、Storo など）。'},
  legend:()=>JA?TY()+'の㎡単価・地区平均の合成（NOK）':`${TY()} price per m², blend of area averages (NOK)`,
  priceSource:{en:'Prices: Oslo kommune, Statistikkbanken (BOL018, BOL013; Boligmappa)',ja:'価格：オスロ市統計バンク（BOL018・BOL013、Boligmappa）'},
  attribution:'Stations: Entur (Ruter, Vy, Flytoget) GTFS, NLOD · Prices: Oslo kommune Statistikkbanken · Outlines: Oslo kommune',
  coverage:()=>{const c=D.coverage,k=c.counts,far=k['in an area more than 1.2 km from every station']||0,
    table=`<div class="tablewrap"><table>${heads(JA?['年','地区の取引（㎡単価の表）','総額のある取引（総額の表）','駅に示した地区の取引']:['Year','Sales in the areas (per m² table)','Sales with a total price (per home table)','Sales in areas a station shows'])}<tbody>${Object.entries(c.by_year).map(([y,v])=>`<tr><td>${y}</td><td>${fmt(v.sales)}</td><td>${fmt(v.sales_total||0)}</td><td>${fmt(v.used||0)}</td></tr>`).join('')}</tbody></table></div>`;
    return JA?`<p>2026年11月1日作成。地域統計（Area statistics）の地図である。オスロ市の統計バンクによると、市内の${fmt(c.zones)}の基本統計地区（グルンクレツオムローデ）で2018年から2025年までに住宅が${fmt(k.raw)}戸売買された（Boligmappa 社のデータ）。そのうち駅の半径1.2 kmの円に重なる地区の取引${fmt(k.in_windows)}戸を使い、${fmt(c.sites_shown)}駅に示す。各駅の価格は、円に重なる地区の㎡単価の平均（1戸あたりでは総額の中央値）を、取引件数と円に入る陸地の割合で重み付けして合わせたものである。</p>${table}<p>使っていないもの：どの駅からも1.2 kmより遠い地区の取引${fmt(far)}戸。</p>`
      :`<p>Built 1 November 2026. An Area statistics map. Oslo kommune's statistics bank counts ${fmt(k.raw)} homes sold from 2018 to 2025 in the city's ${fmt(c.zones)} small areas (grunnkretsområder), from Boligmappa AS's sales data. ${fmt(k.in_windows)} of them, in areas that a station's 1.2 km circle overlaps, are shown at ${fmt(c.sites_shown)} stations, each station blending the areas' mean prices per m² (or, per home, their median total prices), weighted by their sales and the share of their land inside the circle.</p>${table}<p>Left out: ${fmt(far)} sales in areas more than 1.2 km from every station.</p>`},
  area:{en:'Oslo',ja:'オスロ'},
  headline:()=>JA?`住宅の売買${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · オスロ市`:`${fmt(D.coverage.counts.in_windows)} home sales · ${fmt(D.stations.length)} stations · the city of Oslo`,
  presets:[[{en:'Biggest risers since 2018',ja:'2018年からの上昇率上位'},{metric:'growth',baseline:0,sortKey:'change',sortDir:-1}],[{en:'Flats',ja:'集合住宅'},{type:1}],
    [{en:'Cheapest on T-bane line 5',ja:'地下鉄5号線で価格の安い駅'},{line:'tbane-5',sortKey:'price',sortDir:1}],[{en:'Priciest on T-bane line 1',ja:'地下鉄1号線で価格の高い駅'},{line:'tbane-1',sortKey:'price',sortDir:-1}],
    [{en:'Cheapest on the L1 train',ja:'L1 列車で価格の安い駅'},{line:'vy-l1',sortKey:'price',sortDir:1}],[{en:'Busiest markets',ja:'取引の多いエリア'},{metric:'count',sortKey:'sales',sortDir:-1}]]};
});
