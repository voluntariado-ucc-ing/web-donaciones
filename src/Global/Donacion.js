import React, { Component } from "react";
import "./css/Donacion.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Donacion extends Component {
  state = {
    isNoConventional: false,
    donationType: "",
    quantity: "",
    unit: "",
    nonConventionalUnit: "",
  };

  otro = () => {
    if (this.state.isNoConventional)
      return (
        <div>
          <Form.Label>Unidad no convencional</Form.Label>
          <Form.Control rows="3" value={this.state.nonConventionalUnit} onChange={this.handleNonConventionalUnit} />
        </div>
      );
  };

  handleUnitChange = (e) => {
    let isNonConventional = e.target.value === "otro" ? true : false
    this.setState({unit: e.target.value, isNoConventional: isNonConventional})
  };

  handleDonationType = e => {
    this.setState({donationType: e.target.value})
  }

  handleQuantity = e => {
    this.setState({quantity: e.target.value})
  }

  handleNonConventionalUnit = e => {
    this.setState({nonConventionalUnit: e.target.value})
  }

  render() {
    return (
      <Form.Group>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="donacion">
            <Form.Label>Tipo de donación</Form.Label>
            <Form.Control as="select" required onChange={this.handleDonationType}>
              <option value="material-de-construccion">Material de construccion</option>
              <option value="elemento-de-banio">Elementos de baño</option>
              <option value="herramientas">Herramientas</option>
              <option value="muebles">Muebles</option>
              <option value="otro">Otro</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="2">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control type="number" value={this.state.quantity} onChange={this.handleQuantity}/>
          </Form.Group>
          <Form.Group as={Col} md="2">
            <Form.Label>Unidad</Form.Label>
            <Form.Control as="select" onChange={this.handleUnitChange}>
              <option value="m">Metros</option>
              <option value="kg">Kg</option>
              <option value="otro">Otro</option>
            </Form.Control>
          </Form.Group>

          <Form.Group as={Col} md="3">
            {this.otro()}
          </Form.Group>

          <Form.Group id="menos" as={Col} md="1">
            <Button
              variant="danger"
              onClick={() => this.props.onDelete(this.props.id)}
            >
              Quitar
            </Button>{" "}
          </Form.Group>
        </Form.Row>
      </Form.Group>
    );
  }
}

export default Donacion;
