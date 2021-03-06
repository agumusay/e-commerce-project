import logo from './logo.svg';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Productlist from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
	return (
		<>
			<Navbar>
				<h3>Hello From Navbar</h3>
			</Navbar>
			<Switch>
				<Route exact path='/' component={Productlist}></Route>
				<Route path='/details' component={Details}></Route>
				<Route path='/cart' component={Cart}></Route>
				<Route component={Default}></Route>
			</Switch>
		</>
	);
}

export default App;
