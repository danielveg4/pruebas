/* Crea un componente que reciba un nombre y una hora del día, y devuelva un h2 que diga 
"Buenos días/tardes/noches, [nombre]" dependiendo de la hora. */

const WriteGreeting = ({ name, hour }) => {
	if (!name || !hour) return <p>Data invalid!</p>;
	if (hour > 6 && hour < 14) {
		return <h2>Buenos días, {name}</h2>;
	} else if (hour >= 14 && hour < 21) {
		return <h2>Buenas tardes, {name}</h2>;
	} else {
		return <h2>Buenas noches, {name}</h2>;
	}
};

export default WriteGreeting;
