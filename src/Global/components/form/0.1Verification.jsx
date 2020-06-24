import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';

class Verification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wrongEmail: false
        }
    }

    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    continue = (e) => {
        var emailRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+.)+[^<>()[\].,;:\s@"]{2,})$/i;
        e.preventDefault()
        if (emailRegex.test(this.props.email)) {
            this.setState({ wrongEmail: false })
            this.props.nextStep()
        }
        else
            this.setState({ wrongEmail: true })
    }

    render() {
        const { handleChange, email } = this.props
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
                    {this.state.wrongEmail === true ?
                        (<Form.Text className="invalidInput">
                            Debe introducir su email.
                        </Form.Text>) : (null)
                    }
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
