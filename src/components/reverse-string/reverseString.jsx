/*   Crea un componente que reciba una cadena de texto, la invierta, y devuelva un h2 con el texto invertido. */

const ReverseString = ({ phrase }) => {
	const phraseSplit = phrase.split('');
	const phraseReversed = phraseSplit.reverse();
	return <h2>{phraseReversed}</h2>;
};

export default ReverseString;
