export const validateNumbers = numbers => {
	const areAllNumbers = numbers.every(number => typeof number === 'number');
	return areAllNumbers;
};