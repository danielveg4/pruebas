/* Crea un componente que reciba un nombre y un apellido, y devuelva un h2 con el nombre completo */

const FirstComponent = ({ name = 'Nombre', surname = 'Apellido' }) => {
	if (!name || !surname) return <p>Wrong data</p>;
	return (
		<h2>
			{name} {surname}
		</h2>
	);
};

export default FirstComponent;
