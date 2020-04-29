import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import "../css/Carousel.css"

class CarouselUcc extends Component {
    render() {
        return(
            <Carousel className={"carousel-wrapper"}>
                <Carousel.Item>
                    <img
                        className="img-carousel"
                        src={require('../../images/portada.jpg')}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-carousel"
                        src={require('../../images/portada.jpg')}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="img-carousel"
                        src={require('../../images/portada.jpg')}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        );
    }
}

export default CarouselUcc;