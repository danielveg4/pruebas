/* Crea un componente que reciba dos números, una base y un exponente, y devuelva un h2 con el texto "[x] elevado a [y] es [n]." */

const CalculatePower = ({ base, exponente }) => {
	const exponencial = Math.pow(base, exponente);
	return (
		<h2>
			{base} elevado a {exponente} es {exponencial}
		</h2>
	);
};

export default CalculatePower;
