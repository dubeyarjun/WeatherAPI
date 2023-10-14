async function Wclick() {
    var city = document.getElementById('city');
    // console.log(city.value); 

    const url = 'https://open-weather13.p.rapidapi.com/city/' + city.value;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '2e91498ee0msh7721fd77d290299p1265f0jsn98201e260489',
            'X-RapidAPI-Host': 'open-weather13.p.rapidapi.com'
        }
    };

    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const jsonObject = JSON.parse(result);
        console.log(jsonObject);
        const weatherDescription = jsonObject.weather[0].main.toLowerCase();
        const imageSrc =
            weatherDescription === 'clear' ? 'sun.jpg' :
                weatherDescription === 'rainy' ? 'rain.jpg' :
                    'smoke.jpg';

        const imageElement = `<img style="  
           margin-top: -150px;
        width: 10%;
        height: 16%;
        border-radius: 10px;        
        margin-left: 38%;        
        position: absolute;
        
        
           " 
          src="${imageSrc}" alt="Weather Image">`;
        var card = `
        <div style="
        display: flex;
        flex-direction: column;
        border: 1px solid #000;
        width: 50%;
        justify-content: center;
        align-items: center;
        color: white;
        line-spacing:1px;
        font-size: 15px;        
        border-radius: 10px;
        background-color: red;
        ">
        <p>Name:${jsonObject.name}</p>        
        <p>Weather:${jsonObject.weather[0].main},${jsonObject.weather[0].description}</p>
        <p>Temperature:${jsonObject.main.temp}</p>
        <p>Wind:${jsonObject.wind.speed}</p>
        <p>Country:${jsonObject.sys.country}</p>
        <p>Clouds:${jsonObject.clouds.all}</p>
          ${imageElement}
        </div>
         `
        var finalcard = document.getElementById('finalcard');
        finalcard.innerHTML = card;

    } catch (error) {
        console.error(error);
    }
}

