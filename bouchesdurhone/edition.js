(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
EDITIONS.marseille={...EDITIONS.paris,homeBreaks:[135000, 155000, 180000, 235000, 300000, 430000],priceBreaks:[2300, 2900, 3300, 3700, 4500, 6000],view:[43.3, 5.4, 10],home:'Vieux-Port',
  area:{en:'the Bouches-du-Rhône',ja:'ブーシュ＝デュ＝ローヌ県'},attribution:'Stations: RTM (Licence Ouverte) and SNCF (ODbL) · Track: SNCF Réseau (ODbL) · Outlines: IGN via Etalab',
  headline:()=>JA?`床面積の分かる取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · マルセイユとブーシュ＝デュ＝ローヌ県`:`${fmt(D.coverage.counts.in_windows)} DVF sales with floor areas · ${fmt(D.stations.length)} stations · Marseille and the Bouches-du-Rhône`,
  presets:[EDITIONS.paris.presets[0],EDITIONS.paris.presets[1],EDITIONS.paris.presets[2],EDITIONS.paris.presets[3],[{en:'Cheapest on Métro 1',ja:'メトロ1号線で価格の安い駅'},{line:'rtm-m1',sortKey:'price',sortDir:1}],EDITIONS.paris.presets[5]]};
});
