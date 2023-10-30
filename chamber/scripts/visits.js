function lastVisited(){
const lastVisitDate = Date.now();
const lastVisit = localStorage.setItem();
const display = document.querySelector("#last-visited");

    if(localStorage.getItem("lastVisit" == NULL)){
        localStorage.setItem(new Date())
        display.innerHTML = "WELCOME!"

    }
    else if(localStorage.getItem("lastVisit" <= 2)){
        display.innerHTML = "Welcome Back! That was quicK!";

    }
    else if(localStorage.getItem("lastVisist" <= 3)){
        display.innerHTML = "It's been a while!";
    }
}