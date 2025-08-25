// plots_population_featured.js

// List of population plot files
const populationPlots = [
  "IN_population_2020.png",
  "CN_population_2020.png",
  "US_population_2020.png",
  "ID_population_2020.png",
  "PK_population_2020.png",
  "NG_population_2020.png",
  "BR_population_2020.png",
  "BD_population_2020.png",
  "RU_population_2020.png",
  "ET_population_2020.png",
  "MX_population_2020.png",
  "JP_population_2020.png"
];

// Get references to the select and image elements
const featuredSelect = document.getElementById("featured-select");
const featuredImg = document.getElementById("featured-plot-img");

// Populate dropdown dynamically
populationPlots.forEach(file => {
  const option = document.createElement("option");
  option.value = file;
  option.textContent = file.replace("_population_2020.png", "").replace("_", " "); // nicer label
  featuredSelect.appendChild(option);
});

// Set initial featured plot
featuredImg.src = `plots/population/${populationPlots[0]}`;

// Update featured plot when dropdown changes
featuredSelect.addEventListener("change", (e) => {
  featuredImg.src = `plots/population/${e.target.value}`;
});