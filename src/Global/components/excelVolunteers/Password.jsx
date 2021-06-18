import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import axios from "axios";
import Button from '@material-ui/core/Button';
import logovol from "../../../images/logo.png";
import oficial from "../../../images/oficialOscuro.png";
import "../../css/Password.css"
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
            <div id="icons">
                <a href="https://voluntariadoing.ucc.edu.ar/">
                    <img

                        alt="ucc"
                        src={logovol}
                        width="40"
                        height="40"
                        className="d-inline-block align-top"

                    />
                </a>
                <a href="https://ucc.edu.ar">
                    <img

                        alt="ucc"
                        src={oficial}
                        width="80"
                        height="30"
                        className="d-inline-block align-top"

                    /></a>
            </div>
            <div>
                <Container fluid className={"site-section heading site-color how computer-footer"}>
                <div class="title">
                        <h6>Ingresa la contraseña para poder acceder</h6>
                    </div>
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
                    
                    </Container>
                    <Button
                        className="forwardButton btn"
                        onClick={this.continue}
                        variant="contained"
                        type="submit"
                    >Validar</Button>
                    {/* {console.log(password)} */}
            </div>
            </div>
        )
    }
}

export default Password;