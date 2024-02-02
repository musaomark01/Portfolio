import { Link, useLocation } from "react-router-dom";
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useState } from 'react';
import {FaSun, FaMoon} from 'react-icons/fa';

export default function NavTab() {
    // Get the current page
    const currentPage = useLocation().pathname;
    // Set up state for dark mode
    const [isDarkMode, setIsDarkMode] = useState(false);
    function darkLightMode() {
        // Toggle the body class
        const newIsDarkMode = document.body.classList.toggle('dark-mode');
        setIsDarkMode(newIsDarkMode);
        // Toggle the navbar class
        document.querySelector('.custom-nav').classList.toggle('dark-mode');
        const navLinks = document.querySelectorAll('.nav-link');
        // Loop through each nav link and toggle the color
        navLinks.forEach(link => {
            if (newIsDarkMode) {
                link.style.color = 'var(--text-color-dark)';
            } else {
                link.style.color = 'var(--text-color-light)';
            }
        });
        // Toggle the sun and moon icons
        const navbarToggle = document.querySelector('.navbar-toggler-icon');
        if (newIsDarkMode) {
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
                        {/*  add a button to toggle dark mode */}
                        <Navbar.Brand
                            style={{
                                marginLeft: '80%' // Move the button to the right
                            }}
                        >
                            {/*  make the button transparent and borderless */}
                            <button onClick={darkLightMode} style={{background: 'transparent', border: 'none'}}>
                                {isDarkMode ? <FaSun style={{color: 'white'}} /> : <FaMoon />}
                            </button>
                        </Navbar.Brand>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}