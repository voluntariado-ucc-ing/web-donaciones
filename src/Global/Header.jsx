import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "././css/Header.css";

class Header extends Component{
    render(){
        return(
           <div><Navbar variant="pills" className="navbar">
               <Navbar.Brand>
                   <img
                       alt="ucc"
                       src={"https://www.uccor.edu.ar/portal2015/UniversidadCatolica/images/logo-ucc-2018.svg"}
                       width="80"
                       height="40"
                       className="d-inline-block align-top"
                   />
               </Navbar.Brand>
               <Nav className="ml-auto">
                   <Nav.Link href="/home" className="b1">Inicio</Nav.Link>
                   <Nav.Link eventKey="link-1" className= "b2" href="/form">Donaciones</Nav.Link>
               </Nav>
           </Navbar>
               
           </div>
        );
    }
}

export default Header;