import CalculateAge from './components/calculate-age/calculateAge';
import CalculateAverage from './components/calculate-average/CalculateAverage';
import CalculatePower from './components/calculate-power/calculatePower';
import ConvertMinutesToHours from './components/convert-minutes-to-hours/convertMinutesToHours';
import CountWords from './components/count-words/countWords';
import FindLongestString from './components/find-longest-string/findLongestString';
import FindMaximun from './components/find-maximun/findMaximum';
import FirstComponent from './components/first-component/firstComponent';
import IsEvenOrOdd from './components/is-even-or-odd/isEvenOrOdd';
import ReverseString from './components/reverse-string/reverseString';
import UppercaseText from './components/uppercase-text/uppercaseText';
import WriteBookInfo from './components/write-book-info/writeBookInfo';
import WriteGreeting from './components/write-greeting/writeGreeting';

const App = () => {
	return (
		<>
			<h1>PRUEBAS</h1>
			<FirstComponent name='daniel' surname='vega' />
			<WriteBookInfo
				title='El mar'
				author='Gopegi'
				year='2019'
				genre='ficción'
			/>
			<ConvertMinutesToHours minutes={130} />
			<ReverseString phrase='una cadena de texto invertida' />
			<IsEvenOrOdd number={25} />
			<UppercaseText text='toma tu cadena de texto' />
			<WriteGreeting name='Daniel' hour={14} />
			<CalculatePower base={4} exponente={3} />
			<CountWords text='cuentame las palabras que hay' />
			<CalculateAge date='01/09/1991' />
			<FindMaximun numbers='1,3,5,7' />
			<CalculateAverage numbers='3,5,7' />
			<FindLongestString text='adivina cual es la palabra más largusima de todas' />
		</>
	);
};

export default App;
