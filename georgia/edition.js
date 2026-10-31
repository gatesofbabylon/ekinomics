(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Atlanta (Phil, 2026-10-31; a draft until he says Deploy): Fulton, DeKalb and Clayton counties (Clayton for the Airport
// station), a Low confidence map from HMDA like Dallas–Fort Worth and Houston, until Fulton County's own sales can be read.
// The rail operator's trademark notice bars its marks, so the page names the Authority in full and never its short name.
EDITIONS.atlanta={...EDITIONS.dallas,priceBreaks:[300000,350000,400000,500000,600000,750000],countBreaks:[50,75,100,150,200,300],view:[33.755,-84.39,11],home:'Five Points',
  groupJa:{'Fulton County':'フルトン郡','DeKalb County':'ディカーブ郡','Clayton County':'クレイトン郡'},
  note:{en:'Gaps mean fewer than 5 weighted purchases; hollow points are indicative (5–9). Low confidence: each price is the median of the values lenders reported for homes bought with a mortgage (HMDA) in the census tracts within 1.2 km of the station, each purchase weighted by the share of its tract\'s land inside the circle. These are not recorded sale prices: Georgia records them, but no open bulk record of them has been found for Fulton or DeKalb County. Prices reflect the mix of homes bought.',ja:'空白は加重件数5件未満、白抜きの点は参考値（5〜9件）を示す。低信頼度：各価格は、駅から1.2 km以内の国勢調査区で住宅ローンを使って購入された住宅について貸し手が報告した物件価格（HMDA）の中央値で、各購入はその調査区の陸地が円に入る割合で重み付けする。登記された売買価格ではない（ジョージア州は売買価格を記録しているが、フルトン郡とディカーブ郡については公開された一括データがまだ見つかっていない）。価格は購入された住宅の構成を反映する。'},
  pooled:{en:'A streetcar stop within 250 m of a rail station shares its price area (Peachtree Center).',ja:'鉄道駅から250 m以内の路面電車の停留所は、その駅と価格エリアを共有する（Peachtree Center）。'},
  attribution:'Stations and lines: Metropolitan Atlanta Rapid Transit Authority GTFS, as is · Outlines: US Census Bureau',
  coverage:()=>hmdaCoverage('Fulton, DeKalb and Clayton counties','フルトン郡、ディカーブ郡、クレイトン郡'),
  headline:()=>JA?`住宅ローンでの購入${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · アトランタとフルトン、ディカーブ、クレイトンの3郡`:`${fmt(D.coverage.counts.in_windows)} mortgaged purchases · ${fmt(D.stations.length)} stations · Atlanta and Fulton, DeKalb and Clayton counties`,
  presets:[EDITIONS.dallas.presets[0],[{en:'Cheapest on the Blue Line',ja:'Blue Line で価格の安い駅'},{line:'blue',sortKey:'price',sortDir:1}],[{en:'Priciest on the Red Line',ja:'Red Line で価格の高い駅'},{line:'red',sortKey:'price',sortDir:-1}],
    [{en:'Priciest on the Gold Line',ja:'Gold Line で価格の高い駅'},{line:'gold',sortKey:'price',sortDir:-1}],EDITIONS.dallas.presets[4]]};
});
