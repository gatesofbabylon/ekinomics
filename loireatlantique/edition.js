(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Nantes (Phil, 2026-10-30): Naolib's trams (its Busway and Chronobus are buses, left out) and SNCF, with the Châteaubriant tram-train.
EDITIONS.nantes={...EDITIONS.paris,homeBreaks:[155000, 180000, 200000, 240000, 260000, 350000],priceBreaks:[2400, 2800, 3100, 3600, 3900, 5100],view:[47.215, -1.555, 10],home:'Commerce',
  area:{en:'the Loire-Atlantique',ja:'ロワール＝アトランティック県'},attribution:'Stations: Naolib (Licence Ouverte) and SNCF (ODbL) · Track: SNCF Réseau (ODbL) · Outlines: IGN via Etalab',
  headline:()=>JA?`床面積の分かる取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · ナントとロワール＝アトランティック県`:`${fmt(D.coverage.counts.in_windows)} DVF sales with floor areas · ${fmt(D.stations.length)} stations · Nantes and the Loire-Atlantique`,
  presets:[EDITIONS.paris.presets[0],EDITIONS.paris.presets[1],EDITIONS.paris.presets[2],EDITIONS.paris.presets[3],[{en:'Cheapest on Tram 1',ja:'トラム1号線で価格の安い駅'},{line:'naolib-1',sortKey:'price',sortDir:1}],EDITIONS.paris.presets[5]]};
});
