import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';
import CustomizedSnackbars from "../Greeting";
import DeleteOutlineIcon from "@material-ui/core/SvgIcon/SvgIcon";
import Nav from "react-bootstrap/Nav";
import AlertDialogSlide from "../Modal";


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

class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialState
        }
    }

    getUser = (email) => {
        const url = 'https://my-json-server.typicode.com/typicode/demo/posts/'+email;

        //const url = ''+'/donations/donator?mail=$'+email;

        fetch(url)
            .then(response =>{
                if(response.ok){
                   console.log(response.json());

                   this.props.nextStep();
                }else{
                    this.setState({userError: true});
                }
            })
            .then(function(data) {
                return data;
            })
            .catch(function(error) {
                console.log(error);
            });

        return false;

    };

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
            console.log(this.state);
            this.getUser(this.props.email);
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
