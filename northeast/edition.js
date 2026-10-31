(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// North East England, Yorkshire and Greater Birmingham follow the North West page; each opens on its urban core.
EDITIONS.northeast={...EDITIONS.northwest,homeBreaks:[115000,150000,175000,225000,300000,425000],priceBreaks:[1200,1500,1800,2100,2400,2800],view:[54.9,-1.6,9],
  home:'Newcastle',
  headline:ukHeadline({en:'Tyneside, Wearside, Durham and Teesside',ja:'Tyneside、Wearside、Durham と Teesside'}),
  presets:ukPresets({en:'Cheapest on the Metro Yellow line',ja:'Metro Yellow line で価格の安い駅'},'tw-yellow')};
});
