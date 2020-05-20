import React, {Component} from "react";
import "./css/formMile.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Intro from "./components/form/0.0Introduction";
import Names from "./components/form/1Names";
import Phone from "./components/form/2Phone";

class FormMile extends Component {
    state = {
        step: 1,

        // step 1
        alreadyDonate: false,
        firstDonationCreated: false,

        //step 2
        firstName: '',
        lastName: '',

        //step 3
        phone: '',
        email: '',
        emailConfirmation: '',

        // step 2
        donElem: '',
        donUnit: '',
        jobLocation: ''

    };

    nextStep = () => {
        const { step } = this.state;

        this.setState({
            step: step + 1
        });
    };

    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    handleChange = input => e => {
        this.setState({[input]: e.target.value});
    };

    showStep = () => {
        const { step, firstName, lastName, phone, email, emailConfirmation } = this.state;

        if(step === 1)
            return (<Intro
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                firstDonationButton={this.nextStep}
                donationButon={this.alreadyDonateNextStep}
            />);
        if(step === 2)
            return (<Names
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
                firstName={firstName}
                lastName={lastName}
            />);
        if(step === 3)
            return (<Phone
                nextStep = {this.nextStep}
                prevStep = {this.prevStep}
                handleChange = {this.handleChange}
               phone={phone}
               email={email}
                emailconfirmation={emailConfirmation}
            />);
    };

    render(){
        const { step } = this.state;

        return(
            <Container classname={"body"}>
                <Row className={"player justify-content-around mb-5"}>

                    <h2>Step {step} of 3.</h2>
                    {this.showStep()}

                </Row>
                <Button variant="outline-dark" className="color" size="lg" target="_blank" href={"/form"}>Ya he donado</Button>
                <Button variant="outline-dark" className="color" size="lg" target="_blank" href={"/form"}>Primera vez</Button>
            </Container>
        );
    }
}

export default FormMile;
