import React, { Component } from "react";
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Carousel.css"

class CarouselUcc extends Component {
  render() {
    return (
      <div>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=soUWTT424Z4'
          className='react-player centerVideo'
          // width='40%'
          // height='40%'
          playing={true}
          muted={true}
        />
      </div>
    );
  }
}

export default CarouselUcc;