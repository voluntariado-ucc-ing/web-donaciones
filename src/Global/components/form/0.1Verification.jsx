import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';

const initialState = {
    emailError: ""
};

class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    getUser = (email) =>{
        const axios = require('axios').default;
        axios.get('/user', {
            params: {
                EMAIL: email
            }
        })
            .then(function (response) {
                console.log(response);
                return response
            })
            .catch(function (error) {
                console.log(error);
            })

    };

    validateEmail = () => {
        let emailError = "";

       /* const checkEmail = this.getUser(this.props.email);

        if (checkEmail.status === 404) {
           emailError = "Email incorrecto, intente de nuevo";
        }*/

        if(!this.props.email){
            emailError = "Ingrese su email"
        }

        if (emailError) {
            this.setState({emailError});
            return false;
        }

        return true;
    };

    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    };

    continue = (e) => {
        e.preventDefault();
        const isValid = this.validateEmail();
        if (isValid) {
            console.log(this.state);
            // clear form
            this.setState(initialState);
            this.props.nextStep();
        }
    };

    render() {
        const { handleChange, email } = this.props;
        return (
            <div>
                <h5>Por favor ingrese su email para identificarse *</h5>
                <br />
                <Form.Group>
                    <Form.Control
                        type="email"
                        name='email'
                        onChange={handleChange('email')}
                        value={email}
                        required
                    />
                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.emailError}
                    </div>
                    <br />

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

                </Form.Group>
            </div>
        );
    }
}

export default Verification;
