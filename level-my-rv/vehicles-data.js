/*
 * Level My RV — vehicle geometry cache.
 *
 * Starter dataset seeded from publicly available manufacturer spec sheets.
 * Values are BEST-EFFORT ESTIMATES, not verified against every trim/option
 * package, and are rounded to the nearest tenth of an inch. Treat every
 * entry here as "close enough to start," not gospel — always cross-check
 * against the owner's manual or a driver's-side door jamb sticker before
 * relying on it, and use the manual override fields if anything looks off.
 *
 * wheelbase / track are in inches. track is a single value applied to
 * both axles (matches the calculator's simplified model) EXCEPT where a
 * variant explicitly calls out dual-rear-wheel (DRW) trucks, whose rear
 * track is much wider than the front — for those, the number here is the
 * REAR track (the one that matters most for the low-tire-height math);
 * verify the front separately if you're leveling a DRW dually.
 *
 * Schema per row:
 *   make, model        — display strings, searched by partial match
 *   yearStart, yearEnd  — inclusive model-year range this row covers
 *   variant             — human label shown when a make/model/year has
 *                         more than one distinct wheel geometry
 *   wheelbase, track     — inches
 *   note                 — optional short caveat shown in the UI
 */
window.RV_VEHICLES = [
  // Mercedes-Benz Sprinter (VS30, 2019–present)
  { make: "Mercedes-Benz", model: "Sprinter (Van)", yearStart: 2019, yearEnd: 2026, variant: "144\" WB, RWD, single rear wheel", wheelbase: 144.3, track: 67.9 },
  { make: "Mercedes-Benz", model: "Sprinter (Van)", yearStart: 2019, yearEnd: 2026, variant: "144\" WB, 4x4, single rear wheel", wheelbase: 144.3, track: 69.9 },
  { make: "Mercedes-Benz", model: "Sprinter (Van)", yearStart: 2019, yearEnd: 2026, variant: "170\" WB, RWD, single rear wheel", wheelbase: 170.3, track: 67.9 },
  { make: "Mercedes-Benz", model: "Sprinter (Van)", yearStart: 2019, yearEnd: 2026, variant: "170\" WB, 3500 dual rear wheel", wheelbase: 170.3, track: 74.7, note: "DRW — rear track is much wider than front; verify front separately." },

  // Ford Transit (T-series, 2015–present)
  { make: "Ford", model: "Transit (Van)", yearStart: 2015, yearEnd: 2026, variant: "130\" wheelbase (Regular)", wheelbase: 129.9, track: 68.2 },
  { make: "Ford", model: "Transit (Van)", yearStart: 2015, yearEnd: 2026, variant: "148\" wheelbase (Long)", wheelbase: 147.6, track: 68.2 },

  // Ram ProMaster (2014–present)
  { make: "Ram", model: "ProMaster (Van)", yearStart: 2014, yearEnd: 2026, variant: "118\" wheelbase (1500)", wheelbase: 118.0, track: 67.4 },
  { make: "Ram", model: "ProMaster (Van)", yearStart: 2014, yearEnd: 2026, variant: "136\" wheelbase (2500/3500)", wheelbase: 136.3, track: 67.4 },
  { make: "Ram", model: "ProMaster (Van)", yearStart: 2014, yearEnd: 2026, variant: "159\" wheelbase (2500/3500 Ext)", wheelbase: 159.6, track: 67.4 },

  // Nissan NV (2012–2021)
  { make: "Nissan", model: "NV (Van)", yearStart: 2012, yearEnd: 2021, variant: "146\" wheelbase (NV2500/3500 Standard)", wheelbase: 146.1, track: 66.7 },
  { make: "Nissan", model: "NV (Van)", yearStart: 2012, yearEnd: 2021, variant: "158\" wheelbase (NV3500 HD High Roof)", wheelbase: 158.6, track: 66.7 },

  // Toyota Sienna (two generations — same model, different geometry by year)
  { make: "Toyota", model: "Sienna", yearStart: 2011, yearEnd: 2020, variant: null, wheelbase: 119.3, track: 66.7 },
  { make: "Toyota", model: "Sienna", yearStart: 2021, yearEnd: 2026, variant: null, wheelbase: 120.5, track: 68.0 },

  // Honda Odyssey
  { make: "Honda", model: "Odyssey", yearStart: 2018, yearEnd: 2026, variant: null, wheelbase: 118.1, track: 68.7 },

  // Chrysler Pacifica
  { make: "Chrysler", model: "Pacifica", yearStart: 2017, yearEnd: 2026, variant: null, wheelbase: 121.6, track: 68.6 },

  // Ford F-150 (2015–present)
  { make: "Ford", model: "F-150", yearStart: 2015, yearEnd: 2026, variant: "SuperCab, 6.5' bed", wheelbase: 145.0, track: 68.1 },
  { make: "Ford", model: "F-150", yearStart: 2015, yearEnd: 2026, variant: "SuperCrew, 5.5' bed", wheelbase: 145.4, track: 68.1 },
  { make: "Ford", model: "F-150", yearStart: 2015, yearEnd: 2026, variant: "SuperCrew, 6.5' bed", wheelbase: 157.4, track: 68.1 },

  // Ford F-250 Super Duty (2017–present) — flagship SRW-vs-DRW example
  { make: "Ford", model: "F-250 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Crew Cab, Short Bed, single rear wheel", wheelbase: 160.6, track: 68.3 },
  { make: "Ford", model: "F-250 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Crew Cab, Long Bed, single rear wheel", wheelbase: 176.9, track: 68.3 },
  { make: "Ford", model: "F-250 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Crew Cab, Long Bed, dual rear wheel", wheelbase: 176.9, track: 94.5, note: "DRW — rear track is much wider than front; verify front separately." },

  // Ram 1500 (2019–present, DT)
  { make: "Ram", model: "1500", yearStart: 2019, yearEnd: 2026, variant: "Quad Cab", wheelbase: 140.5, track: 68.2 },
  { make: "Ram", model: "1500", yearStart: 2019, yearEnd: 2026, variant: "Crew Cab, Standard Bed", wheelbase: 144.6, track: 68.2 },
  { make: "Ram", model: "1500", yearStart: 2019, yearEnd: 2026, variant: "Crew Cab, Long Bed", wheelbase: 153.5, track: 68.2 },

  // Chevrolet Silverado 1500 (2019–present)
  { make: "Chevrolet", model: "Silverado 1500", yearStart: 2019, yearEnd: 2026, variant: "Crew Cab, Short Bed", wheelbase: 147.4, track: 68.5 },
  { make: "Chevrolet", model: "Silverado 1500", yearStart: 2019, yearEnd: 2026, variant: "Crew Cab, Standard Bed", wheelbase: 157.0, track: 68.5 },

  // Toyota Tacoma (2016–2023)
  { make: "Toyota", model: "Tacoma", yearStart: 2016, yearEnd: 2023, variant: "Double Cab, Short Bed", wheelbase: 127.4, track: 62.6 },
  { make: "Toyota", model: "Tacoma", yearStart: 2016, yearEnd: 2023, variant: "Double Cab, Long Bed", wheelbase: 140.6, track: 62.6 },

  // Toyota Tundra (2022–present)
  { make: "Toyota", model: "Tundra", yearStart: 2022, yearEnd: 2026, variant: "CrewMax, Short Bed", wheelbase: 145.7, track: 67.9 },
  { make: "Toyota", model: "Tundra", yearStart: 2022, yearEnd: 2026, variant: "Double Cab, Long Bed", wheelbase: 164.6, track: 67.9 }
];
