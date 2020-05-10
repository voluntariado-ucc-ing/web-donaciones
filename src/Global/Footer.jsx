import React, {Component} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeOpen, faPhone } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const email = <FontAwesomeIcon icon={faEnvelopeOpen} />;
const phone = <FontAwesomeIcon icon={faPhone}/>;
const ig = <FontAwesomeIcon icon={faInstagram}/>;

class Footer extends Component {
    render() {
        return (
            <div>
                <Container fluid className={"site-section heading site-color how"}>
                    <Row className={"justify-text-center"}>
                        <p>Voluntariado Barrio El Milagro</p>
                    </Row>
                    <Row className={"connect"}>
                       <p> voluntariado.vmru@ucc.edu.ar</p>
                        <p>@voluntariadouccing</p>
                        <p>(0351) 493 8000 int. 510</p>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default Footer;