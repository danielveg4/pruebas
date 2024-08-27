/* Crea un componente que reciba un nombre y un apellido, y devuelva un h2 con el nombre completo */

const FirstComponent = ({ name, surname }) => {
	console.log(`el nombre es ${name} y el apellido es ${surname}`);
	return (
		<h2>
			{name} {surname}
		</h2>
	);
};

export default FirstComponent;
