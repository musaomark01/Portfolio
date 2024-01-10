import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';


export default function NavTab() {
    const currentPage = useLocation().pathname;
    function darkLightMode() {
        const isDarkMode = document.body.classList.toggle('dark-mode');
        document.querySelector('.custom-nav').classList.toggle('dark-mode');
        const navLinks = document.querySelectorAll('.nav-link');
        navLinks.forEach(link => {
            if (isDarkMode) {
                link.style.color = 'var(--text-color-dark)';
            } else {
                link.style.color = 'var(--text-color-light)';
            }
        });
        const navbarToggle = document.querySelector('.navbar-toggler-icon');
        if (isDarkMode) {
            navbarToggle.style.filter = 'invert(1)';
        } else {
            navbarToggle.style.filter = 'invert(0)';
        }
    }
    return (
        <Navbar className='custom-nav' expand="lg">
            <Container>
                <Navbar.Brand as={Link} to="/" className={currentPage === "/" ? "nav-link active" : "nav-link"}>
                    <h1>Musa Omar</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to="/aboutMe" className={currentPage === "/aboutMe" ? "nav-link active" : "nav-link"}>
                            About
                        </Nav.Link>
                        <Nav.Link as={Link} to="/portfolio" className={currentPage === "/portfolio" ? "nav-link active" : "nav-link"}>
                            Portfolio
                        </Nav.Link>
                        <Nav.Link as={Link} to="/contact" className={currentPage === "/contact" ? "nav-link active" : "nav-link"}>
                            Contact
                        </Nav.Link>
                        <Nav.Link as={Link} to="/resume" className={currentPage === "/resume" ? "nav-link active" : "nav-link"}>
                            Resume
                        </Nav.Link>
                        <Navbar.Brand
                        style={{
                            marginLeft: '80%'
                        }}>
                        <input type="button" onClick={darkLightMode} value='Dark Mode'
                        style={{ backgroundColor: 'black', color: 'white'}}/>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}