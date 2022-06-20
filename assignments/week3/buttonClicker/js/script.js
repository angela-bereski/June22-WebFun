function Logout(element) {
    console.log("element clicked", element);
    element.innerText = "Logout";
}
Logout(element)

function hide(element) {
    console.log("element clicked", element);
    element.remove();
}

function firstAlert() {
    alert("Ninja was liked")
    console.log("alert function ran")
}