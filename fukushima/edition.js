(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
EDITIONS.fukushima={...EDITIONS.fukuoka,unitHome:true,homeBreaks:[3.5e6,6e6,12e6,16e6,20e6,22e6],priceBreaks:[30000,60000,100000,140000,180000,220000],landBreaks:[8000,14000,25000,30000,40000,60000],home:'いわき',view:[37.06, 140.89, 11],
headline:japanHeadline({en:'Fukushima prefecture',ja:'福島県'}),
  scope:{en:"The map shows Fukushima prefecture: Iwaki, Kōriyama, Fukushima, Aizuwakamatsu and the towns around them.",ja:'地図は福島県（いわき・郡山・福島・会津若松とその周辺）を表示する。'},
  presets:japanPresets({en:"Cheapest on the Tōhoku Line",ja:'東北線で価格の安い駅'},'東日本旅客鉄道 / 東北線')};
});
