import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "././css/Header.css";
import { Link } from "react-scroll";
import iconoCatolica from "../images/iconoCatolica.svg"

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar variant="pills" className="navbar" fixed="top">
                    <Navbar.Brand>
                        <img
                            alt="ucc"
                            src={iconoCatolica}
                            width="80"
                            height="40"
                            className="d-inline-block align-top"
                        />
                    </Navbar.Brand>
                    <Nav className="ml-auto">
                        <Link activeClass="active"
                            to="intro"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={700}
                            delay={50}
                            href="/"
                            className="b2"
                        >Inicio</Link>
                        <Link
                            to="quienesSomos"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={700}
                            delay={50}
                            href="/"
                            className="b2"
                        >Quiénes Somos</Link>
                        <Link
                            to="ayudanos"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={700}
                            delay={50}
                            href="/"
                            className="b2"
                        >Ayudanos a Ayudar</Link>
                        <Link
                            to="queHacemos"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={700}
                            delay={50}
                            href="/"
                            className="b2"
                        >Qué hacemos</Link>
                        <Link
                            to="dondeEstamos"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={700}
                            delay={50}
                            href="/"
                            className="b2"
                        >En dónde</Link>
                    </Nav>
                </Navbar>

            </div>
        );
    }
}

export default Header;