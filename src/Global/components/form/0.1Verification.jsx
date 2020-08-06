import React, {Component, useEffect, useState} from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';
import DataFetching from "../fetchButton";
import axios from "axios";
import Alert from "@material-ui/lab/Alert";


let emailRegex;
emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const initialState = {
    email: ""
};

class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState,
            userInfo: "",
           loading: false,
            hasError: false,
            emailError: false
        }
    }

    getNameByEmail (email) {
        axios
            .get(`https://jsonplaceholder.typicode.com/posts/${email}`)
            .then(res => {
                console.log(res)
                this.state.userInfo = res.data.userId
                this.setState({loading: false})
            })
            .catch(err => {
                console.log(err)
                this.setState({loading: false})
                this.setState({hasError: false})
            })
    }

    validateEmail = (email) => {

        if (!email.includes("@") || email === emailRegex) {
            this.setState({emailError: true});
        }else{
            this.setState({loading: true})
        }
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    };


    continue= e => {
        e.preventDefault();

       this.validateEmail(this.props.email)

        this.setState({loading: false})
        this.getNameByEmail(this.props.email)

        if(this.state.userInfo){
            this.props.nextStep()
        }
    }



    render() {

        const {handleChange, email} = this.props;
        const {loading, emailError, hasError} = this.state;

        return (
            <div>
                <h5>Por favor ingrese su email para identificarse *</h5>
                <br />
                <Form.Group>
                    {/*<DataFetching email = {this.state.userInfo}/>*/}

                    <Form.Control
                        type="email"
                        name='email'
                        onChange={handleChange('email')}
                        value={email}
                        required
                    />

                    {
                        loading ? <Alert severity="info">Buscando...</Alert> : hasError ? <Alert severity="error">No te encontramos...</Alert> : null
                    }

                    { emailError?  <div style={{ fontSize: 12, color: "red" }}>Ingrese un email valido</div> : null }
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
