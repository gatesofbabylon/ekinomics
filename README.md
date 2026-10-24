# Ekinomics

Station price atlas: https://ekinomics.com

The price per m² of homes sold around every railway station, in two-year windows, for five regions:

| Region | Page | Covers | Years |
|---|---|---|---|
| Greater Tokyo 首都圏 | [ekinomics.com](https://ekinomics.com/) | Tokyo, Kanagawa, Saitama and Chiba | 2006–2025 |
| Greater Osaka 関西圏 | [/osaka/](https://ekinomics.com/osaka/) | Osaka, Kyoto, Hyogo and Nara | 2006–2025 |
| Greater Nagoya 中京圏 | [/nagoya/](https://ekinomics.com/nagoya/) | Aichi | 2006–2025 |
| Greater London | [/london/](https://ekinomics.com/london/) | Greater London and the commuter belt: Kent, Essex, Hertfordshire, Bedfordshire, Buckinghamshire, Berkshire, Surrey, East and West Sussex, Hampshire, Oxfordshire and Cambridgeshire | 2006–2023 |
| North West England | [/northwest/](https://ekinomics.com/northwest/) | Greater Manchester, Merseyside, Cheshire, Lancashire and High Peak | 2006–2023 |

## What the prices are

**Japan** (in English and Japanese): observed medians from MLIT's real estate transaction price survey, in four views:

- **Apartments** (the default): second-hand condominiums (中古マンション等), per m² of floor area.
- **Houses**: land sold with a building used as a home, per m² of floor area.
- **Apartments and houses**: the two combined.
- **Land**: residential plots, per m² of plot area.

**United Kingdom**: observed medians from HM Land Registry standard sales, per m² of floor area from Energy Performance Certificates. Shown for all homes, flats, terraced, semi-detached and detached. Each sale counts at the nearest station within 1.2 km of its postcode.

A price needs at least 5 sales in a window; prices from 5–9 sales are marked indicative. These are observed medians, not quality-adjusted price indices: a change can reflect a different mix of homes sold.

This repository holds only the built static site; GitHub Pages serves it as-is.

## Sources and credits

### Japan

- 出典：国土交通省 不動産情報ライブラリ（https://www.reinfolib.mlit.go.jp/）。「不動産取引価格情報」（国土交通省）をもとにEkinomics作成（加工）。Public Data License 1.0. MLIT did not produce or endorse this site.
- Railways (N02, 2024) and administrative boundaries (N03, 2025): MLIT National Land Numerical Information, CC BY 4.0, adapted and simplified.
- English station and municipality names: Wikidata (CC0) and English Wikipedia line articles; line names translated for this site.

### United Kingdom

- Contains HM Land Registry data © Crown copyright and database right 2024. This data is licensed under the Open Government Licence v3.0.
- Floor areas: Chi, Dennett, Oléron-Evans and Morphet (2025), [House Price Per Square Metre in England and Wales, 1995–2024](https://doi.org/10.5255/UKDA-SN-857911), UK Data Service, CC BY 4.0, which links Land Registry sales to Energy Performance Certificates (MHCLG, Open Government Licence).
- Postcodes and boundaries: Office for National Statistics, Open Government Licence; contains OS data © Crown copyright and database right 2024, Royal Mail data © Royal Mail copyright and database right 2024 and GeoPlace data © Local Government Information House Limited copyright and database right 2024.
- Stations: NaPTAN, Department for Transport, Open Government Licence.
- Rail lines: Powered by TfL Open Data; contains OS data © Crown copyright and database rights 2016 and Geomni UK Map data © and database rights [2019].
- Metrolink: contains Transport for Greater Manchester data (Open Government Licence).

### All pages

- Map library: Leaflet 1.9.4 (BSD 2-Clause).
- Type: IBM Plex (SIL Open Font License).
- Visits and interactions are counted with Google Analytics, which uses cookies.
