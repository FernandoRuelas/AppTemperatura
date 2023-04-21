$(document).ready(function(){
  if (dataSensor.length >= 21) {
    dataSensor.shift();
    chart.update({
      series: seriesValue,
    });
  }

  $('.footer-title').click(function(){
    if ($('footer').css('top')>"200px") {
      
      $('footer').removeClass('footer');
      $('footer').addClass('footerSpan');
      $('.footer-tarjeta').css('display','flex')

    }
    else{
      $('footer').removeClass('footerSpan');
      $('footer').addClass('footer');
      $('.footer-tarjeta').css('display','none')
    }

  })

})
  //Grafica
  let data = [];
  let dataSensor = [23.5, 23.6, 23.8, 80.0, 40.5, 10.5];
  let seriesValue = [
    {
      type: "spline",
      name: document.getElementById("variableName").innerHTML,
      data: dataSensor,
      color: "#0768D0",
    },
  ];

var options = {
  chart: {
    renderTo: "chart",
    panning: true,
    spacingTop: 20,
    spacingBottom: 30,
    marginRight: 10,
    events: {
      load(self) {},
    },
  },
  title: {
    text: "",
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  exporting: {
    enabled: false,
  },
  xAxis: {
    tickWidth: 0,
    lineWidth: 0,
    labels: {
      enabled: false,
    },
    max: 20,
    scrollbar: {
      enabled: true,
    },
  },
  yAxis: {
    title: {
      text: "",
    },
    gridLineColor: "#2E3F59",
    gridLineWidth: 1,
    lineWidth: 0,
    min: 0,
    max: parseFloat(document.getElementById("max").innerHTML),
  },
  plotOptions: {
    series: {
      animation: false,
      getExtremesFromAll: true,
      borderRadius: 18,
      pointWidth: 100,
      borderWidth: 0,
      marker: {
        radius: 5,
      },
    },
  },
  series: seriesValue,
};

var chart = new Highcharts.Chart(options);


