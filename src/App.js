//import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { createUseStyles } from "react-jss";
import Navbar from "./components/Navbar";
import Inicio from "./components/Inicio";
import BottomNavbar from "./components/BottomNavbar";
import SectionList from "./components/SectionList";
import ShopCart from "./components/ShopCart";
import { useState } from "react";
import DisplayFullItem from "./components/DisplayFullItem";

function App() {
	const [apiSection, setApiSection] = useState("character");
	const classes = useStyles();

	const [currentItem, setCurrentItem] = useState({});

	const handleSetNewSection = (url) => {
		console.log("App - newSection", url);
		setApiSection(url);
	};
	const handleSelectItem = (item) => {
		console.log("App - selectedItem", item);
		setCurrentItem(item);
	};

	return (
		<div className={classes.viewport}>
			<Router>
				<Navbar onSelect={(selected) => handleSetNewSection(selected)} />
				<div className={classes.container}>
					<Switch>
						<Route exact path='/'>
							{/**
							 *  Componente Inicio (Instrucciones, presentación)
							 */}
							<Inicio />
						</Route>
						<Route exact path='/catalog'>
							{/**
							 * Componente Sectionlist    apiSection = {apiSection}
							 *
							 * Componente FullItem   item = {item}
							 */}
							<SectionList
								onSelect={(item) => handleSelectItem(item)}
								apiSection={apiSection}
								pageLimit={3}
								dataLimit={4}
							/>
							<DisplayFullItem data={currentItem} />
						</Route>
						<Route exact path='/cart'>
							{/**
							 *  Componente Cart (Store de redux)
							 */}
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
		width: "100%",
		fontFamily: "sans-serif",
		color: "lightGray",
	},
	container: {
		width: "80%",
		height: "100%",
		minHeight: "75vh",
		alignItems: "center",
		justifyContent: "left",
		margin: "auto",
		textAlign: "center",
		padding: "5vh 0",
	},
});

export default App;
