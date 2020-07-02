import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';
import '../../css/Formcopy.css';

const initialState = {
	firstNameError: "",
	lastNameError: ""
};

class Names extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	validateName = () => {
		let firstNameError = "";
		let lastNameError = "";

		if (!this.props.firstName) {
			firstNameError = "Ingrese su nombre";
		}

		if (!this.props.lastName) {
			lastNameError = "Ingrese su apellido";
		}

		if (firstNameError || lastNameError ) {
			this.setState({firstNameError, lastNameError});
			return false;
		}

		return true;
	};

	continue = e => {
		e.preventDefault();
		const isValid = this.validateName();
		if (isValid) {
			console.log(this.state);
			// clear form
			this.setState(initialState);
			this.props.nextStep();
		}
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep()
	};
	render() {

		const {firstName, lastName, handleChange} = this.props;

		return (
			<Container>
				<h3>DATOS PERSONALES</h3>
				<Form.Group>
					<Form.Label>¿Cual es su nombre? *</Form.Label>
					<Form.Control
						type="text"
						placeholder="Nombre"
						name="firstName"
						onChange={handleChange('firstName')}
						value={firstName}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{this.state.firstNameError}
					</div>
				</Form.Group>
				<Form.Group>
					<Form.Label>¿Y su apellido? *</Form.Label>
					<Form.Control
						type="text"
						placeholder="Apellido"
						name='lastName'
						onChange={handleChange('lastName')}
						value={lastName}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{this.state.lastNameError}
					</div>
				</Form.Group>
				<div className="bottomButton">
					<Button onClick={this.back}
						className="backButton btn"
						variant="contained"
					> Atrás</Button>
					<Button onClick={this.continue}
						className="forwardButton btn"
						variant="contained"
					>Continuar</Button>
				</div>
			</Container>
		);
	}
}

export default Names;
