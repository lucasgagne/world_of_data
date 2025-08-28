// List of plot filenames in "plots/land/"
const areaFiles = [
    "area_circles.png",
    "area_squares.png",

  ];
  const containerArea = document.getElementById('area-plots-container');
  
  areaFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `plots/land/${file}`;
    img.alt = file;
    img.style.width = "700px";
    img.style.margin = "10px";
    containerArea.appendChild(img);
  });