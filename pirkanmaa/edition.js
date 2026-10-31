(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
EDITIONS.tampere={...EDITIONS.helsinki,priceBreaks:[2300,2600,2900,3200,3500,3800],view:[61.5,23.77,10],home:'Tampere',
  attribution:'Trams: Nysse (ITS Factory, CC BY 4.0) · Trains: Fintraffic (CC BY 4.0) · Outlines: Statistics Finland (CC BY 4.0)',
  area:{en:'the Tampere region',ja:'タンペレ地域'},
  headline:()=>JA?`住宅会社の中古住宅の取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · タンペレ地域`:`${fmt(D.coverage.counts.in_windows)} home sales · ${fmt(D.stations.length)} stations · the Tampere region`,
  presets:[EDITIONS.helsinki.presets[0],EDITIONS.helsinki.presets[1],EDITIONS.helsinki.presets[2],[{en:'Cheapest on Tram 3',ja:'Tram 3 で価格の安い駅'},{line:'tram-3',sortKey:'price',sortDir:1}],EDITIONS.helsinki.presets[5]]};
});
