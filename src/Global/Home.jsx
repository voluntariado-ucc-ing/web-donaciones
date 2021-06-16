import React, { Component } from "react";
import "././css/Home.css"
import Video from "./components/Video";
import CarouselUcc from "./components/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Container from "react-bootstrap/Container";
import Header from "./Header";
import Footer from "./Footer";
import { HeroVideo } from 'react-hero-video'
import Iframe from 'react-iframe'
import Box from '@material-ui/core/Box';



class Home extends Component {
    render() {
        const wwidth = window.innerWidth;
        var hvideo = 0.0;
        var wmap = 0.0;
        var x = 0.0;
        if (wwidth > 768) {
            x = (66.6666666667 * wwidth) / 100
            hvideo = (56.5 * x) / 100
            wmap = wwidth - x
        }
        else {
            hvideo = (56.5 * wwidth) / 100
            wmap = wwidth
        }
        const vidStyle = {
            height: hvideo
        }
        return (
            <div className="blueBackground">
                <Header />
                <div className="totalContainer">
                    <div id="donar">
                        <Row id="mainRow" className="blueBackground">
                            <Col id="title" className="marginAuto" lg={4} sm={12}>
                                <Row id="mainTitle">
                                    <Col>
                                        <h3 className="montseBold size20">VOLUNTARIADO</h3>
                                        <h1 className="montseBlack size33">BARRIO EL MILAGRO</h1>

                                    </Col>
                                </Row>

                                <Row>
                                    <Col sm={12} md={6}>
                                        <Button variant="outline-dark" size="lg" className="link" target="_blank" href={"https://donaronline.org/universidad-catolica-de-cordoba/grupo-voluntario-de-jovenes-universitarios-en-barrio-el-milagro?preview=true"}>Transferir dinero</Button>
                                    </Col>
                                    <Col sm={12} md={6}>
                                        <Button variant="outline-dark" size="lg" className="link" target="_blank" href={"/form"}>Otra donación</Button>

                                    </Col>
                                </Row>
                                <Row id="recibimos">
                                    <Col className="marginAuto">
                                        <h5 className="montseBold">AYUDANOS A AYUDAR</h5>
                                        <p>Recibimos materiales y elementos de construcción, alimentos, ropa y todo aquello que pueda colaborar con nuestra labor en el barrio, incluso dinero.</p>
                                    </Col>
                                </Row>

                            </Col>
                            <Col lg={8} sm={12} id="ytVideo" style={vidStyle}>
                                <Iframe type="text/html" width="100%" height="100%"
                                    src={'https://www.youtube.com/embed/soUWTT424Z4?autoplay=1&mute=1&loop=1'}
                                    frameborder="0" />
                            </Col>
                        </Row>
                        {/* <Row id="logoVideoRow">
                                <img
                                    src={require('../images/logoVoluntariadoSinFondo.png')}
                                    alt={"voluntarios"} 
                                    />
                            </Row> */}
                    </div>


                    <div>

                        <Container id="quienesSomos" fluid className="site-section heading">
                            <Row id="quienesSomosRow" className={"justify-content-md-center"} xs={1} md={2} >
                                <Col className={"info"}>
                                    <h2 className="montseBlack blue">¿QUIENES SOMOS?</h2>
                                    <p>
                                        Somos un voluntariado perteneciente a la Universidad Católica de Córdoba conformado por todos aquellos que quieran ayudar sin importar la universidad en la que estudian.</p>
                                    <p> Los encuentros se llevan a cabo los días sábados de 9 a 13 hs en el barrio El Milagro, al lado de Ciudad Obispo Angelelli, Córdoba.donde ayudamos a la construcción de viviendas para aquellos que más necesitan una mano.</p>
                                </Col>
                                <Col>
                                    <iframe
                                        id='map'
                                        title='myFrame'
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8228500839773!2d-64.1979016848499!3d-31.50155278137586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a5ecfcca7701%3A0xe8d124696f0e3b94!2sBarrio%20el%20milagro!5e0!3m2!1ses!2sar!4v1589661316454!5m2!1ses!2sar"
                                        width={wmap} height="340" frameBorder="0" allowFullScreen=""
                                        aria-hidden="false" tabIndex="0" />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                    {/* <div>
                         <Container id="queHacemos" fluid className={"site-section heading what"}>
                        <h2>Qué hacemos</h2>
                        <CarouselUcc />
                    </Container> 

                        <Container id="dondeEstamos" fluid className={"site-section heading where"}>
                            <Row className={"justify-content-md-center"} xs={1} md={2} >
                                <Col className={"info"}>
                                    <h2>En dónde</h2>
                                    <p>Los encuentros se llevan a cabo los días sábados de 9 a 13 hs en el barrio El Milagro, al lado de Ciudad Obispo Angelelli, Córdoba.</p>
                                </Col>
                                <Col>
                                    <iframe
                                        title='myFrame'
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3401.8228500839773!2d-64.1979016848499!3d-31.50155278137586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9432a5ecfcca7701%3A0xe8d124696f0e3b94!2sBarrio%20el%20milagro!5e0!3m2!1ses!2sar!4v1589661316454!5m2!1ses!2sar"
                                        width="600" height="450" frameBorder="0" allowFullScreen=""
                                        aria-hidden="false" tabIndex="0" />
                                </Col>
                            </Row>
                        </Container>
                    </div> */}
                </div>
                <Footer />
            </div>
        );
    }
}
export default Home;