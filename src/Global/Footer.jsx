import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Col from "react-bootstrap/Col";

import "./css/Footer.css"


class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className={"site-section heading site-color how computer-footer"}>
                    <Row className={"justify-text-center"}>
                        <p>Voluntariado Barrio El Milagro</p>
                    </Row>
                    <Row>
                        <Col>
                            <FontAwesomeIcon icon={faEnvelopeOpen} />
                            <a
                                target="_top"
                                rel="noopener noreferrer"
                                href="mailto:voluntariado.vmru@ucc.edu.ar">
                                <p className={"text-light"}>voluntariado.vmru@ucc.edu.ar</p>
                            </a>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faInstagram} />
                            <a target="_blank" href="https://www.instagram.com/voluntariadouccing/" rel="noopener noreferrer">
                                <p className={"text-light"}>
                                    @voluntariadouccing
                                </p>
                            </a>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faPhone} />
                            <a href="tel:+5493514938000,510"
                                target="_top"
                                rel="noopener noreferrer">
                                <p className={"text-light"}>
                                    (0351) 493 8000 int. 510
                                    </p>
                            </a>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className={"site-section heading site-color how mobile-footer"}>
                    <Col className={"justify-text-center"}>
                        <Row>
                            <p>Voluntariado Barrio El Milagro</p>
                        </Row>
                        <Row>
                            <Col sm>
                                <FontAwesomeIcon icon={faInstagram} />
                            </Col>
                            <Col>
                                <a target="_blank" href="https://www.instagram.com/voluntariadouccing/" rel="noopener noreferrer">
                                    <p className={"text-light"}>
                                        @voluntariadouccing
                                    </p>
                                </a>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                                <FontAwesomeIcon icon={faEnvelopeOpen} />
                            </Col>
                            <Col>
                                <a
                                    target="_top"
                                    rel="noopener noreferrer"
                                    href="mailto:voluntariado.vmru@ucc.edu.ar">
                                    <p className={"text-light"}>voluntariado.vmru@ucc.edu.ar</p>
                                </a>
                            </Col>
                        </Row>
                        <Row >
                            <Col sm>
                                <FontAwesomeIcon icon={faPhone} />
                            </Col>
                            <Col sm>
                                <a href="tel:+5493514938000,510"
                                    target="_top"
                                    rel="noopener noreferrer">
                                    <p className={"text-light"}>
                                        (0351) 493 8000 int. 510
                                    </p>
                                </a>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div >
        )
    }
}

export default Footer;