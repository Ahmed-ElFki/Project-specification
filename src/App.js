import { Route } from "react-router";
import Home from "../src/components/Home";
import "./css/App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Cart from "./components/Cart";

const App = () => {
	return (
		<Router>
			<Route exact path='/' component={Home} />
			<Route path='/Cart' component={Cart} />
		</Router>
	);
};

export default App;
