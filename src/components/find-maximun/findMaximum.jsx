/*  Crea un componente que reciba un array de números, encuentre el valor máximo, 
y devuelva un h2 con el texto "El número más alto de la lista [...] es [X]." */

const FindMaximun = ({ numbers }) => {
	const numbersArray = numbers.split(',');
	const maxNumber = Math.max(...numbersArray);
	return (
		<h2>
			El número más alto de la lista {numbers} es {maxNumber}.
		</h2>
	);
};

export default FindMaximun;
