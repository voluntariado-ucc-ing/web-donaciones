import React, { Component } from "react";
import ReactPlayer from 'react-player';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/Carousel.css"

class CarouselUcc extends Component {
  render() {
    return (
      <div className='player-wrapper'>
        <ReactPlayer
          url='https://www.youtube.com/watch?v=soUWTT424Z4'
          className='react-player'
          width='100%'
          height='100%'
          playing={true}
          muted={true}
          controls={true} //en vez de mostrar los controles puede ser un onclick que desmutee
          loop={true}
        />
      </div>
    );
  }
}

export default CarouselUcc;