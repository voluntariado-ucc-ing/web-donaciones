import React, { Component } from "react";
import "././css/Home.css"
import CarouselUcc from "./components/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Footer from "./Footer";



class Home extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className="totalContainer">
                    <Container id="intro" fluid className={"background"}>
                        <div className="transbox">
                            <Badge variant="light"><h1>Voluntariado Barrio El Milagro</h1></Badge>
                        </div>
                    </Container>

                    <Container id="quienesSomos" fluid className="site-section heading">
                        <Row className={"justify-content-md-center who"} xs={1} md={2}>
                            <Col>
                                <div data-aos="zoom-in-right">
                                    <img
                                        src={require('../images/logovol1.jpg')}
                                        alt={"voluntarios"}
                                        className={"logo1"}
                                    />
                                    <img
                                        src={require('../images/logo.png')}
                                        alt={"voluntarios"}
                                        className={"logo2"}
                                    />
                                </div>
                            </Col>
                            <Col className={"info-1"}>
                                <h2>Quiénes somos</h2>
                                <p>
                                    Somos un voluntariado perteneciente a la Universidad Católica de Córdoba conformado por todos aquellos que quieran ayudar sin importar la universidad en la que estudian.</p>
                            </Col>
                        </Row>
                    </Container>

                    <Container id="ayudanos" fluid className={"site-section heading site-color how"}>
                        <Row>
                            <Col>
                                <h2 className={"w-border"}>Cómo podes ayudarnos a ayudar</h2>
                                <p>Recibimos materiales y elementos de construcción, alimentos, ropa y todo aquello que pueda colaborar con nuestra labor en el barrio.

                                    También puede colaborar con dinero para que el voluntariado adquiera lo necesario para realizar las tareas solidarias. </p>
                            </Col>
                            <Col>
                                <ButtonGroup vertical className={"info"}>
                                    <Button variant="outline-dark" size="lg" className="link btn" target="_blank" href={"https://donaronline.org/universidad-catolica-de-cordoba/desde-casa-podes-ayudar-a-las-familias-de-barrio-el-milagro?preview=true"}>Donar dinero(transferencia)</Button>
                                    <Button variant="outline-dark" size="lg" className="link" target="_blank" href={"/form"}>Otra clase de donaciones</Button>
                                </ButtonGroup>
                            </Col>
                        </Row>
                    </Container>

                    <Container id="queHacemos" fluid className={"site-section heading what"}>
                        <h2>Qué hacemos</h2>
                        <CarouselUcc />
                    </Container>

                    <Container id="dondeEstamos" fluid className={"site-section heading where"}>
                        <Row className={"justify-content-md-center"} xs={1} md={2}>
                            <Col className={"info"}>
                                <h2>En dónde</h2>
                                <p>Los encuentros se llevan a cabo los días sábados de 9 a 13 hs en el barrio El Milagro, al lado de Ciudad Obispo Angelelli, Córdoba.</p>
                            </Col>
                            <Col>
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8228500839773!2d-64.1979016848499!3d-31.50155278137586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a5ecfcca7701%3A0xe8d124696f0e3b94!2sBarrio%20el%20milagro!5e0!3m2!1ses!2sar!4v1589661316454!5m2!1ses!2sar"
                                    width="600" height="450" frameBorder="0" allowFullScreen=""
                                    aria-hidden="false" tabIndex="0" />
                            </Col>
                        </Row>
                    </Container>
                </div>
                <Footer />
            </div>
        );
    }
}
export default Home;