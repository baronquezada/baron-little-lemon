import {Navbar, Nav, Container} from 'react-bootstrap';
import {Outlet, Link} from "react-router-dom";
import logo from '../images/letas.png';

const NavbarBooking = () => {
    return (
        <div className="myNavbar">
            <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
				<Container>
					<Navbar.Brand as={Link} to="/"><img src={logo} alt="Logo" /></Navbar.Brand>
					<Navbar.Toggle aria-controls="responsive-navbar-nav" />
					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link as={Link} to="/">Home</Nav.Link>
							<Nav.Link as={Link} to="/booking">Booking</Nav.Link>
							<Nav.Link as={Link} to="/profile">Profile</Nav.Link>
						</Nav>
					</Navbar.Collapse>
				</Container>
			</Navbar>

			<section>
				<Outlet></Outlet>
			</section>
        </div>
  	)
}
export default NavbarBooking;