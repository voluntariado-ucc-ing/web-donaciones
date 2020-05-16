import React, {Component} from "react";
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from "react-bootstrap/Carousel";
import "../css/Carousel.css"

class CarouselUcc extends Component {
    render() {
        return (
          <div>
            <ReactPlayer
              url='https://www.youtube.com/watch?v=soUWTT424Z4'
              className='react-player'
              playing                           
              width='40%'
              height='40%'
              resizeMode='contain'
            />
          </div> 
        );
      }
}

export default CarouselUcc;