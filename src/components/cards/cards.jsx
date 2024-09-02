import Card from '../card/Card';
import styles from './cards.module.css';

const CARDS = {
	card1: {
		id: 1,
		title: 'SEDANS',
		text: 'Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip.',
		backgroundColor: 'var(--bright-orange)',
		img: 'sedans.svg'
	},
	card2: {
		id: 2,
		title: 'SUVS',
		text: 'Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures.',
		backgroundColor: 'var(--dark-cyan)',
		img: 'suvs.svg'
	},
	card3: {
		id: 3,
		title: 'LUXURY',
		text: 'Cruise in the best car brands without the hefty price tag. Enjoy the enhanced comfort of a luxury rental and arrive in style.',
		backgroundColor: 'var(--very-dark-cyan)',
		img: 'luxury.svg'
	}
};

const Cards = () => {
	return (
		<div className={styles.container}>
			<Card
				title={CARDS.card1.title}
				text={CARDS.card1.text}
				backgroundColor={CARDS.card1.backgroundColor}
				img={CARDS.card1.img}
			/>
			<Card
				title={CARDS.card2.title}
				text={CARDS.card2.text}
				backgroundColor={CARDS.card2.backgroundColor}
				img={CARDS.card2.img}
			/>
			<Card
				title={CARDS.card3.title}
				text={CARDS.card3.text}
				backgroundColor={CARDS.card3.backgroundColor}
				img={CARDS.card3.img}
			/>
		</div>
	);
};

export default Cards;
