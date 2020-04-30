import React, {Component} from "react";
import "././css/Home.css"
import CarouselUcc from "./components/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge"
import Container from "react-bootstrap/Container";

class Home extends Component{
render() {
        return (
            <div>
                <Container fluid className={"background"}>
                    <div className="transbox">
                        <Badge variant="light"><h1>Voluntariado El Milagro</h1></Badge>
                    </div>
                </Container>
                <Container fluid className="site-section heading">
                    <Row className={"justify-content-md-center who"} xs={1} md={2}>
                        <Col>
                            <div data-aos="zoom-in-right">
                                <img
                                    src={require('../images/logovol1.jpg')}
                                    alt={"voluntarios"}
                                    className={"logo1"}
                                />
                                <img
                                    src={require('../images/logovol2.jpg')}
                                    alt={"voluntarios"}
                                    className={"logo2"}
                                />
                            </div>

                        </Col>
                    <Col className={"info-1"}>
                        <h2>Quienes somos</h2>
                        <p>
                            Somos un voluntariado que pertenece a la UCC y</p>
                        <p>esta conformado por chicos de varias universidades.
                        </p>
                    </Col>

                    </Row>
                </Container>
                <Container fluid className={"site-section heading"}>
                    <h2>Que hacemos</h2>
                       <CarouselUcc/>
                </Container>
                <Container className={"site-section heading"}>
                    <Row>
                        <Col className={"info"}>
                            <h2>En donde</h2>
                            <p>El barrio "El Milagro"</p>
                            <p>Al lado de la ciudad Obispo Angelelli</p>
                        </Col>
                        <Col>
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3402.3788896518245!2d-64.2479116856604!3d-31.486267781380874!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a3df896024af%3A0xfac12a594425f547!2sUniversidad%20Cat%C3%B3lica%20de%20C%C3%B3rdoba%20%7C%20Campus!5e0!3m2!1ses!2sar!4v1588194712435!5m2!1ses!2sar"
                                aria-hidden="false" tabIndex="0"></iframe>
                        </Col>
                    </Row>
                </Container>

                <Container fluid className={"site-section heading site-color who"}>
                <h2 className={"w-border"}>Como podes ayudarnos a ayudar</h2>
                <p>Realizando donaciones de:</p>
                <ul>
                    <ul>Comida</ul>
                    <ul>Ropa</ul>
                </ul>
                </Container>
            </div>

        );
    }
}
export default Home;