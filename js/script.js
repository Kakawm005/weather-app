


async function buscarClima() {
    const cidade = document.getElementById('response').value;

    const resposta_cidade = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=1&language=pt&format=json`);
    const dados_cidade = await resposta_cidade.json();

    const weather_resposta = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${dados_cidade.results[0].latitude}&longitude=${dados_cidade.results[0].longitude}&current=temperature_2m,rain,relative_humidity_2m,wind_speed_10m`);
    const weather_dados = await weather_resposta.json();

    document.getElementById("city").textContent = `${cidade} - ${dados_cidade.results[0].admin1}`;
    document.getElementById("temp").textContent = `${weather_dados.current.temperature_2m}°c`;
    document.getElementById("humidity").textContent = `${weather_dados.current.relative_humidity_2m}%`;
    document.getElementById("windspeed").textContent = `${weather_dados.current.wind_speed_10m} km/h`;
    document.getElementById('response').textContent = "";

    if (weather_dados.current.temperature_2m >= 30) {
        document.getElementById("img_weather").textContent = "images/clear.png"
    } else if (weather_dados.current.temperature_2m >= 25) {
        document.getElementById("img_weather").textContent = "images/clear.png"
    } else if (weather_dados.current.temperature_2m >= 20) {
        document.getElementById("img_weather").textContent = "images/clouds.png"
    } else if (weather_dados.current.temperature_2m >= 15) {
        document.getElementById("img_weather").textContent = "images/drizzle.png"
    } else {
        // Muito frio
    }
}
