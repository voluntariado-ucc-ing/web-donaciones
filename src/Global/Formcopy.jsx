import React, { Component } from 'react';
import './css/Formcopy.css';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';

import Button from '@material-ui/core/Button';
// subcomponentes
import Intro from './components/form/0.0Introduction'
import Names from './components/form/1Names'
import Phone from './components/form/2Phone'
import Donation from './components/form/3.0Donation'
import Address from './components/form/4Address'
import Confirmation from './components/form/5Confirmation'
import Verification from './components/form/0.1Verification'

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pasos: 3,
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            emailConfirmation: '',
            donations: [],
            alreadyDonate: false,
        };
    }
    //transiciones
    init = () => {
        if (this.state.pasos === 0)
            return (<Intro
                firstDonationButton={this.nextStep}
                donationButon={this.alreadyDonateNextStep}
            />)

        if (this.state.pasos === 1)
            return (
                <Names
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    value={this.state}
                />
            )

        if (this.state.pasos === 2)
            return (< Phone
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                value={this.state}
            />)

        if (this.state.pasos === 3) {
            if (this.state.donations.length === 0) {
                var don = this.state.donations
                var done = new Donation();
                done.id = don.length
                console.log(done)
                don.push(done)
                this.setState({ donation: don })
                return (
                    <Donation
                        value={this.state.donations}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleDonation}
                        donation={this.handleDonation}
                        key={0}
                        id={0} />
                )
            }
            else return (
                < Donation
                    value={this.state.donations[0]}
                    nextStep={this.nextStep}
                    prevStep={this.prevStep2}
                    handleChange={this.handleDonation}
                    donation={this.handleDonation}

                />

            )
        }

        if (this.state.pasos === 4)
            return (< Confirmation
                value={this.state}
                nextStep={this.nextStep}
                prevStep={this.prevStep}

            />)

        if (this.state.pasos === 11)
            return (<Verification
                nextStep={this.nextStep2}
                prevStep={this.alreadyDonatePrevStep}
                handleChange={this.handleChange}
                value={this.state}
            />)
    }
    nextStep = () => {
        const { pasos } = this.state
        this.setState({
            pasos: pasos + 1
        });
        if (pasos === 2)
            this.setState({
                alreadyDonate: false
            })
    }

    prevStep = () => {
        const { pasos } = this.state
        this.setState({
            pasos: pasos - 1
        });
    }

    alreadyDonateNextStep = () => {
        this.setState({
            pasos: 11,
            alreadyDonate: true
        })
    }

    alreadyDonatePrevStep = () => {
        this.setState({
            pasos: 0
        })
    }

    nextStep2 = () => {
        this.setState({
            pasos: 3
        })
    }

    prevStep2 = () => {
        if (this.state.alreadyDonate === true)
            this.setState({
                pasos: 11
            })
        else
            this.setState({
                pasos: 2
            })
    }

    //guardado de datos
    handleChange = input => (e) => {
        e.preventDefault()
        this.setState({ [input]: e.target.value })
    }

    //guardado datos donaciones
    handleDonation = () => {
        var don = this.state.donations
        var done = new Donation();
        done.id = don.length
        console.log(done)
        don.push(done)
        this.setState({ donation: don })
    }


    render() {
        return (
            <div id='background'>
                <Container id="formulario">
                    <Form id='left-letters'>
                        {this.init()}
                    </Form>
                </Container>
            </div>

        );
    }
}

export default Formulario;
