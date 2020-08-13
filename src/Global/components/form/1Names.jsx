import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';
import '../../css/Formcopy.css';

const initialState = {
	firstNameErrorMessage: "",
	lastNameErrorMessage: ""
};

class Names extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	validateName = () => {
		let firstNameErrorMessage = "";
		let lastNameErrorMessage = "";

		if (!this.props.firstName) {
			firstNameErrorMessage = "Ingrese su nombre";
		}
		else
			firstNameErrorMessage = ""

		if (!this.props.lastName) {
			lastNameErrorMessage = "Ingrese su apellido";
		}
		else
			lastNameErrorMessage = ""

		if (firstNameErrorMessage || lastNameErrorMessage) {
			this.setState({ firstNameErrorMessage: firstNameErrorMessage, lastNameErrorMessage: lastNameErrorMessage });
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

		const { firstName, lastName, handleChange } = this.props;
		//variables de campos invalidos para que la pagina sea mas dinamica (checkear isInvalid en form control)
		const nameError = this.state.firstNameErrorMessage !== '' && firstName === ''
		const surnameError = this.state.lastNameErrorMessage !== '' && lastName === ''

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
						isInvalid={nameError}
						isValid={this.props.firstName !== ''}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{nameError ? this.state.firstNameErrorMessage : null}
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
						isInvalid={surnameError}
						isValid={this.props.lastName !== ''}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{surnameError ? this.state.lastNameErrorMessage : null}
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
