(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
EDITIONS.rennes={...EDITIONS.paris,homeBreaks:[170000, 190000, 210000, 225000, 275000, 300000],priceBreaks:[2300, 2600, 3000, 3800, 4200, 4400],view:[48.11, -1.68, 10],home:'République',
  area:{en:'the Ille-et-Vilaine',ja:'イル＝エ＝ヴィレーヌ県'},attribution:'Stations: STAR (ODbL) and SNCF (ODbL) · Track: SNCF Réseau (ODbL) · Outlines: IGN via Etalab',
  headline:()=>JA?`床面積の分かる取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · レンヌとイル＝エ＝ヴィレーヌ県`:`${fmt(D.coverage.counts.in_windows)} DVF sales with floor areas · ${fmt(D.stations.length)} stations · Rennes and the Ille-et-Vilaine`,
  presets:[EDITIONS.paris.presets[0],EDITIONS.paris.presets[1],EDITIONS.paris.presets[2],EDITIONS.paris.presets[3],[{en:'Cheapest on Métro a',ja:'メトロa線で価格の安い駅'},{line:'star-a',sortKey:'price',sortDir:1}],EDITIONS.paris.presets[5]]};
});
