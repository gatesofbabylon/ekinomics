(self.EKI_EDITIONS=self.EKI_EDITIONS||[]).push(EDITIONS=>{
// Riga (a draft, 2026-11-01): the city of Riga, its tram stops and railway stations, from the State Land Service's (VZD)
// real estate market database (scripts/build_riga.py). Flats and houses, per home and per m² over the same sales.
const RJ={'deals listed on several rows (several buildings or flats)':'複数の行に記された取引（複数の建物や住戸）','shares of a flat':'住戸の持分','shares of a house or its land':'住宅または土地の持分','buildings without a position in the coordinates files':'座標ファイルに位置のない建物','flats under EUR 3,000':'3,000ユーロ未満の住戸','houses under EUR 10,000':'10,000ユーロ未満の住宅','prices per m² outside EUR 100–15,000':'㎡単価が100〜15,000ユーロの範囲外','flat floor areas missing or outside 10–300 m²':'住戸の床面積がない、または10〜300㎡の範囲外','house floor areas missing or outside 30–1,000 m²':'住宅の床面積がない、または30〜1,000㎡の範囲外'};
const TY=()=>JA?['住宅','集合住宅の住戸','一戸建て・二戸建て'][state.type]:['Home','Flat','House'][state.type];
EDITIONS.riga={...EDITIONS.northwest,cur:'€',unitHome:true,homesNote:{en:'The map opens on the median price of the homes sold, which is what buyers pay but mixes location with size. Price per m² divides each sale by its floor area; every sale used has one, so both views cover the same sales.',ja:'地図は取引された住宅の価格の中央値で開く。買い手が実際に払う額だが、立地と広さが混ざる。㎡単価は各取引の価格を床面積で割ったもので、使う取引にはすべて床面積があるため、どちらの表示も同じ取引を対象とする。'},
  groupJa:{'Rīga':'リガ'},homeBreaks:[35000,45000,60000,80000,110000,150000],priceBreaks:[850,1000,1200,1500,1900,2400],countBreaks:[10,20,40,80,150,250],view:[56.95,24.11,12],
  homeX:{chartDiv:1000,chartStep:25000,chartUnit:{en:'€ thousand per home',ja:'千ユーロ/戸'},chartAria:{en:'thousand euros',ja:'千ユーロ'},short:b=>b>=1e6?`${b/1e6}m`:`${b/1e3}k`,
    legend:()=>JA?TY()+'1戸あたりの価格（€）':`Price per ${TY().toLowerCase()} (€)`},
  home:'Nacionālā opera',region:{en:'Neighbourhood',ja:'地区'},ranges:{type:2,size:4,age:5},outer:undefined,
  mixLabels:{en:['Flats','Houses'],ja:['集合住宅の住戸','一戸建て・二戸建て']},chartUnit:{en:'€ thousand per m²',ja:'千ユーロ/㎡'},chartAria:{en:'thousand euros',ja:'千ユーロ'},chartDiv:1000,chartStep:500,
  stats:[[{en:'Median year built',ja:'建築年の中央値'},v=>JA?`${v}年`:String(v),{en:'Median year built',ja:'建築年の中央値'}],EDITIONS.london.stats[1]],
  note:{en:'Gaps mean fewer than 5 sales; hollow points are indicative (5–9 sales). Each sale counts at the nearest station within 1.2 km of its building. Prices reflect the mix of homes sold.',ja:'空白は取引5件未満、白抜きの点は参考値（5〜9件）である。各取引は建物から1.2 km以内の最寄り駅に数える。価格は取引された住宅の構成を反映する。'},
  pooled:{en:'A tram stop within 250 m of a railway station shares its price area.',ja:'鉄道駅から250 m以内の路面電車停留所は、その価格エリアを共有する。'},
  legend:()=>JA?TY()+'の㎡単価（€）':TY()+' price per m² (€)',
  priceSource:{en:'Prices: State Land Service of Latvia (VZD), real estate market database (data.gov.lv, CC BY 4.0)',ja:'価格：ラトビア国家土地局（VZD）不動産市場データベース（data.gov.lv、CC BY 4.0）'},
  attribution:'Stations and lines: Rīgas satiksme and Pasažieru vilciens GTFS · Outlines: CSP, VARAM',
  coverage:()=>{const c=D.coverage,H=c.homes.counts,far='more than 1.2 km from a station',
    list=o=>Object.entries(o).sort((a,b)=>b[1]-a[1]).map(([r,v])=>JA?`${esc(RJ[r]||r)} ${fmt(v)}件`:`${fmt(v)} ${esc(r)}`).join(J('; ','、')),
    table=`<div class="tablewrap"><table>${heads(JA?['年','住宅の取引','条件に合う取引','位置の分かる取引','使用']:['Year','Home deals','Kept','Placed','Used'])}<tbody>${Object.entries(c.by_year).map(([y,v])=>`<tr><td>${y}</td><td>${fmt(v.raw||0)}</td><td>${fmt(v.homes||0)}</td><td>${fmt(v.eligible||0)}</td><td>${fmt(v.used||0)}</td></tr>`).join('')}</tbody></table></div>`;
    return JA?`<p>2026年11月1日作成、ラトビア国家土地局の不動産市場データベース（取引日2014年1月〜2025年12月）による。リガ市の住宅の取引${fmt(H.raw)}件のうち${fmt(H.eligible)}件が条件に合い位置が分かり、そのうち${fmt(H.in_windows)}件が${fmt(c.sites_shown)}駅のいずれかから${c.radius_km} km以内にある。</p>${table}<p>使っていないもの：駅から${c.radius_km} kmより遠い取引${fmt(H[far])}件、${list(c.homes.exclusions)}。</p>`
      :`<p>Built 1 November 2026 from the State Land Service of Latvia's real estate market database, deals dated January 2014 to December 2025. Of ${fmt(H.raw)} home deals recorded in the city of Riga, ${fmt(H.eligible)} pass the filters and are placed; ${fmt(H.in_windows)} of them lie within ${c.radius_km} km of one of ${fmt(c.sites_shown)} stations.</p>${table}<p>Not used: ${fmt(H[far])} sales more than ${c.radius_km} km from a station, and ${list(c.homes.exclusions)}.</p>`},
  headline:()=>JA?`取引${fmt(D.coverage.homes.counts.in_windows)}件 · ${fmt(D.stations.length)}駅 · リガ`:`${fmt(D.coverage.homes.counts.in_windows)} sales · ${fmt(D.stations.length)} stations · Riga`,
  presets:[[{en:'Biggest risers since 2014–15',ja:'2014〜15年からの上昇率上位'},{metric:'growth',baseline:0,sortKey:'change',sortDir:-1}],[{en:'Flats',ja:'集合住宅の住戸'},{type:1}],[{en:'Houses',ja:'一戸建て・二戸建て'},{type:2}],[{en:'Built 2010 or later',ja:'2010年以降の建物'},{age:5}],
    [{en:'Late Soviet blocks, 1970–1992',ja:'ソ連後期の団地（1970〜1992年）'},{type:1,age:3}],[{en:'Cheapest on tram 11',ja:'路面電車11系統で価格の安い停留所'},{line:'tram-11',sortKey:'price',sortDir:1}],[{en:'Busiest markets',ja:'取引の多いエリア'},{metric:'count',sortKey:'sales',sortDir:-1}]]};
});
