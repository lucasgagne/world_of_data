// plots_economics_featured.js

// List of economics plot files
const economicsPlots = [
    "USA_gdp.png",
    "CHN_gdp.png",
    "IND_gdp.png",
    "JPN_gdp.png",
    "DEU_gdp.png",
    "GBR_gdp.png",
    "FRA_gdp.png",
    "ITA_gdp.png",
    "BRA_gdp.png",
    "CAN_gdp.png",
    "RUS_gdp.png",
    "MEX_gdp.png"
];

// Get references to the select and image elements
const featuredSelect = document.getElementById("featured-select");
const featuredImg = document.getElementById("featured-plot-img");

// Populate dropdown dynamically
economicsPlots.forEach(file => {
  const option = document.createElement("option");
  option.value = file;
  option.textContent = file.replace("_economics_2020.png", "").replace("_", " "); // nicer label
  featuredSelect.appendChild(option);
});

// Set initial featured plot
featuredImg.src = `plots/economics/${economicsPlots[0]}`;

// Update featured plot when dropdown changes
featuredSelect.addEventListener("change", (e) => {
  featuredImg.src = `plots/economics/${e.target.value}`;
});