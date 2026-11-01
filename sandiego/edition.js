(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// San Diego (Phil approved 2026-11-01; a draft until he says Deploy): San Diego County, a Low confidence map from HMDA like Dallas–Fort Worth,
// Houston and Atlanta, because no free file of recorded sale prices exists. The Assessor's roll files are sold (about $86 each) and were not wanted.
EDITIONS.sandiego={...EDITIONS.dallas,priceBreaks:[650000, 700000, 750000, 850000, 1000000, 1300000],countBreaks:[50,75,100,150,200,300],view:[32.718, -117.17, 11],home:"San Diego - Santa Fe Depot",
  groupJa:{"San Diego County": "サンディエゴ郡"},
  note:{en:"Gaps mean fewer than 5 weighted purchases; hollow points are indicative (5\u20139). Low confidence: each price is the median of the values lenders reported for homes bought with a mortgage (HMDA) in the census tracts within 1.2 km of the station, each purchase weighted by the share of its tract's land inside the circle. These are not recorded sale prices: no free bulk file of them has been found for San Diego County. Prices reflect the mix of homes bought.",ja:"空白は加重件数5件未満、白抜きの点は参考値（5〜9件）を示す。低信頼度：各価格は、駅から1.2 km以内の国勢調査区で住宅ローンを使って購入された住宅について貸し手が報告した物件価格（HMDA）の中央値で、各購入はその調査区の陸地が円に入る割合で重み付けする。登記された売買価格ではない（サンディエゴ郡については無料の一括データが見つかっていない）。価格は購入された住宅の構成を反映する。"},
  pooled:{en:"A Trolley stop within 250 m of a Coaster or Sprinter station shares its price area.",ja:"Coaster または Sprinter の駅から250 m以内のトロリーの停留所は、その駅と価格エリアを共有する。"},
  attribution:"Stations and lines: San Diego Metropolitan Transit System and North County Transit District GTFS, as is \u00b7 Outlines: US Census Bureau",
  coverage:()=>hmdaCoverage("San Diego County","サンディエゴ郡"),
  headline:()=>JA?`住宅ローンでの購入${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · サンディエゴとサンディエゴ郡`:`${fmt(D.coverage.counts.in_windows)} mortgaged purchases · ${fmt(D.stations.length)} stations · San Diego and San Diego County`,
  presets:[EDITIONS.dallas.presets[0],[{en:'Cheapest on the Blue Line',ja:'Blue Line で価格の安い駅'},{line:'blue',sortKey:'price',sortDir:1}],[{en:'Priciest on the Green Line',ja:'Green Line で価格の高い駅'},{line:'green',sortKey:'price',sortDir:-1}],[{en:'Priciest on the Coaster',ja:'Coaster で価格の高い駅'},{line:'coaster',sortKey:'price',sortDir:-1}],EDITIONS.dallas.presets[4]]};
});
