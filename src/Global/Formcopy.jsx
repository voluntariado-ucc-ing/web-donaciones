import React, { Component } from 'react';
import './css/Formcopy.css';
import Container from 'react-bootstrap/Container';
import div from 'react-bootstrap/Form';

// subcomponentes
// import Intro from './components/form/0.0Introduction'
import Names from './components/form/1Names'
import Phone from './components/form/2Phone'
import NewDonor from './components/form/NewDonor'
import UpdateDonor from './components/form/UpdateDonor'
import Donation from './components/form/3.0Donations'
import Confirmation from './components/form/4Confirmation'
import Verification from './components/form/0.1Verification'
import Footer from "./Footer";

// variables globales
import './components/form/global';
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import HeaderDonation from "./HeaderDonacion";
import CustomizedProgressBars from "./components/Step";

// global.Introduccion = 0
// global.Nombre = 1
// global.Contacto = 2
// global.Donacion = 3
// global.Confirmaion = 4
// global.YaHeDonado = 11

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pasos: global.YaHeDonado,
            progress: 0,
            donations: [],
            donationStep: 0,
            alreadyDonate: false,
            firstDonationCreated: false,
            needUpdate: false,

            //PersonalInfo
            firstName: "",
            lastName: "",
            email: "",
            emailConfirm: "",
            phone: "",
            
        };
    }


    //transiciones
    init = () => {
        if (this.state.pasos === global.YaHeDonado) {
            return (
                <div>

                    <Verification
                        // nextStep={this.nextStep2}
                        //prevStep={this.alreadyDonatePrevStep}
                        handleChange={this.handleChange}
                        handleUserInfo={this.handleUserInfo}
                        email={this.state.email}
                        pasaANewDonor={this.nuevoDonanteStep}
                        pasaANuevaDonacion={this.nextStep2}
                    />


                </div>
            );
        }

        if (this.state.pasos == global.pasaANuevoDonante) {

            return (
                <div>
                    { console.log("NewDonor1")}

                    <NewDonor
                        nextStep={this.nextStep2}
                        prevStep={this.prevStepNuevoDonante}
                        handleChange={this.handleChange}
                        handlePhone={this.handlePhone}
                        email={this.state.email}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        phone={this.state.phone}

                    // emailConfirm={this.state.emailConfirm}

                    />

                </div>
            );
        }

        if (this.state.pasos == global.MisDatos) {

            return (
                <div>
                    {console.log("updateD")}
                    <UpdateDonor
                        nextStep={this.nextStep2}
                        //prevStep={this.prevStepNuevoDonante} 
                        handleChange={this.handleChange}
                        handleChangeUpdateDonor={this.handleChangeUpdateDonor}
                        handlePhone={this.handlePhone}
                        email={this.state.email}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        phone={this.state.phone}

                    // emailConfirm={this.state.emailConfirm}

                    />

                </div>
            );
        }


        if (this.state.pasos === global.Donacion) {
            return (
                <div>
                    <Nav className={"justify-content-start tab"}>
                        {
                            this.state.donations.map(mapNav => (
                                <div key={mapNav.id}>
                                    <Button
                                        className={"mb-0 ml-1 computer-donation"}
                                        onClick={() => this.findDonation(mapNav.id)}
                                    >Donación {mapNav.id + 1} </Button>

                                    <Button
                                        className={"mb-0 ml-1 mobile-donation"}
                                        onClick={() => this.findDonation(mapNav.id)}
                                    >{mapNav.id + 1}
                                    </Button>
                                </div>
                            ))
                        }
                    </Nav>
                    {/* //Esto de acá abajo hace que las diferentes donaciones se vayan guardando en el array donations que definimos al principio */}
                    {this.state.donations.filter(x => x.id === this.state.donationStep).map(filteredDonation => (
                        <Donation

                            donationStep={this.state.donationStep}
                            donations={this.state.donations}
                            nextStep={this.nextStepDonation}
                            prevStep={this.prevStepNuevaDonacion}
                            handleDonacion={this.handleDonaciones}
                            handleUnit={this.handleUnitDonation}
                            key={filteredDonation.id}
                            id={filteredDonation.id}
                            newDonation={this.clickNewDonation}
                            backDonation={this.backDonation}
                            forwardDonation={this.forwardDonation}
                            findDonation={this.findDonation}
                            deleteDonation={this.deleteDonation}
                            checkedChange={this.checkedChange}
                            directionChange={this.directionChange}
                            changeStep={this.changeStep}
                        />
                    ))
                    }

                </div>)
        }

        if (this.state.pasos === global.Confirmaion)
            return (< Confirmation
                alreadyDonate={this.state.alreadyDonate}
                firstName={this.state.firstName}
                lastName={this.state.lastName}
                phone={this.state.phone}
                email={this.state.email}
                donations={this.state.donations}
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                fullProgress={this.fullProgress}
                all={this.state}
            />);

    };

    consoleFunction = (param) => console.log(param);

    nextStep = () => {
        const { pasos, progress } = this.state;

        this.setState({
            //pasos: pasos + 1
            pasos: global.Donacion
        });

        this.setState({
            progress: progress + 25
        });

        if (pasos === global.Contacto)
            this.setState({
                alreadyDonate: false
            });

        if (!this.state.firstDonationCreated) {
            let don = this.state.donations;
            let done = new Donation();
            done.id = 0;
            don.push(done);
            this.setState({ donations: don });
            this.setState({ firstDonationCreated: true })
        }
    };


    nextStepDonation = () => {
        this.setState({
            pasos: global.Confirmaion
        })
        this.setState({
            progress: 75
        });
    }

    prevStepNuevaDonacion = () => {
        console.log("prevStepNuevaDonacion1")
        this.setState({
            pasos: global.MisDatos
        })
        this.setState({
            progress: 25
        });
    }


    prevStepNuevoDonante = () => {
        this.setState({
            pasos: global.YaHeDonado
        })
        this.setState({
            progress: 0
        });
    }



    prevStep = () => {
        const { pasos, progress } = this.state;

        this.setState({
            pasos: pasos - 1
        });
        this.setState({
            progress: progress - 25
        });
    };

    // alreadyDonateNextStep = () => {
    //     const { progress } = this.state;

    //     this.setState({
    //         pasos: global.YaHeDonado,
    //         alreadyDonate: true
    //     })

    //     this.setState({
    //         progress: progress + 25
    //     });
    // };

    alreadyDonatePrevStep = () => {
        const { progress } = this.state;

        this.setState({
            pasos: global.Introduccion
        })

        this.setState({
            progress: progress - 25
        });
    };


    //utilizado cuando el usuario ya 'creo' una donacion anteriormente, pasa a donacion
    nextStep2 = () => {
        const { progress } = this.state;
        if (!this.state.firstDonationCreated) {
            let don = this.state.donations;
            let done = new Donation();
            done.id = 0;
            don.push(done);
            this.setState({ donations: don });
            this.setState({ firstDonationCreated: true })
        }
        this.setState({
            pasos: global.Donacion
        })

        this.setState({
            progress: 50
        });
    };

    nuevoDonanteStep = () => {
        this.setState({
            pasos: global.pasaANuevoDonante
        })

        this.setState({
            progress: 25
        });
    }

    fullProgress = () => {
        this.setState({
            progress:100
        })
    }

    //utilizado cuando el usuario ya creo una donacion anteriormente
    // prevStep2 = () => {
    //     const { progress } = this.state;
    //     if (this.state.alreadyDonate === true)
    //         this.setState({
    //             pasos: global.YaHeDonado
    //         });
    //     else
    //         this.setState({
    //             pasos: global.Contacto
    //         })

    //     this.setState({
    //         progress: progress - 25
    //     });
    // };


    handleUserInfo = (lastName, firstName, phone) => {
        this.setState({ phone: phone })
        this.setState({ lastName: lastName })
        this.setState({ firstName: firstName })
        console.log("handleUserInfo")
        console.log(this.lastName)
    }

    //guardado de datos
    handleChange = input => (e) => {
        e.preventDefault();
        this.setState({ [input]: e.target.value })
    };

    handleChangeUpdateDonor = input => (e) => {
        e.preventDefault();
        this.setState({ [input]: e.target.value })
        this.setState({ needUpdate: true })
        console.log(this.needUpdate)
    };

    //guardado de telefono
    handlePhone = (phone) => {
        this.setState({ phone: phone })
    };

    //guardado de donaciones
    handleDonaciones = (input, id) => (e) => {
        const updateDonations = this.state.donations;
        updateDonations[id].state[input] = e.target.value;
        this.setState({ donations: updateDonations })
    };

    handleUnitDonation = (id, unit, isNoConventional) => {
        const updateDonations = this.state.donations;
        updateDonations[id].state.unit = unit;
        updateDonations[id].state.isNoConventional = isNoConventional;
        this.setState({ donations: updateDonations })
    };

    //crea nueva donacion done y las carga en un array don
    //donationStep hace referencia al paso entre los distintos id de donations
    clickNewDonation = () => {
        let don = this.state.donations;
        let done = new Donation();
        done.id = don.length;
        this.setState({ donationStep: don.length });
        don.push(done);
        this.setState({ donations: don });
    };

    //eliminar donacion
    deleteDonation = (id) => {
        var don = this.state.donations; //se hace una copia de las donaciones actuales
        don.splice(id, 1);  // se quita la donacion con posicion id, el uno representa que se quita solo esa donacion
        var step = 0;
        if (id !== 0)
            step = id - 1;
        for (let i = 0; i <= don.length; i++) {
            if (i !== id) {
                var newId = (element) => element.id === i;
                var a = don.findIndex(newId);
                don[a].id = a
            }
        }
        this.setState({ donations: don });
        this.setState({ donationStep: step })
    };

    //checkbox para ver si va a reutilizar la direccion
    checkedChange = (id, first) => {
        const updateCheck = this.state.donations;
        if (!first)
            this.directionChange(0, id);
        updateCheck[id].state.checked = !this.state.donations[id].state.checked;
        this.setState({ donations: updateCheck })
    };

    //cambio de direccion cuando el checked es true
    directionChange = (copy, paste) => {
        const updateDirection = this.state.donations;
        updateDirection[paste].state.firstCheck = true;
        updateDirection[paste].state.city = updateDirection[copy].state.city;
        updateDirection[paste].state.street = updateDirection[copy].state.street;
        updateDirection[paste].state.number = updateDirection[copy].state.number;
        updateDirection[paste].state.floorNumber = updateDirection[copy].state.floorNumber;
        this.setState({ donations: updateDirection })
    };

    //botones nueva donacion
    backDonation = () => {
        const pasoDonacion = this.state.donationStep - 1;
        this.setState({ donationStep: pasoDonacion })
    };

    //cambio de paso en donacion si se verifca error de campos
    changeStep = (step) => {
        this.setState({ donationStep: step })
    };

    forwardDonation = () => {
        const pasoDonacion = this.state.donationStep + 1;
        this.setState({ donationStep: pasoDonacion })
    };

    findDonation = (id) => {
        this.setState({ donationStep: id });
    };


    render() {
        return (
            <div>
                <HeaderDonation />
                <Container fluid id='background'>
                    <CustomizedProgressBars progress={this.state.progress} />
                    <Container id="formulario">
                        <div id='left-letters'>
                            {this.init()}
                        </div>
                    </Container>
                </Container>
                <Footer />
            </div>
        );
    }
}

export default Formulario;
