import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import mdlogo from '../assets/img/logo.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { useState, useEffect } from 'react';
import { Download } from 'react-bootstrap-icons';

export const Navbarr = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, seScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true);
            } else {
                seScrolled(false);
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img
                        src={mdlogo}
                        alt="Logo"
                        style={{ width: '50px', marginRight: '10px', color: 'white' }}
                    />
                    <h1 style={{ fontSize: '1.5rem', margin: 0, color: 'white' }}>Portfolio</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={activeLink === 'Banner' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('banner')}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#skills"
                            className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('skills')}
                        >
                            Skills
                        </Nav.Link>
                        <Nav.Link
                            href="#Internship"
                            className={activeLink === 'Internship' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('Internship')}
                        >
                            Internship
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('projects')}
                        >
                            Projects
                        </Nav.Link>
                        <Nav.Link
                            href="#Education"
                            className={activeLink === 'Education' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('Education')}
                        >
                            Education
                        </Nav.Link>
                        <Nav.Link
                            href="#Contact"
                            className={activeLink === 'Contact' ? 'active navbar-link' : 'navbar-link'}
                            onClick={() => onUpdateActiveLink('Contact')}
                        >
                            Contact
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text d-flex align-items-center">
                        <div className="social-icon d-flex align-items-center gap-3">
                            <a href="https://www.linkedin.com/in/hemachandran-r-18899524b">
                                <img src={navIcon1} alt="LinkedIn" style={{ width: '30px', height: 'auto' }} />
                            </a>
                            <a href="https://github.com/hemachandran2004">
                                <img src={navIcon2} alt="GitHub" style={{ width: '30px', height: 'auto' }} />
                            </a>
                            <a href="https://wa.me/7418291738">
                                <img src={navIcon3} alt="WhatsApp" style={{ width: '30px', height: 'auto' }} />
                            </a>
                        </div>
                        <a href="Chandru-resume.pdf" download>
                            <button className="vvd px-3 py-2 ms-3">
                                <span>
                                    <Download className="me-2" />
                                    Resume
                                </span>
                            </button>
                        </a>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
