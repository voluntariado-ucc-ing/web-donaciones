import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../../css/Formcopy.css';
import AlertDialogSlide from "../Modal";
import axios from 'axios';
import LinearProgress from '@material-ui/core/LinearProgress';
import Alert from "@material-ui/lab/Alert";

import { GoPerson } from "react-icons/go";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md"
import { FaHandHoldingHeart } from "react-icons/fa"
import { MdEdit } from "react-icons/md"
import { API_DOMAIN } from '../../../utils/config';

const initialState = {
    loading: false,
    okMessage: false,
    errorMessage: false

};

class Confirmation extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    };

    /*Este es el que me persiste*/

    submit = (e) => {
        e.preventDefault()

        //Creo los objetos para la donación
        let donations = []
        for (var i = 0; i < this.props.donations.length; i++) {
            let category
            //mapeo las coategorías a un número entero
            switch (this.props.donations[i].state.category) {
                case "tools":
                    category = 1
                    break
                case "materials":
                    category = 2
                    break
                case "clothes":
                    category = 3
                    break
                case "food":
                    category = 4
                    break
                default:
                    category = 0
            }
            donations[i] = {
                "element": this.props.donations[i].state.elementDonation,
                "quantity": Number(this.props.donations[i].state.quantity),
                "unit": this.props.donations[i].state.isNoConventional ? (this.props.donations[i].state.otherUnit) : (this.props.donations[i].state.unit),
                "description": this.props.donations[i].state.message,
                "type_id": category,
                "direction": {
                    "street": this.props.donations[i].state.street,
                    "number": Number(this.props.donations[i].state.number),
                    "details": this.props.donations[i].state.floorNumber,
                    "city": this.props.donations[i].state.city
                }
            }
        }

        //Creo al objeto del donante, ojo que sacamos los all
        let donator = {
            "first_name": this.props.firstName,
            "last_name": this.props.lastName,
            "email": this.props.email,
            "phone_number": this.props.phone
        }

        //Creo el objeto a persistir con lo de arriba
        let jsonFinal = { donations, donator }

        this.setState({ loading: true }, () => {
            console.log("EAC1")
            axios.post(`donations/create`, JSON.stringify(jsonFinal))
                .then(response => {
                    this.setState({ loading: false })
                    this.setState({ okMessage: true })
                    this.props.fullProgress()
                })
                .catch(error => {
                    console.log(error)
                    this.setState({ loading: false })
                    this.setState({ errorMessage: true })
                })
        })
        console.log(jsonFinal);
    }

    render() {
        const { firstName, lastName, phone, email, donations, alreadyDonate } = this.props;
        return (
            <Container className={"justify-content-center"}>
                <h4>CONFIRMACIÓN DE DONACIÓN</h4>
                <br />
                    <h5>¡Hola { this.props.firstName }!</h5>
                <Form.Group id="formEmail">
                    <Form.Label><GrMail /> {email}</Form.Label>
                </Form.Group>
                <Form.Label className={"text-center"}>Tus donaciones</Form.Label>
                {donations.map((donacion) =>
                    <div key={donacion.id}>
                        <hr className={"mt-1 mb-1"} />
                        <Form.Label>
                            <FaHandHoldingHeart /> {donacion.state.quantity}
                            {donacion.state.isNoConventional ? (" " + donacion.state.otherUnit) : (" " + donacion.state.unit)}
                            {" de " + donacion.state.elementDonation}.<br />
                            <MdLocationOn /> {donacion.state.city}, {donacion.state.street}, {donacion.state.number}
                            {donacion.state.floorNumber}
                        </Form.Label>
                    </div>
                )
                }
                <div className="bottomButton">
                    <Button
                        onClick={this.back}
                        className="backButton btn"
                        variant="contained"
                    ><MdEdit size="2em" /></Button>

                    <Button
                        type="submit"
                        variant="contained"
                        className="forwardButton btn"
                        onClick={this.submit}
                        id="enviar">
                        Enviar
                    </Button>
                </div>
                <br />
                {this.state.loading ? <LinearProgress /> : this.state.okMessage ? <AlertDialogSlide /> : null}
                <br />
                {this.state.errorMessage ? <Alert severity="error">No pudimos enviar su donación, por favor intente nuevamente en un instante.</Alert> : null}
            </Container >
        );
    }
}

export default Confirmation;

