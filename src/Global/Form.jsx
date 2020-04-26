import React, { Component } from "react";
import "./css/Form.css";
import Conteiner from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Donacion from "./Donacion";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      city: "",
      street: "",
      streetNumber: "",
      streetDetail: "",
      extraData: "",
      donaciones: [],
    };
    this.init();
  }

  init = () => {
    var dons = this.state.donaciones;
    var done = new Donacion();
    done.id = 0;
    dons.push(done);
    this.setState({ donaciones: dons });
  };

  newDonation = () => {
    var dons = this.state.donaciones;
    var done = new Donacion();
    done.id = dons.length;
    dons.push(done);
    this.setState({ donaciones: dons });
  };

  handleDelete = (id) => {
    if (this.state.donaciones.length > 1) {
      const dons = this.state.donaciones.filter((c) => c.id !== id);
      this.setState({ donaciones: dons });
    } else {
      window.alert("No se pueden eliminar todas las donaciones")
    }
  };

  handleFirstName = e => {
    this.setState({firstName: e.target.value})
  }

  handleLastName = e => {
    this.setState({lastName: e.target.value})
  }

  handlePhone = e => {
    this.setState({phone: e.target.value})
  }

  handleEmail = e => {
    this.setState({email: e.target.value})
  }

  handleCity = e => {
    this.setState({city: e.target.value})
  }

  handleStreet = e => {
    this.setState({street: e.target.value})
  }

  handleStreetNumber = e => {
    this.setState({streetNumber: e.target.value})
  }

  handleStreetDetail = e => {
    this.setState({streetDetail: e.target.value})
  }

  handleExtraData = e => {
    this.setState({extraData: e.target.value})
  }


  render() {
    return (
      <Conteiner id="formulario">
        <h2>Formulario</h2>
        <p>
          Esta es la página web para realizar donaciones en el voluntariado de
          ingeniería de la Universidad Católica de Córdoba. <br />
          Su propuesta va a ser analizada y luego uno de nuestros representantes
          se va a comunicar con usted.
        </p>
        <Form>
          <Form.Row>
            <Form.Group as={Col} md="6" controlId="name">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" placeholder="Nombre" onChange={this.handleFirstName} required value={this.state.firstName}/>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="lastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido" onChange={this.handleLastName} required value={this.state.lastName} />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="tel">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="351 000 0000" onChange={this.handlePhone} required value={this.state.phone} />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@mail.com"
                onChange={this.handleEmail} 
                required 
                value={this.state.email}
              />
            </Form.Group>
          </Form.Row>

          <Form.Label>Dirección</Form.Label>
          <Form.Row>
            <Form.Group as={Col} md="3" controlId="ciudad">
              <Form.Control type="text" placeholder="Ciudad" onChange={this.handleCity} required value={this.state.city} />
            </Form.Group>
            <Form.Group as={Col} md="3" controlId="calle">
              <Form.Control type="text" placeholder="Calle" onChange={this.handleStreet} required value={this.state.street} />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="altura">
              <Form.Control type="number" placeholder="Altura" onChange={this.handleStreetNumber} required value={this.state.streetNumber} />
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="Detalle">
              <Form.Control type="text" placeholder="Opcional: Lote, manzana, barrio, piso" onChange={this.handleStreetDetail} value={this.state.streetDetail}/>
            </Form.Group>
          </Form.Row>

          <Form.Label>Donaciones</Form.Label>
          {this.state.donaciones.map((donacion) => (
            <Donacion
              key={donacion.id}
              id={donacion.id}
              onDelete={this.handleDelete}
            />
          ))}

          <Button id="mas" variant="primary" onClick={this.newDonation}>
            Agregar nueva
          </Button>
          <Form.Group>
            <Form.Label>Aclaraciones</Form.Label>
            <Form.Control as="textarea" onChange={this.handleExtraData} value={this.state.extraData}/>
          </Form.Group>

          <Button onClick={ () => {console.log(JSON.stringify(this.state))}} id="enviar">
            Enviar
          </Button>
        </Form>
      </Conteiner>
    );
  }
}

export default Formulario;
