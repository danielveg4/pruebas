const DisplayPersonInfo = ({ name, age, job }) => {
	if (!name || !age || !job) return <p>Error</p>;
	return (
		<h2>
			{name} tiene {age} años y es {job}
		</h2>
	);
};

export default DisplayPersonInfo;
