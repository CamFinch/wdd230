window.onload = function (){
    GetWeather();

    
}

function GetWeather(){
    const curtemp = document.querySelector('#temp');
    const curhumid = document.querySelector('#humidity')
    const feelslike = document.querySelector('#feels-like');
    const press = document.querySelector('#pressure');
    const max = document.querySelector('#high');
    const min = document.querySelector('#low');
    const weathericon = document.querySelector('#icon');
    const weathercaption = document.querySelector('#description');
    const highTopBanner = document.querySelector('#high-top');

    const url1 = 'https://api.openweathermap.org/data/2.5/weather?lat=20.428797&lon=-86.912352&units=imperial&appid=726cb028fd26e8afc97d193f720b5cee';


    async function apiFetch(){
        try{
            const response = await fetch(url1);
            if(response.ok){
                const data = await response.json();
                console.log(data);
                displayWeather(data);
            } else{
                throw Error(await response.text());
            }
        } catch(error){
            console.log(error);

        }
    }


    apiFetch();


    function displayWeather(data){
        curtemp.innerHTML = `${data.main.temp}&deg;F`;
        curhumid.innerHTML = `${data.main.humidity}%`
        feelslike.innerHTML = `${data.main.feels_like}&deg;F`;
        max.innerHTML = `${data.main.temp_max}&deg;F`;
        min.innerHTML = `${data.main.temp_min}&deg;F`
        press.innerHTML = `${data.main.pressure}`;
        const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
        let desc = data.weather[0].description;
        weathericon.setAttribute('src', iconsrc);
        weathericon.setAttribute('width', 50);
        weathercaption.innerHTML = `${desc}`;
        highTopBanner.innerHTML = `${data.main.temp_max}&deg;F`;
    }

    const forecasturl = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.428797&lon=-86.91235&units=imperial&appid=726cb028fd26e8afc97d193f720b5cee';
    const futuretemp = document.querySelector('#future-temp');
    async function apiFetch2(){
        try{
            const response = await fetch(forecasturl);
            if(response.ok){
                const data = await response.json();
                console.log(data);
                displayForecast(data);
            } else{
                throw Error(await response.text());
            }
        } catch(error){
            console.log(error);

        }
    }
    apiFetch2();

    function displayForecast(data){
        futuretemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
        
    }
};

                        