/*   Crea un componente que reciba un número, determine si es par o impar, y devuelva un h2 con el texto "El número [x] es par/impar". */

const IsEvenOrOdd = ({ number }) => {
	if (number % 2 === 0) {
		return <h2>El número {number} es par</h2>;
	} else {
		return <h2>El número {number} es impar</h2>;
	}
};

export default IsEvenOrOdd;
