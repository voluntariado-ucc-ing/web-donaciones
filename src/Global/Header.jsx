import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "././css/Header.css";
import { Link } from "react-scroll";
import iconoCatolica from "../images/iconoCatolica.svg";
import logoVoluntariado from "../images/logoVoluntariadoSinFondo.png"
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Header extends Component {
    render() {
        return (
            <div>
                <Navbar variant="pills" className="navbar" fixed="top">
                    <Navbar.Brand href="/">
                        <Row>
                            <Col>
                                <img
                                    alt="ucc"
                                    src={logoVoluntariado}
                                    width="50"
                                    height="50"
                                    className="d-inline-block align-top"
                                />
                            </Col>
                            <Col className="leftAlign nameBrand">
                                <h6 className="montseBold2" >VOLUNTARIADO</h6>
                                <h5 className="montseBlack2">BARRIO EL MILAGRO</h5>
                            </Col>
                        </Row>
                    </Navbar.Brand>
                    <Nav className="ml-auto links">
                        {/* <Nav.Link className="b2" href="#donar">Ayudar💗</Nav.Link>
                        <Nav.Link className="b2" href="#quienesSomos">¿Quiénes somos?</Nav.Link> */}
                        <Link
                            // activeClass="active"
                            to="donar"
                            spy={true}
                            smooth={true}
                            offset={-64}
                            duration={700}
                            delay={50}
                            href="/"
                            className="b2"
                        >Ayudar</Link>
                        <Link
                            to="quienesSomosRow"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={700}
                            delay={50}
                            href="/"
                            className="b2"
                        >¿Quiénes somos?</Link>
                        {/* <Link
                            to="ayudanos"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={700}
                            delay={50}
                            href="/"
                            className="b2"
                        >Ayudanos a Ayudar</Link>
                        <Link
                            to="queHacemos"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={700}
                            delay={50}
                            href="/"
                            className="b2"
                        >Qué hacemos</Link>
                        <Link
                            to="dondeEstamos"
                            spy={true}
                            smooth={true}
                            offset={-60}
                            duration={700}
                            delay={50}
                            href="/"
                            className="b2"
                        >En dónde</Link> */}
                    </Nav>
                </Navbar>
                <Nav defaultActiveKey="/home" className="flex-column">
                    <Navbar className={"mobile-menu"}>
                        <Navbar.Brand>
                            <img
                                alt="ucc"
                                src={logoVoluntariado}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"
                            />
                        </Navbar.Brand>
                        <ul>
                            <li>
                                <Link activeClass="active"
                                    to="donar"
                                    spy={true}
                                    smooth={true}
                                    offset={-64}
                                    duration={700}
                                    delay={50}
                                    href="/"
                                    className="b2"
                                >Ayudar💗</Link>
                            </li>
                            <li>
                                <Link
                                    to="quienesSomosRow"
                                    spy={true}
                                    smooth={true}
                                    offset={-64}
                                    duration={700}
                                    delay={50}
                                    href="/"
                                    className="b2"
                                >¿Quiénes Somos?</Link>
                            </li>
                            {/* <li>
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
                            </li>
                            <li>
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
                            </li>
                            <li>
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
                            </li> */}
                        </ul>
                    </Navbar>
                </Nav>
            </div>
        );
    }
}

export default Header;