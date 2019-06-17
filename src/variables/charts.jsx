// ##############################
// // // javascript library for creating charts
// #############################
var Chartist = require("chartist");

// ##############################
// // // variables used to create animation on charts
// #############################
var delays = 80,
  durations = 500;
var delays2 = 80,
  durations2 = 500;

// ##############################
// // // Daily Sales
// #############################

const dailySalesChart = {
  data: {
    labels: ["2014", "2015", "2016", "2017", "2018"],
    series: [
      {
        //className : "totalSales",
        name : "Total sales",
        data : [38689, 38158, 37441, 47729, 46705]
      }
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 30000,
    high: 60000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 20
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const exportChart = {
  data: {
    labels: ["2014", "2015", "2016", "2017", "2018"],
    series: [
      {
        name : "Total exports",
        data : [20847, 21348, 21500, 26665, 25169]
      }
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 20000,
    high: 30000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 20
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const roeChart = {
  data: {
    labels: ["2014", "2015", "2016", "2017", "2018"],
    series: [
      {
        name : "RoE",
        data : [21.2, 5.4, 9.8, 12.2, 9.0]
      },
      {
        name : "RoCE",
        data : [19, 7.7, 7.2, 10.5, 8.9]
      }
    ]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 100, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 20
    }
  },
  // for animation
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

const pieOnDraw = (data) => {

    if(data.type === 'slice') {
      // Get the total path length in order to use for dash array animation
      var pathLength = data.element._node.getTotalLength();

      // Set a dasharray that matches the path length as prerequisite to animate dashoffset
      data.element.attr({
        'stroke-dasharray': pathLength + 'px ' + pathLength + 'px'
      });

      // Create animation definition while also assigning an ID to the animation for later sync usage
      var animationDefinition = {
        'stroke-dashoffset': {
          id: 'anim' + data.index,
          dur: 1000,
          from: -pathLength + 'px',
          to:  '0px',
          easing: Chartist.Svg.Easing.easeOutQuint,
          // We need to use `fill: 'freeze'` otherwise our animation will fall back to initial (not visible)
          fill: 'freeze'
        }
      };

      // If this was not the first slice, we need to time the animation so that it uses the end sync event of the previous animation
      if(data.index !== 0) {
        animationDefinition['stroke-dashoffset'].begin = 'anim' + (data.index - 1) + '.end';
      }

      // We need to set an initial value before the animation starts as we are not in guided mode which would do that for us
      data.element.attr({
        'stroke-dashoffset': -pathLength + 'px'
      });

      // We can't use guided mode as the animations need to rely on setting begin manually
      // See http://gionkunz.github.io/chartist-js/api-documentation.html#chartistsvg-function-animate
      data.element.animate(animationDefinition, false);
    }
};

const orders = {
  "walmart" : [
    { milestone : "PORecv", days : 4}, 
    { milestone : "SOPunc", days : 5}, 
    { milestone : "WIP", days : 12}, 
    { milestone : "Logistics", days : 6},
    { milestone : "Delivery", days : 5},
    { milestone : "Receipt", days : 5},
    { milestone : "Payment", days : 8},
    { milestone : "Feedback", days : 4}
  ],
  "ikea" : [
    { milestone : "PORecv", days : 5}, 
    { milestone : "SOPunc", days : 3}, 
    { milestone : "WIP", days : 10}, 
    { milestone : "Logistics", days : 4},
    { milestone : "Delivery", days : 5},
    { milestone : "Receipt", days : 2},
    { milestone : "Payment", days : 4},
    { milestone : "Feedback", days : 5}
  ]
}

const getSeries = (name) => {
  var lifeCycleInDays = orders[name];
  if(!lifeCycleInDays) return [];

  var totalDays = 0;
  lifeCycleInDays.forEach(item => {
    totalDays += item.days;
  });

  var series = [];

  lifeCycleInDays.forEach(item => {
    series.push((item.days * 100/totalDays).toPrecision(2));
  });

  return series;
}

const getLabels = (name) => {
  var lifeCycleInDays = orders[name];
  if(!lifeCycleInDays) return [];

  var labels = [];

  lifeCycleInDays.forEach(item => {
    labels.push(item.milestone + '-' + item.days + 'd');
  });

  return labels;
}


const orderChartWalmart = {
  data: {
    series: getSeries("walmart"),
    labels: getLabels("walmart")
  },
  options: {
    height: "300px",
    width: "300px",
    donut: true,
    donutWidth: 100,
    donutSolid: true,
    startAngle: 270,
    showLabel: true
  },
  onDraw: pieOnDraw
};

const orderChartIkea = {
  data: {
    series: getSeries("ikea"),
    labels: getLabels("ikea")
  },
  options: {
    height: "300px",
    width: "300px",
    donut: true,
    donutWidth: 100,
    donutSolid: true,
    startAngle: 270,
    showLabel: true
  },
  onDraw: pieOnDraw
};


// ##############################
// // // Email Subscriptions
// #############################

const emailsSubscriptionChart = {
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "Mai",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec"
    ],
    series: [[542, 443, 320, 780, 553, 453, 326, 434, 568, 610, 756, 895]]
  },
  options: {
    axisX: {
      showGrid: false
    },
    low: 0,
    high: 1000,
    chartPadding: {
      top: 0,
      right: 5,
      bottom: 0,
      left: 0
    }
  },
  responsiveOptions: [
    [
      "screen and (max-width: 640px)",
      {
        seriesBarDistance: 5,
        axisX: {
          labelInterpolationFnc: function(value) {
            return value[0];
          }
        }
      }
    ]
  ],
  animation: {
    draw: function(data) {
      if (data.type === "bar") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays2,
            dur: durations2,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

// ##############################
// // // Completed Tasks
// #############################

const completedTasksChart = {
  data: {
    labels: ["12am", "3pm", "6pm", "9pm", "12pm", "3am", "6am", "9am"],
    series: [[230, 750, 450, 300, 280, 240, 200, 190]]
  },
  options: {
    lineSmooth: Chartist.Interpolation.cardinal({
      tension: 0
    }),
    low: 0,
    high: 1000, // creative tim: we recommend you to set the high sa the biggest value + something for a better look
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    }
  },
  animation: {
    draw: function(data) {
      if (data.type === "line" || data.type === "area") {
        data.element.animate({
          d: {
            begin: 600,
            dur: 700,
            from: data.path
              .clone()
              .scale(1, 0)
              .translate(0, data.chartRect.height())
              .stringify(),
            to: data.path.clone().stringify(),
            easing: Chartist.Svg.Easing.easeOutQuint
          }
        });
      } else if (data.type === "point") {
        data.element.animate({
          opacity: {
            begin: (data.index + 1) * delays,
            dur: durations,
            from: 0,
            to: 1,
            easing: "ease"
          }
        });
      }
    }
  }
};

module.exports = {
  dailySalesChart,
  exportChart,
  roeChart,
  emailsSubscriptionChart,
  completedTasksChart,
  orderChartWalmart,
  orderChartIkea
};
