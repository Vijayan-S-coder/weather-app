async  function getWeather(){
    const city = document.getElementById("city_input").value;
    const apiKey = "config.apiKey";
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid = ${apiKey}&units=metric';
    
    loader.style.display = "block";
    result.style.display = "none";

    try{
        const response = await fetch(url);
        const data = await response.json();
        if (data.cod === 200){
            const result = `
            <p><strong>City: </strong?${data.name}</p>
            <p><strong>Temperature: </strong>${data.main.temp} deg C</p>
            <p><strong>Humidity: </strong>${data.main.humidity}%</p>
            <p><strong>Weather: </strong>${data.main.weather[0].description}
            </p>`;
            document.getElementById("weather_result").innerHTML = result;
            

        }
        else{
            document.getElementById("weather_result").innerHTML = "<p> City not found </p>";
        }
    }
    catch(error){
        document.getElementById("weather_result").innerHTML = "<p>Error </p>";
    }

}
