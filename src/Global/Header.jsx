import React, {Component} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

class Header extends Component{
    render(){
        return(
           <div>
               <Navbar bg="dark" variant="dark">
                   <Navbar.Brand href="#home">Voluntariado</Navbar.Brand>
                   <Nav className="mr-auto">
                       <Nav.Link href="/">Home</Nav.Link>
                       <Nav.Link href="/form">Donaciones</Nav.Link>
                   </Nav>
               </Navbar>
           </div>
        );
    }
}

export default Header;