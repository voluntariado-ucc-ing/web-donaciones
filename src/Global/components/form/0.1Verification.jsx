import React, {Component} from 'react';
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
    emailError: "",
    userInfo: "",
    loading: false,
    hasError: false
};

class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = initialState;
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
                this.setState({hasError: true})
            })
    }

    validateEmail = () => {
        let emailError = "";

        if (!this.props.email.includes("@") || this.props.email === emailRegex) {
            emailError = "Ingrese un email válido";
        }

        if (emailError) {
            this.setState({emailError});
            return false;
        }

        return true;
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep()
    };


    continue= e => {
        e.preventDefault();

        const isValid = this.validateEmail();

        if (isValid) {
           this.setState({loading: true})

            setTimeout(()=>this.getNameByEmail(this.props.email), 2000)
            // clear form
            this.setState(initialState);
        }

        if(this.state.userInfo && !this.state.emailError){
            this.props.nextStep()
        }
    }



    render() {

        const {handleChange, email} = this.props;
        const {loading, hasError} = this.state;

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

                    {
                        loading ? <Alert severity="info">Buscando...</Alert> : hasError ? <Alert severity="error">No te encontramos...</Alert> : null
                    }

                    <div style={{ fontSize: 12, color: "red" }}>
                        {this.state.emailError}
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
