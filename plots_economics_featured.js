// // plots_economics_featured.js

// // List of economics plot files
// const economicsPlots = [
//     "USA_gdp.png",
//     "CHN_gdp.png",
//     "IND_gdp.png",
//     "JPN_gdp.png",
//     "DEU_gdp.png",
//     "GBR_gdp.png",
//     "FRA_gdp.png",
//     "ITA_gdp.png",
//     "BRA_gdp.png",
//     "CAN_gdp.png",
//     "RUS_gdp.png",
//     "MEX_gdp.png"
// ];

// // Get references to the select and image elements
// const featuredSelect = document.getElementById("featured-select");
// const featuredImg = document.getElementById("featured-plot-img");

// // Populate dropdown dynamically
// economicsPlots.forEach(file => {
//   const option = document.createElement("option");
//   option.value = file;
//   option.textContent = file.replace("_economics_2020.png", "").replace("_", " "); // nicer label
//   featuredSelect.appendChild(option);
// });

// // Set initial featured plot
// featuredImg.src = `plots/economics/${economicsPlots[0]}`;

// // Update featured plot when dropdown changes
// featuredSelect.addEventListener("change", (e) => {
//   featuredImg.src = `plots/economics/${e.target.value}`;
// });


// plots_economics_featured.js

// List of featured economics plots across categories
const economicsPlots = [
  {
    "folder": "plots/economics",
    "file": "WLD_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "MEX_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "JPN_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "USA_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "DEU_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "FRA_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "GBR_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "CAN_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "IND_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "ITA_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "BRA_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "CHN_gdp.png"
  },
  {
    "folder": "plots/economics",
    "file": "RUS_gdp.png"
  },
  {
    "folder": "plots/inflation",
    "file": "WLD_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "BRA_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "CAN_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "MEX_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "DEU_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "CHN_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "RUS_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "JPN_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "USA_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "FRA_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "IND_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "GBR_inflation.png"
  },
  {
    "folder": "plots/inflation",
    "file": "ITA_inflation.png"
  },
  {
    "folder": "plots/unemployment",
    "file": "unemployment.png"
  },
  {
    "folder": "plots/unemployment",
    "file": "unemployment_europe.png"
  },
  {
    "folder": "plots/unemployment",
    "file": "unemployment_asia.png"
  }
]

// Get references to the select and image elements
const featuredSelect = document.getElementById("featured-select");
const featuredImg = document.getElementById("featured-plot-img");

// Populate dropdown dynamically
economicsPlots.forEach(plot => {
  const option = document.createElement("option");
  option.value = `${plot.folder}/${plot.file}`;
  option.textContent = plot.file.replace(".png", "").replace(/_/g, " "); // nicer label
  featuredSelect.appendChild(option);
});

// Set initial featured plot
featuredImg.src = economicsPlots[0].folder + "/" + economicsPlots[0].file;

// Update featured plot when dropdown changes
featuredSelect.addEventListener("change", (e) => {
  featuredImg.src = e.target.value;
});