(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Bordeaux (Phil, 2026-10-30): the same DVF+ sales, with TBM's trams and SNCF's stations; the box is the dense core.
EDITIONS.bordeaux={...EDITIONS.paris,homeBreaks:[155000, 200000, 230000, 260000, 300000, 350000],priceBreaks:[2400, 3000, 3500, 4000, 4400, 5200],view:[44.84, -0.58, 10],home:'Hôtel de Ville',
  area:{en:'the Gironde',ja:'ジロンド県'},attribution:'Stations: TBM (Licence Ouverte) and SNCF (ODbL) · Track: SNCF Réseau (ODbL) · Outlines: IGN via Etalab',
  headline:()=>JA?`床面積の分かる取引${fmt(D.coverage.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · ボルドーとジロンド県`:`${fmt(D.coverage.counts.in_windows)} DVF sales with floor areas · ${fmt(D.stations.length)} stations · Bordeaux and the Gironde`,
  presets:[EDITIONS.paris.presets[0],EDITIONS.paris.presets[1],EDITIONS.paris.presets[2],EDITIONS.paris.presets[3],[{en:'Cheapest on Tram A',ja:'トラムA線で価格の安い駅'},{line:'tbm-a',sortKey:'price',sortDir:1}],EDITIONS.paris.presets[5]]};
});
