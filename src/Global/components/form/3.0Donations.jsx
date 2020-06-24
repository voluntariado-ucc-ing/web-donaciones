import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import Row from "react-bootstrap/Row";
import '../../css/Formcopy.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

//import address
import Address from './3.1Address';
import Nav from "react-bootstrap/Nav";

class Donation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isNoConventional: false,
            elementDonation: '',
            elementCompleted: true,
            quantity: '',
            quantityCompleted: true,
            unit: '',
            unitCompleted: true,
            otherUnit: '',
            otherUnitCompleted: true,
            city: '',
            cityCompleted: true,
            street: '',
            streetCompleted: true,
            number: '',
            numberCompleted: true,
            floorNumber: '',
            floorCompleted: true
        }
    }

    //unidad distinta
    handleUnitChange = e => {
        let isNonConventional = e.target.value === "otro";
        const unit = e.target.value;
        this.setState({ unit: e.target.value, isNoConventional: isNonConventional });
        this.props.handleUnit(this.props.id, unit, isNonConventional)
    };

    //nuevasDonaciones
    newDonation = (e) => {
        e.preventDefault();
        const { elementCompleted, quantityCompleted, unitCompleted, otherUnitCompleted, cityCompleted, streetCompleted, numberCompleted } = this.state;
        if (this.props.donations[this.props.id].state.elementDonation === '')
            this.setState({ elementCompleted: false });
        else
            this.setState({ elementCompleted: true });

        if (this.props.donations[this.props.id].state.quantity === '')
            this.setState({ quantityCompleted: false });
        else
            this.setState({ quantityCompleted: true });

        if (this.props.donations[this.props.id].state.unit === '')
            this.setState({ unitCompleted: false });
        else
            this.setState({ unitCompleted: true });
        if (this.props.donations[this.props.id].state.otherUnit === '')
            this.setState({ otherUnitCompleted: false });
        else
            this.setState({ otherUnitCompleted: true });
        if (this.props.donations[this.props.id].state.city === '')
            this.setState({ cityCompleted: false });
        else
            this.setState({ cityCompleted: true });
        if (this.props.donations[this.props.id].state.street === '')
            this.setState({ streetCompleted: false });
        else
            this.setState({ streetCompleted: true });
        if (this.props.donations[this.props.id].state.number === '')
            this.setState({ numberCompleted: false });
        else
            this.setState({ numberCompleted: true },
                () => {
                    if (this.props.donations[this.props.id].state.unit === "otro") {
                        if (elementCompleted && quantityCompleted && otherUnitCompleted && cityCompleted && streetCompleted && numberCompleted)
                            this.props.newDonation()
                    }
                    else
                    if (elementCompleted && quantityCompleted && unitCompleted && cityCompleted && streetCompleted && numberCompleted)
                        this.props.newDonation()
                }
            )
    };

    //deleteDonation
    deleteDonation = e => {
        e.preventDefault();
        let deleteMessage = window.confirm('¿Está seguro que quiere eliminar la donación?');
        if (deleteMessage)
            this.props.deleteDonation(this.props.id)
    };

    continue = () => {
        const { elementCompleted, quantityCompleted, unitCompleted, otherUnitCompleted, cityCompleted, streetCompleted, numberCompleted } = this.state;
        if (this.props.donations[this.props.id].state.elementDonation === '')
            this.setState({ elementCompleted: false });
        else
            this.setState({ elementCompleted: true });

        if (this.props.donations[this.props.id].state.quantity === '')
            this.setState({ quantityCompleted: false });
        else
            this.setState({ quantityCompleted: true });

        if (this.props.donations[this.props.id].state.unit === '')
            this.setState({ unitCompleted: false });
        else
            this.setState({ unitCompleted: true });
        if (this.props.donations[this.props.id].state.otherUnit === '')
            this.setState({ otherUnitCompleted: false });
        else
            this.setState({ otherUnitCompleted: true });
        if (this.props.donations[this.props.id].state.city === '')
            this.setState({ cityCompleted: false });
        else
            this.setState({ cityCompleted: true });
        if (this.props.donations[this.props.id].state.street === '')
            this.setState({ streetCompleted: false });
        else
            this.setState({ streetCompleted: true });
        if (this.props.donations[this.props.id].state.number === '')
            this.setState({ numberCompleted: false });
        else
            this.setState({ numberCompleted: true },
                () => {
                    if (this.props.donations[this.props.id].state.unit === "otro") {
                        if (elementCompleted && quantityCompleted && otherUnitCompleted && cityCompleted && streetCompleted && numberCompleted)
                            this.props.nextStep()
                    }
                    else
                    if (elementCompleted && quantityCompleted && unitCompleted && cityCompleted && streetCompleted && numberCompleted)
                        this.props.nextStep()
                })
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    };

    render() {
        const { handleDonacion, id, donations } = this.props;
        const { elementCompleted, quantityCompleted, unitCompleted, otherUnitCompleted } = this.state;
        return (
            <div>
                <Nav className={"justify-content-end mr-0 ml-0"}>
                        <AddCircleIcon
                            onClick={this.newDonation}
                            className={"uccColor"}
                            fontSize={"large"}
                        />

                    {
                        this.props.donations.length > 1 ?
                            (<DeleteOutlineIcon
                                onClick={this.deleteDonation}
                                className="ml-1 uccColor"
                                fontSize={"large"}
                                />)
                            :
                            null
                    }
                </Nav>
                <hr  className={"m-1"}/>
                <Row id={"donation"} className="justify-content-md-center pt-3">
                    <Col>
                        <h5>¿Con qué desea ayudarnos? *</h5>
                        <Form.Control
                            placeholder="Ingresá acá lo que vas a donar"
                            name="elementDonation"
                            onChange={handleDonacion('elementDonation', id)}
                            value={donations[id].state.elementDonation}
                        />
                        {elementCompleted ? null : <Form.Text className="invalidInput">
                            Debe completar este campo
                        </Form.Text>}

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
                                {quantityCompleted ? null : <Form.Text className="invalidInput">
                                    Debe completar este campo
                                </Form.Text>}
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
                                                <option value="ltr">Litro</option>
                                                <option value="bolsa">Bolsa</option>
                                                <option value="lata">Lata</option>
                                                <option value="palette">Palette</option>
                                                <option value="m2">Metro cuadrado</option>
                                                <option value="m3">Metro cúbico</option>
                                                <option value="un">Unidad</option>
                                                <option value="otro">Otro</option>
                                            </Form.Control>
                                        </Form.Group>
                                        <Form.Group as={Col} md="4" >
                                            <Form.Label>Otra unidad *</Form.Label>
                                            <Form.Control
                                                type="text"
                                                name="otherUnit"
                                                onChange={handleDonacion('otherUnit', this.props.id)}
                                                value={donations[this.props.id].state.otherUnit}
                                            />
                                            {
                                                otherUnitCompleted ? null :
                                                    <Form.Text className="invalidInput">
                                                        Debe introducir una nueva unidad
                                                    </Form.Text>
                                            }
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
                                        <option value="ltr">Litro</option>
                                        <option value="bolsa">Bolsa</option>
                                        <option value="lata">Lata</option>
                                        <option value="palette">Palette</option>
                                        <option value="m2">Metro cuadrado</option>
                                        <option value="m3">Metro cúbico</option>
                                        <option value="un">Unidad</option>
                                        <option value="otro">Otro</option>
                                    </Form.Control>
                                    {
                                        unitCompleted ? null :
                                            <Form.Text className="invalidInput">
                                                Debe seleccionar una unidad
                                            </Form.Text>
                                    }
                                </Form.Group>)
                            }

                        </Form.Row>

                        <Address
                            id={id}
                            handleChange={handleDonacion}
                            city={donations[id].state.city}
                            cityCompleted={this.state.cityCompleted}
                            street={donations[id].state.street}
                            streetCompleted={this.state.streetCompleted}
                            number={donations[id].state.number}
                            numberCompleted={this.state.numberCompleted}
                            floorNumber={donations[id].state.floorNumber}
                            floorCompleted={this.state.floorCompleted}
                        />
                        <hr  className={"mt-1 mb-1"}/>
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label>
                                <h5 className={"pt-3"}>¿Algo que deberíamos saber?</h5>
                            </Form.Label>
                            <Form.Control as="textarea" rows="3" />
                        </Form.Group>
                        
                        <div >
                            <Button
                                type="submit"
                                onClick={this.back}
                                className="backButton btn"
                                variant="contained"
                            > Mis Datos</Button>

                            <Button
                                onClick={this.continue}
                                type="submit"
                                className="forwardButton btn"
                                variant="contained"
                            >Finalizar</Button>
                        </div>
                    </Col>
                </Row >
            </div>
        );
    }
}

export default Donation;

