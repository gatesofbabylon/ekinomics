(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Montpellier (Phil, 2026-10-30): TaM's trams and SNCF.
EDITIONS.montpellier={...EDITIONS.paris,homeBreaks:[135000, 155000, 185000, 210000, 300000, 410000],priceBreaks:[2600, 3200, 3600, 4000, 4200, 4800],view:[43.61, 3.875, 10],home:'Comédie',
  area:{en:'the Hérault',ja:'エロー県'},attribution:'Stations: TaM (ODbL) and SNCF (ODbL) · Track: SNCF Réseau (ODbL) · Outlines: IGN via Etalab',
  headline:()=>JA?`床面積の分かる取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · モンペリエとエロー県`:`${fmt(D.coverage.counts.in_windows)} DVF sales with floor areas · ${fmt(D.stations.length)} stations · Montpellier and the Hérault`,
  presets:[EDITIONS.paris.presets[0],EDITIONS.paris.presets[1],EDITIONS.paris.presets[2],EDITIONS.paris.presets[3],[{en:'Cheapest on Tram 1',ja:'トラム1号線で価格の安い駅'},{line:'tam-1',sortKey:'price',sortDir:1}],EDITIONS.paris.presets[5]]};
});
