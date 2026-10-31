(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Aberdeen and Tayside (Phil, 2026-10-27): as South Scotland, from Registers of Scotland sales by data zone, priced per home.
EDITIONS.aberdeen={...EDITIONS.scotland,view:[57.15,-2.2,10],home:'Aberdeen',
  headline:()=>JA?`価格が公表された取引${fmt(D.coverage.counts.priced)}件 · ${fmt(D.stations.length)}駅 · Aberdeen と Aberdeenshire`:`${fmt(D.coverage.counts.priced)} sales in data zones with a price · ${fmt(D.stations.length)} stations · Aberdeen and Aberdeenshire`,
  presets:[EDITIONS.scotland.presets[0],EDITIONS.scotland.presets[3]]};
});
