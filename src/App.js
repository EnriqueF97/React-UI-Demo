//import logo from "./logo.svg";
import "./App.css";
import Titulo from "./components/Titulo";
import CountDisplay from "./components/CountDisplay";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import BottomNavbar from "./components/BottomNavbar";
import SectionList from "./components/SectionList";
import ShopCart from "./components/ShopCart";

function App() {
	const classes = useStyles();
	return (
		<div className={classes.viewport}>
			<Router>
				<Navbar />
				<div className={classes.container}>
					<SectionList />
					<Switch>
						<Route exact path='/'>
							<Inicio />
						</Route>
						<Route exact path='/titulo'>
							<Titulo />
						</Route>
						<Route exact path='/count'>
							<CountDisplay />
						</Route>
						<Route exact path='/cart'>
							<ShopCart />
						</Route>
					</Switch>
				</div>
				<BottomNavbar />
			</Router>

			{/* <div className='App'>
			
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a className='App-link' href='https://reactjs.org' target='_blank' rel='noopener noreferrer'>
					Learn React
				</a>
			</header>
		</div> */}
		</div>
	);
}
const useStyles = createUseStyles({
	viewport: {
		backgroundColor: "#282c34",
		minHeight: "100vh",
		fontFamily: "sans-serif",
		color: "lightGray",
	},
	container: {
		width: "80%",
		minHeight: "70vh",
		margin: "auto",
		textAlign: "center",
		padding: "5vh 0",
	},
});

export default App;
