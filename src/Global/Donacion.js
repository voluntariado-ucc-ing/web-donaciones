import React, { Component } from "react";
import "./css/Form.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Donacion extends Component {
  state = {
    isNoConventional: false,
  };

  otro = () => {
    if (this.state.isNoConventional)
      return (
        <div>
          <Form.Label>Unidad no convencional</Form.Label>
          <Form.Control rows="3" />
        </div>
      );
  };
  handleUnitChange = (e) => {
    if (e.target.value === "Otro") this.setState({ isNoConventional: true });
    else this.setState({ isNoConventional: false });
  };

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

          <Form.Group as={Col} md="2">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control type="number"></Form.Control>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Unidad</Form.Label>
            <Form.Control as="select" onChange={this.handleUnitChange}>
              <option>Metros</option>
              <option>Kg</option>
              <option value="Otro">Otro</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="3">
            {this.otro()}
          </Form.Group>

          <Form.Group as={Col} md="1">
            <Form.Label>.</Form.Label>
            <Button onClick={() => this.props.onDelete(this.props.id)}>
              -
            </Button>{" "}
          </Form.Group>
        </Form.Row>
      </Form.Group>
    );
  }
}

export default Donacion;
