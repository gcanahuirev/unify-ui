<template>
<table id="ranking" style="width: 90%;">
    <thead>
        <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Foto</th>
            <th>Canción</th>
            <th>Fecha de subida</th>
            <th>Downloads</th>
            <th>Ganancia</th>
        </tr>
    </thead>
    <tbody></tbody>
</table>
</template>
<style>
table {
  font-family: 'Open Sans', sans-serif;
  width: 750px;
  border-collapse: collapse;
  border: 3px solid #44475C;
  margin: 10px 10px 0 10px;
}

table th {
  text-transform: uppercase;
  text-align: center;
  background: #44475C;
  color: #FFF;
  padding: 8px;
  min-width: 30px;
}

table td {
  text-align: left;
  padding: 8px;
  border-right: 2px solid #7D82A8;
}
table td:last-child {
  border-right: none;
}
table tbody tr:nth-child(2n) td {
  background: #D4D8F9;
}
img{
  clip-path: circle()
}
</style>
<script>
function imageExists(image_url){
    var http = new XMLHttpRequest();
    http.open('HEAD', image_url, false);
    http.send();
    return http.status != 404;

}

function generateRanking(table, data) {
  data.sort(function (a, b) {
    if (a.revenue > b.revenue) {
      return -1;
    }
    if (a.revenue < b.revenue) {
      return 1;
    }
    // a must be equal to b
    return 0;
  })
  const assetsFolder = "src/assets/";
  for (let element of data) {
    element.revenue = Number(element.revenue).toFixed(2);
    let row = table.insertRow();
    let cell = row.insertCell();
    let text = document.createTextNode(table.rows.length);
    cell.appendChild(text);
    for (let key in element) {
      let cell = row.insertCell();
      
      if (key == "revenue") {
        var span = document.createElement('span');
        let text = document.createTextNode('$' + element[key]);
        span.appendChild(text);
        span.style.color = 'green';
        cell.appendChild(span);
      } else {
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
      
      if (key == "name") {
        let cell = row.insertCell();
        var img = document.createElement('img');
        if (imageExists(assetsFolder + element[key] + ".png")) {
          img.src = assetsFolder + element[key] + ".png";
        } else {
          img.src = assetsFolder + "none.png";
        }
        img.style.height = '50px';
        img.style.width = '50px';
        img.class="circular";
        cell.appendChild(img);
      }
    }
  }
}
export default {
  mounted() {
    let ranking = [
      {name: "James Arthur", song: "Empty Space", date: "26/02/2021", downloads: 305, revenue: 6.6},
      {name: "JP Cooper", song: "Sing It With Me", date: "24/08/2021", downloads: 27, revenue: 0.37},
      {name: "Phil Collins", song: "Gone, Gone, Gone", date: "30/05/2019", downloads: 63, revenue: 3.39},
      {name: "Lewis Capaldi", song: "Someone You Loved", date: "17/08/2020", downloads: 21, revenue: 15.00},
    ];
    let table = document.getElementById("ranking").getElementsByTagName('tbody')[0];
    generateRanking(table, ranking);
  }
}
</script>
