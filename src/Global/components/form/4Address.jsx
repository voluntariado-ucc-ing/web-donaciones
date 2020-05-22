import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <Container>
                <h5>¿Dónde debemos retirarlos?</h5>
                <Form.Label>Localidad - Ciudad *</Form.Label>
                <Form.Group
                    id="ciudad">
                    <Form.Control type="text" placeholder="Ciudad"
                        onChange={
                            this.props
                        }
                        required
                        value={
                            this.state.city
                        } />
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}
                        md="5"
                        id="calle">
                        <Form.Label>Calle *</Form.Label>
                        <Form.Control type="text" placeholder="Calle"
                            onChange={
                                this.handleStreet
                            }
                            required
                            value={
                                this.state.street
                            } />
                    </Form.Group>
                    <Form.Group as={Col}
                        md="2"
                        id="altura">
                        <Form.Label>Altura *</Form.Label>

                        <Form.Control type="number" placeholder="Altura"
                            onChange={
                                this.handleStreetNumber
                            }
                            required
                            value={
                                this.state.streetNumber
                            } />
                    </Form.Group>
                    <Form.Group as={Col}
                        md="5"
                        id="Detalle">
                        <Form.Label>Otros </Form.Label>
                        <Form.Control type="text" placeholder="Opcional: Lote, manzana, barrio, piso"
                            onChange={
                                this.handleStreetDetail
                            }
                            value={
                                this.state.streetDetail
                            } />
                    </Form.Group>
                </Form.Row>
            </Container>
        );
    }
}

export default Address;
