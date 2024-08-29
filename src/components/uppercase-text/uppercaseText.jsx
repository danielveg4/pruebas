/* Crea un componente que reciba una cadena de texto, la convierta a mayúsculas, y devuelva un h2 con el texto en mayúsculas. */

const UppercaseText = ({ text }) => {
	return <h2>{text.toUpperCase()}</h2>;
};

export default UppercaseText;
