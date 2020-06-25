import React, { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "././css/Header.css";
import iconoCatolica from "../images/iconoCatolica.svg";

class HeaderDonation extends Component {
  render() {
    return (
      <div>
        <Navbar variant="pills" className="navbar" fixed="top">
          <Navbar.Brand>
            <img
              alt="ucc"
              src={iconoCatolica}
              width="80"
              height="40"
              ref="/"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>

          <Nav className="justify-content-end ml-auto mr-5">
            <Nav.Link
              offset={-64}
              duration={700}
              delay={50}
              href="/"
              className="b2"
            >Inicio</Nav.Link>
          </Nav>
        </Navbar>

        <Nav defaultActiveKey="/home" className="flex-column">
          <Navbar className={"mobile-menu"}>
            <Navbar.Brand>
              <img
                alt="ucc"
                src={iconoCatolica}
                width="80"
                height="40"
                ref="/"
                className="d-inline-block align-top"
              />
            </Navbar.Brand>
            <ul>
              <li>
                <Nav.Link
                >Inicio</Nav.Link>
              </li>
            </ul>
          </Navbar>
        </Nav>
      </div>
    );
  }
}

export default HeaderDonation;