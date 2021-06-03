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
    elementErrorMessage: "",
    quantityErrorMessage: "",
    categoryErrorMessage: "",
    unitErrorMessage: "",
    otherUnitErrorMessage: "",
    cityErrorMessage: "",
    streetErrorMessage: "",
    numberErrorMessage: ""
};

class Donation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState,
            isNoConventional: false,
            elementDonation: '',
            category: '',
            quantity: '',
            unit: '',
            otherUnit: '',
            city: '',
            street: '',
            number: '',
            floorNumber: '',
            checked: false,
            firstCheck: false,
            message: "",
            //los elementos de abajo son necesarios para la verificacion
            elementErrorMessage: "",
            quantityErrorMessage: "",
            categoryErrorMessage: "",
            unitErrorMessage: "",
            otherUnitErrorMessage: "",
            cityErrorMessage: "",
            streetErrorMessage: "",
            numberErrorMessage: ""
        }
    }

    validateDonation = () => {
        let elementErrorMessage = "";
        let quantityErrorMessage = "";
        let categoryErrorMessage = "";
        let unitErrorMessage = "";
        let otherUnitErrorMessage = ""
        let cityErrorMessage = "";
        let streetErrorMessage = "";
        let numberErrorMessage = "";


        if (!this.props.donations[this.props.id].state.elementDonation)
            elementErrorMessage = "Ingrese su donación";


        if (!this.props.donations[this.props.id].state.category)
            categoryErrorMessage = "Ingrese la categoría";


        if (!this.props.donations[this.props.id].state.quantity ||
            this.props.donations[this.props.id].state.quantity <= 0)
            quantityErrorMessage = "Ingrese la cantidad";



        if (!this.props.donations[this.props.id].state.unit)
            unitErrorMessage = "Ingrese la unidad";


        if (this.props.donations[this.props.id].state.unit === 'otro' && !(this.props.donations[this.props.id].state.otherUnit))
            otherUnitErrorMessage = "Ingrese la unidad";

        if (!this.props.donations[this.props.id].state.city)
            cityErrorMessage = "Ingrese la ciudad en la que se encuentra su donación"


        if (!this.props.donations[this.props.id].state.street)
            streetErrorMessage = "Ingrese calle de la donación"

        if (!this.props.donations[this.props.id].state.number)
            numberErrorMessage = "Ingrese a que altura se encuentra"


        if (elementErrorMessage || quantityErrorMessage || (unitErrorMessage || otherUnitErrorMessage) || categoryErrorMessage || cityErrorMessage
            || streetErrorMessage || numberErrorMessage) {
            this.setState({
                elementErrorMessage: elementErrorMessage, quantityErrorMessage: quantityErrorMessage, unitErrorMessage: unitErrorMessage, otherUnitErrorMessage: otherUnitErrorMessage, categoryErrorMessage: categoryErrorMessage, cityErrorMessage: cityErrorMessage,
                streetErrorMessage: streetErrorMessage, numberErrorMessage: numberErrorMessage
            });
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
        const isValid = this.validateDonation();
        if (isValid) {
            this.props.nextStep();
        }
    };

    newDonation = (e) => {
        e.preventDefault();
        const isValid = this.validateDonation();
        if (isValid) {
            this.props.newDonation();
        }
    };

    //deleteDonation
    deleteDonation = e => {
        e.preventDefault();
        let deleteMessage = window.confirm('¿Está seguro que quiere eliminar la donación?');
        if (deleteMessage)
            this.props.deleteDonation(this.props.id)
    };

    back = (e) => {
        console.log("back en donations")
        e.preventDefault();
        this.props.prevStep()
    };

    render() {
        const { handleDonacion, id, donations, checkedChange, directionChange } = this.props;
        const errorElement = this.state.elementErrorMessage !== '' && !(donations[id].state.elementDonation !== '')
        const errorCategory = this.state.categoryErrorMessage !== '' && !(donations[id].state.category !== '')
        const errorQuantity = this.state.quantityErrorMessage !== '' && !(donations[id].state.quantity !== '')
        const errorUnit = this.state.unitErrorMessage !== '' && !(donations[id].state.unit !== '')
        const errorUnitO = this.state.otherUnitErrorMessage !== '' && !(donations[id].state.otherUnit !== '')
        return (
            <div>
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

                            <h5>¿Con qué desea ayudarnos?</h5>
                            <Form.Row>
                                <Form.Group as={Col} md='6'>
                                    <Form.Label> Qué va a donar *</Form.Label>
                                    <Form.Control
                                        placeholder="Ingresá acá lo que vas a donar"
                                        name="elementDonation"
                                        onChange={handleDonacion('elementDonation', id)}
                                        value={donations[id].state.elementDonation}
                                        isInvalid={errorElement}
                                        isValid={donations[id].state.elementDonation !== ''}
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {errorElement ? this.state.elementErrorMessage : null}
                                    </div>
                                </Form.Group>
                                <Form.Group as={Col} md='6'>
                                    <Form.Label>Categoría *</Form.Label>
                                    <Form.Control as="select"
                                        name="category"
                                        onChange={handleDonacion('category', id)}
                                        value={donations[id].state.category}
                                        isInvalid={errorCategory}
                                        isValid={donations[id].state.category !== ''}
                                    >
                                        <option value="">Seleccione categoría</option>
                                        <option value="tools">Herramientas</option>
                                        <option value="materials">Materiales de construcción</option>
                                        <option value="clothes">Ropa y calzado</option>
                                        <option value="food">Alimentos</option>
                                    </Form.Control>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {errorCategory ? this.state.categoryErrorMessage : null}
                                    </div>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row >
                                <Form.Group as={Col} md='4'>

                                    <Form.Label>Cantidad *</Form.Label>
                                    <Form.Control
                                        type="number"
                                        name="quantity"
                                        onChange={handleDonacion('quantity', id)}
                                        value={donations[id].state.quantity}
                                        isInvalid={errorQuantity}
                                        isValid={donations[id].state.quantity !== ''}
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {errorQuantity ? this.state.quantityErrorMessage : null}
                                    </div>
                                </Form.Group>

                                <Form.Group as={Col} md={donations[this.props.id].state.isNoConventional ? '4' : '8'} >
                                    <Form.Label>Unidad *</Form.Label>
                                    <Form.Control as="select"
                                        name="unit"
                                        onChange={this.handleUnitChange}
                                        value={donations[id].state.unit}
                                        isInvalid={errorUnit}
                                        isValid={donations[id].state.unit !== ''}
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
                                        {errorUnit ? this.state.unitErrorMessage : null}
                                    </div>
                                </Form.Group>

                                {donations[this.props.id].state.isNoConventional ?
                                    <Form.Group as={Col} md="4" >
                                        <Form.Label>Otra unidad *</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="otherUnit"
                                            onChange={handleDonacion('otherUnit', id)}
                                            value={donations[id].state.otherUnit}
                                            isInvalid={errorUnitO}
                                            isValid={donations[id].state.otherUnit !== ''}
                                        />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {errorUnitO ? this.state.otherUnitErrorMessage : null}
                                        </div>
                                    </Form.Group> : null
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
                                cityErrorMessage={this.state.cityErrorMessage}
                                streetErrorMessage={this.state.streetErrorMessage}
                                numberErrorMessage={this.state.numberErrorMessage}
                            />

                            <hr className={"mt-1 mb-1"} />
                            <Form.Group controlId="exampleForm.ControlTextarea1">
                                <Form.Label column={"1"}>
                                    <h5 className={"pt-3"}>¿Algo que deberíamos saber?</h5>
                                </Form.Label>
                                <Form.Control as="textarea" rows="3"
                                    name="message"
                                    onChange={handleDonacion('message', id)}
                                    value={donations[id].state.message} />
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
            </div>
        );
    }
}

export default Donation;

