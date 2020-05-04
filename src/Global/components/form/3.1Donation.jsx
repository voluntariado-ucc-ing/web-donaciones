import React, { Component } from "react";
import "./css/Donacion.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

//U

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
    this.setState({ unit: e.target.value, isNoConventional: isNonConventional })
  };

  handleDonationType = e => {
    this.setState({ donationType: e.target.value })
  }

  handleQuantity = e => {
    this.setState({ quantity: e.target.value })
  }

  handleNonConventionalUnit = e => {
    this.setState({ nonConventionalUnit: e.target.value })
  }

  render() {
    return (
      
    );
  }
}

export default Donacion;
