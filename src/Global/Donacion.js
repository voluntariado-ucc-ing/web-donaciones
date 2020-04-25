import React, { Component } from "react";
import "./css/Form.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Donacion extends Component {
  state = {};
  render() {
    return (
      <Form.Group>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="donacion">
            <Form.Label>Tipo de donación</Form.Label>
            <Form.Control as="select" required>
              <option>Material de construccion</option>
              <option>Elementos de banio</option>
              <option>Herramientas</option>
              <option>Muebles</option>
              <option>Otro</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="3">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control type="number"></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Unidad</Form.Label>
            <Form.Control as="select">
              <option>Metros</option>
              <option>Kg</option>
              <option>Otro</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Unidad no convencional</Form.Label>
            <Form.Control rows="3" />
          </Form.Group>
        </Form.Row>
      </Form.Group>
    );
  }
}

export default Donacion;
