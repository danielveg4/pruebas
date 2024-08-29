/* Crea un componente que reciba una cadena de texto, cuente el número de palabras que contiene, 
y devuelva un h2 con el texto "En la frase ... hay X palabras."" */

const CountWords = ({ text }) => {
	if (typeof text !== 'string') {
		return <p>Wrong data!</p>;
	}
	const numeroEspacios = text.split(' ').length;
	return (
		<h2>
			En la frase {text} hay {numeroEspacios} palabras
		</h2>
	);
};

export default CountWords;
