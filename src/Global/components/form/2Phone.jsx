import React, { Component } from 'react';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';

let emailRegex;
emailRegex = RegExp(
	/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const initialState = {
	emailErrorMessage: "",
	emailConfirmErrorMessage: "",
	phoneErrorMessage: ""
};

class Phone extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	validatePhone = () => {
		let emailErrorMessage = "";
		let emailConfirmErrorMessage = "";
		let phoneErrorMessage = "";

		if (!this.props.email.includes("@") || this.props.email === emailRegex) {
			emailErrorMessage = "Ingrese un email válido";
		}

		if (this.props.phone === undefined || !(this.props.phone.length > "7" && this.props.phone.length < "16") || !(this.props.phone)) {
			phoneErrorMessage = "Ingrese su telefono.";
		}

		if (!this.props.emailConfirm.includes("@") || this.props.emailConfirm !== this.props.email
			|| this.props.emailConfirm === emailRegex) {
			emailConfirmErrorMessage = "Asegúrese que los emails coincidan.";
		}

		if (emailErrorMessage || phoneErrorMessage || emailConfirmErrorMessage) {
			this.setState({ emailErrorMessage: emailErrorMessage, phoneErrorMessage: phoneErrorMessage, emailConfirmErrorMessage: emailConfirmErrorMessage });
			return false;
		}

		return true;
	};


	continue = e => {
		e.preventDefault();
		const isValid = this.validatePhone();
		if (isValid) {
			this.setState(initialState);
			this.props.nextStep();
		}
	};

	back = (e) => {
		e.preventDefault();
		this.props.prevStep()
	};

	handleInputChange = (telNumber) => {
		this.props.handlePhone(telNumber)
	};

	render() {
		const { handleChange, email, emailConfirm, phone } = this.props;
		const errorPhone = (phone === undefined) || (this.state.phoneErrorMessage !== '') || !(phone.length > "7" && phone.length < "16") || !phone
		const errorEmail = this.state.emailErrorMessage !== '' && !emailRegex.test(email)
		const errorEmailC = (this.state.emailConfirmErrorMessage !== '') && !(emailConfirm === email && emailConfirm !== '')

		return (
			<Container>
				<h5>Necesitamos los siguientes datos para poder comunicarnos con vos</h5>
				<br />
				<Form.Label>Teléfono o celular *</Form.Label>
				<br />
				<PhoneInput
					defaultCountry="AR"
					onChange={this.handleInputChange}
					value={phone}
				/>
				<div style={{ fontSize: 12, color: "red" }}>
					{errorPhone ? this.state.phoneErrorMessage : null}
				</div>
				<br />
				<Form.Group
					id="formEmail">
					<Form.Label>Email *</Form.Label>
					<Form.Control
						type="email"
						placeholder="example@mail.com"
						name='email'
						onChange={handleChange('email')}
						value={email}
						isInvalid={errorEmail}
						isValid={emailRegex.test(email)}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{errorEmail ? this.state.emailErrorMessage : null}
					</div>
					<br />
					<Form.Label>Confirmación de Email *</Form.Label>
					<Form.Control
						type="email"
						placeholder="example@mail.com"
						name='emailConfirm'
						onChange={handleChange('emailConfirm')}
						value={emailConfirm}
						isInvalid={errorEmailC}
						isValid={this.props.emailConfirm === this.props.email && this.props.emailConfirm !== ''}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{errorEmailC ? this.state.emailConfirmErrorMessage : null}
					</div>
				</Form.Group>
				<br />
				<div className="bottomButton">
					<Button onClick={this.back}
						className="backButton btn"
						variant="contained"
						color="secondary"
					> Atrás</Button>
					<Button onClick={this.continue}
						className="forwardButton btn"
						variant="contained"
						color="primary"
					>Continuar</Button>
				</div>
			</Container >
		);
	}

}


export default Phone;
