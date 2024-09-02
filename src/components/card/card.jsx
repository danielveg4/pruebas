import styles from './card.module.css';

const Card = ({ title, text, backgroundColor, img }) => {
	return (
		<div className={styles.container} style={{ backgroundColor }}>
			<img
				className={styles.img}
				style={{ backgroundColor }}
				src={`public/assets/images/icon-${img}`}
			></img>
			<h2 className={styles.title}>{title}</h2>
			<p className={styles.text}>{text}</p>
			<button className={styles.button} style={{ color: backgroundColor }}>
				Learnd More
			</button>
		</div>
	);
};

export default Card;
