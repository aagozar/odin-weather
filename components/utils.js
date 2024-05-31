const weatherCodeColors = {
	// Gruppo 2xx: Temporale
	200: "bg-gradient-to-r from-[#536976] to-[#292E49]", // Temporale con pioggia leggera
	201: "bg-gradient-to-r from-[#536976] to-[#292E49]", // Temporale con pioggia
	202: "bg-gradient-to-r from-[#536976] to-[#292E49]", // Temporale con pioggia intensa
	210: "bg-gradient-to-r from-[#536976] to-[#292E49]", // Temporale leggero
	211: "bg-gradient-to-r from-[#536976] to-[#292E49]", // Temporale
	212: "bg-gradient-to-r from-[#536976] to-[#292E49]", // Temporale forte
	221: "bg-gradient-to-r from-[#536976] to-[#292E49]", // Temporale irregolare
	230: "bg-gradient-to-r from-[#536976] to-[#292E49]", // Temporale con pioggerella leggera
	231: "bg-gradient-to-r from-[#536976] to-[#292E49]", // Temporale con pioggerella
	232: "bg-gradient-to-r from-[#536976] to-[#292E49]", // Temporale con pioggerella intensa

	// Gruppo 3xx: Pioggerella
	300: "bg-gradient-to-r from-[#314755] to-[#26a0da]", // Pioggerella leggera
	301: "bg-gradient-to-r from-[#314755] to-[#26a0da]", // Pioggerella
	302: "bg-gradient-to-r from-[#314755] to-[#26a0da]", // Pioggerella intensa
	310: "bg-gradient-to-r from-[#314755] to-[#26a0da]", // Pioggia leggera e pioggerella
	311: "bg-gradient-to-r from-[#314755] to-[#26a0da]", // Pioggia e pioggerella
	312: "bg-gradient-to-r from-[#314755] to-[#26a0da]", // Pioggia intensa e pioggerella
	313: "bg-gradient-to-r from-[#314755] to-[#26a0da]", // Pioggia e pioggerella con rovesci
	314: "bg-gradient-to-r from-[#314755] to-[#26a0da]", // Pioggia intensa e pioggerella con rovesci
	321: "bg-gradient-to-r from-[#314755] to-[#26a0da]", // Rovesci di pioggerella

	// Gruppo 5xx: Pioggia
	500: "bg-gradient-to-r from-[#283048] to-[#859398]", // Pioggia leggera
	501: "bg-gradient-to-r from-[#283048] to-[#859398]", // Pioggia moderata
	502: "bg-gradient-to-r from-[#283048] to-[#859398]", // Pioggia intensa
	503: "bg-gradient-to-r from-[#283048] to-[#859398]", // Pioggia molto intensa
	504: "bg-gradient-to-r from-[#283048] to-[#859398]", // Pioggia estrema
	511: "bg-gradient-to-r from-[#283048] to-[#859398]", // Pioggia congelante
	520: "bg-gradient-to-r from-[#283048] to-[#859398]", // Rovesci di pioggia leggera
	521: "bg-gradient-to-r from-[#283048] to-[#859398]", // Rovesci di pioggia
	522: "bg-gradient-to-r from-[#283048] to-[#859398]", // Rovesci di pioggia intensa
	531: "bg-gradient-to-r from-[#283048] to-[#859398]", // Rovesci irregolari di pioggia

	// Gruppo 6xx: Neve
	600: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Neve leggera
	601: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Neve
	602: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Neve intensa
	611: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Nevischio
	612: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Rovesci di nevischio leggeri
	613: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Rovesci di nevischio
	615: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Pioggia leggera e neve
	616: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Pioggia e neve
	620: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Rovesci di neve leggeri
	621: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Rovesci di neve
	622: "bg-gradient-to-r from-[#fff1eb] to-[#ace0f9]", // Rovesci di neve intensi

	// Gruppo 7xx: Atmosfera
	701: "bg-gradient-to-r from-[#E6DADA] to-[#274046]", // Nebbia leggera
	711: "bg-gradient-to-r from-[#E6DADA] to-[#274046]", // Fumo
	721: "bg-gradient-to-r from-[#E6DADA] to-[#274046]", // Foschia
	731: "bg-gradient-to-r from-[#E6DADA] to-[#274046]", // Sabbia/Polvere
	741: "bg-gradient-to-r from-[#E6DADA] to-[#274046]", // Nebbia
	751: "bg-gradient-to-r from-[#E6DADA] to-[#274046]", // Sabbia
	761: "bg-gradient-to-r from-[#E6DADA] to-[#274046]", // Polvere
	762: "bg-gradient-to-r from-[#E6DADA] to-[#274046]", // Cenere vulcanica
	771: "bg-gradient-to-r from-[#E6DADA] to-[#274046]", // Burrasca
	781: "bg-gradient-to-r from-[#E6DADA] to-[#274046]", // Tornado

	// Gruppo 800: Sereno
	800: "bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6]", // Cielo sereno

	// Gruppo 80x: Nuvole
	801: "bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6]", // Poche nuvole (11-25%)
	802: "bg-gradient-to-r from-[#2BC0E4] to-[#EAECC6]", // Nuvole sparse (25-50%)
	803: "bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]", // Nuvolosità parziale (51-84%)
	804: "bg-gradient-to-r from-[#bdc3c7] to-[#2c3e50]", // Cielo coperto (85-100%)
};

function getWeatherColor(code) {
	return weatherCodeColors[code];
}

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export { getWeatherColor, delay };
