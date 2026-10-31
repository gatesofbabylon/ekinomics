(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
EDITIONS.tayside={...EDITIONS.scotland,view:[56.45,-3.2,9.5],home:'Dundee',
  headline:()=>JA?`価格が公表された取引${fmt(D.coverage.counts.priced)}件 · ${fmt(D.stations.length)}駅 · Dundee、Perth と Tayside`:`${fmt(D.coverage.counts.priced)} sales in data zones with a price · ${fmt(D.stations.length)} stations · Dundee, Perth and Tayside`,
  presets:[EDITIONS.scotland.presets[0],EDITIONS.scotland.presets[3]]};
});
