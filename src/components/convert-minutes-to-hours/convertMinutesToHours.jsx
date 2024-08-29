/* Crea un componente que reciba una cantidad de minutos, 
los convierta a horas y minutos y devuelva un h2 con el resultado. 
(por ejemplo, 130 minutos son 2 horas y 10 minutos) */

const ConvertMinutesToHours = ({ minutes }) => {
	// minutos que recibe = 160
	if (typeof minutes !== 'number') {
		return <p>Error!</p>;
	}
	const totalMinutes = convertMinutes(minutes);

	return (
		<h2>
			{minutes} minutos son en realidad {totalMinutes}
		</h2>
	);
};

const convertMinutes = minutes => {
	const hours = Math.floor(minutes / 60);
	const minutesLeft = minutes - hours * 60;
	return `${hours} horas y ${minutesLeft} minutos`;
};

export default ConvertMinutesToHours;
