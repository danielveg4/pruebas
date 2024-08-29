/*  Crea un componente que reciba un array de números, calcule la media, y devuelva un h2 con el texto 
"La media de los números [x],[y], [z] es [n] */

const CalculateAverage = ({ numbers }) => {
	const numbersArray = numbers.split(',').map(Number);
	let sumNumbers = 0;
	for (let i = 0; i < numbersArray.length; i++) {
		sumNumbers += numbersArray[i];
	}
	const media = sumNumbers / numbersArray.length;
	return (
		<h2>
			La media de los números {numbersArray[0]},{numbersArray[1]} y
			{numbersArray[2]} es {media}
		</h2>
	);
};

export default CalculateAverage;
