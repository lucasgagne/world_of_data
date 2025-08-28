// List of plot filenames in "plots/economics/"
const plotFiles = [
    "USA_gdp.png",
    "CHN_gdp.png",
    "IND_gdp.png",
    "JPN_gdp.png",
    "DEU_gdp.png",
    "GBR_gdp.png",
    "FRA_gdp.png",
    "ITA_gdp.png",
    "BRA_gdp.png",
    "CAN_gdp.png",
    "RUS_gdp.png",
    "MEX_gdp.png"
  ];
  const container = document.getElementById('plots-container');
  
  plotFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `plots/economics/${file}`;
    img.alt = file;
    img.style.width = "300px";
    img.style.margin = "10px";
    container.appendChild(img);
  });