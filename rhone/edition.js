(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// The five French metro cities beyond Paris (2026-10-30): the same DVF+ sales, with stations from each city's network and SNCF.
// Marseille's and Toulouse's boxes are their dense cores, not the communes' full extent (Marseille's reaches the calanques and
// the sea), so they open at about the magnification of the other French cities.
EDITIONS.lyon={...EDITIONS.paris,homeBreaks:[170000, 200000, 235000, 260000, 340000, 430000],priceBreaks:[2700, 3300, 3800, 4300, 4800, 5200],view:[45.76, 4.84, 10],home:'Bellecour',
  area:{en:'the Rhône',ja:'ローヌ県'},attribution:'Stations: TCL (SYTRAL Mobilités, Licence Mobilités) and SNCF (ODbL) · Track: SNCF Réseau (ODbL) · Outlines: IGN via Etalab',
  headline:()=>JA?`床面積の分かる取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · リヨンとローヌ県`:`${fmt(D.coverage.counts.in_windows)} DVF sales with floor areas · ${fmt(D.stations.length)} stations · Lyon and the Rhône`,
  presets:[EDITIONS.paris.presets[0],EDITIONS.paris.presets[1],EDITIONS.paris.presets[2],EDITIONS.paris.presets[3],[{en:'Cheapest on Métro A',ja:'メトロA線で価格の安い駅'},{line:'tcl-a',sortKey:'price',sortDir:1}],EDITIONS.paris.presets[5]]};
});
