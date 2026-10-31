(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
EDITIONS.houston={...EDITIONS.dallas,priceBreaks:[325000,375000,425000,500000,650000,900000],countBreaks:[50,75,100,125,175,225],view:[29.75,-95.36,11],home:'Main Street Square',
  groupJa:{Houston:'ヒューストン市','Other cities':'その他の市',Unincorporated:'非法人地域'},
  attribution:'Route and arrival data provided by permission of METRO · Outlines: US Census Bureau, City of Houston',
  coverage:()=>hmdaCoverage('Harris County','ハリス郡'),
  headline:()=>JA?`住宅ローンでの購入${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · ヒューストンとハリス郡`:`${fmt(D.coverage.counts.in_windows)} mortgaged purchases · ${fmt(D.stations.length)} stations · Houston and Harris County`,
  presets:[EDITIONS.dallas.presets[0],[{en:'Cheapest on the Purple Line',ja:'Purple Line で価格の安い駅'},{line:'metro-purple',sortKey:'price',sortDir:1}],[{en:'Priciest on the Red Line',ja:'Red Line で価格の高い駅'},{line:'metro-red',sortKey:'price',sortDir:-1}],
    [{en:'Priciest on the Green Line',ja:'Green Line で価格の高い駅'},{line:'metro-green',sortKey:'price',sortDir:-1}],EDITIONS.dallas.presets[4]]};
});
