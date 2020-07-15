import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';
import CustomizedSnackbars from "../Greeting";
import CustomizedProgressBars from "../Step";


let emailRegex;
emailRegex = RegExp(
    /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const initialState = {
    emailError: "",
    userError: false
};

function UserMissing(props) {
    return <CustomizedSnackbars />;
}


function Greeting(props) {
    const isDonator = props.isDonator;
    if (isDonator) {
        return <UserMissing />;
    }
    return <div />;
}


async function getUser(email) {
    const url = 'https://16cfb7b3aefc.ngrok.io/donations/donators?mail='+ email;
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'GET', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache',  // include, *same-origin, omit
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    });
    return response.json(); // parses JSON response into native JavaScript objects
}


class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState
        }
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

    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    };

    continue = (e) => {
        e.preventDefault();

        let isCorrect = this.validateEmail();

        if(isCorrect) {
          let response = getUser(this.props.email);
          if(response){
              console.log(response);
              this.props.nextStep();
          }else{
                this.setState({userError: true});
          }
        }
    };

    render() {
        const { handleChange, email } = this.props;

        return (
            <div>
                <CustomizedProgressBars progress={20}/>
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
                    <Greeting isDonator={this.state.userError} />

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
