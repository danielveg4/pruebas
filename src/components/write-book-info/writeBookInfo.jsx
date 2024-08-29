/*   Crea un componente que reciba "title, author, year y genre" y devuelva un h2 con el texto: 
"El libro [title] fue escrito por [author] en el año [year]. Es un libro de [genre]." */

const WriteBookInfo = ({ title, author, year, genre }) => {
	if (!title || !author || !year || !genre) return <p>Wrong data!</p>;
	return (
		<h2>
			El libro {title} fue escrito por {author} en el año {year}. Es un libro de{' '}
			{genre}
		</h2>
	);
};

export default WriteBookInfo;
