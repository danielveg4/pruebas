import { v4 } from 'uuid';
import RESULTS_INFO from '../../constants/result-info';
import Results from '../Results/results';
import styles from './result.module.css';

// title, number, color, icon

const Result = () => {
	return (
		<div className={styles.div}>
			<h1 className={styles.h1}>Summary</h1>;
			{RESULTS_INFO.map(result => (
				<Results
					key={v4()}
					title={result.title}
					number={result.number}
					color={result.color}
					icon={result.icon}
				/>
			))}
		</div>
	);
};

export default Result;
