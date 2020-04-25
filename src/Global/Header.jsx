import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Header extends Component{
    render(){
        return(
           <div>
               <Nav variant="pills" defaultActiveKey="/">
               <Navbar bg="light" >
                   <Navbar.Brand href="/home">
                       <img
                           alt="ucc"
                           src={"https://www.uccor.edu.ar/portal2015/UniversidadCatolica/images/logo-ucc-2018.svg"}
                           width="80"
                           height="40"
                           className="d-inline-block align-top"
                       />
                   </Navbar.Brand>
                   <Nav className="mr-auto">
                       <Nav.Link href="/home">Inicio</Nav.Link>
                       <Nav.Link eventKey="link-1" href="/form">Donaciones</Nav.Link>
                   </Nav>
               </Navbar>
               </Nav>
           </div>
        );
    }
}

export default Header;