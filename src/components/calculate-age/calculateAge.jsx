/* Crea un componente que reciba una fecha de nacimiento y calcule la edad en años, devolviendo un h2 con el texto 
"Si naciste el día dd/mm/aaaa tienes X años */

const CalculateAge = ({ date }) => {
	const year = new Date();
	console.log(year.getFullYear());
	return <h2>Si naciste el día {date} tienes X años</h2>;
};

export default CalculateAge;
