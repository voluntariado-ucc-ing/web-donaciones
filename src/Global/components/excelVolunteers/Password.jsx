import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../../css/Formcopy.css';
import axios from "axios";
import Button from '@material-ui/core/Button';

class Password extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isValid: false,
            isInvalid: false,
        };
    }

    continue = e => {
        e.preventDefault();
        console.log(this.props.password)
        this.validatePassword(this.props.password)

    }

    validatePassword = (pass) => {    //es un getByPassword (como el de mail)
        
        /*axios
            .get(pass)              //le paso la contraseña para el back
            .then(res => {         //creo que este res está por amor al arte
                this.setState({ isValid: true })
                this.props.setValid()
            }
            )
            .catch(
                console.log(err)
                this.setState({ isinvalid: true })
            )
            */
           if(pass === "p4ssw0rd")
           {
                this.setState({ isValid: true });
                this.props.setValid()
           }
           else{
                this.setState({ isInvalid: true });
           }
    }

    render() {
        const isInvalid = this.state.isInvalid;
        const { handleChange, password } = this.props;
        return (
            <div>
                <Form.Group>

                    <Form.Control
                        type="password"
                        placeholder="password"
                        name='password'
                        // onChange={handlePassword(pass)}
                        onChange={handleChange('password')}
                        value={password}
                    />

                    {
                       isInvalid ? <alert severity="error">Invalid Password</alert>:null
                    }

                </Form.Group>
                    <Button
                        className="forwardButton btn"
                        onClick={this.continue}
                        variant="contained"
                        type="submit"
                    >Validar</Button>
                    {/* {console.log(password)} */}

            </div>
        )
    }


}

export default Password;