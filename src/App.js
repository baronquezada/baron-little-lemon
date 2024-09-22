import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';
import Booking from './components/Booking';
import Home from './components/Home';
import NavbarBooking from './layouts/Navbar';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<NavbarBooking />}>
						<Route index element={<Home />} />
						<Route path='booking' element={<Booking />} />
						<Route path='profile' element={<Profile />} />
						<Route path='*' element={<Navigate replace to='/' />} />
					</Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
