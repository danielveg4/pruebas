import styles from './card.module.css';

const Card = ({ title, text, img, color }) => {
	return (
		<div className={`${styles.div} ${styles[`div-${color}`]}`}>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.text}>{text}</p>
			<img className={styles.img} src={img} alt={title} />
		</div>
	);
};

export default Card;
