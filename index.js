import getWeatherColor from "./components/utils.js";

const API_KEY = "e3a5c6b612c645e8cbfc3859268ec981";

async function getWeatherData(location) {
	const weatherData = await fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			location +
			"&units=metric&appid=" +
			API_KEY
	);

	let data = await weatherData.json();
	return data;
}

document.getElementById("weather-form").addEventListener("submit", (e) => {
	e.preventDefault();
	const location = document.getElementById("location").value;
	getWeatherData(location).then((data) => {
		const weatherData = data;
		console.log(weatherData);

		document.getElementById("weather-results").innerHTML = `
		
		<div class="card w-96 bg-base-100 shadow-2xl glass">
			<div class="card-body items-center text-center">
				<h2 class="card-title font-bold">${weatherData.name}</h2>
				<figure><img src="https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="Shoes" /></figure>
				<p class="text-5xl">${weatherData.main.temp}°</p>
				<p class="font-bold">${weatherData.weather[0].main}, ${weatherData.weather[0].description}</p>
				<div class="flex">
					<p class="font-bold">MAX: ${weatherData.main.temp_max}°</p>
					&nbsp
					<p class="font-bold">MIN: ${weatherData.main.temp_min}°</p>
				</div>
				
			</div>
		</div>

		`;

		const body = document.querySelector("body");
		body.className = "";
		body.classList.add(`bg-${weatherData.weather[0].id}`);
		body.classList.add("h-screen");
		console.log(weatherData.weather[0].id);
	});
});
