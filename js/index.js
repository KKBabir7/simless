var densityCanvas = document.getElementById("densityChart");
Chart.defaults.global.defaultFontSize = 14;

var rowData = {
  label: 'Add Subscription',
  data: [1427, 1243, 514, 3933, 1326, 687, 1271, 1638],
  backgroundColor: 'rgba(0,212, 255, 0.5)',
  borderColor: 'rgba(0, 99, 132, 1)',
  yAxisID: "y-axis"
};
 
var columnData = {
  label: 'Minus Subscription',
  data: [1000, 1200,1300, 1400, 500, 220, 1260, 1500],
  backgroundColor: 'rgba(114,85,201,0.5) ',
  borderColor: 'rgba(99, 132, 0, 1)',
  yAxisID: "y-axis"
};
 
var planetData = {
  labels: ["January","February","March","April","May","June","July",
  "August","September","October","November","December"],
  datasets: [rowData, columnData]
};
 
var chartOptions = {
  scales: {
    xAxes: [{
      barPercentage: 1,
      categoryPercentage: 0.6
    }],
    yAxes: [{
      id: "y-axis"
    }, {
      id: "y-axis"
    }]
  }
};
 
var barChart = new Chart(densityCanvas, {
  type: 'bar',
  data: planetData,
  options: chartOptions
});









let data = [{
    label: 'Available',
    backgroundColor: 'rgba(0,212, 255, 0.5)',
    data: [4000, 2500, 2500],
    barThickness: '10'
  }, {
    label: 'Budget',
    backgroundColor: 'rgba(114,85,201,0.5)',
    data: [2000, 6500, 1000],
    barThickness: '10'
  }
];

let myChart = new Chart(document.getElementById('horzantalChart'), {
  type: 'horizontalBar',
  data: {
    labels: ["Acme", "Beta", "Code"],
    datasets: data
  },
  options: {
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
});
















function openNavProductCatalog() {
  document.getElementById("productCatalog").style.left = "0px";
}

function closeNavProductCatalog() {
  document.getElementById("productCatalog").style.left = "-300px";
}


function openNavproductDetails() {
  document.getElementById("productDetails").style.right = "0px";
}

function closeNavproductDetails() {
  document.getElementById("productDetails").style.right = "-300px";
}


function openNavInventory() {
  document.getElementById("productInventory").style.display = "block";
}

function closeNavInventory() {
  document.getElementById("productInventory").style.display = "none";
}


function openNavAddaccount() {
  document.getElementById("profilecardAddAccount").style.display = "block";
}

function closeNavAddaccount() {
  document.getElementById("profilecardAddAccount").style.display = "none";
}



function openNavproductEsim() {
  document.getElementById("productDetailseSIM").style.right = "0px";
}

function closeNavproductEsim() {
  document.getElementById("productDetailseSIM").style.right = "-300px";
}
