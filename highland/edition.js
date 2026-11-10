(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// highland (draft, 2026-11-10): as South Scotland, from Registers of Scotland sales by data zone, priced per home, on South Scotland's bands.
EDITIONS.highland={...EDITIONS.scotland,view:[57.48, -4.22, 10],home:'Inverness',
  headline:()=>JA?`価格が公表された取引${fmt(D.coverage.counts.priced)}件 · ${fmt(D.stations.length)}駅 · Inverness と Highland`:`${fmt(D.coverage.counts.priced)} sales in data zones with a price · ${fmt(D.stations.length)} stations · Inverness and Highland`,
  presets:[EDITIONS.scotland.presets[0],EDITIONS.scotland.presets[3]]};
});
