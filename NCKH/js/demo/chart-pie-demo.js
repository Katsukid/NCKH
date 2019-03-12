// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Singed", "Check", "Pending"], // Nhan cua tung phan
    datasets: [{
      data: [55, 30, 15], // Gia tri
      backgroundColor: ['#1cc88a', '#36b9cc', '#f6c23e'], // Mau nen hien thi
      hoverBackgroundColor: ['#17a673', '#2c9faf', '#eca820'], // Mau nen khi tro vao
      hoverBorderColor: "rgba(234, 236, 244, 1)", // Mau khung khi tro vao
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: { // Hiển thị trỏ vào
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: { // Ky hieu tung phan
      display: false
    },
    cutoutPercentage: 40, // phan loi bi cat bot di
  },
});

// Pie Chart Example
var ctx = document.getElementById("ownerPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["Owner", "Other"], // Nhan cua tung phan
    datasets: [{
      data: [80,12], // Gia tri
      backgroundColor: ['#858796', '#4e73df',], // Mau nen hien thi
      hoverBackgroundColor: ['#707070', '#3e58cd',], // Mau nen khi tro vao
      hoverBorderColor: "rgba(234, 236, 244, 1)", // Mau khung khi tro vao
    }],
  },
  options: {
    maintainAspectRatio: false,
    tooltips: { // Hiển thị trỏ vào
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: { // Ky hieu tung phan
      display: false
    },
    cutoutPercentage: 40, // phan loi bi cat bot di
  },
});