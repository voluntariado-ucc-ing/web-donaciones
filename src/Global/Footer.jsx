import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import Col from "react-bootstrap/Col";


class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className={"site-section heading site-color how"}>
                    <Row className={"justify-text-center"}>
                        <p>Voluntariado Barrio El Milagro</p>
                    </Row>
                    <Row className={"connect"}>
                        <Col>
                            <FontAwesomeIcon icon={faEnvelopeOpen}/>
                            <p>voluntariado.vmru@ucc.edu.ar</p>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faInstagram}/>
                            <p>@voluntariadouccing</p>
                        </Col>
                        <Col>
                            <FontAwesomeIcon icon={faPhone}/>
                            <p>(0351) 493 8000 int. 510</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;