import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import Container from "react-bootstrap/Container";
import '../../css/Formcopy.css';
import Address from "./4Address";

class Donation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNoConventional: false,
            nonConventionalUnit: "",
            otherDonationType: "",
            donationType: '',
            elementDonation: '',
            quantity: '',
            unit: '',
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

    //unit
    handleUnitChange = e => {
        let isNonConventional = e.target.value === "otro";
        this.setState({ unit: e.target.value, isNoConventional: isNonConventional })
    };
    otro2 = () => {
        if (this.state.isNoConventional)
            return (
                <div>
                    <Form.Label>Otra unidad *</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={this.handleNonConventionalUnit}
                        value={this.state.nonConventionalUnit}
                    />
                </div>
            );
    };
    handleNonConventionalUnit = e => {
        this.setState({ nonConventionalUnit: e.target.value })
    };

    handleChange = input => (e) => {
        this.setState({ [input]: e.target.value })
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
        const { elementDonation, quantity, unit, isNoConventional } = this.state;
        return (
            <Container id="donation">
                <div className="donaciones">
                    {this.props.value.donations.length > 1 ?
                        <> <h5>Donación número {this.props.id + 1}</h5> <br /> </> : null
                    }

                    <h5>¿Con qué desea ayudarnos? *</h5>

                    <input
                        type="text"
                        placeholder="Ingresá acá lo que vas a donar"
                        name="elementDonation"
                        onChange={this.handleChange('elementDonation')}
                        value={elementDonation}
                        required
                    />
                    <br />
                    <Form.Row >
                        <Form.Group as={Col} md='4'>
                            <Form.Label>Cantidad *</Form.Label>
                            <input
                                type="number"
                                name="quantity"
                                onChange={this.handleChange('quantity')}
                                value={quantity}
                            />
                        </Form.Group>
                        {isNoConventional ? (
                            <>
                                <Form.Group as={Col} md="4" >
                                    <Form.Label>Unidad *</Form.Label>
                                    <input as="select"
                                        name="unit"
                                        onChange={this.handleUnitChange}
                                        value={unit}
                                    >
                                        <option value="m">Metros</option>
                                        <option value="kg">Kg</option>
                                        <option value="otro">Otro</option>
                                    </input>
                                </Form.Group>
                                <Form.Group as={Col} md="4" >
                                    {this.otro2()}
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
                                    value={unit}
                                >
                                    <option value="m">Metros</option>
                                    <option value="kg">Kg</option>
                                    <option value="otro">Otro</option>
                                </Form.Control>
                            </Form.Group>)
                        }
                    </Form.Row>
                    <Address />
                    <div className="centerButton">
                        <Button onClick={this.newDonation}
                            color="primary"
                            variant="contained"
                            className="centerButton">Nueva Donacion</Button>
                    </div>
                    <div className="pasosDonation">
                        {this.props.value.donationStep > 0 ?
                            (<Button
                                variant="contained"
                                color="default"
                                className="backButton"
                                onClick={this.backDonation} > Donacion Anterior</Button>) : null
                        }
                        {this.props.value.donationStep < this.props.value.donations.length - 1 ?
                            (<Button
                                variant="contained"
                                color="default"
                                className="forwardButton"
                                onClick={this.forwardDonation}> Siguiente Donacion</Button>) : null
                        }
                    </div>
                </div>
                <div className="bottomButton2">
                    <Button
                        type="submit"
                        onClick={this.back}
                        className="backButton"
                        variant="contained"
                        color="secondary"
                    > Atrás</Button>
                    <Button
                        onClick={this.continue}
                        type="submit"
                        className="forwardButton"
                        variant="contained"
                        color="primary"
                    >Continuar</Button>
                </div>
            </Container >
        );
    }
}

export default Donation;
