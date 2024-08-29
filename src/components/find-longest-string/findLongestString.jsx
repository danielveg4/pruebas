/* Crea un componente que reciba un array de cadenas de texto de diferente longitud, encuentre la cadena más larga, y devuelva un h2 
con el texto "De las palabras [...] [x] es la más larga */

const FindLongestString = ({ text }) => {
	const words = text.split(' ');
	for (let i = 0; i < words.length; i++) {
		console.log(words[i].length);
	}
	return <h2>De las palabras {text} [x] es la más larga</h2>;
};

export default FindLongestString;
