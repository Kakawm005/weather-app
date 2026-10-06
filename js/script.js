


async function buscarClima(cidade) {
//    const url_geocoding = `https://geocoding-api.open-meteo.com/v1/search?name=${cidade}&count=10&language=pt-br&format=json`
    const latitude = -23.52;
    const longitude = -46.64;    
    const url_weather = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m`;
    document.getElementById("response").textContent = url_geocoding;
    const resposta = await fetch(url_weather);
    document.getElementById("response").textContent = resposta;
    const dados = await resposta.json();
    document.getElementById("response").textContent = dados.current.temperature_2m;

    return url_geocoding
}

document.getElementsByClassName("temp") = "adsasd"