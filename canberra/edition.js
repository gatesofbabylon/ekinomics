(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Canberra (Phil, 2026-10-31; a draft until Phil says Deploy): built as Brisbane and Perth, from the ABS's SA2 figures, over the
// ACT and the NSW council of Queanbeyan-Palerang; the ACT's districts (SA3s) are its areas. Stations: the light rail and NSW
// TrainLink's Canberra, Queanbeyan and Bungendore.
EDITIONS.canberra={...EDITIONS.brisbane,priceBreaks:[900000,1000000,1150000,1350000,1600000,1900000],landBreaks:[425000,475000,525000,550000,575000,625000],countBreaks:[25,50,100,150,250,500],
  view:[-35.28,149.13,11],home:'Alinga Street',
  attribution:'Stations: Transport Canberra (CC BY 4.0) · Source: Transport for NSW (CC BY 4.0) · Outlines: ABS ASGS (CC BY 4.0)',
  headline:()=>JA?`住宅取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · キャンベラとクイーンビアン`:`${fmt(D.coverage.counts.in_windows)} home sales · ${fmt(D.stations.length)} stations · Canberra and Queanbeyan`,
  presets:[EDITIONS.brisbane.presets[0],EDITIONS.brisbane.presets[1],[{en:'Priciest houses on the light rail',ja:'ライトレールで価格の高い戸建て'},{line:'cbrlr-canberra-light-rail',sortKey:'price',sortDir:-1}],[{en:'Cheapest units on the light rail',ja:'ライトレールで価格の安いユニット'},{type:1,line:'cbrlr-canberra-light-rail',sortKey:'price',sortDir:1}],[{en:'Busiest markets',ja:'取引の多いエリア'},{metric:'count',sortKey:'sales',sortDir:-1}]]};
});
