import React, { Component } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';
import '../../css/Formcopy.css';
import axios from 'axios';
import { API_DOMAIN } from '../../../utils/config';

const initialState = {
    errorMessage: false,
    //Names
    firstNameErrorMessage: "",
    lastNameErrorMessage: "",
    //Phone
    emailErrorMessage: "",
    emailConfirmErrorMessage: "",
    phoneErrorMessage: ""
};

let emailRegex;
emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

class UpdateDonor extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    submit = (e) => {
            e.preventDefault()
            //Creo al objeto del donante, ojo que sacamos los all
            let donator = {
                "first_name": this.props.firstName,
                "last_name": this.props.lastName,
                "email": this.props.email,
                "phone_number": this.props.phone
            }

            //Creo el objeto a persistir con lo de arriba
            let jsonFinal = { donator }


            axios.post(`donations/createdonor`, JSON.stringify(jsonFinal))
            this.props.nextStep();
        }

        //Funciones de Names
        validateName = () => {
            let firstNameErrorMessage = "";
            let lastNameErrorMessage = "";

            if (!this.props.firstName) {
                firstNameErrorMessage = "Ingrese su nombre";
            }
            else
                firstNameErrorMessage = ""

            if (!this.props.lastName) {
                lastNameErrorMessage = "Ingrese su apellido";
            }
            else
                lastNameErrorMessage = ""

            if (firstNameErrorMessage || lastNameErrorMessage) {
                this.setState({ firstNameErrorMessage: firstNameErrorMessage, lastNameErrorMessage: lastNameErrorMessage });
                return false;
            }

            return true;
        };

        //Funciones de phone
        validatePhone = () => {
            let emailErrorMessage = "";
            let phoneErrorMessage = "";

            if (!this.props.email.includes("@") || this.props.email === emailRegex) {
                emailErrorMessage = "Ingrese un email válido";
            }

            if (this.props.phone === undefined || !(this.props.phone.length > "7" && this.props.phone.length < "16") || !(this.props.phone)) {
                phoneErrorMessage = "Ingrese su telefono.";
            }


            if (emailErrorMessage || phoneErrorMessage) {
                this.setState({ emailErrorMessage: emailErrorMessage, phoneErrorMessage: phoneErrorMessage });
                return false;
            }

            return true;
        };


        // continue = e => {
        //     e.preventDefault();
        //     const isValid = this.validatePhone();
        //     if (isValid) {
        //         this.setState(initialState);
        //         this.submit();
        //         this.props.nextStep();
        //     }
        // };

        back = (e) => {
            e.preventDefault();
            this.props.prevStep()
        };

        handleInputChange = (telNumber) => {
            this.props.handlePhone(telNumber)
        };

        render() {
            //Constantes de names
            const { firstName, lastName, handleChange, email, emailConfirm, phone } = this.props;
            //variables de campos invalidos para que la pagina sea mas dinamica (checkear isInvalid en form control)
            const nameError = this.state.firstNameErrorMessage !== '' && firstName === ''
            const surnameError = this.state.lastNameErrorMessage !== '' && lastName === ''
            //Constantes de phone
            const errorPhone = (phone === undefined) || (this.state.phoneErrorMessage !== '') || !(phone.length > "7" && phone.length < "16") || !phone
            const errorEmail = this.state.emailErrorMessage !== '' && !emailRegex.test(email)
            const errorEmailC = (this.state.emailConfirmErrorMessage !== '') && !(emailConfirm === email && emailConfirm !== '')



            return (
                <div className="donorDiv">
                    <h4>Actualizar Datos</h4>
                    <h5>Mis datos de contacto</h5>
                    <br />
                    {/* Names */}
                        <Form.Group id="formEmail">
                            <Form.Label>Email *</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="example@mail.com"
                                name='email'
                                onChange={handleChange('email')}
                                value={email}
                                isInvalid={errorEmail}
                                isValid={emailRegex.test(email)}
                                readOnly
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {errorEmail ? this.state.emailErrorMessage : null}
                            </div>
                        </Form.Group>
                        {/* <h3>DATOS PERSONALES</h3> */}
                        <Form.Group>
                            <Form.Label>¿Cual es su nombre? *</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Nombre"
                                name="firstName"
                                onChange={handleChange('firstName')}
                                value={firstName}
                                isInvalid={nameError}
                                isValid={this.props.firstName !== ''}
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {nameError ? this.state.firstNameErrorMessage : null}
                            </div>
                        </Form.Group>
                        <Form.Group>
                            <Form.Label>¿Y su apellido? *</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Apellido"
                                name='lastName'
                                onChange={handleChange('lastName')}
                                value={lastName}
                                isInvalid={surnameError}
                                isValid={this.props.lastName !== ''}
                            />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {surnameError ? this.state.lastNameErrorMessage : null}
                            </div>
                        </Form.Group>

                        {/* <div className="bottomButton">
					<Button onClick={this.back}
						className="backButton btn"
						variant="contained"
					> Atrás</Button>
					<Button onClick={this.continue}
						className="forwardButton btn"
						variant="contained"
					>Continuar</Button>
				</div> */}

                        <Form.Label>Teléfono o celular *</Form.Label>
                        <br />
                        <PhoneInput
                            defaultCountry="AR"
                            onChange={this.handleInputChange}
                            value={phone}
                        />
                        <div style={{ fontSize: 12, color: "red" }}>
                            {errorPhone ? this.state.phoneErrorMessage : null}
                        </div>
                        <br />
                        <div className="bottomButton">
                            {/* <Button onClick={this.back}
                                className="backButton btn"
                                variant="contained"
                                color="secondary"
                            > Atrás</Button> */}
                            <Button onClick={this.submit}
                                className="forwardButton btn"
                                variant="contained"
                                color="primary"
                            >Continuar</Button>
                        </div>
                </div>
            );

        }
    }

    export default UpdateDonor;