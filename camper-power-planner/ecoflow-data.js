/*
 * Camper Power & Climate Planner — EcoFlow product catalog.
 *
 * Verified against us.ecoflow.com product pages on 2026-07-20.
 * priceUsd = price charged on us.ecoflow.com at that date; msrpUsd = the
 * crossed-out regular price (EcoFlow discounts near-constantly). null =
 * not published on the official listing (never guess in the UI).
 * Prices and models WILL drift — re-verify periodically.
 */
window.ECOFLOW_PRODUCTS = [
  // ---- Portable power stations ----
  { id: "river3", name: "RIVER 3", type: "station", wh: 245, acOutW: 300, surgeW: 600, acInW: 320, carInW: 100, solarInW: 110, usbcW: 100, expandsWith: [], maxExpandedWh: 245, weightLb: 7.8, dims: "10 x 8.3 x 4.4 in", priceUsd: 199, msrpUsd: null, note: "2x AC, 2x USB-A, 1x USB-C 100W, 12V car out 126W. LiFePO4, 3000 cycles, <30dB, IP54. Not expandable." },
  { id: "river3plus", name: "RIVER 3 Plus", type: "station", wh: 286, acOutW: 600, surgeW: 1200, acInW: 380, carInW: 220, solarInW: 220, usbcW: 100, expandsWith: ["river3eb300", "river3eb600"], maxExpandedWh: 858, weightLb: 10.4, dims: "9.2 x 9.1 x 5.8 in", priceUsd: 259, msrpUsd: 299, note: "3x AC 600W total (X-Boost/surge 1200W). Car input is a real 220W (11-55V) — fastest-in-class 12V-socket charging. 0-100% AC in 60 min." },
  { id: "river3max", name: "RIVER 3 Max (Plus + Extra Battery 300)", type: "station", wh: 572, acOutW: 600, surgeW: 1200, acInW: 380, carInW: 220, solarInW: 220, usbcW: 100, expandsWith: ["river3eb300", "river3eb600"], maxExpandedWh: 858, weightLb: null, dims: null, priceUsd: 319, msrpUsd: null, note: "Factory bundle: RIVER 3 Plus with EB300 (286Wh) snapped on via pogo-pin." },
  { id: "river3maxplus", name: "RIVER 3 Max Plus (Plus + Extra Battery 600)", type: "station", wh: 858, acOutW: 600, surgeW: 1200, acInW: 380, carInW: 220, solarInW: 220, usbcW: 100, expandsWith: [], maxExpandedWh: 858, weightLb: null, dims: null, priceUsd: 359, msrpUsd: 469, note: "Factory bundle: RIVER 3 Plus with EB600 (572Wh); already at the 858Wh stacking cap." },
  { id: "delta3classic", name: "DELTA 3 Classic", type: "station", wh: 1024, acOutW: 1800, surgeW: 3600, acInW: 1400, carInW: null, solarInW: 500, usbcW: 100, expandsWith: [], maxExpandedWh: 1024, weightLb: 26.7, dims: null, priceUsd: 469, msrpUsd: 599, note: "Budget 1kWh model. X-Boost to 3600W. Pairs with the 500W Alternator Charger. No extra-battery expansion listed." },
  { id: "delta3", name: "DELTA 3", type: "station", wh: 1024, acOutW: 1800, surgeW: 3600, acInW: 1500, carInW: null, solarInW: 500, usbcW: 100, expandsWith: ["delta3eb", "deltapro3eb"], maxExpandedWh: 5120, weightLb: 27.6, dims: "15.7 x 8.0 x 11.2 in", priceUsd: 549, msrpUsd: 699, note: "6x AC, 2x USB-C 100W, 12V car out 126W. Takes DELTA 3/DELTA 2/DELTA 2 Max/DELTA Pro 3 extra batteries, to ~5kWh." },
  { id: "delta3plus", name: "DELTA 3 Plus", type: "station", wh: 1024, acOutW: 1800, surgeW: 3600, acInW: 1500, carInW: null, solarInW: 500, usbcW: 140, expandsWith: ["delta3eb", "deltapro3eb"], maxExpandedWh: 5000, weightLb: 27.6, dims: "16 x 8.0 x 11 in", priceUsd: 689, msrpUsd: 799, note: "Step-up from DELTA 3: dual solar ports (500W max), 2x USB-C 140W, faster UPS. '800W car charging' requires the 800W Alternator Charger accessory, not the 12V socket. The reference Sienna build's hub." },
  { id: "delta3max", name: "DELTA 3 Max", type: "station", wh: 2048, acOutW: 2400, surgeW: 4800, acInW: 1800, carInW: null, solarInW: 500, usbcW: null, expandsWith: ["delta3maxpluseb"], maxExpandedWh: 4096, weightLb: 44.8, dims: "19.4 x 9.4 x 12.0 in", priceUsd: 849, msrpUsd: 1199, note: "2kWh single unit. X-Boost to 3400W; AC 0-80% in 68 min. Expandable to 4kWh." },
  { id: "delta3maxplus", name: "DELTA 3 Max Plus", type: "station", wh: 2048, acOutW: 3000, surgeW: 6000, acInW: null, carInW: null, solarInW: null, usbcW: null, expandsWith: ["delta3maxpluseb"], maxExpandedWh: 4096, weightLb: null, dims: null, priceUsd: 1099, msrpUsd: 1899, note: "Higher-output sibling of DELTA 3 Max: X-Boost to 3800W; 0-80% in 43 min; 800W Alternator Charger fills it in ~2.75 hr of driving. Some input specs not published." },
  { id: "deltapro3", name: "DELTA Pro 3", type: "station", wh: 4096, acOutW: 4000, surgeW: 6000, acInW: 1800, carInW: null, solarInW: 2600, usbcW: null, expandsWith: ["deltapro3eb"], maxExpandedWh: 12288, weightLb: 113.5, dims: null, priceUsd: 2399, msrpUsd: 3699, note: "120V/240V dual voltage, wheeled, 113 lb — heavy for van use; the ceiling option for big rigs." },

  // ---- Expansion batteries ----
  { id: "river3eb300", name: "RIVER 3 Plus Extra Battery 300", type: "battery", wh: 286, pairsWith: ["river3plus"], weightLb: 7.7, dims: "9.2 x 8.8 x 4.3 in", priceUsd: 159, msrpUsd: null, note: "Wireless pogo-pin stack under RIVER 3 Plus; up to 858Wh total. Own USB-C 140W in/out." },
  { id: "river3eb600", name: "RIVER 3 Plus Extra Battery 600", type: "battery", wh: 572, pairsWith: ["river3plus"], weightLb: 12.8, dims: "9.2 x 8.8 x 6.2 in", priceUsd: 249, msrpUsd: 319, note: "RIVER 3 Plus + EB600 = 858Wh (stacking cap)." },
  { id: "delta3eb", name: "DELTA 3 Series Smart Extra Battery", type: "battery", wh: 1024, pairsWith: ["delta3", "delta3plus"], weightLb: null, dims: null, priceUsd: 409, msrpUsd: 499, note: "1024Wh LFP, plug-and-play stacking. The reference Sienna build carries one beside a DELTA 3 Plus (2048Wh total)." },
  { id: "delta3maxpluseb", name: "DELTA 3 Max Plus Smart Extra Battery", type: "battery", wh: 2048, pairsWith: ["delta3max", "delta3maxplus"], weightLb: 35.3, dims: "19.4 x 9.4 x 7.7 in", priceUsd: 849, msrpUsd: 1329, note: "Takes DELTA 3 Max series to 4kWh." },
  { id: "deltapro3eb", name: "DELTA Pro 3 Smart Extra Battery", type: "battery", wh: 4096, pairsWith: ["deltapro3"], weightLb: 72.8, dims: "27.3 x 11.6 x 8.5 in", priceUsd: 1899, msrpUsd: null, note: "Stackable to 12kWh per DELTA Pro 3." },
  { id: "wave3battery", name: "WAVE 3 Add-on Battery", type: "battery", wh: 1024, pairsWith: ["wave3"], weightLb: 21.4, dims: "20.3 x 11.1 x 4.4 in", priceUsd: 699, msrpUsd: null, note: "1024Wh LFP slab that bolts under WAVE 3 (XT150). Inputs: solar 400W, car socket 200W, AC full charge in 75 min; alternator charger ~1 hr." },

  // ---- Climate ----
  { id: "wave3", name: "WAVE 3 Portable Air Conditioner + Heater", type: "climate", coolBtu: 6100, heatBtu: 6800, drawWMax: 690, drawWEco: null, acInW: 820, addonBattery: { id: "wave3battery", wh: 1024, priceUsd: 699 }, weightLb: 33.7, dims: "20.4 x 11.7 x 13.2 in", priceUsd: 849, msrpUsd: 1299, note: "Rated input: cooling 690W AC / 640W DC; heating 645W AC / 606W DC. NO built-in battery: runs from AC, its add-on battery, or a DELTA station (XT150). Wave Car Vent Kit (window seal, fits WAVE 2 & 3) $39. 44-58 dB. Bundles at research time: WAVE 3 + Add-on Battery $1,369; WAVE 3 + DELTA 3 Plus $1,377." },

  // ---- Charging accessories ----
  { id: "alt800", name: "800W Alternator Charger", type: "accessory", chargeW: 800, priceUsd: 269, msrpUsd: null, weightLb: 5.1, dims: "9.5 x 7.6 x 1.4 in", note: "~1kWh per 1.3 hr of driving (input 11-35V, 76A max). 3-in-1: charge / maintainer / reverse-charge. Install: 125A fuse, cable to battery, XT150 out; no drilling but semi-permanent. A 500W version exists ($199) for DELTA 3 Max/Classic." },
  { id: "ventkit", name: "WAVE Series Car Vent Kit", type: "accessory", priceUsd: 39, msrpUsd: null, weightLb: null, dims: "47.2 x 27.6 in cover", note: "Waterproof window cover with sealed duct pass-throughs for the WAVE's hoses — vents out a cracked window with no permanent modification. Fits WAVE 2 & 3." },

  // ---- Portable solar panels ----
  { id: "pv110", name: "110W Portable Solar Panel", type: "solar", ratedW: 110, weightLb: 8.8, dims: "unfolded 20.2 x 62.5 in", priceUsd: 169, msrpUsd: 259, note: "21.8V OCV, 22-23% efficiency, kickstand case." },
  { id: "pv160", name: "NextGen 160W Portable Solar Panel", type: "solar", ratedW: 160, weightLb: 12.3, dims: "unfolded 23.6 x 63.4 in", priceUsd: 249, msrpUsd: 369, note: "TOPCon cells, 25% efficiency. Good match for RIVER 3 Plus (220W max input)." },
  { id: "pv220", name: "NextGen 220W Bifacial Portable Solar Panel", type: "solar", ratedW: 220, weightLb: 15.4, dims: "unfolded 24.2 x 84.8 in", priceUsd: 299, msrpUsd: null, note: "220W front + 175W rear bifacial. The default DELTA-series bundle panel." },
  { id: "pv400", name: "400W Portable Solar Panel", type: "solar", ratedW: 400, weightLb: null, dims: null, priceUsd: 599, msrpUsd: 649, note: "Retailers list ~35 lb — bulky; pair with DELTA 3 Max and up." }
];
