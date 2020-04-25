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
    const dons = this.state.donaciones.filter((c) => c.id !== id);
    this.setState({ donaciones: dons });
  };

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
              <Form.Control type="text" placeholder="Nombre" required />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="lastName">
              <Form.Label>Apellido</Form.Label>
              <Form.Control type="text" placeholder="Apellido" required />
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="6" controlId="tel">
              <Form.Label>Teléfono</Form.Label>
              <Form.Control type="tel" placeholder="351 000 0000" required />
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="formEmail">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@mail.com"
                required
              />
            </Form.Group>
          </Form.Row>

          <Form.Label>Dirección</Form.Label>
          <Form.Row>
            <Form.Group as={Col} md="5" controlId="ciudad">
              <Form.Control type="text" placeholder="Ciudad" required />
            </Form.Group>
            <Form.Group as={Col} md="5" controlId="calle">
              <Form.Control type="text" placeholder="Calle" required />
            </Form.Group>
            <Form.Group as={Col} md="2" controlId="altura">
              <Form.Control type="number" placeholder="Altura" required />
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
            <Form.Control as="textarea" />
          </Form.Group>

          <Button type="submit" id="enviar">
            Enviar
          </Button>
        </Form>
      </Conteiner>
    );
  }
}

export default Formulario;
