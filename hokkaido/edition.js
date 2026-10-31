(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Region pages added 2026-10-25 (Hokkaido, Hokuriku, Shikoku, Nagasaki) and Greater Kagoshima; each opens on its main city.
EDITIONS.hokkaido={...EDITIONS.fukuoka,homeBreaks:[4e6,8e6,15e6,20e6,25e6,35e6],priceBreaks:[30000, 50000, 80000, 130000, 200000, 300000],landBreaks:[4000, 7000, 15000, 35000, 65000, 120000],home:'札幌',view:[43.06, 141.35, 11],
headline:japanHeadline({en:'Hokkaido',ja:'北海道'}),
  scope:{en:"The map shows all of Hokkaido: Sapporo, Asahikawa, Hakodate, Obihiro, Kushiro and the towns between them.",ja:'地図は北海道全域（札幌・旭川・函館・帯広・釧路など）を表示する。'},
  presets:japanPresets({en:'Cheapest on the Tōzai Line',ja:'東西線で価格の安い駅'},'札幌市 / 東西線')};
});
