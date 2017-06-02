initGalleryCharts();

var chartsData = {};

function generateInitialData(data) {
  var table = new google.visualization.DataTable();
  var headers = data.headers;

  for (var i = 0; i < headers.length; i++) {
    table.addColumn(headers[i]);
  }

  for (var rowIndex = 0; rowIndex < data.data.length; rowIndex++) {
    var row = [];

    for (var colIndex = 0; colIndex < data.data[rowIndex].length; colIndex++)
    {
      row.push(data.data[rowIndex][colIndex].value);
    }
    table.addRow(row);
  }
  return table;
}

function alterData(table, data) {
  for (var rowIndex = 0; rowIndex < data.data.length; rowIndex++) {
    for (var colIndex = 0; colIndex < data.data[rowIndex].length; colIndex++) {
      var cell = data.data[rowIndex][colIndex];

      if (cell.range != null) {
        table.setValue(rowIndex, colIndex,
            cell.value + Math.round(cell.range * Math.random()));
      }
    }
  }
  return table;
}


function initGalleryCharts() {
  google.setOnLoadCallback(initCharts);
}

function initCharts() {
  jQuery(window).resize(drawCharts);
  setupData();
  drawCharts();
}

function setupData() {
  // pie:
  chartsData.piechart = {};
  chartsData.piechart.data = new google.visualization.DataTable();
  chartsData.piechart.data.addColumn('string', 'Task');
  chartsData.piechart.data.addColumn('number', 'Hours per Day');
  chartsData.piechart.data.addRows([
    ['Work', 9],
    ['Eat', 4],
    ['Watch TV', 1],
    ['Sleep', 7]
  ]);
  chartsData.piechart.chart =
      new google.visualization.PieChart(document.getElementById('piechart'));
  chartsData.piechart.options = {
    chartArea: {
      left: '5%',
      top: '9%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#4285F4', '#76A7FA', '#A0C3FF'],
    // is3D: true,
    legend: 'none',
    pieSliceText: 'none'
  };
  
    // pie:
  chartsData.pie3dchart = {};
  chartsData.pie3dchart.data = new google.visualization.DataTable();
  chartsData.pie3dchart.data.addColumn('string', 'Task');
  chartsData.pie3dchart.data.addColumn('number', 'Hours per Day');
  chartsData.pie3dchart.data.addRows([
    ['Work', 9],
    ['Eat', 4],
    ['Watch TV', 1],
    ['Sleep', 7]
  ]);
  chartsData.pie3dchart.chart =
      new google.visualization.PieChart(document.getElementById('pie3dchart'));
  chartsData.pie3dchart.options = {
    chartArea: {
      left: '5%',
      top: '9%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#4285F4', '#76A7FA', '#A0C3FF'],
    is3D: true,
    legend: 'none',
    pieSliceText: 'none'
  };
  
  //calendar
 chartsData.calendar = {};
 chartsData.calendar.data = new google.visualization.DataTable();
 chartsData.calendar.data.addColumn({ type: 'date', id: 'Date' });
 chartsData.calendar.data.addColumn({ type: 'number', id: 'Won/Loss' });
 chartsData.calendar.data.addRows([
 [ new Date(2012, 3, 13), 37032 ],
 [ new Date(2012, 3, 14), 38024 ],
 [ new Date(2012, 3, 15), 38024 ],
 [ new Date(2012, 3, 16), 38108 ],
 [ new Date(2012, 3, 17), 38229 ],
 [ new Date(2012, 3, 18), 37967 ],
 [ new Date(2012, 3, 20), 36770 ],
 [ new Date(2012, 3, 21), 37839 ],
 [ new Date(2012, 3, 30), 37359 ],
 [ new Date(2012, 4, 1), 37225 ],
 [ new Date(2012, 4, 2), 37434 ],
 [ new Date(2012, 4, 4), 37223 ],
 [ new Date(2012, 4, 5), 37581 ],
 [ new Date(2012, 4, 6), 37394 ],
 [ new Date(2012, 4, 10), 37348 ],
 [ new Date(2012, 4, 11), 37438 ],
 [ new Date(2012, 4, 12), 38048 ],
 [ new Date(2012, 4, 13), 37611 ],
 [ new Date(2012, 4, 14), 37334 ],
 [ new Date(2012, 4, 15), 37292 ],
 [ new Date(2012, 4, 25), 37594 ],
 [ new Date(2012, 4, 26), 38099 ],
 [ new Date(2012, 4, 27), 37844 ],
 [ new Date(2012, 4, 28), 37921 ],
 [ new Date(2012, 4, 29), 37216 ],
 [ new Date(2012, 4, 30), 37195 ],
 [ new Date(2012, 4, 31), 37629 ],
 [ new Date(2012, 5, 5), 37181 ],
 [ new Date(2012, 5, 6), 37243 ],
 [ new Date(2012, 5, 7), 37307 ],
 [ new Date(2012, 5, 8), 37309 ],
 [ new Date(2012, 5, 9), 37534 ],
 [ new Date(2012, 5, 10), 37467 ],
 [ new Date(2012, 5, 19), 37701 ],
 [ new Date(2012, 5, 20), 37362 ],
 [ new Date(2012, 5, 21), 37261 ],
 [ new Date(2012, 5, 22), 37281 ],
 [ new Date(2012, 5, 23), 37782 ],
 [ new Date(2012, 5, 24), 37565 ],
 [ new Date(2012, 5, 25), 37208 ],
 [ new Date(2012, 5, 26), 37755 ],
 [ new Date(2012, 5, 27), 37744 ],
 [ new Date(2012, 6, 6), 38066 ],
 [ new Date(2012, 6, 8), 38270 ],
 [ new Date(2012, 6, 16), 38334 ],
 [ new Date(2012, 6, 17), 37771 ],
 [ new Date(2012, 6, 18), 37367 ],
 [ new Date(2012, 6, 19), 38413 ],
 [ new Date(2012, 6, 20), 38093 ],
 [ new Date(2012, 6, 21), 38170 ],
 [ new Date(2012, 6, 22), 37737 ],
 [ new Date(2012, 6, 30), 37784 ],
 [ new Date(2012, 6, 31), 37275 ],
 [ new Date(2012, 7, 1), 37213 ],
 [ new Date(2012, 7, 2), 37191 ],
 [ new Date(2012, 7, 3), 37285 ],
 [ new Date(2012, 7, 4), 37914 ],
 [ new Date(2012, 7, 5), 37019 ],
 [ new Date(2012, 7, 6), 37316 ],
 [ new Date(2012, 7, 7), 38416 ],
 [ new Date(2012, 7, 8), 37716 ],
 [ new Date(2012, 7, 21), 37794 ],
 [ new Date(2012, 7, 22), 37373 ],
 [ new Date(2012, 7, 23), 37829 ],
 [ new Date(2012, 7, 24), 37228 ],
 [ new Date(2012, 7, 25), 37103 ],
 [ new Date(2012, 7, 26), 37188 ],
 [ new Date(2012, 7, 27), 37506 ],
 [ new Date(2012, 8, 7), 37156 ],
 [ new Date(2012, 8, 8), 37107 ],
 [ new Date(2012, 8, 9), 37226 ],
 [ new Date(2012, 8, 11), 37437 ],
 [ new Date(2012, 8, 12), 37230 ],
 [ new Date(2012, 8, 13), 38134 ],
 [ new Date(2012, 8, 21), 37731 ],
 [ new Date(2012, 8, 22), 37570 ],
 [ new Date(2012, 8, 23), 37310 ],
 [ new Date(2012, 8, 25), 37045 ],
 [ new Date(2012, 8, 26), 37247 ],
 [ new Date(2013, 3, 8), 37008 ],
 [ new Date(2013, 3, 10), 30862 ],
 [ new Date(2013, 3, 11), 27704 ],
 [ new Date(2013, 3, 13), 33039 ],
 [ new Date(2013, 3, 14), 35198 ],
 [ new Date(2013, 3, 15), 37449 ],
 [ new Date(2013, 3, 20), 35152 ],
 [ new Date(2013, 3, 22), 28926 ],
 [ new Date(2013, 3, 23), 29006 ],
 [ new Date(2013, 3, 24), 29274 ],
 [ new Date(2013, 3, 25), 30093 ],
 [ new Date(2013, 3, 26), 29312 ],
 [ new Date(2013, 3, 27), 34726 ],
 [ new Date(2013, 3, 28), 36527 ],
 [ new Date(2013, 4, 6), 31088 ],
 [ new Date(2013, 4, 7), 30549 ],
 [ new Date(2013, 4, 8), 29969 ],
 [ new Date(2013, 4, 9), 31571 ],
 [ new Date(2013, 4, 10), 33606 ],
 [ new Date(2013, 4, 11), 36543 ],
 [ new Date(2013, 4, 12), 35532 ],
 [ new Date(2013, 4, 23), 35254 ],
 [ new Date(2013, 4, 24), 34074 ],
 [ new Date(2013, 4, 25), 36504 ],
 [ new Date(2013, 4, 26), 37046 ],
 [ new Date(2013, 4, 27), 33627 ],
 [ new Date(2013, 4, 28), 33463 ],
 [ new Date(2013, 5, 4), 32035 ],
 [ new Date(2013, 5, 5), 33296 ],
 [ new Date(2013, 5, 6), 35352 ],
 [ new Date(2013, 5, 9), 37054 ],
 [ new Date(2013, 5, 19), 35710 ],
 [ new Date(2013, 5, 25), 36286 ],
 [ new Date(2013, 5, 26), 34632 ],
 [ new Date(2013, 5, 27), 34750 ],
 [ new Date(2013, 5, 28), 36383 ],
 [ new Date(2013, 5, 29), 37437 ],
 [ new Date(2013, 5, 30), 37425 ],
 [ new Date(2013, 6, 2), 36498 ],
 [ new Date(2013, 6, 3), 36911 ],
 [ new Date(2013, 6, 4), 37607 ],
 [ new Date(2013, 6, 19), 38130 ],
 [ new Date(2013, 6, 20), 37601 ],
 [ new Date(2013, 6, 21), 38138 ],
 [ new Date(2013, 6, 22), 35016 ],
 [ new Date(2013, 6, 23), 34609 ],
 [ new Date(2013, 6, 24), 36514 ],
 [ new Date(2013, 6, 29), 37242 ],
 [ new Date(2013, 6, 30), 34578 ],
 [ new Date(2013, 6, 31), 35059 ],
 [ new Date(2013, 7, 1), 35886 ],
 [ new Date(2013, 7, 2), 37652 ],
 [ new Date(2013, 7, 3), 37941 ],
 [ new Date(2013, 7, 4), 37611 ],
 [ new Date(2013, 7, 16), 38143 ],
 [ new Date(2013, 7, 17), 37517 ],
 [ new Date(2013, 7, 18), 37917 ],
 [ new Date(2013, 7, 27), 36226 ],
 [ new Date(2013, 7, 28), 31962 ],
 [ new Date(2013, 7, 29), 33300 ],
 [ new Date(2013, 7, 30), 36063 ],
 [ new Date(2013, 7, 31), 37363 ],
 [ new Date(2013, 8, 1), 37053 ],
 [ new Date(2013, 8, 2), 36188 ],
 [ new Date(2013, 8, 3), 32071 ],
 [ new Date(2013, 8, 4), 33720 ],
 [ new Date(2013, 8, 13), 37542 ],
 [ new Date(2013, 8, 14), 37510 ],
 [ new Date(2013, 8, 15), 37137 ],
 [ new Date(2013, 8, 17), 35030 ],
 [ new Date(2013, 8, 18), 38540 ],
 [ new Date(2013, 8, 19), 36436 ],
 [ new Date(2013, 8, 20), 37215 ],
 [ new Date(2013, 8, 21), 37569 ],
 [ new Date(2013, 8, 22), 37020 ],
 [ new Date(2013, 9, 4), 38177 ],
 [ new Date(2013, 9, 5), 38705 ],
 [ new Date(2013, 9, 12), 38210 ],
 [ new Date(2013, 9, 13), 38029 ],
 [ new Date(2013, 9, 19), 38823 ],
 [ new Date(2013, 9, 23), 38345 ],
 [ new Date(2013, 9, 24), 38436 ],
 [ new Date(2013, 9, 30), 38447 ]
 ]);
 
 chartsData.calendar.chart = new google.visualization.Calendar(document.getElementById('calendar'));
 chartsData.calendar.options = {
 title: "Red Sox Attendance",
 calendar: { cellSize: 5 },
 height: 300
 };

  // line:
  chartsData.linechart = {};
  chartsData.linechart.dataSpec = {
    headers: [
      {type: 'string', label: 'Year'},
      {type: 'number', label: 'a'},
      {type: 'number', label: 'b'}
    ],
    data: [
      [{value: '2008'}, {value: 1000, range: 500}, {value: 400, range: 200}],
      [{value: '2009'}, {value: 1170, range: 585}, {value: 460, range: 230}],
      [{value: '2010'}, {value: 660, range: 330}, {value: 1200, range: 600}],
      [{value: '2011'}, {value: 1030, range: 515}, {value: 540, range: 270}]
    ]
  };
  chartsData.linechart.data = generateInitialData(
      chartsData.linechart.dataSpec);

  chartsData.linechart.chart =
      new google.visualization.LineChart(document.getElementById('linechart'));
  chartsData.linechart.options = {
    chartArea: {
      top: '10%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#53A8FB'],
    legend: 'none',
    curveType: 'function',
    hAxis: {textPosition: 'none'},
    vAxis: {textPosition: 'none'}
  };

  chartsData.linechart.animation = function() {
    alterData(chartsData.linechart.data, chartsData.linechart.dataSpec);
    chartsData.linechart.chart.draw(chartsData.linechart.data, chartsData.linechart.options);    
  };
  chartsData.linechart.animationInterval = 4000;

  // area:
  chartsData.areachart = {};
  chartsData.areachart.dataSpec = {
    headers: [
      {type: 'string', label: 'Year'},
      {type: 'number', label: 'Sales'},
      {type: 'number', label: 'Expenses'}
    ],
    data: [
      [{value: '2008'}, {value: 1000, range: 500}, {value: 400, range: 200}],
      [{value: '2009'}, {value: 1170, range: 585}, {value: 460, range: 230}],
      [{value: '2010'}, {value: 660, range: 330}, {value: 1200, range: 600}],
      [{value: '2011'}, {value: 1030, range: 515}, {value: 540, range: 270}]
    ]
  };
  chartsData.areachart.data = generateInitialData(
      chartsData.areachart.dataSpec);

  chartsData.areachart.chart =
      new google.visualization.AreaChart(document.getElementById('areachart'));
  chartsData.areachart.options = {
    chartArea: {
      top: '10%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#53A8FB'],
    legend: 'none',
    hAxis: {textPosition: 'none'},
    vAxis: {textPosition: 'none'}
  };

  chartsData.areachart.animation = function() {
    alterData(chartsData.areachart.data, chartsData.areachart.dataSpec);
    chartsData.areachart.chart.draw(chartsData.areachart.data, chartsData.areachart.options);   
  };
  chartsData.areachart.animationInterval = 4000;

  // bar:
  chartsData.barchart = {};
  chartsData.barchart.dataSpec = {
    headers: [
      {type: 'string', label: 'Year'},
      {type: 'number', label: 'Sales'},
      {type: 'number', label: 'Expenses'}
    ],
    data: [
      [{value: '2008'}, {value: 1000, range: 500}, {value: 400, range: 200}],
      [{value: '2009'}, {value: 1170, range: 585}, {value: 460, range: 230}],
      [{value: '2010'}, {value: 660, range: 330}, {value: 1200, range: 600}]
    ]
  };
  chartsData.barchart.data = generateInitialData(
      chartsData.barchart.dataSpec);

  chartsData.barchart.chart =
      new google.visualization.BarChart(document.getElementById('barchart'));
  chartsData.barchart.options = {
    chartArea: {
      top: '10%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#53A8FB'],
    bar: { groupWidth: '80%' },
    legend: 'none',
    hAxis: {
      gridlines: {
        count: 0
      },
      textPosition: 'none'
    },
    vAxis: {textPosition: 'none'}

  };
  chartsData.barchart.animation = function() {
    alterData(chartsData.barchart.data, chartsData.barchart.dataSpec);
    chartsData.barchart.chart.draw(chartsData.barchart.data, chartsData.barchart.options);   
  };
  chartsData.barchart.animationInterval = 4000;

  // column:
  chartsData.columnchart = {};
  chartsData.columnchart.dataSpec = {
    headers: [
      {type: 'string', label: 'Year'},
      {type: 'number', label: 'Sales'},
      {type: 'number', label: 'Expenses'},
      {type: 'number', label: 'c'}
    ],
    data: [
      [
        {value: '2014'}, {value: 1000, range: 500},
        {value: 800, range: 400}, {value: 600, range: 300}
      ],
      [
        {value: '2015'}, {value: 1170, range: 585},
        {value: 900, range: 450}, {value: 600, range: 300}
      ],
      [
        {value: '2016'}, {value: 660, range: 330},
        {value: 1200, range: 600}, {value: 600, range: 300}
      ],
      [
        {value: '2017'}, {value: 1030, range: 515},
        {value: 540, range: 270}, {value: 600, range: 300}
      ]
    ]
  };
  chartsData.columnchart.data = generateInitialData(
      chartsData.columnchart.dataSpec);

  chartsData.columnchart.chart = new google.visualization.ColumnChart(
      document.getElementById('columnchart'));
  chartsData.columnchart.options = {
    chartArea: {
      top: '10%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#53A8FB', '#F1CA3A'],
    bar: { groupWidth: '80%' },
    legend: 'none',
    hAxis: {
      textPosition: 'none',
      minValue: 0,
      maxValue: 1400
    },
    vAxis: {
      textPosition: 'none',
      gridlines: { count: 0 }
    }
  };

  chartsData.columnchart.animation = function() {
    alterData(chartsData.columnchart.data, chartsData.columnchart.dataSpec);
    chartsData.columnchart.chart.draw(chartsData.columnchart.data, chartsData.columnchart.options);   
  };
  chartsData.columnchart.animationInterval = 4000;

  // gauge
  chartsData.gauge = {};
  chartsData.gauge.data = new google.visualization.DataTable();
  chartsData.gauge.data.addColumn('string', 'Label');
  chartsData.gauge.data.addColumn('number', 'Value');
  chartsData.gauge.data.addRows(3);
  chartsData.gauge.data.setValue(0, 0, 'Memory');
  chartsData.gauge.data.setValue(0, 1, 80);
  //chartsData.gauge.data.setValue(1, 0, 'CPU');
  //chartsData.gauge.data.setValue(1, 1, 55);

  chartsData.gauge.chart =
      new google.visualization.Gauge(document.getElementById('gauge'));

  chartsData.gauge.options = {
    height: 230,
    greenFrom: 60,
    greenTo: 75,
    redFrom: 90,
    redTo: 100,
    yellowFrom: 75,
    yellowTo: 90,
    greenColor: '#5F9654',
    redColor: '#D3362D',
    yellowColor: '#F1CA3A',
    minorTicks: 5
  };

  chartsData.gauge.animation = function() {
    chartsData.gauge.data.setValue(0, 1, 40 + Math.round(60 * Math.random()));
    // Make one of the gauges vary less often.
    if (Math.random() < 0.3) {
      chartsData.gauge.data.setValue(
        1, 1, 40 + Math.round(60 * Math.random()));
    }
    chartsData.gauge.chart.draw(chartsData.gauge.data, chartsData.gauge.options);
  };
  chartsData.gauge.animationInterval = 4000;

  // histogram:
  chartsData.histogram = {};
  chartsData.histogram.data = new google.visualization.DataTable();
  chartsData.histogram.data.addColumn('number', 'Score1');
  chartsData.histogram.data.addColumn('number', 'Score2');
  chartsData.histogram.data.addRows([
        [4, 8], [5, 5], [6, 10], [6, 5], [6, 2], [7, 12], [9, 6],
        [6, 10], [4, 6], [7, 3], [7, 4], [8, 2], [10, 11], [13, 4]
  ]);
  chartsData.histogram.chart =
      new google.visualization.Histogram(document.getElementById('histogram'));
  chartsData.histogram.options = {
    legend: 'none',
    bar: { groupWidth: '80%' },
    colors: ['#4374E0', '#53A8FB'],
    hAxis: {textPosition: 'none'},
    vAxis: {textPosition: 'none'},
    chartArea: { width: '100%', height: '100%' }
  };

  chartsData.histogram.animation = function() {
    var data = chartsData.histogram.data;

    for (var i = 0; i < data.getNumberOfRows(); i++) {
      for (var j = 0; j < 2; j++) {
        if (data.getValue(i, j) > 10) {
          data.setValue(i, j, data.getValue(i, j) / 2);
        } else {
          data.setValue(i, j, data.getValue(i, j) + 1);
        }
      }
    }
    chartsData.histogram.chart.draw(chartsData.histogram.data, chartsData.histogram.options);
  };
  chartsData.histogram.animationInterval = 4000;

  // org:
  chartsData.sankey = {};
  chartsData.sankey.data = new google.visualization.DataTable();
  chartsData.sankey.data.addColumn('string', 'From');
  chartsData.sankey.data.addColumn('string', 'To');
  chartsData.sankey.data.addColumn('number', 'Weight');
  chartsData.sankey.data.addRows([
                 [ 'A', 'X', 5 ],
                 [ 'A', 'Y', 7 ],
                 [ 'A', 'Z', 6 ],
                 [ 'B', 'X', 2 ],
                 [ 'B', 'Y', 9 ],
                 [ 'B', 'Z', 4 ]
                 ]);
  chartsData.sankey.chart =
      new google.visualization.Sankey(document.getElementById('sankey'));

  chartsData.sankey.options = {
    width: 325
  };

  // scatterchart
  var M = 7919 * 6607;
  var rnds = [];
  x0 = Math.floor(M / 2);
  for (var i = 0; i < 30300; ++i) {
    rnds[i] = x0 / M - 0.5;
    x0 = (x0 * x0) % M;
  }
  chartsData.scatterchart = {};
  chartsData.scatterchart.data = new google.visualization.DataTable();
  chartsData.scatterchart.data.addColumn('number', 'A');
  chartsData.scatterchart.data.addColumn('number', 'Male');
  chartsData.scatterchart.data.addColumn('number', 'Female');

  for (var i = 0; i < 100; ++i) {
    var x = 0;
    var y1 = 0;
    var y2 = 0;
    for (var j = 0; j < 100; ++j) {
      var a1 = rnds[100 * i + j * 3 + 1];
      var a2 = -0.1 + a1 * 2 + rnds[100 * i + j * 3 + 2];
      var a3 = 0.1 - a1 * 1.5 + rnds[100 * i + j * 3 + 3];
      x = x + a1; y1 = y1 + a2; y2 = y2 + a3;
    }
    chartsData.scatterchart.data.addRow([Math.floor(x * 100) / 100,
           Math.floor(y1 * 100) / 100,
           Math.floor(y2 * 100) / 100]);
  }

  chartsData.scatterchart.chart =
      new google.visualization.ScatterChart(
    document.getElementById('scatterchart'));

  chartsData.scatterchart.options = {
    chartArea: {
      top: '10%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#53A8FB'],
    pointSize: 3,
    legend: 'none',
    hAxis: {textPosition: 'none'},
    vAxis: {textPosition: 'none'}
  };

  chartsData.scatterchart.animation = function() {
    var data = chartsData.scatterchart.data;

    for (var i = 0; i < data.getNumberOfRows(); i++) {
      for (var j = 0; j < 3; j++) {
        var abs = Math.abs(data.getValue(i, j));

        if (abs === data.getValue(i, j)) {
          data.setValue(i, j, parseFloat('-' + data.getValue(i, j)));
        } else {
          data.setValue(i, j, Math.abs(data.getValue(i, j)));
        }
      }
    }
    chartsData.scatterchart.chart.draw(chartsData.scatterchart.data, chartsData.scatterchart.options);
  };
  chartsData.scatterchart.animationInterval = 4000;

  // stepped area:
  chartsData.steppedareachart = {};
  chartsData.steppedareachart.data = new google.visualization.DataTable();
  chartsData.steppedareachart.data.addColumn('string', 'Year');
  chartsData.steppedareachart.data.addColumn('number', 'Value1');
  chartsData.steppedareachart.data.addColumn('number', 'Value2');
  chartsData.steppedareachart.data.addColumn('number', 'Value3');
  chartsData.steppedareachart.data.addRows([
    ['Alfred Hitchcock (1935)', 5.4, 7.9, 10.2],
    ['Ralph Thomas (1959)', 6.9, 9.9, 10.2],
    ['Don Sharp (1978)', 8.5, 6.4, 10.2],
    ['James Hawes (2008)', 4.4, 6.2, 10.8]
  ]);

  chartsData.steppedareachart.chart =
      new google.visualization.SteppedAreaChart(
    document.getElementById('steppedareachart'));
  chartsData.steppedareachart.options = {
    chartArea: {
      top: '10%',
      width: '100%',
      height: '82%'
    },
    legend: 'none',
    hAxis: {textPosition: 'none'},
    vAxis: {textPosition: 'none'},
    isStacked: true,
    colors: ['#4374E0', '#53A8FB', '#F1CA3A']
  };

  chartsData.steppedareachart.animation = function() {
    var data = chartsData.steppedareachart.data;

    for (var i = 0; i < data.getNumberOfRows(); i++) {
      for (var j = 1; j < 4; j++) {
        if (data.getValue(i, j) > 15) {
          data.setValue(i, j, data.getValue(i, j) / 2);
        } else {
          data.setValue(i, j, data.getValue(i, j) + 1);
        }
      }
    }
    chartsData.steppedareachart.chart.draw(chartsData.steppedareachart.data, chartsData.steppedareachart.options);
  };

  chartsData.steppedareachart.animationInterval = 4000;

  // table:
  chartsData.table = {};
  chartsData.table.data = new google.visualization.DataTable();
  chartsData.table.data.addColumn('string', 'Name');
  chartsData.table.data.addColumn('number', 'Salary');
  chartsData.table.data.addColumn('boolean', 'Full Time');
  chartsData.table.data.addRows(4);
  chartsData.table.data.setCell(0, 0, 'Marie');
  chartsData.table.data.setCell(0, 1, 24700, '$24,700');
  chartsData.table.data.setCell(0, 2, true);
  chartsData.table.data.setCell(1, 0, 'Albert');
  chartsData.table.data.setCell(1, 1, 25200, '$25,200');
  chartsData.table.data.setCell(1, 2, false);
  chartsData.table.data.setCell(2, 0, 'Enrico');
  chartsData.table.data.setCell(2, 1, 25700, '$25,700');
  chartsData.table.data.setCell(2, 2, true);
  chartsData.table.data.setCell(3, 0, 'Lise');
  chartsData.table.data.setCell(3, 1, 26600, '$26,600');
  chartsData.table.data.setCell(3, 2, true);

  chartsData.table.chart =
      new google.visualization.Table(document.getElementById('table'));
  chartsData.table.options = {showRowNumber: true, width: '100%'};

  // treemap:
  chartsData.treemap = {};
  chartsData.treemap.data = new google.visualization.DataTable();
  chartsData.treemap.data.addColumn('string', 'Region');
  chartsData.treemap.data.addColumn('string', 'Parent');
  chartsData.treemap.data.addColumn('number', 'Market trade volume (size)');
  chartsData.treemap.data.addColumn('number',
            'Market increase/decrease (color)');

  chartsData.treemap.data.addRows([
    ['Global', null, 0, 0],
    ['America', 'Global', 0, 0],
    ['Europe', 'Global', 0, 0],
    ['Asia', 'Global', 0, 0],
    ['Australia', 'Global', 0, 0],
    ['Africa', 'Global', 0, 0],
    ['Brazil', 'America', 10, 40],
    ['USA', 'America', 52, 80],
    ['France', 'Europe', 42, 50],
    ['Germany', 'Europe', 31, 30],
    ['UK', 'Europe', 21, 20],
    ['China', 'Asia', 65, 10],
    ['Japan', 'Asia', 20, 20],
    ['Mongolia', 'Asia', 1, 15],
    ['Israel', 'Asia', 12, 24],
    ['Iran', 'Asia', 18, 13],
    ['Pakistan', 'Asia', 11, 25],
    ['Egypt', 'Africa', 11, 90],
    ['Mali', 'Africa', 11, 90],
    ['S. Africa', 'Africa', 60, 80]
  ]);

  chartsData.treemap.chart =
      new google.visualization.TreeMap(document.getElementById('treemap'));
  chartsData.treemap.options = {
    maxDepth: 1,
    maxPostDepth: 2,
    hintOpacity: 0.0,
    useWeightedAverageForAggregation: 'true',
    minColor: '#A0C3FF',
    maxColor: '#4374E0'
  };

  // candlestickchart:
  chartsData.candlestickchart = {};
  chartsData.candlestickchart.dataSpec = {
    headers: [
      {type: 'string', label: 'Region'},
      {type: 'number', label: 'Min'},
      {type: 'number', label: 'Avg_Low'},
      {type: 'number', label: 'Avg_High'},
      {type: 'number', label: 'Max'}
    ],
    data: [
      [
        {value: 'Mon'},
        {value: 20, range: 10},
        {value: 28, range: 14},
        {value: 38, range: 19},
        {value: 45, range: 22.5}
      ],
      [
        {value: 'Tues'},
        {value: 31, range: 15.5},
        {value: 38, range: 19},
        {value: 55, range: 27.5},
        {value: 66, range: 33}
      ],
      [
        {value: 'Wed'},
        {value: 50, range: 25},
        {value: 55, range: 27.5},
        {value: 77, range: 38.5},
        {value: 80, range: 40}
      ],
      [
        {value: 'Thurs'},
        {value: 50, range: 25},
        {value: 77, range: 38.5},
        {value: 66, range: 33},
        {value: 77, range: 38.5}
      ],
      [
        {value: 'Fri'},
        {value: 15, range: 7.5},
        {value: 66, range: 33},
        {value: 22, range: 11},
        {value: 68, range: 34}
      ]
    ]
  };
  chartsData.candlestickchart.data = generateInitialData(
      chartsData.candlestickchart.dataSpec);

  chartsData.candlestickchart.chart = new google.visualization.CandlestickChart(
      document.getElementById('candlestickchart'));
  chartsData.candlestickchart.options = {
    hAxis: {title: '', minValue: 0, maxValue: 15},
    vAxis: {title: '', minValue: 0, maxValue: 15},
    chartArea: {
      top: '10%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#53A8FB', '#F1CA3A'],
    legend: 'none',
    hAxis: {textPosition: 'none'},
    vAxis: {textPosition: 'none'}
  };

  chartsData.candlestickchart.animation = function() {
    alterData(
        chartsData.candlestickchart.data,
        chartsData.candlestickchart.dataSpec
    );
    chartsData.candlestickchart.chart.draw(chartsData.candlestickchart.data, chartsData.candlestickchart.options);
  };

  chartsData.candlestickchart.animationInterval = 4000;

  // combochart:
  chartsData.combochart = {};
  chartsData.combochart.dataSpec = {
    headers: [
      {type: 'string', label: 'Year'},
      {type: 'number', label: 'Bolivia'},
      {type: 'number', label: 'Ecuador'},
      {type: 'number', label: 'Brazil'},
      {type: 'number', label: 'Peru'},
      {type: 'number', label: 'Rwanda'},
      {type: 'number', label: 'Average'}
    ],
    data: [
      [
        {value: '2004'},
        {value: 165, range: 82.5},
        {value: 938, range: 469},
        {value: 522, range: 261},
        {value: 998, range: 499},
        {value: 450, range: 225},
        {value: 614.6}
      ],
      [
        {value: '2005'},
        {value: 135, range: 67.5},
        {value: 1120, range: 560},
        {value: 599, range: 299.5},
        {value: 1268, range: 634},
        {value: 288, range: 144},
        {value: 682}
      ],
      [
        {value: '2006'},
        {value: 157, range: 78.5},
        {value: 1167, range: 583.5},
        {value: 587, range: 293.5},
        {value: 807, range: 403.5},
        {value: 397, range: 198.5},
        {value: 623}
      ],
      [
        {value: '2007'},
        {value: 139, range: 69.5},
        {value: 1110, range: 555},
        {value: 615, range: 307.5},
        {value: 968, range: 484},
        {value: 215, range: 107.5},
        {value: 609.4}
      ]
    ]
  };
  chartsData.combochart.data = generateInitialData(
      chartsData.combochart.dataSpec);

  chartsData.combochart.chart =
      new google.visualization.ComboChart(
    document.getElementById('combochart'));
  chartsData.combochart.options = {
    chartArea: {
      top: '10%',
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#53A8FB', '#D3362D', '#E49307', '#5F9654'],
    bar: { groupWidth: '90%' },
    seriesType: 'bars',
    series: {5: {type: 'line'}},
    legend: 'none',
    hAxis: {textPosition: 'none'},
    vAxis: {textPosition: 'none'}
  };

  chartsData.combochart.animation = function() {
    var data = chartsData.combochart.data;

    alterData(data, chartsData.combochart.dataSpec);

    for (var i = 0; i < data.getNumberOfRows(); i++) {
      var value1 = data.getValue(i, 1);
      var value2 = data.getValue(i, 2);
      var value3 = data.getValue(i, 3);
      var value4 = data.getValue(i, 4);
      var value5 = data.getValue(i, 5);
      var avg = (value1 + value2 + value3 + value4 + value5) / 5;

      data.setValue(i, 6, avg);
    }
    chartsData.combochart.chart.draw(chartsData.combochart.data, chartsData.combochart.options);
  };
  chartsData.combochart.animationInterval = 4000;

  // geochart:
  chartsData.geochart = {};
  chartsData.geochart.data = new google.visualization.DataTable();
  chartsData.geochart.data.addColumn('string', 'Country');
  chartsData.geochart.data.addColumn('number', 'Score');
  chartsData.geochart.data.addRows([
    ['Lichtenstein', 25],
    ['Luxembourg', 50],
    ['Monaco', 100],
    ['Belgium', 150],
    ['Netherlands', 200],
    ['Italy', 300],
    ['Germany', 400],
    ['Switzerland', 500],
    ['Austria', 700],
    ['France', 800]
  ]);

  chartsData.geochart.chart =
      new google.visualization.GeoChart(document.getElementById('geochart'));
  chartsData.geochart.options = {
    legend: 'none',
    region: '155',
    minValue: 0,
    colors: ['#FFF', '#4374E0']
  };

  // timeline:
  chartsData.timeline = {};
  chartsData.timeline.data = new google.visualization.DataTable();

  chartsData.timeline.data.addColumn({ type: 'string', id: 'Term' });
  chartsData.timeline.data.addColumn({ type: 'string', id: 'Name' });
  chartsData.timeline.data.addColumn({ type: 'date', id: 'Start' });
  chartsData.timeline.data.addColumn({ type: 'date', id: 'End' });
  chartsData.timeline.data.addRows([
    ['1', 'Washington', new Date(1789, 3, 29), new Date(1797, 2, 3)],
    ['2', 'Adams', new Date(1797, 2, 3), new Date(1801, 2, 3)],
    ['3', 'Jefferson', new Date(1801, 2, 3), new Date(1809, 2, 3)]]);

  chartsData.timeline.chart =
      new google.visualization.Timeline(document.getElementById('timeline'));
  chartsData.timeline.options = {
    colors: ['#4374E0', '#53A8FB', '#F1CA3A'],
    timeline: {
      // showRowLabels: false,
      barLabelStyle: { fontSize: 11 }
    }
  };

  // bubble:
  chartsData.bubblechart = {};
  chartsData.bubblechart.data = google.visualization.arrayToDataTable([
      ['ID', 'Life Expectancy', 'Fertility Rate', 'Region', 'Population'],
      ['DEU', 79.84, 1.36, 'Europe', 81902307],
      ['EGY', 72.73, 2.78, 'Middle East', 79716203],
      ['IRN', 72.49, 1.7, 'Middle East', 73137148],
      ['IRQ', 68.09, 4.77, 'Middle East', 31090763],
      ['RUS', 68.6, 1.54, 'Europe', 141850000],
      ['USA', 78.09, 2.05, 'North America', 307007000]
  ]);
  chartsData.bubblechart.chart =
      new google.visualization.BubbleChart(
        document.getElementById('bubblechart'));

  chartsData.bubblechart.options = {
    hAxis: {minValue: 65, maxValue: 85, textPosition: 'none'},
    vAxis: {minValue: 0, maxValue: 5, textPosition: 'none'},
    bubble: {textStyle: {fontSize: 11}},
    legend: {position: 'none'},
    colors: ['#4374E0', '#53A8FB', '#F1CA3A'],
    chartArea: {
      width: '100%',
      height: '82%'
    }
  };
  chartsData.bubblechart.chart.draw(chartsData.bubblechart.data, chartsData.bubblechart.options);


  // donut:
  chartsData.donutchart = {};
  chartsData.donutchart.data = new google.visualization.DataTable();
  chartsData.donutchart.data.addColumn('string', 'Task');
  chartsData.donutchart.data.addColumn('number', 'Hours per Day');
  chartsData.donutchart.data.addRows([
    ['Work', 9],
    ['Eat', 4],
    ['Watch TV', 1],
    ['Sleep', 7]
  ]);
  chartsData.donutchart.chart =
      new google.visualization.PieChart(document.getElementById('donutchart'));
  chartsData.donutchart.options = {
    chartArea: {
      width: '100%',
      height: '82%'
    },
    colors: ['#4374E0', '#4285F4', '#76A7FA', '#A0C3FF'],
    pieHole: 0.4,
    legend: 'none',
    pieSliceText: 'none'
  };
  
   // wordtree:
  chartsData.wordtree = {};
  chartsData.wordtree.data = google.visualization.arrayToDataTable(
     [ ['Phrases'],
     ['cats eat kibble'],
     ['cats eat birds'],
     ['cats are awesome'],
     ['cats are people too'],
     ['cats eat mice'],
     ['cats meowing'],
     ['cats in the cradle'],
     ['cats eat mice'],
     ['cats in the cradle lyrics'],
     ['cats eat kibble'],
     ['cats for adoption'],
     ['cats are family'],
     ['cats eat mice'],
     ['cats are evil'],
     ['cats are weird'],
     ['cats eat mice']
     ]
     );
  chartsData.wordtree.chart = new google.visualization.WordTree(document.getElementById('wordtree'));
  chartsData.wordtree.options = {
     wordtree: {
     format: 'implicit',
     maxFontSize: 5,
     word: 'cats'
     }
     };

}

function AddNamespaceHandler(){
  var svg = jQuery('#donutchart svg');
  svg.attr("xmlns", "http://www.w3.org/2000/svg");
  svg.css('overflow','visible');
}


function drawCharts() {
  jQuery('.chartcontainer').each(function() {
    var id = jQuery(this).attr('id');
    if (chartsData[id]) {
      google.visualization.events.addListener(chartsData[id].chart, 'ready', function AddNamespaceHandler(){
            var svg = jQuery('#' + id +' svg');
            svg.attr("xmlns", "http://www.w3.org/2000/svg");
            svg.css('overflow','visible');
        });   
      if (chartsData[id].animation != null) {
        setInterval(chartsData[id].animation, chartsData[id].animationInterval);
      }
      chartsData[id].chart.draw(chartsData[id].data, chartsData[id].options);
    }
  });
}