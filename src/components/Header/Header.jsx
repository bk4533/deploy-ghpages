import React, {useState,useEffect} from 'react';
import './header.css';
import { Typewriter } from 'react-simple-typewriter';
import {Navbar, Nav, NavDropdown, Container} from 'react-bootstrap';
const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const updateScroll = () => {
        setScrollPosition(window.scrollY || document.documentElement.scrollTop);
    }
    useEffect(() => {
        window.addEventListener('scroll',updateScroll);
    })
    return (
        <Navbar expand="lg" className={scrollPosition < 100 ? "header" : "change_header"}>
            <Container>
                <Navbar.Brand href="/">
                    <Typewriter  words={[" BANG's Portfolio"]} 
                     loop cursor cursorStyle="|"
                     delaySpeed={1500} typeSpeed={150} deleteSpeed={100}/>
                 </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {/* <Nav className="header_lnb ms-auto">
                    <Nav.Link href="/about">Aboutme</Nav.Link>
                    <Nav.Link href="/projects">Projects</Nav.Link>
                    <Nav.Link target={'_blank'} href="https://github.com/bk4533">Github</Nav.Link>
                </Nav> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;