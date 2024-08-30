/* Crea un componente que reciba un array de cadenas de texto de diferente longitud, encuentre la cadena más larga, y devuelva un h2 
con el texto "De las palabras [...] [x] es la más larga */

const FindLongestString = ({ words }) => {
	const longestWord = getLongestWord(words);
	return (
		<h2>
			De las palabras &quot;{words.join(', ')}&quot; {longestWord} es la más
			larga
		</h2>
	);
};

const getLongestWord = words => {
	let longestWord = '';
	for (const word of words) {
		if (word.length < longestWord.length) {
			longestWord = word;
		}
	}
	return longestWord;
};

export default FindLongestString;
