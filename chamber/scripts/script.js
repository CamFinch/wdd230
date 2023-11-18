window.onload = function (){
    GetYear()
    
    
}

function GetYear(){
    const year = new Date().getFullYear();
    document.getElementById("full-year").innerText = year;

    var lastMod = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last Modified: " + lastMod;

    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.main-nav');


    hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
    });

    const body = document.querySelector('body');
    const toggleSwitch = document.querySelector('#togglSwitch');

    toggleSwitch.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
    })
    getNumVisits();
    lastVisited();
    getTimeStamp();
    getCompanies();

    
    
}
