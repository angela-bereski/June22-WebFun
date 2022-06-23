console.log("script connected")

var myname= document.querySelector(".name");

function namechange(element) {
    console.log("link clicked, name changed")
    myname.innerText= "Programmer Ang"
}

var todd= document.querySelector(".col3");
var i=2;
var less= document.querySelector(".subtract");

function lessconnecttodd(element) {
    todd.remove();
    i--;
    less.innerHTML=i;
}

var phil= document.querySelector(".col5");

function lessconnectphil(element) {
    phil.remove();
    i--;
    less.innerHTML=i;
}

var a=500;
var more= document.querySelector(".add");

function moreconnecttodd(element) {
    todd.remove();
    i--;
    less.innerHTML=i;
    a++;
    more.innerHTML=a;
}

function moreconnectphil(element) {
    phil.remove();
    i--;
    less.innerHTML=i;
    a++;
    more.innerHTML=a;
}