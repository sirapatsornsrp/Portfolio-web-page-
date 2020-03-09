function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	// วิธีใช้ getParams()
	var parameter = getParams();
	console.log(parameter["username"]);
	console.log(parameter["password1"]);
	var clickbutton = document.getElementById("myLogin");
    clickbutton.onsubmit = checkLogin;
}

function checkLogin(){
	var parameter = getParams();
	var a = document.forms["myLogin"]["username"].value;
	
	var b = document.forms["myLogin"]["password"].value;
	
	if(a==parameter["username"]&&b==parameter["password1"]){
		alert("true");
	}
	else{
		alert("false");
		return false;
	}
	//ถ้าตรวจสอบแล้วพบว่ามีการ login ไม่ถูกต้อง ให้ return false ด้วย
}

			