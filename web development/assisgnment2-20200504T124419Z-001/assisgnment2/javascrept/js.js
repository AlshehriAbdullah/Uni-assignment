// JavaScript Document
var msgerror = "";

function formvali () {
var uname = document.getElementById("uname").value;
var pass = document.getElementById("pass").value;
var cpass = document.getElementById("cpass").value;
var email= document.getElementById("email").value;
var emailformat = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
var genm = document.getElementById("genm").checked;
var genf = document.getElementById("genf").checked;
/*var cb1 = document.reg.va1.value;
var cb2 = document.reg.va2.value;
var cb3 = document.reg.va3.value;
var sel = document.reg.select.value;*/

 if ( uname == null || uname == ""){
	 msgerror += "Name can't be blank\n";
  }
	
if (email == null || email == ""){
msgerror += "email can't be blank\n";

}
else if (!emailformat.test(email)) {
	msgerror += "Please provide a valid email address\n";

}


if ( pass == null || pass == ""){
	msgerror += "password can't be blank\n";

}
else if (pass.length <= 8 ) {
	msgerror += "password must 9 or more\n";
}
if (cpass == null || cpass == ""){
	msgerror += "You should confirm password\n";

}
else if (cpass !== pass) {
	msgerror += "password and confirm password should be same\n";

}

if (genf==false && genm==false){
	msgerror += "Choose gender\n";
	
}
	
	if (msgerror !== "") 
		{
			alert(msgerror);
			msgerror="";
			return false;
		}
}
function init(){

var reg = document.getElementById("reg");
reg.onsubmit = formvali;

}
window.onload = init;
