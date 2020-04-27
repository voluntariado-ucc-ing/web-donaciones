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
                <Container>
                    
                </Container>
            </div>

        );
    }
}
export default Home;