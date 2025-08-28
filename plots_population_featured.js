// // plots_population_featured.js

// // List of population plot files
// const populationPlots = [
//   "IN_population_2020.png",
//   "CN_population_2020.png",
//   "US_population_2020.png",
//   "ID_population_2020.png",
//   "PK_population_2020.png",
//   "NG_population_2020.png",
//   "BR_population_2020.png",
//   "BD_population_2020.png",
//   "RU_population_2020.png",
//   "ET_population_2020.png",
//   "MX_population_2020.png",
//   "JP_population_2020.png"
// ];

// // Get references to the select and image elements
// const featuredSelect = document.getElementById("featured-select");
// const featuredImg = document.getElementById("featured-plot-img");

// // Populate dropdown dynamically
// populationPlots.forEach(file => {
//   const option = document.createElement("option");
//   option.value = file;
//   option.textContent = file.replace("_population_2020.png", "").replace("_", " "); // nicer label
//   featuredSelect.appendChild(option);
// });

// // Set initial featured plot
// featuredImg.src = `plots/population/${populationPlots[0]}`;

// // Update featured plot when dropdown changes
// featuredSelect.addEventListener("change", (e) => {
//   featuredImg.src = `plots/population/${e.target.value}`;
// });

const populationPlots = [
  {
    "folder": "plots/population",
    "file": "NG_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "US_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "JP_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "PK_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "ET_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "ID_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "RU_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "MX_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "CN_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "BD_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "IN_population_2020.png"
  },
  {
    "folder": "plots/population",
    "file": "BR_population_2020.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "MX_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "IN_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "NG_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "JP_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "BR_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "ID_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "ET_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "RU_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "US_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "PK_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "BD_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "WD_population.png"
  },
  {
    "folder": "plots/population_growth",
    "file": "CN_population.png"
  },
  {
    "folder": "plots/median_age",
    "file": "RU_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "US_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "BD_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "WD_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "CN_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "PK_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "JP_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "MX_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "IN_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "NG_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "BR_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "ID_median_age.png"
  },
  {
    "folder": "plots/median_age",
    "file": "ET_median_age.png"
  }
]

const featuredSelect = document.getElementById("featured-select");
const featuredImg = document.getElementById("featured-plot-img");

// Populate dropdown dynamically
populationPlots.forEach(plot => {
  const option = document.createElement("option");

  // Use full relative path for the value
  option.value = `${plot.folder}/${plot.file}`;

  // Nice label: remove file extension and replace underscores
  option.textContent = plot.file.replace(".png", "").replace(/_/g, " ");

  featuredSelect.appendChild(option);
});

// Set initial featured plot
featuredImg.src = `${populationPlots[0].folder}/${populationPlots[0].file}`;

// Update featured plot when dropdown changes
featuredSelect.addEventListener("change", (e) => {
  featuredImg.src = e.target.value;
});