import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleCity = (e) => {
        this.setState({ city: e.target.value });
    };

    handleStreet = (e) => {
        this.setState({ street: e.target.value });
    };

    handleStreetNumber = (e) => {
        this.setState({ streetNumber: e.target.value });
    };

    handleStreetDetail = (e) => {
        this.setState({ streetDetail: e.target.value });
    };
    render() {
        return (
            <Container>
                <Form.Label>Necesitamos saber en donde se encuentran esos materiales</Form.Label>
                <Form.Row>
                    <Form.Group as={Col}
                        md="3"
                        controlId="ciudad">
                        <Form.Control type="text" placeholder="Ciudad"
                            onChange={
                                this.handleCity
                            }
                            required
                            value={
                                this.state.city
                            } />
                    </Form.Group>
                    <Form.Group as={Col}
                        md="3"
                        controlId="calle">
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
                        controlId="altura">
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
                        md="4"
                        controlId="Detalle">
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
