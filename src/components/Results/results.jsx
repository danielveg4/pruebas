import styles from './results.module.css';

const Results = ({ title, number, color, icon }) => {
	return (
		<div className={styles.div}>
			<img src={icon} alt={title} className={styles.icon} />
			<h3 className={`${styles.title} ${styles[`title-${color}`]}`}>{title}</h3>
			<div className={styles.numbers}>
				<span>{number}</span>
				<span>/100</span>
			</div>
		</div>
	);
};

export default Results;
