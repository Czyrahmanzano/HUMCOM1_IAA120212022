function theForm(){
var fname;
var lname;
var Age;
var Num;
var Email;
var Add;
var Program;
var idNum;
var yrLvl;
var Sec;
fname = document.getElementById("firstname").value;
lname = document.getElementById("lastname").value;
Age = document.getElementById("age").value;
Num = document.getElementById("num").value;
Email = document.getElementById("email").value;
Add = document.getElementById("add").value;
Program = document.getElementById("prog").value;
idNum = document.getElementById("idnum").value;
yrLvl = document.getElementById("yrlvl").value;
Sec = document.getElementById("sec").value;

console.log('Given first name is ' + fname + ' and given last name is ' + lname+ ', Age is ' + Age+'.');
}

