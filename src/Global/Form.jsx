import React, { Component } from "react";
import "./css/Form.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

class Formulario extends Component {
  render() {
    return (
      <div>
        <h2>Donen</h2>
        <p>
          Esta es la pagina web para realizar donaciones en el voluntarioado de
          ingenieria de la Universidad Catolica de Cordoba. <br />
          Su propuesta va a ser analizada y luego uno de nuestros representantes
          va a responderle si fue aprobada o no.
        </p>

        <Form id="formulario">
        <Form.Group controlId="name">
          <Form.Label>Nombre</Form.Label>
          <Form.Control type="text" placeholder="Apellido" />
        </Form.Group>

        <Form.Group controlId="lastName">
          <Form.Label>Apellido</Form.Label>
          <Form.Control type="text" placeholder="Apellido" />
        </Form.Group>

        <Form.Group controlId="tel">
          <Form.Label>Teléfono</Form.Label>
          <Form.Control type="tel" placeholder="351 XXX XXXX" />
        </Form.Group>

          <Form.Group controlId="formEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

        <Form.Group controlId="dire">
          <Form.Label>Dirección</Form.Label>
          <Form.Control type="text" placeholder="Ciudad, calle, altura" />
        </Form.Group>

          <Form.Group controlId="exampleForm.ControlSelect2">
            <Form.Label>Tipo de donación</Form.Label>
            <Form.Control as="select" multiple>
              <option>Material de construccion</option>
              <option>Elementos de banio</option>
              <option>Herramientas</option>
              <option>Muebles</option>
              <option>Otro</option>
            </Form.Control>
          </Form.Group>

          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Cantidad
              </Form.Label>
              <Col sm={10}>
                <Form.Check
                    type="radio"
                    label="first radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                />
                <Form.Check
                    type="radio"
                    label="second radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                />
                <Form.Check
                    type="radio"
                    label="third radio"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                />
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Si prefiere describir una cantidad no convencional, describalo aqui</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      </div>
    );
  }
}

export default Formulario;
