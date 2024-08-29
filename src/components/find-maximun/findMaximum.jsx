/*  Crea un componente que reciba un array de números, encuentre el valor máximo, 
y devuelva un h2 con el texto "El número más alto de la lista [...] es [X]." */

const FindMaximun = ({ numbers }) => {
	const areAllNumbers = validateNumbers(numbers);
	const maxNumber = Math.max(...numbers);
	return (
		<h2>
			El número más alto de la lista {numbers} es {maxNumber}.
		</h2>
	);
};

const validateNumbers = numbers => {
	const areAllNumbers = numbers.every(number => typeof number === 'number');
	return areAllNumbers;
};

export default FindMaximun;
