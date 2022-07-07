import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import PublicIP from './components/PublicIP/PublicIP';
import PacketsInfo from './components/PacketsInfo/PacketsInfo';
import './App.css';



function App() {
	return (
		<div className="App">
			<Header />
			<Banner />
			<PublicIP />
			<PacketsInfo />
		</div>
	);
}

export default App;
