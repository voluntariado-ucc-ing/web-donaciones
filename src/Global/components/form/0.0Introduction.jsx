import React, { Component } from 'react';
import Button from '@material-ui/core/Button';

class Intro extends Component {
    continue = (e) => {
        e.preventDefault()
        this.props.firstDonationButton()
    }
    continue2 = e => {
        e.preventDefault()
        this.props.donationButon()

    }


    render() {
        return (
            <div>
                <h2>Formulario</h2>
                <p>
                    Esta es la página web para realizar donaciones en el voluntariado de ingeniería de la Universidad
                    Católica de Córdoba.
                    <br />
                    Su propuesta va a ser analizada y luego uno de nuestros representantes se va a comunicar con usted.
                </p>
                <div>Seleccione si ya ha realizado donacion (en produccion)</div>
                <Button onClick={this.continue2}>Ya done una vez</Button>
                <Button onClick={this.continue}> Mi primera vez donando</Button>
            </div>
        );
    }
}

export default Intro;
