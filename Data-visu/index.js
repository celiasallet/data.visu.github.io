var tableId = document.getElementById('table1');
var tBody = tableId.getElementsByTagName('tbody')[0];
var tableRow = tBody.getElementsByTagName('tr');

for (var t = 0; t < tableRow.length; t++){
    console.log(tableRow[t].innerHTML)
}