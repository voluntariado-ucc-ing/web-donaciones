import React, {Component} from "react";
import "././css/Home.css"
import CarouselUcc from "./components/Carousel";
class Home extends Component{
    render() {
        return (
            <div id="web" className={"background"}>
                <div className={"transbox"}>
                    <h1>Hola Donadores!</h1>
                </div>
            </div>
        );
    }
}
export default Home;