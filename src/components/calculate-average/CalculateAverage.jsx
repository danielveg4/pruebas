/*  Crea un componente que reciba un array de números, calcule la media, y devuelva un h2 con el texto 
"La media de los números [x],[y], [z] es [n] */

import { validateNumbers } from '../../utils/validateNumbers';

const CalculateAverage = ({ numbers }) => {
	const areAllNumbers = validateNumbers(numbers);
	if (!areAllNumbers) {
		return <p>Wrong data</p>;
	}

	const average = getAverage(numbers);

	return (
		<h2>
			La media de los números {numbers.join(', ')} es {average}.
		</h2>
	);
};

const getAverage = numbers => {
	const totalSum = numbers.reduce((sum, number) => sum + number);
	const average = totalSum / numbers.length;
	return average;
};

export default CalculateAverage;
