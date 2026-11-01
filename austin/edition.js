(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Austin (Phil approved 2026-11-01; a draft until he says Deploy): Travis and Williamson counties (Williamson for the Leander and Lakeline stations). A Low confidence map from HMDA like
// Dallas–Fort Worth, Houston and Atlanta. Capital Metro's Red Line is the only rail line in Austin and is the whole network.
EDITIONS.austin={...EDITIONS.dallas,priceBreaks:[450000,500000,550000,625000,700000,750000],countBreaks:[40,60,90,120,160,190],view:[30.33,-97.74,11],home:'Downtown Austin',
  groupJa:{'Travis County': 'トラヴィス郡', 'Williamson County': 'ウィリアムソン郡'},
  note:{en:'Gaps mean fewer than 5 weighted purchases; hollow points are indicative (5–9). Low confidence: each price is the median of the values lenders reported for homes bought with a mortgage (HMDA) in the census tracts within 1.2 km of the station, each purchase weighted by the share of its tract\'s land inside the circle. These are not recorded sale prices: Texas keeps them confidential. The Red Line is Austin\'s only rail line. Prices reflect the mix of homes bought.',ja:'空白は加重件数5件未満、白抜きの点は参考値（5〜9件）を示す。低信頼度：各価格は、駅から1.2 km以内の国勢調査区で住宅ローンを使って購入された住宅について貸し手が報告した物件価格（HMDA）の中央値で、各購入はその調査区の陸地が円に入る割合で重み付けする。登記された売買価格ではない（テキサス州は売買価格を非公開としている。Red Line はオースティン唯一の鉄道である）。価格は購入された住宅の構成を反映する。'},
  attribution:'Stations and lines: Capital Metro GTFS (data.texas.gov), as is · Outlines: US Census Bureau',
  coverage:()=>hmdaCoverage('Travis and Williamson counties','トラヴィス郡とウィリアムソン郡'),
  headline:()=>JA?`住宅ローンでの購入${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · オースティンとトラヴィス、ウィリアムソンの2郡`:`${fmt(D.coverage.counts.in_windows)} mortgaged purchases · ${fmt(D.stations.length)} stations · Austin and Travis and Williamson counties`,
  presets:[EDITIONS.dallas.presets[0],[{en:'Cheapest on the Red Line',ja:'Red Line で価格の安い駅'},{line:'red',sortKey:'price',sortDir:1}],[{en:'Priciest on the Red Line',ja:'Red Line で価格の高い駅'},{line:'red',sortKey:'price',sortDir:-1}],EDITIONS.dallas.presets[4]]};
});
