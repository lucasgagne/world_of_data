// // plots_land_featured.js

// // List of land plot files
// const landPlots = [
//     "area_circles.png",
//     "area_squares.png",
//     "avg_elevation.png",
//     "tallest_mountains.png",

// ];

// // Get references to the select and image elements
// const featuredSelect = document.getElementById("featured-select");
// const featuredImg = document.getElementById("featured-plot-img");

// // Populate dropdown dynamically
// landPlots.forEach(file => {
//   const option = document.createElement("option");
//   option.value = file;
//   option.textContent = file.replace("_land_2020.png", "").replace("_", " "); // nicer label
//   featuredSelect.appendChild(option);
// });

// // Set initial featured plot
// featuredImg.src = `plots/land/${landPlots[0]}`;

// // Update featured plot when dropdown changes
// featuredSelect.addEventListener("change", (e) => {
//   featuredImg.src = `plots/land/${e.target.value}`;
// });



// plots_land_featured.js

// List of land plot files
const landPlots = [
  { folder: "plots/land", file: "area_circles.png" },
  { folder: "plots/land", file: "area_squares.png" },
  { folder: "plots/land", file: "avg_elevation.png" },
  { folder: "plots/land", file: "tallest_mountains.png" }
];

// Get references to the select and image elements
const featuredSelect = document.getElementById("featured-select");
const featuredImg = document.getElementById("featured-plot-img");

// Populate dropdown dynamically
landPlots.forEach(plot => {
  const option = document.createElement("option");

  // Full relative path for value
  option.value = `${plot.folder}/${plot.file}`;

  // Nice label: remove file extension and replace underscores
  option.textContent = plot.file.replace(".png", "").replace(/_/g, " ");

  featuredSelect.appendChild(option);
});

// Set initial featured plot
featuredImg.src = `${landPlots[0].folder}/${landPlots[0].file}`;

// Update featured plot when dropdown changes
featuredSelect.addEventListener("change", (e) => {
  featuredImg.src = e.target.value;
});