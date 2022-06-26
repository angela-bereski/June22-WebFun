function removecookie(element) {
    console.log("cookiebar removed");
    var cookiebar = document.querySelector(".cookiebar");
    cookiebar.remove();
}

function cityalert() {
    console.log("alert ran")
    alert("Loading weather report...")
}



function tempconvert() {
    console.log("option selected");
    var temps = document.getElementsByClassName("num");
    Array.from(temps).forEach(element => {
        if (document.getElementById("scale").value == "fahrenheit") {
            element.innerHTML= Math.round((parseInt(element.innerHTML)*9/5) +32);
        }
        else if (document.getElementById("scale").value == "celcius") {
            element.innerHTML= Math.round((parseInt(element.innerHTML)-32) *5/9);
        }
        }
    );
}