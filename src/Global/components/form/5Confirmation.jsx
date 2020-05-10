import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import '../../css/Formcopy.css';

class Confirmation extends Component {
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    newDonation = (e) => {

    }

    render() {
        return (
            <Container>
                <h2>Los datos que ha ingresado son</h2>
                <br />
                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="name">
                        <Form.Label>Nombre</Form.Label>
                        <br />
                        {this.props.value.firstName}
                    </Form.Group>
                    <Form.Group as={Col} md="6" controlId="lastName">
                        <Form.Label>Apellido</Form.Label>
                        <br />
                        {this.props.value.lastName}
                    </Form.Group>
                </Form.Row>

                <Form.Row>
                    <Form.Group as={Col} md="6" controlId="tel">
                        <Form.Label>Teléfono|Celular</Form.Label>
                        <br />
                        {this.props.value.phone}
                    </Form.Group>

                    <Form.Group as={Col} md="6" controlId="formEmail">
                        <Form.Label>Email</Form.Label>
                        <br />
                        {this.props.value.email}
                    </Form.Group>
                </Form.Row>
                <Form.Label>Donacion</Form.Label>
                <Form.Label>Dirección</Form.Label>
                <Form.Row>
                    <Form.Group as={Col} md="3" controlId="ciudad">
                        <Form.Label>Dirección</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="3" controlId="calle">
                        <Form.Label>Numero</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="2" controlId="altura">
                        <Form.Label>Altura</Form.Label>
                    </Form.Group>
                    <Form.Group as={Col} md="4" controlId="Detalle">
                        <Form.Label>Aclaracione</Form.Label>
                    </Form.Group>
                </Form.Row>
                <Button
                    onClick={this.back}
                    className="backButton"
                    variant="contained"
                    color="secondary"

                >Atras</Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={
                        this.newDonation
                    }>
                    Nueva donacion
                </Button>
                <Button type="submit"
                    variant="contained"
                    color="primary"
                    onClick={
                        () => {
                            console.log(JSON.stringify(this.state));
                        }
                    }
                    id="enviar">
                    Enviar
                </Button>
            </Container>
        );
    }
}

export default Confirmation;
