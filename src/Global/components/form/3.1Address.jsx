import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';


class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const { handleChange, id, city, street, number, floorNumber, cityCompleted, streetCompleted, numberCompleted } = this.props;
        return (
            <div>
                <hr className={"m-1"} />
                <h5 className={"pt-3"}>¿Dónde debemos retirarlos?</h5>
                <Form.Label>Localidad - Ciudad *</Form.Label>
                <Form.Group>
                    <Form.Control type="text" placeholder="Ciudad"
                        name="city"
                        onChange={handleChange('city', id)}
                        value={city}
                    />
                    {
                        cityCompleted ? null :
                            <Form.Text className="invalidInput">
                                Necesitamos este dato
					                    	</Form.Text>
                    }
                </Form.Group>
                <Form.Row>
                    <Form.Group as={Col}
                        md="5"
                    >
                        <Form.Label>Calle *</Form.Label>
                        <Form.Control type="text" placeholder="Calle"
                            name="street"
                            onChange={handleChange('street', id)}
                            value={street}
                        />
                        {
                            streetCompleted ? null :
                                <Form.Text className="invalidInput">
                                    Necesitamos este dato
					                    	</Form.Text>
                        }
                    </Form.Group>
                    <Form.Group as={Col}
                        md="2"
                    >
                        <Form.Label>Altura *</Form.Label>

                        <Form.Control type="number" placeholder="Altura"
                            name="number"
                            onChange={handleChange('number', id)}
                            value={number}
                        />
                        {
                            numberCompleted ? null :
                                <Form.Text className="invalidInput">
                                    Necesitamos este dato
					                    	</Form.Text>
                        }
                    </Form.Group>
                    <Form.Group as={Col}
                        md="5"
                    >
                        <Form.Label>Otros </Form.Label>
                        <Form.Control type="text" placeholder="Opcional: Lote, manzana, barrio, piso"
                            name="floorNumber"
                            onChange={handleChange('floorNumber', id)}
                            value={floorNumber}
                        />
                    </Form.Group>
                </Form.Row>
            </div>
        );
    }
}

export default Address;
