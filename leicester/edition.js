(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Greater Leicester, and Hampshire and Dorset (Bournemouth, Southampton and Portsmouth), follow the other English pages.
EDITIONS.leicester={...EDITIONS.northwest,homeBreaks:[200000,225000,250000,275000,300000,350000],priceBreaks:[2300,2600,2900,3100,3300,3500],view:[52.63,-1.13,10],
  home:'Leicester',
  headline:ukHeadline({en:'Leicester and Leicestershire',ja:'Leicester と Leicestershire'}),
  presets:ukPresets({en:'Cheapest on East Midlands Railway',ja:'East Midlands Railway で価格の安い駅'},'east-midlands-railway')};
});
