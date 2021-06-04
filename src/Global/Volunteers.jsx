import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Password from './components/excelVolunteers/Password'
import Excel from './components/excelVolunteers/Excel'
//pasos = 1 --> formulario de password
//pasos = 2 --> drag and drop

class Volunteers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pasos: 1,
            password:""
        };
    }


    //transiciones
    init = () => {
        if(this.state.pasos === 1)
        {
            return(
                <div>
                    <Password
                    setValid={this.setValid}
                    handleChange={this.handleChange}
                    password={this.state.password}
                    />
                </div>
            )
        }
        if(this.state.pasos === 2)
        {
            return(
                <div>
                    <Excel/>
                </div>
            )
        }

    }

    setValid = () => {
        this.setState({
            pasos: 2
        })
    }

    // handlePassword = (password) => {
    //     this.setState({password: password})
    // }


    handleChange = input => (e) => {
        e.preventDefault();
        this.setState({ [input]: e.target.value })
    };

    handlePassword = (password) => {
        this.setState({ password: password })
    };

    render() {
        return (
            <div>
                <Container fluid id='background'>
                        <div id='left-letters'>
                            {this.init()}
                        </div>
                </Container>
            </div>
        );
    }
}

export default Volunteers;