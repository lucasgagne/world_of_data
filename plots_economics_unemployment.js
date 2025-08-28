// List of plot filenames in "plots/economics/"
const unemploymentFiles = [
    "unemployment.png",
    "unemployment_asia.png",
    "unemployment_europe.png"
  ];
  const containerUnemployment = document.getElementById('unemployment-plots-container');
  
  unemploymentFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `plots/unemployment/${file}`;
    img.alt = file;
    img.style.width = "300px";
    img.style.margin = "10px";
    containerUnemployment.appendChild(img);
  });