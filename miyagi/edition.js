(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// One-prefecture pages added 2026-10-25, each opening on its prefectural capital (Naha: Makishi on Kokusai-dōri, as the civic centre, Kenchō-mae, has too few sales for a full price).
EDITIONS.sendai={...EDITIONS.fukuoka,homeBreaks:[7e6,15e6,20e6,25e6,30e6,40e6],priceBreaks:[50000, 100000, 200000, 250000, 300000, 400000],landBreaks:[10000, 20000, 30000, 70000, 100000, 150000],home:'仙台',view:[38.26, 140.88, 11],
headline:japanHeadline({en:'Miyagi prefecture',ja:'宮城県'}),
  scope:{en:"The map shows Miyagi prefecture: Sendai, Ishinomaki and the towns around them.",ja:'地図は宮城県（仙台・石巻とその周辺）を表示する。'},
  presets:japanPresets({en:'Cheapest on the Namboku Line',ja:'南北線で価格の安い駅'},'仙台市 / 南北線')};
});
