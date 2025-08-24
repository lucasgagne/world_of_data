// List of plot filenames (match the files you saved in the "plots/" folder)
const plotFiles = [
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

// Select container
const container = document.getElementById('plots-container');

// Loop through plots and create <img> elements dynamically
plotFiles.forEach(file => {
  const img = document.createElement('img');
  img.src = `plots/${file}`;
  img.alt = file;  // accessibility
  img.style.width = "300px";  // adjust size as needed
  img.style.margin = "10px";  // spacing
  container.appendChild(img);
});