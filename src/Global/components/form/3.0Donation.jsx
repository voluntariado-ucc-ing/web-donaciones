import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import Container from "react-bootstrap/Container";
import Checkbox from '@material-ui/core/Checkbox';
import '../../css/Formcopy.css';

//import address
import Address from './4Address'

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
            floorNumber: ''
        }
    }
    continue = (e) => {
        e.preventDefault()
        this.props.donation(this.state.donation)
        this.props.nextStep()
    }
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    new = (e) => {
        e.preventDefault()
    }

    //donationType
    handleDonationType = e => {
        let isOthersDonationType = e.target.value === 'otro' ? true : false
        this.setState({ donationType: e.target.value, isOtherDonationType: isOthersDonationType })
    }
    otro = () => {
        if (this.state.isOtherDonationType)
            return (
                <div>
                    <Form.Label>Otro tipo de material</Form.Label>
                    <Form.Control
                        type="text"
                        onChange={this.handleOtherDonationType}
                        value={this.state.otherDonationType}
                        required
                    />
                </div>
            );
    };
    handleOtherDonationType = e => {
        this.setState({ otherDonationType: e.target.value })
    }

    //unit
    handleUnitChange = e => {
        let isNonConventional = e.target.value === "otro" ? true : false
        this.setState({ unit: e.target.value, isNoConventional: isNonConventional })
    };
    otro2 = () => {
        if (this.state.isNoConventional)
            return (
                <div>
                    <Form.Label>Otra unidad</Form.Label>
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
    }

    handleChange = input => (e) => {
        this.setState({ [input]: e.target.value })
    }

    render() {
        const { elementDonation, quantity, unit, isNoConventional } = this.state
        return (
            <Container controlId="donation">
                <Form.Label>¿Con qué vas a ayunos?</Form.Label>
                <Form.Control
                    placeholder="Ingresa aca lo que vas a donar"
                    name="elementDonation"
                    onChange={this.handleChange('elementDonation')}
                    value={elementDonation}
                    required
                />

                <Form.Group >
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="number"
                        name="quantity"
                        onChange={this.handleChange('quantity')}
                        value={quantity}
                    />
                </Form.Group>
                {isNoConventional ? (
                    <Form.Row>
                        <Form.Group as={Col} md="6" >
                            <Form.Label>Unidad</Form.Label>
                            <Form.Control as="select"
                                name="unit"
                                onChange={this.handleUnitChange}
                                value={unit}
                            >
                                <option value="m">Metros</option>
                                <option value="kg">Kg</option>
                                <option value="otro">Otro</option>
                            </Form.Control>
                        </Form.Group>
                        <Form.Group as={Col} md="6" >
                            {this.otro2()}
                        </Form.Group>
                    </Form.Row>
                )
                    :
                    (<Form.Group >
                        <Form.Label>Unidad</Form.Label>
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
                <Address />
                <Button
                    type="submit"
                    onClick={this.back}
                    className="backButton"
                    variant="contained"
                    color="secondary"
                > Atras</Button>
                <Button>Nueva Donacion</Button>
                <Button
                    onClick={this.continue}
                    type="submit"
                    className="forwardButton"
                    variant="contained"
                    color="primary"
                >Continue</Button>
            </Container >
        );
    }
}

export default Donation;
