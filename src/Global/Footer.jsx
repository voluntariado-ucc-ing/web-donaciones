import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Col from "react-bootstrap/Col";
import oficial from "../images/oficial.png";
import logovol from "../images/logo.png";
import correo from "../images/correo.png";
import telefono from "../images/telefono.png";

import "./css/Footer.css"
import { RoomTwoTone } from "@material-ui/icons";


class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className={"site-section heading site-color how computer-footer"}>
                    <div class="Title">
                        <Row>
                            <h5>Voluntariado Barrio El Milagro</h5>
                        </Row>
                    </div>
                    <div>
                        <Row>

                            <Col>
                                <h6>Voluntariado</h6>
                            </Col>
                            <Col>
                                <h6>Universidad Católica de Córdoba</h6>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <a href=" https://www.instagram.com/voluntariadouccing" alt="Instagram" title="Instagram" rel="noreferrer" target="_blank">
                                    <img src="https://uccor.edu.ar/portal2015/UniversidadCatolica/images/instagram.png" class="boing" alt="Instagram"></img></a>
                                <a href="mailto:voluntariado.vmru@ucc.edu.ar">
                                    <img
                                        alt="ucc"
                                        src={correo}
                                        width="50"
                                        height="50"
                                        className="d-inline-block align-top"

                                    />
                                </a>
                                <a href="https://youtu.be/soUWTT424Z4" alt="Youtube" title="Youtube" rel="noreferrer" target="_blank">
                                    <img src="https://uccor.edu.ar/portal2015/UniversidadCatolica/images/youtube.png" class="boing" alt="Youtube"></img>
                                </a>
                                <a href="tel:+5493514938000,510" alt="Telefono" title="Telefono" rel="noreferrer" target="_blank">
                                    <img
                                        alt="ucc"
                                        src={telefono}
                                        width="50"
                                        height="50"
                                        className="d-inline-block align-top"

                                    /></a>
                            </Col>
                            <Col>
                                <a href="https://www.instagram.com/uccoficial" alt="Instagram" title="Instagram" rel="noreferrer" target="_blank">
                                    <img src="https://uccor.edu.ar/portal2015/UniversidadCatolica/images/instagram.png" class="boing" alt="Instagram"></img>
                                </a>
                                <a href="https://www.twitter.com/uccoficial" alt="Twitter" title="Twitter" rel="noreferrer" target="_blank">
                                    <img src="https://uccor.edu.ar/portal2015/UniversidadCatolica/images/twitter.png" class="boing" alt="Twitter"></img>
                                </a>
                                <a href="https://www.youtube.com/uccoficial" alt="Youtube" title="Youtube" rel="noreferrer" target="_blank">
                                    <img src="https://uccor.edu.ar/portal2015/UniversidadCatolica/images/youtube.png" class="boing" alt="Youtube"></img>
                                </a>
                                <a href="https://www.facebook.com/UniversidadCatolicaCordoba" alt="Facebook" title="Facebook" rel="noreferrer" target="_blank">
                                    <img src="https://uccor.edu.ar/portal2015/UniversidadCatolica/images/fbk.png" class="boing" alt="Facebook"></img>
                                </a>
                            </Col>
                        </Row>
                    </div>
                    <div class="Pictures">
                        <a>
                            <img

                                alt="ucc"
                                src={logovol}
                                width="50"
                                height="50"
                                className="d-inline-block align-top"

                            />
                        </a>

                        <a href="https://ucc.edu.ar">
                            <img

                                alt="ucc"
                                src={oficial}
                                width="90"
                                height="50"
                                className="d-inline-block align-top"

                            /></a>

                    </div>
                       <a target="_blank" href={"/volunteers"} rel="noopener noreferrer">
                            <p className={"text-light"}>
                                Excel voluntarios
                            </p>
                        </a>
                </Container>
            </div >
        )
    }
}

export default Footer;