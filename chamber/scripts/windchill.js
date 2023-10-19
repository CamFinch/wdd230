
function getWindChill(){
    const temp = document.querySelector('#temp');
    const windspeed = document.querySelector('#wind');
    

    if(temp > 49 && windspeed > 3){
        var chill = (35.74 + 0.6215(temp) -35.75(windspeed)**0.16 + 0.4275(windspeed)**0.16);
        document.getElementById('windchill').innerHTML = "Wind Chill:" + chill;
    }
    else{
        document.getElementById('windchill').innerHTML = "Wind Chill: N/A";
    }
    
}