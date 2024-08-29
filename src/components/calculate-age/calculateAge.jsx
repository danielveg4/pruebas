/* Crea un componente que reciba una fecha de nacimiento y calcule la edad en años, devolviendo un h2 con el texto 
"Si naciste el día dd/mm/aaaa tienes X años */

const CalculateAge = ({ date }) => {
	const age = getAge(date);
	return (
		<h2>
			Si naciste el día {date} tienes {age} años
		</h2>
	);
};

const getAge = date => {
	const now = new Date();
	const birth = new Date(date);

	let age = now.getFullYear() - birth.getFullYear();

	const monthDifferente = now.getMonth() - birth.getMonth();
	const dayDifference = now.getDay() - birth.getDay();

	if (monthDifferente < 0 || (monthDifferente === 0 && dayDifference < 0)) {
		age--;
	}

	return age;
};

export default CalculateAge;
