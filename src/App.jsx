import FirstComponent from './components/first-component/firstComponent';
import WriteBookInfo from './components/write-book-info/writeBookInfo';

const App = () => {
	return (
		<>
			<h1>PRUEBAS</h1>
			<FirstComponent name='daniel' surname='vega' />
			<WriteBookInfo />
		</>
	);
};

export default App;
