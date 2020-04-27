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
                <Container className="site-section heading">
                    <h2>Quienes somos</h2>
                    <p>
                        Somos un voluntariado que pertenece a la UCC y</p>
                    <p>esta conformado por chicos de varias universidades.
                    </p>
                </Container>
                <Container className={"site-section"}>
                    <ul>
                        <h2>Que hacemos</h2>
                        <ul>Ayudamos a las familias a construir una casa digna.</ul>
                        <ul>Limpieza de terreno.</ul>
                        <ul>Huertas.</ul>
                        <ul> Ferias de ropas</ul>
                        <ul>Jornadas de salud</ul>
                    </ul>
                    <p>Pero sobre todo, acompaniamos a las familias.</p>
                </Container>
                <Container className={"site-section"}>
                <h2>En donde</h2>
                <p>El barrio "El Milagro"</p>
                <p>Al lado de la ciudad Obispo Angelelli</p>
                </Container>
                <Container className={"site-section"}>
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