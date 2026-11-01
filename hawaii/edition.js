(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Honolulu (Phil approved 2026-11-01; a draft until he says Deploy): the City and County of Honolulu, a Low confidence map from HMDA like Dallas–Fort Worth,
// Houston and Atlanta, because no free file of recorded sale prices exists. The City's open parcel tables hold assessed values, not sale prices. Skyline is the only line.
EDITIONS.honolulu={...EDITIONS.dallas,priceBreaks:[450000, 550000, 650000, 750000, 850000, 1000000],countBreaks:[50,75,100,150,200,300],view:[21.37, -157.96, 11],home:"Pearlridge (Kalauao)",
  groupJa:{"City and County of Honolulu": "ホノルル市郡"},
  note:{en:"Gaps mean fewer than 5 weighted purchases; hollow points are indicative (5\u20139). Low confidence: each price is the median of the values lenders reported for homes bought with a mortgage (HMDA) in the census tracts within 1.2 km of the station, each purchase weighted by the share of its tract's land inside the circle. These are not recorded sale prices: the City and County's open parcel tables hold assessed values, not sales. Prices reflect the mix of homes bought; with one line and few purchases near some stations, several stations have no price.",ja:"空白は加重件数5件未満、白抜きの点は参考値（5〜9件）を示す。低信頼度：各価格は、駅から1.2 km以内の国勢調査区で住宅ローンを使って購入された住宅について貸し手が報告した物件価格（HMDA）の中央値で、各購入はその調査区の陸地が円に入る割合で重み付けする。登記された売買価格ではない（市郡の公開区画データは評価額で、売買価格ではない）。価格は購入された住宅の構成を反映する。路線は1本で、駅によっては周辺の購入が少なく、価格のない駅がある。"},
  pooled:{en:"",ja:""},
  attribution:"Stations and lines: TheBus (City and County of Honolulu Department of Transportation Services) GTFS, as is \u00b7 Outlines: US Census Bureau",
  coverage:()=>hmdaCoverage("the City and County of Honolulu","ホノルル市郡"),
  headline:()=>JA?`住宅ローンでの購入${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · ホノルルとホノルル市郡（オアフ島）`:`${fmt(D.coverage.counts.in_windows)} mortgaged purchases · ${fmt(D.stations.length)} stations · Honolulu and the City and County of Honolulu (Oahu)`,
  presets:[EDITIONS.dallas.presets[0],[{en:'Cheapest on Skyline',ja:'Skyline で価格の安い駅'},{line:'skyline',sortKey:'price',sortDir:1}],[{en:'Priciest on Skyline',ja:'Skyline で価格の高い駅'},{line:'skyline',sortKey:'price',sortDir:-1}],EDITIONS.dallas.presets[4]]};
});
