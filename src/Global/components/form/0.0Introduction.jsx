import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';


class Intro extends Component {
    continue = (e) => {
        e.preventDefault();

        this.props.firstDonationButton()
    };
    continue2 = e => {
        e.preventDefault();
        this.props.donationButon()

    };


    render() {
        return (
            <div>
                <h2>SOBRE LA DONACIÓN</h2>
                <p>
                    El voluntariado trabaja y apoya a familias hace 5 años. Tu colaboración es fundamental para continuar su labor atendiendo sus necesidades.
                    <br />
                    Para sumar tu donación, te pediremos algunos datos personales para poder identificarlo al momento de recibir tu donación.
                </p>
                <div className="bottomButton">
                    <Button
                        onClick={this.continue2}
                        className="backButton btn"
                        variant="contained"
                    >
                        Ya he donado</Button>
                    <Button
                        onClick={this.continue}
                        className="forwardButton btn"
                        variant="contained"
                    > Primera donación</Button>
                </div>
            </div>
        );
    }
}

export default Intro;
