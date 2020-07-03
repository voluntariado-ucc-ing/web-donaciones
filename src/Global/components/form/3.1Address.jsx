import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


class Address extends Component {
    directionChange = (e) => {
        const direc = e.target.value;
        this.props.directionChange(direc, this.props.id)
    };


    render() {
        const { handleChange, checkedChange, id, city, street, number, floorNumber, checked, donations, firstCheck } = this.props;
        return (
            <div>
                <hr className={"m-1"} />
                <h5 className={"pt-3"}>¿Dónde debemos retirarlos?</h5>
                {
                    donations.length > 1 && id > 0 ?
                        (
                            <>
                                <FormControlLabel
                                    control={<Checkbox
                                        onChange={() => checkedChange(id, firstCheck)}
                                        checked={checked}
                                        color="primary" />}
                                    label="¿Misma dirección que la anterior?"
                                />
                                <br />
                            </>) : (null)
                }
                {
                    !checked || donations.length === 1 ?
                        (<>
                            <Form.Label>Localidad - Ciudad *</Form.Label>
                            <Form.Group>
                                <Form.Control type="text" placeholder="Ciudad"
                                    name="city"
                                    onChange={handleChange('city', id)}
                                    value={city}
                                />
                                <div style={{ fontSize: 12, color: "red" }}>
                                    {this.props.cityError}
                                </div>
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
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.props.streetError}
                                    </div>
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
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.props.numberError}
                                    </div>
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
                        </>)
                        :
                        (
                            <Form.Row>
                                <Form.Group as={Col}
                                    md="12">

                                    <Form.Label>Seleccione una de las siguientes</Form.Label>
                                    <Form.Control
                                        as="select"
                                        name="repeat"
                                        onChange={this.directionChange}
                                        value={donations[id].state.id}
                                    >
                                        {donations.filter((item, index, array) => item.state.street !== '' && index === array.findIndex(t => (t.state.street) === item.state.street && (t.state.number === item.state.number))).map(addresses => (
                                            <option value={addresses.id}
                                                key={addresses.id}
                                            >{addresses.state.street + ' ' + addresses.state.number}</option>
                                        )
                                        )}
                                    </Form.Control>
                                </Form.Group>
                            </Form.Row>
                        )
                }

            </div>
        );
    }
}

export default Address;
