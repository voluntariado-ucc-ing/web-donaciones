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
        var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        e.preventDefault()
        if (emailRegex.test(this.props.value.email)) {
            this.setState({ wrongEmail: false })
            this.props.nextStep()
        }
        else
            this.setState({ wrongEmail: true })
    }

    render() {
        const { handleChange, value } = this.props
        return (
            <div>
                <a>Necesitamos la siguietne informacion para poder encontrar sus datos</a>
                <br />
                <Form.Group>
                    <Form.Label>Mail</Form.Label>
                    <Form.Control
                        type="email"
                        name='email'
                        onChange={handleChange('email')}
                        value={value.email}
                        required
                    />
                    {this.state.wrongEmail === true ?
                        (<Form.Text className="invalidInput">
                            Debe introducir su email.
                        </Form.Text>) : (null)
                    }
                    <br />
                    <Button
                        className="backButton"
                        variant="contained"
                        color="secondary"
                        onClick={this.back}
                    > Atras</Button>
                    <Button
                        className="forwardButton"
                        onClick={this.continue}
                        variant="contained"
                        color="primary"
                        type="submit"
                    >Continue</Button>
                </Form.Group>
            </div>
        );
    }
}

export default Verification;
