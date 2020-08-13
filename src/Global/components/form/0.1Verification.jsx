import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';
import axios from "axios";
import Alert from "@material-ui/lab/Alert";


let emailRegex;
emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const initialState = {
    emailErrorMessage: "",
    userInfo: "",
    loading: false,
    hasError: false
};

class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    getNameByEmail(email) {

        axios
            .get(`http://httpbin.org/post=${email}`)
            //`https://cors-anywhere.herokuapp.com/https://b2f3beb00735.ngrok.io/donations/donators?mail`
            .then(res => {
                console.log(res)
                this.state.userInfo = res.data.userId
                this.setState({ loading: false })
                this.props.nextStep()
            })
            .catch(err => {
                console.log(err)
                this.setState({ loading: false })
                this.setState({ hasError: true })
            })
    }

    validateEmail = () => {
        let emailErrorMessage = "";

        if (!this.props.email.includes("@") || this.props.email === emailRegex) {
            emailErrorMessage = "Ingrese un email válido";
        }

        if (emailError) {
            this.setState({ emailError });
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

        const isValid = this.validateEmail();

        if (isValid) {
            this.setState({ loading: true })

            setTimeout(() => this.getNameByEmail(this.props.email), 2000)
            // clear form
            this.setState(initialState);
        }

        if (this.state.userInfo && !this.state.emailError) {
            this.props.nextStep()
        }
    }



    render() {

        const { handleChange, email } = this.props;
        const { loading, hasError } = this.state;

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
                        loading ? <Alert severity="info">Buscando...</Alert> : hasError ? <Alert severity="error">No te encontramos...</Alert> : null
                    }

                    <div style={{ fontSize: 12, color: "red" }}>
                        {errorEmail ? this.state.emailErrorMessage : null}
                    </div>
                </Form.Group>

                <div className="bottomButton">
                    <Button
                        className="backButton btn"
                        variant="contained"
                        onClick={this.back}
                    > Atrás</Button>

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
