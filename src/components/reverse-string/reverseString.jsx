/*   Crea un componente que reciba una cadena de texto, la invierta, y devuelva un h2 con el texto invertido. */

const ReverseString = ({ phrase }) => {
	if (typeof phrase !== 'string') {
		return <p>Error</p>;
	}

	const phraseSplit = phrase.split('');
	const phraseReversed = phraseSplit.reverse().join('');
	return <h2>{phraseReversed}</h2>;
};

export default ReverseString;
