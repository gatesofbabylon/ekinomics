(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
EDITIONS.lille={...EDITIONS.paris,homeBreaks:[115000, 145000, 180000, 220000, 275000, 355000],priceBreaks:[1500, 1800, 2500, 3100, 3700, 4200],view:[50.63, 3.07, 10],home:'Rihour',
  area:{en:'the Nord',ja:'ノール県'},attribution:'Stations: ilévia (Licence Ouverte) and SNCF (ODbL) · Track: SNCF Réseau (ODbL) · Outlines: IGN via Etalab',
  headline:()=>JA?`床面積の分かる取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · リールとノール県`:`${fmt(D.coverage.counts.in_windows)} DVF sales with floor areas · ${fmt(D.stations.length)} stations · Lille and the Nord`,
  presets:[EDITIONS.paris.presets[0],EDITIONS.paris.presets[1],EDITIONS.paris.presets[2],EDITIONS.paris.presets[3],[{en:'Cheapest on Métro 1',ja:'メトロ1号線で価格の安い駅'},{line:'ilevia-m1',sortKey:'price',sortDir:1}],EDITIONS.paris.presets[5]]};
});
