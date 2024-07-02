var tableId = document.getElementById('table1');
var tBody = document.getElementsByTagName('tbody');
var tableRow = document.getElementsByTagName('tr');

for (var t = 0; t < tableRow.length; t++) {
  var cells = tableRow[t].getElementsByTagName('td');
  var rowText = '';
  for (var c = 0; c < cells.length; c++) {
    rowText += cells[c].textContent.trim() + ' '; 
  }
  var headers = tableRow[t].getElementsByTagName('th');
  for (var h = 0; h < headers.length; h++) {
    rowText += headers[h].textContent.trim() + ' '; 
  }
  console.log(rowText.trim()); 
}