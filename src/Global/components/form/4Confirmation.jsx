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
        const { value } = this.props
        return (
            < Container >
                <h4>CONFIRMACIÓN DE DONACIÓN</h4>
                <br />
                {
                    value.alreadyDonate ?
                        (<h5>Hola {value.name} gracias por donarnos nuevamente!</h5>) :
                        (
                            <>
                                <Form.Label>Datos personales ingresados</Form.Label>
                                <br />
                                <Form.Label>Su nombre es {value.firstName} {value.lastName}</Form.Label>
                                <br />
                                <Form.Label>El teléfono|celular ingresado es  {value.phone}</Form.Label>

                            </>
                        )
                }
                <Form.Group id="formEmail">
                    <Form.Label>El email ingresado es {value.email}</Form.Label>
                </Form.Group>
                <Form.Label>Usted a ingresado la siguiente información</Form.Label>
                {value.donations.map((donacion) =>
                    <>
                        <p>Donacion {donacion.id}</p>
                        <Form.Label>
                            Lo que usted va a donar son {donacion.state.quantity}
                            {donacion.state.isNoConventional ? (" " + donacion.state.otherUnit) : (" " + donacion.state.unit)}
                            {" de " + donacion.state.elementDonation}.<br />
                             Se ubica en {donacion.state.city}, {donacion.state.street} {donacion.state.number},
                            {donacion.state.floorNumber}
                        </Form.Label>
                    </>
                )
                }
                <div className="bottomButton">
                    <Button
                        onClick={this.back}
                        className="backButton"
                        variant="contained"
                        color="secondary"

                    >Atrás</Button>
                    <Button
                        type="submit"
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
            </Container >
        );
    }
}

export default Confirmation;
