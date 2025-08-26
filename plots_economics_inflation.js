// List of plot filenames in "plots/economics/"
const InflationPlotFiles = [
    "USA_Inflation.png",
    "CHN_Inflation.png",
    "IND_Inflation.png",
    "JPN_Inflation.png",
    "DEU_Inflation.png",
    "GBR_Inflation.png",
    "FRA_Inflation.png",
    "ITA_Inflation.png",
    "BRA_Inflation.png",
    "CAN_Inflation.png",
    "RUS_Inflation.png",
    "MEX_Inflation.png"
  ];
  const containerInflation = document.getElementById('inflation-plots-container');
  
  InflationPlotFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `plots/Inflation/${file}`;
    img.alt = file;
    img.style.width = "300px";
    img.style.margin = "10px";
    containerInflation.appendChild(img);
  });