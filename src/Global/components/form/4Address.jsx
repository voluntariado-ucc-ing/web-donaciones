import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { city, street, number, floorNumber, handleChange } = this.props;

        return (
            <Container>
                <h5>¿Dónde debemos retirarlos?</h5>
                <label>
                    <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={handleChange('city')}
                        placeholder="Ciudad"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="street"
                        value={street}
                        onChange={handleChange('street')}
                        placeholder="Calle"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        name="number"
                        value={number}
                        onChange={handleChange('number')}
                        placeholder="Altura"
                    />
                </label>
                <label>
                    <input
                        type="text"
                        value={floorNumber}
                        onChange={handleChange('floornumber')}
                        placeholder="Opcional: Lote, manzana, barrio, piso"
                    />
                </label>
                <button className="Back" onClick={this.back}>
                    « Back
                </button>
                <button className="Next" onClick={this.continue}>
                    Next »
                </button>
            </Container>
        );
    }
}

export default Address;
