(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
EDITIONS.perth={...EDITIONS.brisbane,priceBreaks:[500000,600000,725000,1200000,1850000,2400000],landBreaks:[360000,400000,420000,480000,650000,825000],view:[-31.95,115.86,10],home:'Perth',
  // The licence of Perth's GTFS asks that the data be described as available free of charge from www.transperth.wa.gov.au
  // and that its publisher's trademarks not be used with it, so the credit names only that address.
  attribution:'Stations: GTFS data, free from www.transperth.wa.gov.au · Outlines: ABS ASGS (CC BY 4.0)',
  headline:()=>JA?`住宅取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · パース`:`${fmt(D.coverage.counts.in_windows)} home sales · ${fmt(D.stations.length)} stations · Perth`,
  presets:[EDITIONS.brisbane.presets[0],EDITIONS.brisbane.presets[1],[{en:'Cheapest on the Mandurah Line',ja:'Mandurah Line で価格の安い駅'},{line:'pt-mandurah',sortKey:'price',sortDir:1}],[{en:'Priciest on the Fremantle Line',ja:'Fremantle Line で価格の高い駅'},{line:'pt-fremantle',sortKey:'price',sortDir:-1}],[{en:'Busiest markets',ja:'取引の多いエリア'},{metric:'count',sortKey:'sales',sortDir:-1}]]};
});
