import { v4 } from 'uuid';
import CARDS_INFO from '../../constants/cards-info';
import Card from '../card/card';
import styles from './cards.module.css';

const Cards = () => {
	return (
		<div className={styles.div}>
			<h2 className={styles.title}>Soy todas las cards</h2>;
			{CARDS_INFO.map(card => (
				<Card
					key={v4()}
					title={card.title}
					text={card.text}
					img={card.img}
					color={card.color}
				/>
			))}
		</div>
	);
};

export default Cards;
