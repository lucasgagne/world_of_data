
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

  const container = document.getElementById('plots-container');

  plotFiles.forEach(file => {
    const img = document.createElement('img');
    img.src = `plots/population/${file}`;
    img.alt = file;
    img.style.width = "300px";
    img.style.margin = "10px";
    container.appendChild(img);
  });

