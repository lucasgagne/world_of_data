// Mock backend output: array of plot contents (can be strings, HTML, or Plotly charts)
const plot_list = [
    "Plot for France",
    "Plot for Germany",
    "Plot for Italy",
    "Plot for Spain",
    "Plot for Netherlands",
    "fuck ass"
  ];
  
  // Select the container
  const container = document.getElementById('plots-container');
  
  // Loop through plots and add them dynamically
  plot_list.forEach(plotContent => {
    const article = document.createElement('article');
    article.textContent = plotContent;  // Replace with actual plot rendering if needed
    container.appendChild(article);
  });