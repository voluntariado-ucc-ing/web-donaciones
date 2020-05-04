import React, { Component } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';

class Verification extends Component {
    back = (e) => {
        e.preventDefault()
        this.props.prevStep()
    }
    continue = (e) => {
        e.preventDefault()
        this.props.nextStep()
    }
    render() {
        const { handleChange, value } = this.props
        return (
            <div>
                <a>Necesitamos los siguientes datos para poder encontrar sus datos</a>
                <br />
                <IntlTelInput
                    preferredCountries={['ar']}
                    separateDialCode={true}
                    type="number"
                    name="phone"
                    onChange={handleChange('phone')}
                    value={value.phone}
                    required
                />
                <Form.Group>
                    <Form.Label>Mail</Form.Label>
                    <Form.Control
                        type="text"
                        name='email'
                        onChange={handleChange('email')}
                        value={value.email}
                        required
                    />
                </Form.Group>
                <Button
                    type="submit"
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
            </div>
        );
    }
}

export default Verification;
