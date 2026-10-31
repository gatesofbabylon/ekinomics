(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Nice (Phil, 2026-10-30): Lignes d'Azur's trams and SNCF; the Chemins de fer de Provence are not in SNCF's timetables.
EDITIONS.nice={...EDITIONS.paris,homeBreaks:[160000, 200000, 235000, 265000, 310000, 510000],priceBreaks:[2900, 3900, 4700, 5300, 6200, 8500],view:[43.7, 7.265, 10],home:'Masséna',
  area:{en:'the Alpes-Maritimes',ja:'アルプ＝マリティーム県'},attribution:'Stations: Lignes d’Azur (Licence Ouverte) and SNCF (ODbL) · Track: SNCF Réseau (ODbL) · Outlines: IGN via Etalab',
  headline:()=>JA?`床面積の分かる取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · ニースとアルプ＝マリティーム県`:`${fmt(D.coverage.counts.in_windows)} DVF sales with floor areas · ${fmt(D.stations.length)} stations · Nice and the Alpes-Maritimes`,
  presets:[EDITIONS.paris.presets[0],EDITIONS.paris.presets[1],EDITIONS.paris.presets[2],EDITIONS.paris.presets[3],[{en:'Cheapest on Tram 1',ja:'トラム1号線で価格の安い駅'},{line:'lignesdazur-l1',sortKey:'price',sortDir:1}],EDITIONS.paris.presets[5]]};
});
