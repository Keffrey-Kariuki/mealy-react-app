import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './App.css';
import Home from '../home/Home';
import Login from '../auth/login/Login';
import Create from '../auth/create/Create';
import Order from '../order/Order';
import Profile from '../profile/Profile';

function App() {

	return (
		<div className="App">
			<BrowserRouter>
				<header>
					<nav>
						<h1 onClick={()=> document.location='/'}>
							<span className='M'>M</span><span className='E'>E</span><span className='A'>A</span><span className='L'>L</span><span className='M'>Y</span>
						</h1>
						<NavLink to="/login">Login</NavLink>
					</nav>	  
				</header>
				<main>
					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/create' element={<Create />} />
						<Route path='/order' element={<Order />} />
						<Route path='/profile' element={<Profile />}/>
					</Routes>
				</main>
			</BrowserRouter>
		</div>
	);
}

export default App;