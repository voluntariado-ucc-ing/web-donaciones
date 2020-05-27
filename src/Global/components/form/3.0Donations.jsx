import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import Container from "react-bootstrap/Container";
import '../../css/Formcopy.css';

//import address
import Address from './3.1Address'
import Row from "react-bootstrap/Row";

class Donation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNoConventional: false,
            elementDonation: '',
            quantity: '',
            unit: '',
            otherUnit: '',
            city: '',
            street: '',
            number: '',
            floorNumber: '',
        }
    }
    continue = (e) => {
        e.preventDefault();
        this.props.nextStep()
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    };

    //unidad distinta
    handleUnitChange = e => {
        let isNonConventional = e.target.value === "otro";
        var unit = e.target.value;
        this.setState({ unit: e.target.value, isNoConventional: isNonConventional });
        this.props.handleUnit(this.props.id, unit, isNonConventional)
    };

    //nuevasDonaciones
    newDonation = (e) => {
        e.preventDefault();
        this.props.newDonation()
    };

    backDonation = () => {
        this.props.backDonation()
    };

    forwardDonation = () => {
        this.props.forwardDonation()
    };

    render() {
        const { handleDonacion, id, donations, donationStep } = this.props;
        return (
            <Container>
                <div className="">
                    <Button
                        type="submit"
                        onClick={this.back}
                        className="backButton"
                        variant="contained"
                        color="secondary"
                    > Mis Datos</Button>
                </div>

                <Row>
                    <Col>
                        <div className="">
                            <Button onClick={this.newDonation}
                                    color="primary"
                                    variant="contained"
                                    className="centerButton">Nueva Donacion</Button>
                        </div>
                        <div className="pasosDonation">
                            {donationStep > 0 ?
                                (<Button
                                    variant="contained"
                                    color="default"
                                    className="backButton"
                                    onClick={this.backDonation} > Donacion Anterior</Button>) : null
                            }
                            {donationStep < donations.length - 1 ?
                                (<Button
                                    variant="contained"
                                    color="default"
                                    className="forwardButton"
                                    onClick={this.forwardDonation}> Siguiente Donacion</Button>) : null
                            }
                        </div>
                    </Col>
                    <Col className={'donaciones'}>
                            {donations.length > 1 ?
                                <> <h5>Donación número {this.props.id + 1}</h5> <br /> </> : null
                            }

                            <h5>¿Con qué desea ayudarnos? *</h5>

                            <Form.Control
                                placeholder="Ingresá acá lo que vas a donar"
                                name="elementDonation"
                                onChange={handleDonacion('elementDonation', id)}
                                value={donations[id].state.elementDonation}
                                required
                            />
                            <br />
                            <Form.Row >
                                <Form.Group as={Col} md='4'>
                                    <Form.Label>Cantidad *</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="quantity"
                                        onChange={handleDonacion('quantity', id)}
                                        value={donations[id].state.quantity}
                                    />
                                </Form.Group>
                                {donations[this.props.id].state.isNoConventional ? (
                                        <>
                                            <Form.Group as={Col} md="4" >
                                                <Form.Label>Unidad *</Form.Label>
                                                <Form.Control as="select"
                                                              name="unit"
                                                              onChange={this.handleUnitChange}
                                                              value={donations[id].state.unit}
                                                >
                                                    <option value="m">Metros</option>
                                                    <option value="kg">Kg</option>
                                                    <option value="otro">Otro</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group as={Col} md="4" >
                                                <div>
                                                    <Form.Label>Otra unidad *</Form.Label>
                                                    <Form.Control
                                                        type="text"
                                                        name="otherUnit"
                                                        onChange={handleDonacion('otherUnit', this.props.id)}
                                                        value={donations[this.props.id].state.otherUnit}
                                                    />
                                                </div>
                                            </Form.Group>
                                        </>
                                    )
                                    :
                                    (<Form.Group
                                        as={Col} md="8" >
                                        <Form.Label>Unidad *</Form.Label>
                                        <Form.Control as="select"
                                                      name="unit"
                                                      onChange={this.handleUnitChange}
                                                      value={donations[id].state.unit}
                                        >
                                            <option value="m">Metros</option>
                                            <option value="kg">Kg</option>
                                            <option value="otro">Otro</option>
                                        </Form.Control>
                                    </Form.Group>)
                                }
                            </Form.Row>
                            <Address
                                id={id}
                                handleChange={handleDonacion}
                                city={donations[id].state.city}
                                street={donations[id].state.street}
                                number={donations[id].state.number}
                                floorNumber={donations[id].state.floorNumber}
                            />
                    </Col>
                    <div>
                        <Button
                            onClick={this.continue}
                            type="submit"
                            className="forwardButton button"
                            variant="contained"
                            color="primary"
                        >Finalizar</Button>
                    </div>
                </Row>
            </Container >
        );
    }
}

export default Donation;
