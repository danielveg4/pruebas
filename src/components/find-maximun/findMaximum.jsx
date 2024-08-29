/*  Crea un componente que reciba un array de números, encuentre el valor máximo, 
y devuelva un h2 con el texto "El número más alto de la lista [...] es [X]." */

import { validateNumbers } from '../../utils/validateNumbers';

const FindMaximun = ({ numbers }) => {
	const areAllNumbers = validateNumbers(numbers);
	if (!areAllNumbers) {
		return <p>Error!</p>;
	}
	const maxNumber = Math.max(...numbers);
	return (
		<h2>
			El número más alto de la lista &quot;{numbers.join(', ')}&quot; es{' '}
			{maxNumber}.
		</h2>
	);
};

export default FindMaximun;
