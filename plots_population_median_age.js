const populationPlotFiles = [
    "BD_population.png",
    "BR_population.png",
    "CN_population.png",
    "ET_population.png",
    "ID_population.png",
    "IN_population.png",
    "JP_population.png",
    "MX_population.png",
    "NG_population.png",
    "PK_population.png",
    "RU_population.png",
    "US_population.png",
    //"WD_population.png"
  ];
  const containerMedian = document.getElementById('plots-container-growth');

  populationPlotFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `plots/median_age/${file}`;
    img.alt = file;
    img.style.width = "300px";
    img.style.margin = "10px";
    containerMedian.appendChild(img);
  });

