import React, { Component } from 'react';
import './css/Formcopy.css';
import Container from 'react-bootstrap/Container';
import div from 'react-bootstrap/Form';

// subcomponentes
import Intro from './components/form/0.0Introduction'
import Names from './components/form/1Names'
import Phone from './components/form/2Phone'
import Donation from './components/form/3.0Donations'
import Confirmation from './components/form/4Confirmation'
import Verification from './components/form/0.1Verification'

// variables globales
import './components/form/global';

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pasos: global.Introduccion,
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
            emailConfirmation: '',
            donations: [],
            donationStep: 0,
            alreadyDonate: false,
            firstDonationCreated: false
        };
    }

    //transiciones
    init = () => {
        if (this.state.pasos === global.Introduccion)
            return (<Intro
                firstDonationButton={this.nextStep}
                donationButon={this.alreadyDonateNextStep}
            />);

        if (this.state.pasos === global.Nombre)
            return (
                <Names
                    nextStep={this.nextStep}
                    prevStep={this.prevStep}
                    handleChange={this.handleChange}
                    firstName={this.state.firstName}
                    lastName={this.state.lastName}
                />
            )

        if (this.state.pasos === global.Contacto)
            return (< Phone
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                handlePhone={this.handlePhone}
                phone={this.state.phone}
                email={this.state.email}
                emailConfirmation={this.state.emailConfirmation}
            />)
        if (this.state.pasos === global.Donacion) {
            return (
                this.state.donations.filter(x => x.id === this.state.donationStep).map(filteredDonation => (
                    <Donation
                        donationStep={this.state.donationStep}
                        donations={this.state.donations}
                        nextStep={this.nextStep}
                        prevStep={this.prevStep2}
                        handleDonacion={this.handleDonaciones}
                        handleUnit={this.handleUnitDonation}
                        key={filteredDonation.id}
                        id={filteredDonation.id}
                        newDonation={this.clickNewDonation}
                        backDonation={this.backDonation}
                        forwardDonation={this.forwardDonation}
                        deleteDonation={this.deleteDonation}
                    />
                ))
            )
        }

        if (this.state.pasos === global.Confirmaion)
            return (< Confirmation
                value={this.state}
                nextStep={this.nextStep}
                prevStep={this.prevStep}

            />)

        if (this.state.pasos === global.YaHeDonado)
            return (<Verification
                nextStep={this.nextStep2}
                prevStep={this.alreadyDonatePrevStep}
                handleChange={this.handleChange}
                email={this.state.email}
            />)
    }


    nextStep = () => {
        const { pasos } = this.state
        this.setState({
            pasos: pasos + 1
        });
        if (pasos === global.Contacto)
            this.setState({
                alreadyDonate: false
            }
            )
        if (!this.state.firstDonationCreated) {
            var don = this.state.donations
            var done = new Donation();
            done.id = 0
            don.push(done)
            this.setState({ donation: don })
            this.setState({ firstDonationCreated: true })
        }
    }

    prevStep = () => {
        const { pasos } = this.state
        this.setState({
            pasos: pasos - 1
        });
    }

    alreadyDonateNextStep = () => {
        this.setState({
            pasos: global.YaHeDonado,
            alreadyDonate: true
        })
    }

    alreadyDonatePrevStep = () => {
        this.setState({
            pasos: global.Introduccion
        })
    }

    //utilizado cuando el usuario ya 'creo' una donacion anteriormente
    nextStep2 = () => {
        if (!this.state.firstDonationCreated) {
            var don = this.state.donations
            var done = new Donation();
            done.id = 0
            don.push(done)
            this.setState({ donation: don })
            this.setState({ firstDonationCreated: true })
        }
        this.setState({
            pasos: global.Donacion
        })
    }

    //utilizado cuando el usuario ya creo una donacion anteriormente
    prevStep2 = () => {
        if (this.state.alreadyDonate === true)
            this.setState({
                pasos: global.YaHeDonado
            })
        else
            this.setState({
                pasos: global.Contacto
            })
    }

    //guardado de datos
    handleChange = input => (e) => {
        e.preventDefault()
        this.setState({ [input]: e.target.value })
    }

    //guardado de telefono
    handlePhone = (phone) => {
        this.setState({ phone: phone })
    }

    //guardado de donaciones
    handleDonaciones = (input, id) => (e) => {
        var updateDonations = this.state.donations
        updateDonations[id].state[input] = e.target.value
        this.setState({ donations: updateDonations })
    }
    handleUnitDonation = (id, unit, isNoConventional) => {
        var updateDonations = this.state.donations
        updateDonations[id].state.unit = unit
        updateDonations[id].state.isNoConventional = isNoConventional
        this.setState({ donations: updateDonations })
    }

    //nueva donacion
    clickNewDonation = () => {
        var don = this.state.donations
        var done = new Donation();
        done.id = don.length
        this.setState({ donationStep: don.length })
        don.push(done)
        this.setState({ donation: don })

        console.log(JSON.stringify(this.state))
        console.log(this.state.donations[0].state)
    }

    //eliminar donacion
    deleteDonation = (id) => {
        var don = this.state.donations
        var deleted = don.splice(id, 1)
        var step = 0
        if (id !== 0)
            step = id - 1
        console.log(deleted)
        console.log(don)
        for (var i = 0; i <= don.length; i++) {
            console.log('iteracion = ' + i)
            if (i !== id) {
                var newId = (element) => element.id === i
                var a = don.findIndex(newId)
                don[a].id = a
            }
        }
        this.setState({ donations: don })
        this.setState({ donationStep: step })
    }
    //botones nueva donacion
    backDonation = () => {
        var pasoDonacion = this.state.donationStep - 1
        this.setState({ donationStep: pasoDonacion })
    }
    forwardDonation = () => {
        var pasoDonacion = this.state.donationStep + 1
        this.setState({ donationStep: pasoDonacion })
    }

    render() {
        return (
            <div id='background'>
                <Container id="formulario">
                    <div id='left-letters'>
                        {this.init()}
                    </div>
                </Container>
            </div>

        );
    }
}

export default Formulario;
