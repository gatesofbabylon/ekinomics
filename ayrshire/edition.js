(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// ayrshire (draft, 2026-11-10): as South Scotland, from Registers of Scotland sales by data zone, priced per home, on South Scotland's bands.
EDITIONS.ayrshire={...EDITIONS.scotland,view:[55.46, -4.63, 10],home:'Ayr',
  headline:()=>JA?`価格が公表された取引${fmt(D.coverage.counts.priced)}件 · ${fmt(D.stations.length)}駅 · Ayr、Dumfries と Galloway`:`${fmt(D.coverage.counts.priced)} sales in data zones with a price · ${fmt(D.stations.length)} stations · Ayr, Dumfries and Galloway`,
  presets:[EDITIONS.scotland.presets[0],EDITIONS.scotland.presets[3]]};
});
