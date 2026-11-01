(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Salt Lake City (Phil approved 2026-11-01; a draft until he says Deploy): Salt Lake County, a Low confidence map from HMDA like Dallas–Fort Worth,
// Houston and Atlanta, because no free file of recorded sale prices exists. Utah is a non-disclosure state, so recorded sale prices are not public.
EDITIONS.saltlake={...EDITIONS.dallas,priceBreaks:[420000, 450000, 500000, 550000, 600000, 700000],countBreaks:[50,75,100,150,200,300],view:[40.763, -111.893, 11],home:"Salt Lake Central",
  groupJa:{"Salt Lake County": "ソルトレイク郡"},
  note:{en:"Gaps mean fewer than 5 weighted purchases; hollow points are indicative (5\u20139). Low confidence: each price is the median of the values lenders reported for homes bought with a mortgage (HMDA) in the census tracts within 1.2 km of the station, each purchase weighted by the share of its tract's land inside the circle. These are not recorded sale prices: Utah does not make them public. Prices reflect the mix of homes bought.",ja:"空白は加重件数5件未満、白抜きの点は参考値（5〜9件）を示す。低信頼度：各価格は、駅から1.2 km以内の国勢調査区で住宅ローンを使って購入された住宅について貸し手が報告した物件価格（HMDA）の中央値で、各購入はその調査区の陸地が円に入る割合で重み付けする。登記された売買価格ではない（ユタ州は売買価格を公開していない）。価格は購入された住宅の構成を反映する。"},
  pooled:{en:"A TRAX or S-Line stop within 250 m of a FrontRunner station, or an S-Line stop within 250 m of a TRAX station, shares its price area.",ja:"FrontRunner の駅から250 m以内の TRAX または S-Line の停留所、TRAX の駅から250 m以内の S-Line の停留所は、その駅と価格エリアを共有する。"},
  attribution:"Stations and lines: Utah Transit Authority GTFS, as is \u00b7 Outlines: US Census Bureau",
  coverage:()=>hmdaCoverage("Salt Lake County","ソルトレイク郡"),
  headline:()=>JA?`住宅ローンでの購入${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · ソルトレイクシティとソルトレイク郡`:`${fmt(D.coverage.counts.in_windows)} mortgaged purchases · ${fmt(D.stations.length)} stations · Salt Lake City and Salt Lake County`,
  presets:[EDITIONS.dallas.presets[0],[{en:'Cheapest on the Green Line',ja:'Green Line で価格の安い駅'},{line:'green',sortKey:'price',sortDir:1}],[{en:'Priciest on the Blue Line',ja:'Blue Line で価格の高い駅'},{line:'blue',sortKey:'price',sortDir:-1}],[{en:'Priciest on the Red Line',ja:'Red Line で価格の高い駅'},{line:'red',sortKey:'price',sortDir:-1}],EDITIONS.dallas.presets[4]]};
});
