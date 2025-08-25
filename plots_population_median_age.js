const medianPlotFiles = [
    "BD_median_age.png",
    "BR_median_age.png",
    "CN_median_age.png",
    "ET_median_age.png",
    "ID_median_age.png",
    "IN_median_age.png",
    "JP_median_age.png",
    "MX_median_age.png",
    "NG_median_age.png",
    "PK_median_age.png",
    "RU_median_age.png",
    "US_median_age.png",
    //"WD_population.png"
  ];
  const containerMedian = document.getElementById('plots-container-median-age');

medianPlotFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `plots/median_age/${file}`;
    img.alt = file;
    img.style.width = "300px";
    img.style.margin = "10px";
    containerMedian.appendChild(img);
  });

