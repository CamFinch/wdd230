window.onload = function (){
    GetYear()
    
}

function GetYear(){
    const year = new Date().getFullYear();
    document.getElementById("full-year").innerText = year;

    var lastMod = document.lastModified;
    document.getElementById("lastModified").innerHTML = "Last Modified: " + lastMod;
}

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');


hamButton.addEventListener('click', () => {
	navigation.classList.toggle('open');
	hamButton.classList.toggle('open');
});



