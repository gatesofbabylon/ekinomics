(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Belfast (Phil, 2026-10-27): as Scotland, from Land & Property Services sales by electoral ward, priced per home; a ward's
// prices are published only from 30 sales a year.
EDITIONS.belfast={...EDITIONS.scotland,obs:{en:'Median of ward medians',ja:'選挙区中央値の中央値'},priceBreaks:[100000,115000,135000,160000,200000,250000],view:[54.6,-5.93,10],home:'Belfast Grand Central',
  zone:{min:30,since:2005,unit:'ward',en:'wards',ja:'選挙区',enLong:'electoral wards',jaLong:'選挙区',saleEn:'verified residential sales',saleJa:'確認済みの住宅取引'},
  stats:[[{en:'Wards',ja:'選挙区'},v=>fmt(v),{en:'Wards',ja:'選挙区数'}],EDITIONS.scotland.stats[1]],
  note:{en:'Gaps mean too few sales: a ward\'s prices are published only from 30 sales a year. Each ward counts at the nearest station within 1.2 km of the centre of its homes. Prices per home reflect the mix of homes sold.',ja:'空白は取引が少なすぎることを示す。選挙区の価格は年30件以上の取引がある場合にだけ公表される。各選挙区はその住宅の中心から1.2 km以内の最寄り駅に数える。1戸あたりの価格は取引された住宅の構成を反映する。'},
  noSales:{en:'No ward is centred within 1.2 km of this station, or each such ward is nearer another station, so it has no sales of its own.',ja:'この駅から1.2 km以内に中心がある選挙区がないか、あってもほかの駅のほうが近いため、この駅に数える取引はない。'},
  attribution:'Contains OSNI and LPS data © Crown copyright 2026 · Contains OS data © Crown copyright and database right 2024 · Tailte Éireann CC BY 4.0',
  headline:()=>JA?`価格が公表された取引${fmt(D.coverage.counts.priced)}件 · ${fmt(D.stations.length)}駅 · Belfast、Lisburn と Bangor`:`${fmt(D.coverage.counts.priced)} sales in wards with a price · ${fmt(D.stations.length)} stations · Belfast, Lisburn and Bangor`,
  presets:[EDITIONS.scotland.presets[0],[{en:'Priciest on the Bangor Line',ja:'Bangor Line で価格の高い駅'},{line:'nir-bangor',sortKey:'price',sortDir:-1}],[{en:'Cheapest on the Larne Line',ja:'Larne Line で価格の安い駅'},{line:'nir-larne',sortKey:'price',sortDir:1}],EDITIONS.scotland.presets[3]]};
});
