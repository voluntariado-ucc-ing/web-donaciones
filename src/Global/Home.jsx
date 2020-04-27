import React, {Component} from "react";
import "././css/Home.css"
import CarouselUcc from "./components/Carousel";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class Home extends Component{
    render() {
        return (
            <div id="web" className={"background"}>
                <div className={"transbox"}>
                    <h1>Voluntariado El Milagro</h1>
                    <img src="../images/quienessomos.jpg"></img>
                    <Row>
                        <Col className="text-center">
                            <h3>Quienes somos</h3>
                            <p>
                                Somos un voluntariado que pertenece a la UCC y</p>
                                <p>esta conformado por chicos de varias universidades.
                            </p>

                            <ul>
                                <h3>Que hacemos</h3>
                                <ul>Ayudamos a las familias a construir una casa digna.</ul>
                                <ul>Limpieza de terreno.</ul>
                                <ul>Huertas.</ul>
                                <ul> Ferias de ropas</ul>
                                <ul>Jornadas de salud</ul>
                            </ul>
                            <p>Pero sobre todo, acompaniamos a las familias.</p>
                        </Col>
                        <Col className={"text-center Col"}>
                            <h3>En donde</h3>
                            <p>El barrio "El Milagro"</p>
                            <p>Al lado de la ciudad Obispo Angelelli</p>
                            <h3>Como podes ayudarnos a ayudar</h3>
                            <p>Realizando donaciones de:</p>
                            <ul>
                                <ul>Comida</ul>
                                <ul>Ropa</ul>
                            </ul>
                        </Col>
                    </Row>
                </div>
            </div>
        );
    }
}
export default Home;