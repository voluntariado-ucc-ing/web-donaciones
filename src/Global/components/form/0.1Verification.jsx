import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';
import axios from "axios";
import Alert from "@material-ui/lab/Alert";
import { API_DOMAIN } from '../../../utils/config';


let emailRegex;
emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const initialState = {
    emailErrorMessage: "",
    userInfo: "",
    firstNameT: "",
    lastNameT: "",
    phoneT: "",
    loading: false,
    hasError: false,
};

class Verification extends Component {
    // mailEncontrado = (e) =>{
    //     e.preventDefault();
    //     this.props.pasaANuevaDonacion()
    // }

    // mailNoEncontrado = (e) =>{
    //     e.preventDefault();
    //     this.props.pasaANewDonor()
    // }

    constructor(props) {
        super(props);
        this.state = initialState;
    }

    getNameByEmail(email) {

        axios
            .get(`donations/donators?mail=${email}`)
            .then(res => {
                console.log(res)
                this.setState({ userInfo: res.data.userId })
                //this.setState({ userInfo: String(res.data.donator_id)})
                console.log(res.data.donator_id)
                console.log("1")
                this.setState({ loading: false })
                this.props.handleUserInfo(res.data.last_name, res.data.first_name, res.data.phone_number)
                console.log("2")
                this.props.pasaANuevaDonacion()
                console.log("3")
            })
            .catch(err => {
                console.log(err)
                this.setState({ loading: false })
                this.setState({ hasError: true })
                this.setState({ notFound: true })
                this.props.pasaANewDonor()
            })
    }


    //valida que este escrito con el @ y eso
    validateEmail = () => {
        let emailErrorMessage = "";

        if (!this.props.email.includes("@") || this.props.email === emailRegex) {
            emailErrorMessage = "Ingrese un email válido";
        }

        if (emailErrorMessage) {
            this.setState({ emailErrorMessage });
            return false;
        }

        return true;
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    };


    continue = e => {
        e.preventDefault();
        console.log("continue")

        const isValid = this.validateEmail();

        if (isValid) {
            this.setState({ loading: true })
            this.getNameByEmail(this.props.email)
            // setTimeout(() => this.getNameByEmail(this.props.email), 2000)
            // clear form
            this.setState(initialState);
        }

        if (this.state.userInfo && !this.state.emailErrorMessage) {
            console.log("if")
            this.props.pasaANuevaDonacion()
        }

    }



    render() {

        const { handleChange, email } = this.props;
        const { loading, hasError } = this.state;
        const errorEmail = this.state.emailErrorMessage !== '' && !emailRegex.test(email)

        return (
            <div>
                <h5>Por favor ingrese su email para identificarse *</h5>
                <br />
                <Form.Group>

                    <Form.Control
                        type="email"
                        placeholder="example@mail.com"
                        name='email'
                        onChange={handleChange('email')}
                        value={email}
                        isInvalid={errorEmail}
                        isValid={emailRegex.test(email)}
                    />

                    {
                        //loading ? <Alert severity="info">Buscando...</Alert> : hasError ? this.mailNoEncontrado : this.mailEncontrado
                        //loading ? <Alert severity="info">Buscando...</Alert> : hasError ? this.props.pasaANewDonor() : this.props.pasaANuevaDonacion()
                    }

                    <div style={{ fontSize: 12, color: "red" }}>
                        {errorEmail ? this.state.emailErrorMessage : null}
                    </div>
                </Form.Group>

                <div className="bottomButton">
                    {/* <Button
                        className="backButton btn"
                        variant="contained"
                        onClick={this.back}
                    > Atrás</Button> */}

                    <Button
                        className="forwardButton btn"
                        onClick={this.continue}
                        variant="contained"
                        type="submit"
                    >Continuar</Button>
                </div>
            </div>
        );
    }
}

export default Verification;
