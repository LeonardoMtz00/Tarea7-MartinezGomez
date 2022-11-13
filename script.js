function loadDocGame() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    TableGame(this);
  }
  xhttp.open("GET", "actividad.xml");
  xhttp.send();
}
function TableGame(xml) {
  const xmlDoc = xml.responseXML;
  const x = xmlDoc.getElementsByTagName("game");
  let table="<tr><th>Modelo</th><th>Pantalla</th><th>Almacenamiento</th><th>Precio</th><th>Fecha de Lanzamiento</th></tr>";
  for (let i = 0; i <x.length; i++) { 
    table += "<tr><td>" +
    x[i].getElementsByTagName("tittle")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("industry")[0].childNodes[0].nodeValue +
    "</td><td>"+
    x[i].getElementsByTagName("study")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("price")[0].childNodes[0].nodeValue +
    "</td><td>" +
    x[i].getElementsByTagName("year")[0].childNodes[0].nodeValue +
    "</td>";
  }
  document.getElementById("demo").innerHTML = table;
}
