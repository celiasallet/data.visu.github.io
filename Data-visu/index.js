const table = document.querySelector('table');
const rows = table.querySelectorAll('tbody tr');
const data = [];


const dateCells = rows[0].querySelectorAll('th, td');
const dates = Array.from(dateCells).slice(1).map(cell => cell.textContent);


rows.forEach((row, index) => {
  if (index === 0) {
    return;
  }
  
  const cells = row.querySelectorAll('td');
  
  if (cells.length > 1) {
    const countryName = cells[0].textContent;
    const values = Array.from(cells).slice(1).map(cell => parseFloat(cell.textContent.replace(',', '.')));
    data.push({ country: countryName, values });
  } else {
    console.error('La ligne ${index} ne contient pas suffisamment de cellules :, cells');
  }
});


console.log('Dates:', dates);
console.log('Data:', data); 

const labels = ['2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012'];
const colors = [
  '#00FF00', '#FF5733', '#FFC300', '#C70039', '#900C3F', '#581845',
  '#7D3C98', '#2874A6', '#1B4F72', '#148F77', '#45B39D', '#F4D03F',
  '#DC7633', '#6E2C00', '#17202A', '#566573', '#F8C471', '#AED6F1',
  '#5499C7', '#3498DB', '#1A5276', '#21618C', '#D4AC0D', '#B7950B'
];


const datasets = data.map((item, index) => ({
  label: item.country,
  data: item.values,
  borderColor: colors[index % colors.length],
  pointBackgroundColor: colors[index % colors.length],
  borderWidth: 0, 
  fill: false
}));

const ctx = document.getElementById('myChart').getContext('2d');
const myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: labels,
    datasets: datasets
  },
  options: {
    responsive: true,
    scales: {
      x: { 
        title: { 
          display: true, 
          text: 'Année' 
        } 
      },
      y: { 
        title: { 
          display: true, 
          text: 'Valeur' 
        } 
      }
    },
    plugins: {
      legend: {
        position: 'bottom', 
        labels: {
          usePointStyle: true,
        }
      },
    }
  }
});





// Extraire les données de la table HTML
const table2 = document.querySelector('#table2');
const rows2 = table2.querySelectorAll('tbody tr');
const countries = [];
const values2007_09 = [];
const values2010_12 = [];

rows2.forEach(row => {
  const cells = row.querySelectorAll('td');
  const country = cells[0].textContent;
  const value2007_09 = parseFloat(cells[1].textContent);
  const value2010_12 = parseFloat(cells[2].textContent);

  countries.push(country);
  values2007_09.push(value2007_09);
  values2010_12.push(value2010_12);
});

// Configuration des couleurs pour le graphique


// Configuration du graphique en anneau
const ctxx = document.getElementById('myChart2').getContext('2d');
const myChart2 = new Chart(ctxx, {
  type: 'doughnut',
  data: {
    labels: countries,
    datasets: [{
      label: '2007–09',
      data: values2007_09,
      backgroundColor: colors
    }, {
      label: '2010–12',
      data: values2010_12,
      borderColor: colors
    }]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          usePointStyle: true
        }
      },
      tooltip: {
        mode: 'index',
        intersect: false
      }
    }
  }
});

