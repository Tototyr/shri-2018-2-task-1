import Chart from "chart.js";

function getColor(isActive, alpha = 1) {
  return isActive ? `rgba(54, 162, 235, ${alpha})` : `rgba(255, 99, 132, ${alpha})`;
}

function getLabel(data, i) {
  const x = new Date();

  x.setHours(x.getHours() - data + i);
  x.setMinutes(0);
  x.setSeconds(0);
  x.setMilliseconds(0);

  return x.toUTCString();
}

export function createChart(container, data, isActive) {
  const ctx = container.getContext("2d");
  const borderColor = getColor(isActive);
  const backgroundColor = getColor(isActive, 0.5);

  return new Chart(ctx, {
    type: "line",
    data: {
      labels: data.map((el, i) => getLabel(el, i)),
      datasets: [{
        data: data,
        borderWidth: 1,
        borderColor: borderColor,
        backgroundColor: backgroundColor
      }]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          ticks: {
            display: false
          }
        }],
        yAxes: [{
          ticks: {
            beginAtZero: true, min: 0
          }
        }]
      }
    }
  });
}