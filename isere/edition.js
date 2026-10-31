(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Grenoble (Phil, 2026-10-30): M TAG's trams (stop names without M TAG's commune prefix) and SNCF.
EDITIONS.grenoble={...EDITIONS.paris,homeBreaks:[120000, 140000, 165000, 200000, 225000, 290000],priceBreaks:[2000, 2300, 2500, 2800, 3200, 3600],view:[45.185, 5.725, 10],home:'Victor Hugo',
  area:{en:'the Isère',ja:'イゼール県'},attribution:'Stations: M TAG (ODbL) and SNCF (ODbL) · Track: SNCF Réseau (ODbL) · Outlines: IGN via Etalab',
  headline:()=>JA?`床面積の分かる取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · グルノーブルとイゼール県`:`${fmt(D.coverage.counts.in_windows)} DVF sales with floor areas · ${fmt(D.stations.length)} stations · Grenoble and the Isère`,
  presets:[EDITIONS.paris.presets[0],EDITIONS.paris.presets[1],EDITIONS.paris.presets[2],EDITIONS.paris.presets[3],[{en:'Cheapest on Tram A',ja:'トラムA線で価格の安い駅'},{line:'mtag-a',sortKey:'price',sortDir:1}],EDITIONS.paris.presets[5]]};
});
