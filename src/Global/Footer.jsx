import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";

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
                            <FontAwesomeIcon icon={faEnvelopeOpen}/>
                            <p>voluntariado.vmru@ucc.edu.ar</p>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <Link to={"https://www.instagram.com/voluntariadouccing/"}>
                                <p className={"text-light"}>
                                @voluntariadouccing
                                </p>
                            </Link>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faPhone}/>
                            <p>(0351) 493 8000 int. 510</p>
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
                                <FontAwesomeIcon icon={faInstagram}/>
                            </Col>
                            <Col>
                                <Link to={"https://www.instagram.com/voluntariadouccing/"}>
                                    <p className={"text-light"}>
                                        @voluntariadouccing
                                    </p>
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                            <FontAwesomeIcon icon={faEnvelopeOpen}/>
                            </Col>
                            <Col>
                            <p>voluntariado.vmru@ucc.edu.ar</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col sm>
                            <FontAwesomeIcon icon={faPhone}/>
                            </Col>
                            <Col>
                            <p>(0351) 493 8000 int. 510</p>
                            </Col>
                        </Row>
                    </Col>
                </Container>
            </div>
        )
    }
}

export default Footer;