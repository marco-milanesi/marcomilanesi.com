var cBusiness = document.getElementById("chart-business-skills");
var cPersonal = document.getElementById("chart-personal-skills");
var cLeadership = document.getElementById("chart-leadership-skills");
var cOfficeTools = document.getElementById("chart-officetools-skills");
var cCapabilities = document.getElementById("chart-capabilities-skills");
var cSkills = document.getElementById("chart-skills-skills");
var cDevStacks = document.getElementById("chart-devstacks-skills");
var cFETech = document.getElementById("chart-fetech-skills");
var cBETech = document.getElementById("chart-betech-skills");
var cOTech = document.getElementById("chart-otech-skills");
var cDevTools = document.getElementById("chart-devtools-skills");

Chart.defaults.global.animation.duration = 2000;
Chart.defaults.global.animation.easing = 'easeOutExpo';
Chart.defaults.global.legend.display = false;
Chart.defaults.global.startAngle = 36;
Chart.defaults.global.tooltips.backgroundColor = 'rgba(204, 204, 204, 0.9)';
Chart.defaults.global.tooltips.titleFontColor = 'rgba(255,255,255, 0.3)';
Chart.defaults.global.tooltips.titleFontFamily = "'Lato', sans-serif";
Chart.defaults.global.tooltips.titleFontSize = 16;
Chart.defaults.global.tooltips.titleSpacing = 1;
Chart.defaults.global.tooltips.titleMarginBottom = 10;
Chart.defaults.global.tooltips.bodyFontColor = 'rgba(255,255,255, 0.3)';
Chart.defaults.global.tooltips.bodyFontFamily = "'Lato', sans-serif";
Chart.defaults.global.tooltips.bodyFontSize = 14;
Chart.defaults.global.tooltips.bodySpacing = 1;
Chart.defaults.global.tooltips.xPadding = 10;
Chart.defaults.global.tooltips.yPadding = 10;
Chart.defaults.global.tooltips.cornerRadius = 13;
Chart.defaults.global.tooltips.enabled = true;
Chart.defaults.global.tooltips.mode = 'point';
Chart.defaults.global.tooltips.position = 'nearest';
Chart.defaults.radar.scale.gridLines = false;

var myChartBusiness = new Chart(cBusiness, {
    type: 'radar',
    data: {
      labels: [["PC","program","dev"], ["PLC","dev"], "Design", "Automation", "Robotics"],
      datasets: [
          {
            label: "Current Skill",
            lineTension: 0.1,
            backgroundColor: "rgba(242, 119, 122, 0.2)",
            borderColor: "rgba(242, 119, 122, 1)",
            pointBackgroundColor: "rgba(242, 119, 122, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(242, 119, 122, 1)",
            data: [4.2, 4.8, 4, 4,2.3]
          },
          {
            label: "Level of interest",
            lineTension: 0.1,  
            backgroundColor: "rgba(102,153,204, 0.2)",
            borderColor: "rgba(102,153,204, 1)",
            pointBackgroundColor: "rgba(102,153,204, 1)",
            pointBorderColor: "#fff",
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "#fff",
            pointHoverBorderColor: "rgba(102,153,204, 1)",
            data: [5, 4, 4, 5,5]
          }
      ]
    },
      options: {
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(204, 204, 204, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 6,
            min: 0,
            max: 6,
            stepSize: .2,
            display: false
          }
        }
      }
});



var myChartPersonal = new Chart(cPersonal, {
    type: 'radar',
    data: {
      labels: [["OS","Windows"], ["OS","Linux"],["Ms","Office"], "Github" ],
      datasets: [
        {
          label: "Current Skill",
          lineTension: 0.1,
          backgroundColor: "rgba(242, 119, 122, 0.2)",
          borderColor: "rgba(242, 119, 122, 1)",
          pointBackgroundColor: "rgba(242, 119, 122, 1)",
          pointBorderColor: "#fff",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(242, 119, 122, 1)",
          data: [5, 3.2, 4.6,5]
        }
      ]
    },
    options: {
        startAngle: 36,
        scale: {
          angleLines: {
            display: true,
            lineWidth: 0.5,
            color: 'rgba(128, 128, 128, 0.2)'
          },
          pointLabels: {
            fontSize: 14,
            fontStyle: '300',
            fontColor: 'rgba(204, 204, 204, 1)',
            fontFamily: "'Lato', sans-serif"
          },
          ticks: {
            beginAtZero: true,
            maxTicksLimit: 6,
            min: 0,
            max: 6,
            display: false
          }
        }
    }
});

var myChartLeadership = new Chart(cLeadership, {
    type: 'radar',
    data: {
      labels: [["App","dev"], ["Web","dev"], ["Artificial ","Intelligence"]],
      datasets: [
        {
          label: "Current Skill",
          lineTension: 0.1,
          backgroundColor: "rgba(242, 119, 122, 0.2)",
          borderColor: "rgba(242, 119, 122, 1)",
          pointBackgroundColor: "rgba(242, 119, 122, 1)",
          pointBorderColor: "#fff",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(242, 119, 122, 1)",
          data: [0.8, 2, 1.2]
        },
        {
          label: "Level of interest",
          lineTension: 0.1,  
          backgroundColor: "rgba(102,153,204, 0.2)",
          borderColor: "rgba(102,153,204, 1)",
          pointBackgroundColor: "rgba(102,153,204, 1)",
          pointBorderColor: "#fff",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "#fff",
          pointHoverBorderColor: "rgba(102,153,204, 1)",
          data: [2.5, 2.5, 5]
        }
    ]
  },
    options: {
      scale: {
        angleLines: {
          display: true,
          lineWidth: 0.5,
          color: 'rgba(128, 128, 128, 0.2)'
        },
        pointLabels: {
          fontSize: 14,
          fontStyle: '300',
          fontColor: 'rgba(204, 204, 204, 1)',
          fontFamily: "'Lato', sans-serif"
        },
        ticks: {
          beginAtZero: true,
          maxTicksLimit: 6,
          min: 0,
          max: 6,
          stepSize: .2,
          display: false
        }
      }
    }
});





// Insert Date in Copyright Footer Section
var dt = new Date(),
    year = dt.getFullYear(),
    copyDateEl = document.getElementById("js-year"),
    currentYear = document.createTextNode(year);
copyDateEl.appendChild(currentYear);