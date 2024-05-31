const API_KEY = "e3a5c6b612c645e8cbfc3859268ec981";

async function getWeatherData(location) {
	const weatherData = await fetch(
		"https://api.openweathermap.org/data/2.5/weather?q=" +
			location +
			"&appid=" +
			API_KEY
	);

	let data = await weatherData.json();
	console.log(await data);
	return data;
}

getWeatherData("manila");
