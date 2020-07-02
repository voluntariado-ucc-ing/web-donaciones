import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Col from 'react-bootstrap/Col';
import Button from '@material-ui/core/Button';
import Row from "react-bootstrap/Row";
import '../../css/Formcopy.css';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Tooltip from '@material-ui/core/Tooltip';
import Zoom from '@material-ui/core/Zoom';
import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

//import address
import Address from './3.1Address';
import Nav from "react-bootstrap/Nav";

const initialState = {
    elementError: "",
    quantityError:"",
    categoryError:"",
    unitError:"",
    cityError: "",
    streetError: "",
    heightError: ""
};

class Donation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState,
            isNoConventional: false,
            elementDonation: '',
            quantity: '',
            unit: '',
            category: '',
            otherUnit: '',
            city: '',
            street: '',
            number: '',
            floorNumber: '',
            checked: false,
            firstCheck: false
        }
    }

    validateDonation = () => {
        let elementError = "";
        let quantityError = "";
        let categoryError = "";
        let unitError = "";
        let cityError = "";
        let streetError = "";
        let numberError = "";

        if (!this.props.donations[this.props.id].state.elementDonation) {
            elementError = "Ingrese su donación";
        }

        if (!this.props.donations[this.props.id].state.quantity ||
            this.props.donations[this.props.id].state.quantity <= 0) {
            quantityError = "Ingrese la cantidad";
        }

        if (!this.props.donations[this.props.id].state.unit) {
            unitError = "Ingrese la unidad";
        }

        if (!this.props.donations[this.props.id].state.category) {
            categoryError = "Ingrese la categoría";
        }

        if(!this.props.donations[this.props.id].state.city){
            cityError = "Ingrese su ciudad de residencia"
        }

        if(!this.props.donations[this.props.id].state.street){
            streetError = "Ingrese su ciudad de residencia"
        }

        if(!this.props.donations[this.props.id].state.number){
            numberError = "Ingrese su ciudad de residencia"
        }


        if (elementError || quantityError || unitError || categoryError || cityError
            || streetError || numberError) {
            this.setState({ elementError, quantityError, unitError, categoryError, cityError,
                streetError, numberError});
            return false;
        }

        return true;
    };

    //unidad distinta
    handleUnitChange = e => {
        let isNonConventional = e.target.value === "otro";
        const unit = e.target.value;
        this.setState({ unit: e.target.value, isNoConventional: isNonConventional });
        this.props.handleUnit(this.props.id, unit, isNonConventional)
    };


    continue = e => {
        e.preventDefault();
        // const isValid = this.validateDonation();
        // if (isValid) {
        //     this.props.nextStep();
        // }
        this.props.nextStep();
    };

    newDonation = (e) => {
        e.preventDefault();
       /* const isValid = this.validateDonation();
        if (isValid) {
            alert('Ok!');
            this.props.newDonation();
        }*/
        this.props.newDonation();
    };

    //deleteDonation
    deleteDonation = e => {
        e.preventDefault();
        let deleteMessage = window.confirm('¿Está seguro que quiere eliminar la donación?');
        if (deleteMessage)
            this.props.deleteDonation(this.props.id)
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    };

    render() {
        const { handleDonacion, id, donations, checkedChange, directionChange } = this.props;

        return (
            <div className='donation'>
                <Nav className={"justify-content-end mr-0 ml-0"}>
                    <Tooltip title="Nueva donación" arrow placement="top"
                        TransitionComponent={Zoom}
                        enterDelay={50} leaveDelay={300}>
                        <AddCircleIcon
                            onClick={this.newDonation}
                            className={"uccColor"}
                            fontSize={"large"}
                        />
                    </Tooltip>
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
                <hr className={"m-1"} />
                <Row id={"donation"} className="justify-content-md-center pt-3">
                    <Col>
                        <h5>¿Con qué desea ayudarnos? *</h5>
                        <Form.Control
                            placeholder="Ingresá acá lo que vas a donar"
                            name="elementDonation"
                            onChange={handleDonacion('elementDonation', id)}
                            value={donations[id].state.elementDonation}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {this.state.elementError}
                        </div>
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
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.state.quantityError}
                                </div>
                            </Form.Group>

                            <Form.Group>Categoria *
                                <Form.Control as="select"
                                    name="category"
                                    onChange={handleDonacion('category')}
                                    value={donations[id].state.category}
                                >
                                    <option value="cat1">1</option>
                                    <option value="cat2">2</option>
                                    <option value={"other"}>Otro</option>
                                </Form.Control>
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
                                            <option value="">Elegir</option>
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
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.unitError}
                                        </div>
                                    </Form.Group>
                                    <Form.Group as={Col} md="4" >
                                        <Form.Label>Otra unidad *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="otherUnit"
                                            onChange={handleDonacion('otherUnit', this.props.id)}
                                            value={donations[this.props.id].state.otherUnit}
                                        />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.unitError}
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
                                        <option value="">Elegir</option>
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
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.unitError}
                                    </div>
                                </Form.Group>)
                            }

                        </Form.Row>



                        <Address
                            id={id}
                            handleChange={handleDonacion}
                            checkedChange={checkedChange}
                            city={donations[id].state.city}
                            street={donations[id].state.street}
                            number={donations[id].state.number}
                            floorNumber={donations[id].state.floorNumber}
                            donations={this.props.donations}
                            checked={donations[id].state.checked}
                            firstCheck={donations[id].state.firstCheck}
                            directionChange={directionChange}
                            initialState = {this.state.initialState}

                        />

                        <hr className={"mt-1 mb-1"} />
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

