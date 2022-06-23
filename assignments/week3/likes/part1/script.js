console.log("script attached");

var i=3;
var numlikes= document.querySelector(".numlikes");

function clickforlikes(element) {
    console.log("button for likes clicked");
    i++;
    numlikes.innerHTML=i;
}