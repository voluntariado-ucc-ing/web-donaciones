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

    submit = (e) => {
        e.preventDefault()

        let donations = []
        for (var i = 0; i < this.props.donations.length; i++) {
            let category
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

        let donator = {
            "first_name": this.props.all.firstName,
            "last_name": this.props.all.firstName,
            "email": this.props.all.email,
            "phone_number": this.props.all.phone
        }

        let jsonFinal = { donations, donator }

        this.setState({ loading: true }, () => {
            axios.post('https://cors-anywhere.herokuapp.com/https://b2f3beb00735.ngrok.io/donations/create', JSON.stringify(jsonFinal))
                .then(response => {
                    console.log(response)
                    this.setState({ loading: false })
                    this.setState({ okMessage: true })
                })
                .catch(error => {
                    console.log(error)
                    this.setState({ loading: false })
                    this.setState({ errorMessage: true })
                })
        })
    }

    render() {
        const { firstName, lastName, phone, email, donations, alreadyDonate } = this.props;
        return (
            <Container className={"justify-content-center"}>
                <h4>CONFIRMACIÓN DE DONACIÓN</h4>
                <br />
                {
                    alreadyDonate ?
                        (<h5>¡Hola, {}!</h5>) :
                        (
                            <>
                                <Form.Label>Tus datos</Form.Label>
                                <hr className={"mt-1 mb-1"} />
                                <Form.Label><GoPerson /> {firstName} {lastName}</Form.Label>
                                <br />
                                <Form.Label><FaPhone />  {phone}</Form.Label>

                            </>
                        )
                }
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

