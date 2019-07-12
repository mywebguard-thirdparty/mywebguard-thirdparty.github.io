alert(4);
alert(5);
var fromStorage = JSON.parse(localStorage.getItem('test'));
alert("This was retrieved from script.js"+fromStorage);