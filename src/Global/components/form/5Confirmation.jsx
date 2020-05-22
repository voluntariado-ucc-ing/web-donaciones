import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Form';
import '../../css/Formcopy.css';
import Donation from "3.0Donations";

class Confirmation extends Component {
    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    };

    newDonation = (e) => {

    };

    render() {
        const { elementDonation, quantity, unit, city, street, height, others } = Donation.props;

        return (
            <Container>
                <h4>CONFIRMACIÓN DE DONACIÓN</h4>
                <br />
                {this.props.value.alreadyDonate ?
                    (<h5>Hola {this.props.value.name} gracias por donarnos nuevamente!</h5>) :
                    (
                        <>
                            <Form.Row>
                                <Form.Group as={Col} md="6" id="name">
                                    <Form.Label>Nombre</Form.Label>
                                    <br />
                                    {this.props.value.firstName}
                                </Form.Group>
                                <Form.Group as={Col} md="6" id="lastName">
                                    <Form.Label>Apellido</Form.Label>
                                    <br />
                                    {this.props.value.lastName}
                                </Form.Group>
                            </Form.Row>

                            <Form.Group id="tel">
                                <Form.Label>Teléfono|Celular</Form.Label>
                                <br />
                                {this.props.value.phone}
                            </Form.Group>
                        </>
                    )
                }


                <Form.Group id="formEmail">
                    <Form.Label>Email</Form.Label>
                    <br />
                    {this.props.value.email}

                </Form.Group>
                <Form.Label>Donacion</Form.Label>
               <b>{elementDonation}</b>
                <p>Cantidad</p><b>{quantity}</b><br />
                <p>Unidad:</p><b>{unit}</b><br />

                <Form.Label>Dirección</Form.Label>
                <Form.Row>
                    <Form.Group as={Col} md="3" id="ciudad">
                        <Form.Label>Ciudad</Form.Label>
                        <p>Ciudad: </p><b>{city}</b>
                    </Form.Group>
                    <Form.Group as={Col} md="3" id="calle">
                        <Form.Label>Numero</Form.Label>
                        <p>Calle:</p> <b>{street}</b>
                    </Form.Group>
                    <Form.Group as={Col} md="2" id="altura">
                        <Form.Label>Altura</Form.Label>
                        <p>Altura:</p><b>{height}</b>
                    </Form.Group>
                    <Form.Group as={Col} md="4" id="Detalle">
                        <Form.Label>Aclaraciones</Form.Label>
                        <p>Otros: </p><b>{others}</b>
                    </Form.Group>
                </Form.Row>
                <div className="bottomButton">
                    <Button
                        onClick={this.back}
                        className="backButton"
                        variant="contained"
                        color="secondary"

                    >Atrás</Button>
                    <Button type="submit"
                        variant="contained"
                        className="forwardButton"
                        color="primary"
                        onClick={
                            () => {
                                console.log(JSON.stringify(this.state));
                            }
                        }
                        id="enviar">
                        Enviar
                    </Button>
                </div>
            </Container>
        );
    }
}

export default Confirmation;
