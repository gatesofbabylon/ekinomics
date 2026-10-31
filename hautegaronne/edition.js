(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
EDITIONS.toulouse={...EDITIONS.paris,homeBreaks:[130000, 170000, 185000, 215000, 260000, 300000],priceBreaks:[2200, 2700, 3100, 3400, 4300, 4700],view:[43.6, 1.44, 10],home:'Capitole',
  area:{en:'the Haute-Garonne',ja:'オート＝ガロンヌ県'},attribution:'Stations: Tisséo (ODbL) and SNCF (ODbL) · Track: SNCF Réseau (ODbL) · Outlines: IGN via Etalab',
  headline:()=>JA?`床面積の分かる取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · トゥールーズとオート＝ガロンヌ県`:`${fmt(D.coverage.counts.in_windows)} DVF sales with floor areas · ${fmt(D.stations.length)} stations · Toulouse and the Haute-Garonne`,
  presets:[EDITIONS.paris.presets[0],EDITIONS.paris.presets[1],EDITIONS.paris.presets[2],EDITIONS.paris.presets[3],[{en:'Cheapest on Métro A',ja:'メトロA線で価格の安い駅'},{line:'tisseo-a',sortKey:'price',sortDir:1}],EDITIONS.paris.presets[5]]};
});
