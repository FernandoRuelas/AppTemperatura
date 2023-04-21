$(document).ready(function () {
  requestData();
  dataSensor.map((obj) => {
    data.push({ date: getDate(), value: obj });
  });
  //------------------------------
  $("#gvHistory").empty();

  let template = "";
  data.map((row, index) => {
    var realIndex = index + 1;
    if (realIndex == 4) {
      template += `<button id="btnMoreInfo">+Mostrar mas</button>`;
    }

    template += `
    <div id="card${index}">
      <div id="card">
        <p id="txtDate">${row.date}</p>
        <p>${"Temperatura: " + row.value + " C°"}</p>
      </div> 
    </div>
    `;
  });

  $("#gvHistory").html(template);

  data.map((obj, index) => {
    var realIndex = index + 1;
    if (realIndex >= 4 && realIndex < data.length) {
      var element = document.getElementById("card" + index);
      element.style.display = "none";
    }
  });
});

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

function requestData() {
  window.addEventListener("message", (message) => {
    let x = new Date().getTime();
    let y = parseFloat(message.data);
    let date = getDate();

    // add the point
    if (dataSensor.length >= 21) {
      dataSensor.shift();
      chart.update({
        series: seriesValue,
      });
    }

    dataSensor.push(y);
    chart.update({
      series: seriesValue,
    });

    //update max and min
    chart.yAxis[0].update({
      max: parseFloat(document.getElementById("max").innerHTML),
    });

    //Data from table
    data.push({ date: date, value: y });

    //Return message
    //window.ReactNativeWebView.postMessage(JSON.stringify(data));
  });
}

//methods of history sesion
/*var array = [14, 15, 16, 17, 18, 19, 20];
var elementosMostrados = 3; // Número de elementos a mostrar inicialmente
var elementosPorMostrar = 3; // Número de elementos a mostrar por cada clic en "Mostrar más"
var mostrarMasBtn = document.getElementById("mostrarMasBtn");
var elementContainer = document.getElementById("elementContainer");

function showElements() {
  // Limpiar el contenido actual del contenedor
  elementContainer.innerHTML = "";

  // Mostrar elementos del array según la cantidad de elementos a mostrar
  for (var i = 0; i < elementsShow; i++) {
    if (array[i]) {
      var element = document.createElement("div");
      element.textContent = array[i];
      elementContainer.appendChild(element);
    }
  }

  // Mostrar u ocultar el botón "Mostrar más" según si hay más elementos por mostrar
  if (elementsShow < array.length) {
    mostrarMasBtn.style.display = "block";
  } else {
    mostrarMasBtn.style.display = "none";
  }
}

// Función para mostrar más elementos del array al hacer clic en "Mostrar más"
function mostrarMas() {
  elementosMostrados += elementosPorMostrar;
  mostrarElementos();
}

// Inicializar la página mostrando los elementos iniciales del array
showElements();*/

const month_number = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
];

function getDate() {
  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();

  const day = today.getDate();
  const month = month_number[today.getMonth()];
  const year = today.getFullYear();

  return day + "-" + month + "-" + year + " " + hour + ":" + min + ":" + sec;
}
true;

//metodos para una tabla
/*
let tab;
$("#tableHistory").html("");
  $("#tableHistory").html('<table id="dvHistory" class="table"></table>');
  insertTable();
function insertTable() {
  try {
    tab = $("#dvHistory").DataTable({
      autoWith: false,
      searching: false,
      ordering: false,
      paging: false,
      lengthChange: false,
      info: false,
      responsive: true,
      data: data,
      columns: [
        { data: "date", title: "Fecha" },
        { data: "value", title: "Valor" },
      ],
    });
  } catch (e) {
    window.ReactNativeWebView.postMessage("estas en catch" + e);
  }
}*/
/*
 */



