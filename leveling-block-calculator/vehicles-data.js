/*
 * RV Leveling Block Calculator — vehicle geometry cache.
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
  // ---------- Camper & cargo van chassis (Class B base vehicles) ----------

  // Mercedes-Benz Sprinter (VS30, 2019–present)
  { make: "Mercedes-Benz", model: "Sprinter (Van)", yearStart: 2019, yearEnd: 2026, variant: "144\" WB, RWD, single rear wheel", wheelbase: 144.3, track: 67.9 },
  { make: "Mercedes-Benz", model: "Sprinter (Van)", yearStart: 2019, yearEnd: 2026, variant: "144\" WB, 4x4, single rear wheel", wheelbase: 144.3, track: 69.9 },
  { make: "Mercedes-Benz", model: "Sprinter (Van)", yearStart: 2019, yearEnd: 2026, variant: "170\" WB, RWD, single rear wheel", wheelbase: 170.3, track: 67.9 },
  { make: "Mercedes-Benz", model: "Sprinter (Van)", yearStart: 2019, yearEnd: 2026, variant: "170\" WB, 3500 dual rear wheel", wheelbase: 170.3, track: 74.7, note: "DRW — rear track is much wider than front; verify front separately." },

  // Ford Transit (T-series, 2015–present)
  { make: "Ford", model: "Transit (Van)", yearStart: 2015, yearEnd: 2026, variant: "130\" wheelbase (Regular)", wheelbase: 129.9, track: 68.2 },
  { make: "Ford", model: "Transit (Van)", yearStart: 2015, yearEnd: 2026, variant: "148\" wheelbase (Long)", wheelbase: 147.6, track: 68.2 },

  // Ford Transit Connect (compact cargo van — popular budget camper conversion)
  { make: "Ford", model: "Transit Connect (Van)", yearStart: 2010, yearEnd: 2013, variant: "114.6\" wheelbase (LWB only, North America)", wheelbase: 114.6, track: 59.3 },
  { make: "Ford", model: "Transit Connect (Van)", yearStart: 2014, yearEnd: 2023, variant: "104.8\" wheelbase (SWB)", wheelbase: 104.8, track: 61.7 },
  { make: "Ford", model: "Transit Connect (Van)", yearStart: 2014, yearEnd: 2023, variant: "120.6\" wheelbase (LWB)", wheelbase: 120.6, track: 61.7 },

  // Ram ProMaster (2014–present)
  { make: "Ram", model: "ProMaster (Van)", yearStart: 2014, yearEnd: 2026, variant: "118\" wheelbase (1500)", wheelbase: 118.0, track: 67.4 },
  { make: "Ram", model: "ProMaster (Van)", yearStart: 2014, yearEnd: 2026, variant: "136\" wheelbase (2500/3500)", wheelbase: 136.3, track: 67.4 },
  { make: "Ram", model: "ProMaster (Van)", yearStart: 2014, yearEnd: 2026, variant: "159\" wheelbase (2500/3500 Ext)", wheelbase: 159.6, track: 67.4 },

  // Ram ProMaster City (compact cargo van)
  { make: "Ram", model: "ProMaster City (Van)", yearStart: 2015, yearEnd: 2022, variant: "122.4\" wheelbase (compact cargo van)", wheelbase: 122.4, track: 60.0 },

  // Nissan NV (2012–2021)
  { make: "Nissan", model: "NV (Van)", yearStart: 2012, yearEnd: 2021, variant: "146\" wheelbase (NV2500/3500 Standard)", wheelbase: 146.1, track: 66.7 },
  { make: "Nissan", model: "NV (Van)", yearStart: 2012, yearEnd: 2021, variant: "158\" wheelbase (NV3500 HD High Roof)", wheelbase: 158.6, track: 66.7 },

  // Nissan NV200 / Chevrolet City Express (compact cargo van twins)
  { make: "Nissan", model: "NV200 (Van)", yearStart: 2013, yearEnd: 2021, variant: "115.2\" wheelbase (Compact Cargo)", wheelbase: 115.2, track: 60.0 },
  { make: "Chevrolet", model: "City Express (Van)", yearStart: 2015, yearEnd: 2018, variant: "115.2\" wheelbase (rebadged Nissan NV200)", wheelbase: 115.2, track: 60.0, note: "Mechanical twin of the Nissan NV200 — same platform/suspension/tires." },

  // ---------- Class C motorhome cutaway chassis ----------

  // Ford E-350 / E-450 Super Duty Cutaway
  { make: "Ford", model: "E-350 Cutaway (Class C chassis)", yearStart: 2008, yearEnd: 2026, variant: "138\" wheelbase, single rear wheel (SRW)", wheelbase: 138.0, track: 72.1 },
  { make: "Ford", model: "E-350 Cutaway (Class C chassis)", yearStart: 2008, yearEnd: 2026, variant: "138\" wheelbase, dual rear wheel (DRW)", wheelbase: 138.0, track: 75.4, note: "DRW — rear track shown; front track is 69.4\", narrower than rear on DRW models." },
  { make: "Ford", model: "E-350 Cutaway (Class C chassis)", yearStart: 2008, yearEnd: 2026, variant: "158\" wheelbase, single rear wheel (SRW)", wheelbase: 158.0, track: 72.1 },
  { make: "Ford", model: "E-350 Cutaway (Class C chassis)", yearStart: 2008, yearEnd: 2026, variant: "158\" wheelbase, dual rear wheel (DRW)", wheelbase: 158.0, track: 75.4, note: "DRW — rear track shown; front track is 69.4\", narrower than rear on DRW models." },
  { make: "Ford", model: "E-350 Cutaway (Class C chassis)", yearStart: 2008, yearEnd: 2026, variant: "176\" wheelbase, dual rear wheel (DRW only)", wheelbase: 176.0, track: 75.4, note: "DRW only at this wheelbase — rear track shown; front track is 69.4\"." },
  { make: "Ford", model: "E-450 Super Duty Cutaway (Class C chassis)", yearStart: 2008, yearEnd: 2026, variant: "158\" wheelbase, dual rear wheel (DRW only)", wheelbase: 158.0, track: 77.7, note: "E-450 is DRW only — rear track shown; front track is 69.4\"." },
  { make: "Ford", model: "E-450 Super Duty Cutaway (Class C chassis)", yearStart: 2008, yearEnd: 2026, variant: "176\" wheelbase, dual rear wheel (DRW only)", wheelbase: 176.0, track: 77.7, note: "E-450 is DRW only — rear track shown; front track is 69.4\"." },

  // Chevrolet Express 3500/4500 Cutaway
  { make: "Chevrolet", model: "Express 3500 Cutaway (Class C chassis)", yearStart: 2010, yearEnd: 2026, variant: "139\" wheelbase, single rear wheel (SRW)", wheelbase: 139.0, track: 67.6 },
  { make: "Chevrolet", model: "Express 3500 Cutaway (Class C chassis)", yearStart: 2010, yearEnd: 2026, variant: "139\" wheelbase, dual rear wheel (DRW)", wheelbase: 139.0, track: 94.5, note: "DRW — value is GM-published overall vehicle width with DRW (outside tire to outside tire); front track is 67.6\"." },
  { make: "Chevrolet", model: "Express 3500 Cutaway (Class C chassis)", yearStart: 2010, yearEnd: 2026, variant: "159\" wheelbase, single rear wheel (SRW)", wheelbase: 159.0, track: 67.6 },
  { make: "Chevrolet", model: "Express 3500 Cutaway (Class C chassis)", yearStart: 2010, yearEnd: 2026, variant: "159\" wheelbase, dual rear wheel (DRW)", wheelbase: 159.0, track: 94.5, note: "DRW — value is GM-published overall vehicle width with DRW (outside tire to outside tire); front track is 67.6\"." },
  { make: "Chevrolet", model: "Express 3500 Cutaway (Class C chassis)", yearStart: 2010, yearEnd: 2026, variant: "177\" wheelbase, dual rear wheel (DRW only)", wheelbase: 177.0, track: 94.5, note: "DRW only at this wheelbase — value is GM-published overall vehicle width with DRW; front track is 67.6\"." },
  { make: "Chevrolet", model: "Express 4500 Cutaway (Class C chassis)", yearStart: 2010, yearEnd: 2026, variant: "159\" wheelbase, dual rear wheel (DRW only)", wheelbase: 159.0, track: 94.5, note: "4500 is DRW only — value is GM-published overall vehicle width with DRW; front track is 67.6\"." },
  { make: "Chevrolet", model: "Express 4500 Cutaway (Class C chassis)", yearStart: 2010, yearEnd: 2026, variant: "177\" wheelbase, dual rear wheel (DRW only)", wheelbase: 177.0, track: 94.5, note: "4500 is DRW only — value is GM-published overall vehicle width with DRW; front track is 67.6\"." },

  // ---------- Pickup trucks (truck-camper duty) ----------

  // Ford F-150 (2015–present)
  { make: "Ford", model: "F-150", yearStart: 2015, yearEnd: 2026, variant: "SuperCab, 6.5' bed", wheelbase: 145.0, track: 68.1 },
  { make: "Ford", model: "F-150", yearStart: 2015, yearEnd: 2026, variant: "SuperCrew, 5.5' bed", wheelbase: 145.4, track: 68.1 },
  { make: "Ford", model: "F-150", yearStart: 2015, yearEnd: 2026, variant: "SuperCrew, 6.5' bed", wheelbase: 157.4, track: 68.1 },

  // Ford F-250 Super Duty (2017–present) — flagship SRW-vs-DRW example
  { make: "Ford", model: "F-250 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Crew Cab, Short Bed, single rear wheel", wheelbase: 160.6, track: 68.3 },
  { make: "Ford", model: "F-250 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Crew Cab, Long Bed, single rear wheel", wheelbase: 176.9, track: 68.3 },
  { make: "Ford", model: "F-250 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Crew Cab, Long Bed, dual rear wheel", wheelbase: 176.9, track: 94.5, note: "DRW — rear track is much wider than front; verify front separately." },

  // Ford F-250/F-350 Super Duty, prior generation (2011–2016)
  { make: "Ford", model: "F-250 Super Duty", yearStart: 2011, yearEnd: 2016, variant: "Crew Cab, Short Bed, single rear wheel", wheelbase: 156.2, track: 68.4, note: "Track width carried over from 2017+ generation (not independently verified for this era)." },
  { make: "Ford", model: "F-250 Super Duty", yearStart: 2011, yearEnd: 2016, variant: "Crew Cab, Long Bed, single rear wheel", wheelbase: 172.4, track: 68.4, note: "Track width carried over from 2017+ generation (not independently verified for this era)." },
  { make: "Ford", model: "F-350 Super Duty", yearStart: 2011, yearEnd: 2016, variant: "Crew Cab, Long Bed, dual rear wheel", wheelbase: 172.4, track: 74.0, note: "DRW — rear track is much wider than front; verify front separately. Track carried over from 2017+ generation (not independently verified for this era)." },

  // Ford F-350 Super Duty (2017–present) — SRW & DRW, all cab/bed combos
  { make: "Ford", model: "F-350 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Regular Cab, 8' Box, single rear wheel", wheelbase: 141.5, track: 68.4 },
  { make: "Ford", model: "F-350 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "SuperCab, Short Bed, single rear wheel", wheelbase: 147.8, track: 68.4 },
  { make: "Ford", model: "F-350 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "SuperCab, Long Bed, single rear wheel", wheelbase: 164.1, track: 68.4 },
  { make: "Ford", model: "F-350 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Crew Cab, Short Bed, single rear wheel", wheelbase: 159.7, track: 68.4 },
  { make: "Ford", model: "F-350 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Crew Cab, Long Bed, single rear wheel", wheelbase: 175.9, track: 68.4 },
  { make: "Ford", model: "F-350 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Regular Cab, 8' Box, dual rear wheel", wheelbase: 141.5, track: 74.0, note: "DRW — rear track is much wider than front; verify front separately." },
  { make: "Ford", model: "F-350 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "SuperCab, Long Bed, dual rear wheel", wheelbase: 164.1, track: 74.0, note: "DRW — rear track is much wider than front; verify front separately." },
  { make: "Ford", model: "F-350 Super Duty", yearStart: 2017, yearEnd: 2026, variant: "Crew Cab, Long Bed, dual rear wheel", wheelbase: 175.9, track: 74.0, note: "DRW — rear track is much wider than front; verify front separately." },

  // Ram 1500 (2019–present, DT)
  { make: "Ram", model: "1500", yearStart: 2019, yearEnd: 2026, variant: "Quad Cab", wheelbase: 140.5, track: 68.2 },
  { make: "Ram", model: "1500", yearStart: 2019, yearEnd: 2026, variant: "Crew Cab, Standard Bed", wheelbase: 144.6, track: 68.2 },
  { make: "Ram", model: "1500", yearStart: 2019, yearEnd: 2026, variant: "Crew Cab, Long Bed", wheelbase: 153.5, track: 68.2 },

  // Ram 1500, prior generation (2009–2018, 4th gen "DS/DJ")
  { make: "Ram", model: "1500", yearStart: 2009, yearEnd: 2018, variant: "Regular Cab, 6'4\" Box", wheelbase: 120.5, track: 67.8 },
  { make: "Ram", model: "1500", yearStart: 2009, yearEnd: 2018, variant: "Regular Cab, 8' Box", wheelbase: 140.5, track: 67.8 },
  { make: "Ram", model: "1500", yearStart: 2009, yearEnd: 2018, variant: "Quad Cab, 6'4\" Box", wheelbase: 140.5, track: 67.8 },
  { make: "Ram", model: "1500", yearStart: 2009, yearEnd: 2018, variant: "Crew Cab, 5'7\" Box", wheelbase: 140.5, track: 67.8 },
  { make: "Ram", model: "1500", yearStart: 2009, yearEnd: 2018, variant: "Crew Cab, 6'4\" Box", wheelbase: 149.5, track: 67.8 },

  // Ram 2500 (2019–2024, 5th gen "DT" Heavy Duty) — single rear wheel only
  { make: "Ram", model: "2500", yearStart: 2019, yearEnd: 2024, variant: "Regular Cab, 8' Box", wheelbase: 140.2, track: 68.4 },
  { make: "Ram", model: "2500", yearStart: 2019, yearEnd: 2024, variant: "Crew Cab, 6'4\" Box", wheelbase: 149.0, track: 68.4 },
  { make: "Ram", model: "2500", yearStart: 2019, yearEnd: 2024, variant: "Crew Cab, 8' Box", wheelbase: 169.0, track: 68.4 },
  { make: "Ram", model: "2500", yearStart: 2019, yearEnd: 2024, variant: "Mega Cab, 6'4\" Box", wheelbase: 160.4, track: 68.4 },

  // Ram 3500 (2019–2024, 5th gen "DT" Heavy Duty) — SRW and DRW
  { make: "Ram", model: "3500", yearStart: 2019, yearEnd: 2024, variant: "Regular Cab, 8' Box, single rear wheel", wheelbase: 140.2, track: 67.4 },
  { make: "Ram", model: "3500", yearStart: 2019, yearEnd: 2024, variant: "Regular Cab, 8' Box, dual rear wheel", wheelbase: 140.2, track: 75.9, note: "DRW — rear track is much wider than front; verify front separately." },
  { make: "Ram", model: "3500", yearStart: 2019, yearEnd: 2024, variant: "Crew Cab, 6'4\" Box, single rear wheel", wheelbase: 149.4, track: 67.4 },
  { make: "Ram", model: "3500", yearStart: 2019, yearEnd: 2024, variant: "Crew Cab, 6'4\" Box, dual rear wheel", wheelbase: 149.4, track: 75.9, note: "DRW — rear track is much wider than front; verify front separately." },
  { make: "Ram", model: "3500", yearStart: 2019, yearEnd: 2024, variant: "Crew Cab, 8' Box, single rear wheel", wheelbase: 169.2, track: 67.4 },
  { make: "Ram", model: "3500", yearStart: 2019, yearEnd: 2024, variant: "Crew Cab, 8' Box, dual rear wheel", wheelbase: 169.2, track: 75.9, note: "DRW — rear track is much wider than front; verify front separately." },
  { make: "Ram", model: "3500", yearStart: 2019, yearEnd: 2024, variant: "Mega Cab, 6'4\" Box, single rear wheel", wheelbase: 160.4, track: 67.4 },
  { make: "Ram", model: "3500", yearStart: 2019, yearEnd: 2024, variant: "Mega Cab, 6'4\" Box, dual rear wheel", wheelbase: 160.4, track: 75.9, note: "DRW — rear track is much wider than front; verify front separately." },

  // Chevrolet Silverado 1500 (2019–present)
  { make: "Chevrolet", model: "Silverado 1500", yearStart: 2019, yearEnd: 2026, variant: "Crew Cab, Short Bed", wheelbase: 147.4, track: 68.5 },
  { make: "Chevrolet", model: "Silverado 1500", yearStart: 2019, yearEnd: 2026, variant: "Crew Cab, Standard Bed", wheelbase: 157.0, track: 68.5 },

  // GMC Sierra 1500 (2019–present) — same platform as Silverado 1500
  { make: "GMC", model: "Sierra 1500", yearStart: 2019, yearEnd: 2026, variant: "Crew Cab, Short Bed", wheelbase: 147.4, track: 68.5 },
  { make: "GMC", model: "Sierra 1500", yearStart: 2019, yearEnd: 2026, variant: "Crew Cab, Standard Bed", wheelbase: 157.0, track: 68.5 },

  // Chevrolet Silverado 2500HD / 3500HD (2020–present, GM T1 HD platform) — SRW and DRW
  { make: "Chevrolet", model: "Silverado 2500HD", yearStart: 2020, yearEnd: 2026, variant: "Regular Cab, single rear wheel", wheelbase: 141.5, track: 68.2 },
  { make: "Chevrolet", model: "Silverado 2500HD", yearStart: 2020, yearEnd: 2026, variant: "Double Cab, Standard Box, single rear wheel", wheelbase: 149.4, track: 68.2 },
  { make: "Chevrolet", model: "Silverado 2500HD", yearStart: 2020, yearEnd: 2026, variant: "Double Cab, Long Box, single rear wheel", wheelbase: 162.4, track: 68.2 },
  { make: "Chevrolet", model: "Silverado 2500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Standard Box, single rear wheel", wheelbase: 158.9, track: 68.2 },
  { make: "Chevrolet", model: "Silverado 2500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Long Box, single rear wheel", wheelbase: 172.0, track: 68.2 },
  { make: "Chevrolet", model: "Silverado 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Regular Cab, single rear wheel", wheelbase: 141.5, track: 68.2 },
  { make: "Chevrolet", model: "Silverado 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Double Cab, Standard Box, single rear wheel", wheelbase: 149.4, track: 68.2 },
  { make: "Chevrolet", model: "Silverado 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Double Cab, Long Box, single rear wheel", wheelbase: 162.4, track: 68.2 },
  { make: "Chevrolet", model: "Silverado 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Standard Box, single rear wheel", wheelbase: 158.9, track: 68.2 },
  { make: "Chevrolet", model: "Silverado 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Standard Box, dual rear wheel", wheelbase: 158.9, track: 75.0, note: "DRW — rear track is much wider than front; verify front separately." },
  { make: "Chevrolet", model: "Silverado 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Long Box, single rear wheel", wheelbase: 172.0, track: 68.2 },
  { make: "Chevrolet", model: "Silverado 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Long Box, dual rear wheel", wheelbase: 172.0, track: 75.0, note: "DRW — rear track is much wider than front; verify front separately." },

  // GMC Sierra 2500HD / 3500HD (2020–present) — same platform as Silverado HD
  { make: "GMC", model: "Sierra 2500HD", yearStart: 2020, yearEnd: 2026, variant: "Regular Cab, single rear wheel", wheelbase: 141.5, track: 68.2 },
  { make: "GMC", model: "Sierra 2500HD", yearStart: 2020, yearEnd: 2026, variant: "Double Cab, Standard Box, single rear wheel", wheelbase: 149.4, track: 68.2 },
  { make: "GMC", model: "Sierra 2500HD", yearStart: 2020, yearEnd: 2026, variant: "Double Cab, Long Box, single rear wheel", wheelbase: 162.4, track: 68.2 },
  { make: "GMC", model: "Sierra 2500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Standard Box, single rear wheel", wheelbase: 158.9, track: 68.2 },
  { make: "GMC", model: "Sierra 2500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Long Box, single rear wheel", wheelbase: 172.0, track: 68.2 },
  { make: "GMC", model: "Sierra 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Regular Cab, single rear wheel", wheelbase: 141.5, track: 68.2 },
  { make: "GMC", model: "Sierra 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Double Cab, Standard Box, single rear wheel", wheelbase: 149.4, track: 68.2 },
  { make: "GMC", model: "Sierra 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Double Cab, Long Box, single rear wheel", wheelbase: 162.4, track: 68.2 },
  { make: "GMC", model: "Sierra 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Standard Box, single rear wheel", wheelbase: 158.9, track: 68.2 },
  { make: "GMC", model: "Sierra 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Standard Box, dual rear wheel", wheelbase: 158.9, track: 75.0, note: "DRW — rear track is much wider than front; verify front separately." },
  { make: "GMC", model: "Sierra 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Long Box, single rear wheel", wheelbase: 172.0, track: 68.2 },
  { make: "GMC", model: "Sierra 3500HD", yearStart: 2020, yearEnd: 2026, variant: "Crew Cab, Long Box, dual rear wheel", wheelbase: 172.0, track: 75.0, note: "DRW — rear track is much wider than front; verify front separately." },

  // Toyota Tacoma (2016–2023)
  { make: "Toyota", model: "Tacoma", yearStart: 2016, yearEnd: 2023, variant: "Double Cab, Short Bed", wheelbase: 127.4, track: 62.6 },
  { make: "Toyota", model: "Tacoma", yearStart: 2016, yearEnd: 2023, variant: "Double Cab, Long Bed", wheelbase: 140.6, track: 62.6 },

  // Toyota Tundra (2022–present)
  { make: "Toyota", model: "Tundra", yearStart: 2022, yearEnd: 2026, variant: "CrewMax, Short Bed", wheelbase: 145.7, track: 67.9 },
  { make: "Toyota", model: "Tundra", yearStart: 2022, yearEnd: 2026, variant: "Double Cab, Long Bed", wheelbase: 164.6, track: 67.9 },

  // Nissan Titan (2017–2024)
  { make: "Nissan", model: "Titan", yearStart: 2017, yearEnd: 2024, variant: "King Cab", wheelbase: 139.8, track: 68.0 },
  { make: "Nissan", model: "Titan", yearStart: 2017, yearEnd: 2024, variant: "Crew Cab", wheelbase: 139.8, track: 68.1 },

  // Nissan Titan XD (2016–2024)
  { make: "Nissan", model: "Titan XD", yearStart: 2016, yearEnd: 2024, variant: "Crew Cab", wheelbase: 151.6, track: 68.6 },

  // Nissan Frontier (2022–present)
  { make: "Nissan", model: "Frontier", yearStart: 2022, yearEnd: 2026, variant: "King Cab", wheelbase: 126.0, track: 61.8 },
  { make: "Nissan", model: "Frontier", yearStart: 2022, yearEnd: 2026, variant: "Crew Cab", wheelbase: 139.8, track: 61.8 },

  // ---------- Minivans ----------

  // Toyota Sienna (two generations — same model, different geometry by year)
  { make: "Toyota", model: "Sienna", yearStart: 2011, yearEnd: 2020, variant: null, wheelbase: 119.3, track: 66.7 },
  { make: "Toyota", model: "Sienna", yearStart: 2021, yearEnd: 2026, variant: null, wheelbase: 120.5, track: 68.0 },

  // Honda Odyssey
  { make: "Honda", model: "Odyssey", yearStart: 2018, yearEnd: 2026, variant: null, wheelbase: 118.1, track: 68.7 },

  // Chrysler Pacifica
  { make: "Chrysler", model: "Pacifica", yearStart: 2017, yearEnd: 2026, variant: null, wheelbase: 121.6, track: 68.6 },

  // Chrysler Voyager (budget version of Pacifica, shares platform)
  { make: "Chrysler", model: "Voyager", yearStart: 2020, yearEnd: 2026, variant: null, wheelbase: 121.6, track: 68.3 },

  // Kia Carnival
  { make: "Kia", model: "Carnival", yearStart: 2022, yearEnd: 2026, variant: null, wheelbase: 121.7, track: 68.5 },

  // Dodge Grand Caravan (final generation before discontinuation)
  { make: "Dodge", model: "Grand Caravan", yearStart: 2008, yearEnd: 2020, variant: null, wheelbase: 121.2, track: 65.2 },

  // ---------- SUVs & crossovers ----------

  // Toyota 4Runner
  { make: "Toyota", model: "4Runner", yearStart: 2010, yearEnd: 2024, variant: "SR5/TRD Off-Road/Limited (most trims)", wheelbase: 109.8, track: 63.2 },
  { make: "Toyota", model: "4Runner", yearStart: 2010, yearEnd: 2024, variant: "TRD Pro (wider stance)", wheelbase: 109.8, track: 64.1 },
  { make: "Toyota", model: "4Runner", yearStart: 2025, yearEnd: 2026, variant: "TRD Sport/Limited/Platinum (incl. i-FORCE MAX)", wheelbase: 112.2, track: 65.7 },
  { make: "Toyota", model: "4Runner", yearStart: 2025, yearEnd: 2026, variant: "TRD Off-Road/TRD Off-Road Premium (incl. i-FORCE MAX)", wheelbase: 112.2, track: 66.1 },

  // Toyota RAV4
  { make: "Toyota", model: "RAV4", yearStart: 2016, yearEnd: 2018, variant: null, wheelbase: 104.7, track: 61.4 },
  { make: "Toyota", model: "RAV4", yearStart: 2019, yearEnd: 2024, variant: "17\"/18\" wheel trims", wheelbase: 105.9, track: 63.7 },
  { make: "Toyota", model: "RAV4", yearStart: 2019, yearEnd: 2024, variant: "19\" wheel trims (Adventure/TRD Off-Road)", wheelbase: 105.9, track: 63.3 },

  // Toyota Highlander
  { make: "Toyota", model: "Highlander", yearStart: 2014, yearEnd: 2019, variant: null, wheelbase: 109.8, track: 64.2 },
  { make: "Toyota", model: "Highlander", yearStart: 2020, yearEnd: 2025, variant: null, wheelbase: 112.2, track: 65.4 },

  // Subaru Outback
  { make: "Subaru", model: "Outback", yearStart: 2015, yearEnd: 2019, variant: null, wheelbase: 108.1, track: 62.2 },
  { make: "Subaru", model: "Outback", yearStart: 2020, yearEnd: 2025, variant: null, wheelbase: 108.1, track: 62.8 },
  { make: "Subaru", model: "Outback", yearStart: 2022, yearEnd: 2025, variant: "Wilderness", wheelbase: 108.1, track: 63.0 },
  { make: "Subaru", model: "Outback", yearStart: 2026, yearEnd: 2026, variant: null, wheelbase: 108.1, track: 63.4 },
  { make: "Subaru", model: "Outback", yearStart: 2026, yearEnd: 2026, variant: "Wilderness", wheelbase: 108.1, track: 63.0 },

  // Subaru Forester
  { make: "Subaru", model: "Forester", yearStart: 2014, yearEnd: 2018, variant: null, wheelbase: 103.9, track: 61.1 },
  { make: "Subaru", model: "Forester", yearStart: 2019, yearEnd: 2025, variant: null, wheelbase: 105.1, track: 61.8 },
  { make: "Subaru", model: "Forester", yearStart: 2022, yearEnd: 2025, variant: "Wilderness", wheelbase: 104.9, track: 61.4 },

  // Subaru Crosstrek
  { make: "Subaru", model: "Crosstrek", yearStart: 2018, yearEnd: 2023, variant: null, wheelbase: 104.9, track: 61.2 },
  { make: "Subaru", model: "Crosstrek", yearStart: 2024, yearEnd: 2026, variant: "Base/Premium/Sport/Limited", wheelbase: 105.1, track: 61.2 },
  { make: "Subaru", model: "Crosstrek", yearStart: 2024, yearEnd: 2026, variant: "Wilderness", wheelbase: 104.9, track: 60.8 },

  // Subaru Ascent
  { make: "Subaru", model: "Ascent", yearStart: 2019, yearEnd: 2026, variant: null, wheelbase: 113.8, track: 64.2 },

  // Honda CR-V
  { make: "Honda", model: "CR-V", yearStart: 2017, yearEnd: 2022, variant: "2WD", wheelbase: 104.8, track: 63.7 },
  { make: "Honda", model: "CR-V", yearStart: 2017, yearEnd: 2022, variant: "AWD", wheelbase: 104.7, track: 63.5 },
  { make: "Honda", model: "CR-V", yearStart: 2023, yearEnd: 2026, variant: "2WD", wheelbase: 106.3, track: 64.1 },
  { make: "Honda", model: "CR-V", yearStart: 2023, yearEnd: 2026, variant: "AWD", wheelbase: 106.3, track: 63.9 },

  // Honda Pilot
  { make: "Honda", model: "Pilot", yearStart: 2016, yearEnd: 2022, variant: "all trims (FWD/AWD)", wheelbase: 111.0, track: 66.3 },
  { make: "Honda", model: "Pilot", yearStart: 2023, yearEnd: 2026, variant: "LX/Sport/EX-L/Touring/Elite", wheelbase: 113.8, track: 67.8 },
  { make: "Honda", model: "Pilot", yearStart: 2023, yearEnd: 2026, variant: "TrailSport (AWD)", wheelbase: 113.8, track: 67.4 },

  // Jeep Grand Cherokee
  { make: "Jeep", model: "Grand Cherokee", yearStart: 2011, yearEnd: 2021, variant: "Laredo/Limited/Overland/Summit (non-SRT)", wheelbase: 114.8, track: 64.1 },
  { make: "Jeep", model: "Grand Cherokee", yearStart: 2011, yearEnd: 2021, variant: "SRT/Trackhawk", wheelbase: 114.7, track: 64.8 },
  { make: "Jeep", model: "Grand Cherokee", yearStart: 2022, yearEnd: 2026, variant: "4x2/4x4, non-SRT", wheelbase: 116.7, track: 65.4 },

  // Jeep Cherokee
  { make: "Jeep", model: "Cherokee", yearStart: 2014, yearEnd: 2018, variant: "standard 2WD/4WD", wheelbase: 106.3, track: 61.9 },
  { make: "Jeep", model: "Cherokee", yearStart: 2014, yearEnd: 2018, variant: "Trailhawk", wheelbase: 107.0, track: 63.5 },
  { make: "Jeep", model: "Cherokee", yearStart: 2019, yearEnd: 2023, variant: "standard 2WD/4WD", wheelbase: 106.5, track: 63.1 },
  { make: "Jeep", model: "Cherokee", yearStart: 2019, yearEnd: 2023, variant: "Trailhawk", wheelbase: 107.1, track: 63.5 },

  // Jeep Wrangler 2-door
  { make: "Jeep", model: "Wrangler", yearStart: 2007, yearEnd: 2017, variant: "2-door", wheelbase: 95.4, track: 61.9 },
  { make: "Jeep", model: "Wrangler", yearStart: 2018, yearEnd: 2026, variant: "2-door, Sport/Sahara", wheelbase: 96.8, track: 62.9 },
  { make: "Jeep", model: "Wrangler", yearStart: 2018, yearEnd: 2026, variant: "2-door, Rubicon/Rubicon 392", wheelbase: 96.8, track: 64.4 },
  { make: "Jeep", model: "Wrangler", yearStart: 2018, yearEnd: 2026, variant: "2-door, Xtreme Recon Package", wheelbase: 96.8, track: 66.9 },

  // Jeep Wrangler Unlimited (4-door)
  { make: "Jeep", model: "Wrangler Unlimited", yearStart: 2007, yearEnd: 2017, variant: "4-door", wheelbase: 116.0, track: 61.9 },
  { make: "Jeep", model: "Wrangler Unlimited", yearStart: 2018, yearEnd: 2026, variant: "4-door, Sport/Sahara", wheelbase: 118.4, track: 62.9 },
  { make: "Jeep", model: "Wrangler Unlimited", yearStart: 2018, yearEnd: 2026, variant: "4-door, Rubicon/Rubicon 392", wheelbase: 118.4, track: 64.4 },
  { make: "Jeep", model: "Wrangler Unlimited", yearStart: 2018, yearEnd: 2026, variant: "4-door, Xtreme Recon Package", wheelbase: 118.4, track: 66.9 },

  // Jeep Gladiator (pickup, built on Wrangler platform)
  { make: "Jeep", model: "Gladiator", yearStart: 2020, yearEnd: 2026, variant: "Pickup, Sport/Overland", wheelbase: 137.3, track: 62.9 },
  { make: "Jeep", model: "Gladiator", yearStart: 2020, yearEnd: 2026, variant: "Pickup, Sport Max Tow/Rubicon", wheelbase: 137.3, track: 64.4 },
  { make: "Jeep", model: "Gladiator", yearStart: 2020, yearEnd: 2026, variant: "Pickup, Mojave", wheelbase: 137.3, track: 65.0 },

  // Ford Bronco 2-door
  { make: "Ford", model: "Bronco", yearStart: 2021, yearEnd: 2026, variant: "2-door, Base/Big Bend/Black Diamond/Outer Banks/Badlands", wheelbase: 100.4, track: 65.0 },
  { make: "Ford", model: "Bronco", yearStart: 2021, yearEnd: 2026, variant: "2-door, Wildtrak/Sasquatch Package", wheelbase: 100.4, track: 66.9 },

  // Ford Bronco 4-door
  { make: "Ford", model: "Bronco", yearStart: 2021, yearEnd: 2026, variant: "4-door, Base/Big Bend/Black Diamond/Outer Banks/Badlands", wheelbase: 116.1, track: 65.0 },
  { make: "Ford", model: "Bronco", yearStart: 2021, yearEnd: 2026, variant: "4-door, Wildtrak/Sasquatch Package", wheelbase: 116.1, track: 66.9 },

  // Ford Explorer
  { make: "Ford", model: "Explorer", yearStart: 2011, yearEnd: 2019, variant: null, wheelbase: 112.6, track: 67.0 },
  { make: "Ford", model: "Explorer", yearStart: 2020, yearEnd: 2026, variant: null, wheelbase: 119.1, track: 66.9 },

  // Ford Expedition
  { make: "Ford", model: "Expedition", yearStart: 2018, yearEnd: 2024, variant: "standard", wheelbase: 122.5, track: 67.2 },
  { make: "Ford", model: "Expedition", yearStart: 2018, yearEnd: 2024, variant: "MAX", wheelbase: 131.6, track: 67.2 },
  { make: "Ford", model: "Expedition", yearStart: 2025, yearEnd: 2026, variant: "standard", wheelbase: 122.5, track: 67.8 },
  { make: "Ford", model: "Expedition", yearStart: 2025, yearEnd: 2026, variant: "MAX", wheelbase: 131.5, track: 67.8 },

  // Chevrolet Tahoe
  { make: "Chevrolet", model: "Tahoe", yearStart: 2015, yearEnd: 2020, variant: null, wheelbase: 116.0, track: 68.7 },
  { make: "Chevrolet", model: "Tahoe", yearStart: 2021, yearEnd: 2026, variant: null, wheelbase: 120.9, track: 68.7 },

  // Chevrolet Suburban
  { make: "Chevrolet", model: "Suburban", yearStart: 2015, yearEnd: 2020, variant: null, wheelbase: 130.0, track: 68.7 },
  { make: "Chevrolet", model: "Suburban", yearStart: 2021, yearEnd: 2026, variant: null, wheelbase: 134.1, track: 68.7 },

  // Chevrolet Traverse
  { make: "Chevrolet", model: "Traverse", yearStart: 2018, yearEnd: 2023, variant: null, wheelbase: 121.0, track: 67.0 },
  { make: "Chevrolet", model: "Traverse", yearStart: 2024, yearEnd: 2026, variant: null, wheelbase: 121.0, track: 67.05 },

  // GMC Yukon
  { make: "GMC", model: "Yukon", yearStart: 2015, yearEnd: 2020, variant: "standard", wheelbase: 116.0, track: 68.7 },
  { make: "GMC", model: "Yukon", yearStart: 2021, yearEnd: 2026, variant: "standard", wheelbase: 120.9, track: 68.3 },
  { make: "GMC", model: "Yukon", yearStart: 2021, yearEnd: 2026, variant: "XL", wheelbase: 134.1, track: 68.7 },

  // Kia Telluride
  { make: "Kia", model: "Telluride", yearStart: 2020, yearEnd: 2026, variant: null, wheelbase: 114.2, track: 67.6 },

  // Kia Sorento
  { make: "Kia", model: "Sorento", yearStart: 2016, yearEnd: 2020, variant: null, wheelbase: 109.4, track: 64.5 },
  { make: "Kia", model: "Sorento", yearStart: 2021, yearEnd: 2026, variant: null, wheelbase: 110.8, track: 65.4 },

  // Hyundai Santa Fe
  { make: "Hyundai", model: "Santa Fe", yearStart: 2019, yearEnd: 2023, variant: null, wheelbase: 108.9, track: 65.2 },
  { make: "Hyundai", model: "Santa Fe", yearStart: 2024, yearEnd: 2026, variant: null, wheelbase: 110.8, track: 65.1 },

  // Hyundai Palisade
  { make: "Hyundai", model: "Palisade", yearStart: 2020, yearEnd: 2026, variant: null, wheelbase: 114.2, track: 67.6 },

  // Nissan Xterra
  { make: "Nissan", model: "Xterra", yearStart: 2005, yearEnd: 2015, variant: null, wheelbase: 106.3, track: 61.8 },

  // Nissan Pathfinder
  { make: "Nissan", model: "Pathfinder", yearStart: 2013, yearEnd: 2020, variant: "R52", wheelbase: 114.2, track: 65.7 },
  { make: "Nissan", model: "Pathfinder", yearStart: 2022, yearEnd: 2026, variant: "R53", wheelbase: 114.2, track: 66.9 },

  // Dodge Durango
  { make: "Dodge", model: "Durango", yearStart: 2011, yearEnd: 2026, variant: "SXT/GT/R-T/Citadel", wheelbase: 119.8, track: 64.1 },
  { make: "Dodge", model: "Durango", yearStart: 2011, yearEnd: 2026, variant: "SRT 392/SRT Hellcat", wheelbase: 119.8, track: 64.8 }
];
