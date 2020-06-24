import React, {Component} from 'react';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import '../../css/Formcopy.css';
import AlertDialogSlide from "../Modal";

import { GoPerson } from "react-icons/go";
import { FaPhone } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import { MdLocationOn } from "react-icons/md"
import { FaHandHoldingHeart } from "react-icons/fa"
import { MdEdit } from "react-icons/md"

class Confirmation extends Component {
    back = (e) => {
        e.preventDefault();
        this.props.prevStep()
    };

    render() {
        const { value } = this.props;

        return (
            <Container>
                <h4>CONFIRMACIÓN DE DONACIÓN</h4>
                <br />
                {
                    value.alreadyDonate ?
                        (<h5>Hola {value.name} gracias por donarnos nuevamente!</h5>) :
                        (
                            <>
                                <Form.Label className={"text-center"}>Tus datos</Form.Label>
                                <hr  className={"mt-1 mb-1"}/>
                                <Form.Label><GoPerson /> {value.firstName} {value.lastName}</Form.Label>
                                <br />
                                <Form.Label><FaPhone />  {value.phone}</Form.Label>

                            </>
                        )
                }
                <Form.Group id="formEmail">
                    <Form.Label><GrMail /> {value.email}</Form.Label>
                </Form.Group>
                <Form.Label className={"text-center"}>Tus donaciones</Form.Label>
                {value.donations.map((donacion) =>
                    <>
                        <hr  className={"mt-1 mb-1"}/>
                        <Form.Label>
                            <FaHandHoldingHeart /> {donacion.state.quantity}
                            {donacion.state.isNoConventional ? (" " + donacion.state.otherUnit) : (" " + donacion.state.unit)}
                            {" de " + donacion.state.elementDonation}.<br />
                            <MdLocationOn /> {donacion.state.city}, {donacion.state.street} {donacion.state.number},
                            {donacion.state.floorNumber}
                        </Form.Label>
                    </>
                )
                }
                <div className="bottomButton">
                    <Button
                        onClick={this.back}
                        className="backButton btn"
                        variant="contained"
                    ><MdEdit size="2em"/></Button>

                    <Button
                        type="submit"
                        variant="contained"
                        className="forwardButton btn"
                        onClick={
                            () => {
                                console.log(JSON.stringify(this.state));
                            }
                        }
                        id="enviar">
                        <AlertDialogSlide/>
                    </Button>
                </div>
            </Container>
        );
    }
}

export default Confirmation;
