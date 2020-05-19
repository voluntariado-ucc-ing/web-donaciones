import React, {Component} from "react";
import "./css/formMile.css";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";

class FormMile extends Component {
    render() {
        return (
            <Container classname={"body"}>
                <Col>
                    <Row className={"player"}>
                        <h1>Sobre la donación</h1>
                        <p>El voluntariado trabaja y apoya a familias hace 5 años. Tu colaboración es fundamental para continuar
                        su labor atendiendo sus necesidades.</p>
                        <p>Para sumar tu donación, te pediremos algunos datos personales para poder identificarlo.</p>
                    </Row>
                    <Row className={"player justify-content-around mb-5"}>
                        {/*<Form id="form">
                            <input id="name" type="text" placeholder="Nombre"/>
                            <input id="email" type="text" placeholder="Apellido"/>
                            <Row>
                                <Col sm>
                                    <input id="submit" type="submit" value="Ya done"/>
                                </Col>
                                <Col sm>
                                    <input id="submit" type="submit" value="Primera vez que dono"/>
                                </Col>
                            </Row>
                        </Form>*/}

                        <Button variant="outline-dark" className="color" size="lg" target="_blank" href={"/form"}>Ya he donado</Button>
                        <Button variant="outline-dark" className="color" size="lg" target="_blank" href={"/form"}>Primera vez</Button>

                    </Row>
                </Col>
            </Container>
        );
    }
}

export default FormMile;
