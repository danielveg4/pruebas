/* Crea un componente que reciba una cantidad de minutos, 
los convierta a horas y minutos y devuelva un h2 con el resultado. 
(por ejemplo, 130 minutos son 2 horas y 10 minutos) */

const ConvertMinutesToHours = ({ minutes }) => {
	// minutos que recibe = 160
	const hours = Math.trunc(minutes / 60);
	const minutesLeft = minutes - hours * 60;

	return (
		<h2>
			{minutes} minutos son en realidad {hours} horas y {minutesLeft} minutos
		</h2>
	);
};

export default ConvertMinutesToHours;
