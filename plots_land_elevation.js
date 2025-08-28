// List of plot filenames in "plots/land/"
const elevationFiles = [
    "tallest_mountains.png",
    "avg_elevation.png",

  ];
  const containerElevation = document.getElementById('elevation-plots-container');
  
  elevationFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `plots/land/${file}`;
    img.alt = file;
    img.style.width = "700px";
    img.style.margin = "10px";
    containerElevation.appendChild(img);
  });