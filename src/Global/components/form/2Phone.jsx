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
	emailError: "",
	emailConfirmError:"",
	phoneError: ""
};

class Phone extends Component {
	constructor(props) {
		super(props);
		this.state = initialState;
	}

	validatePhone = () => {
		let emailError = "";
		let emailConfirmError= "";
		let phoneError="";

		if (!this.props.email.includes("@") || this.props.email === emailRegex) {
			emailError = "Ingrese un email válido";
		}

		if (!this.props.phone) {
			phoneError = "Ingrese su telefono.";
		}

		if (!this.props.emailConfirm.includes("@") || this.props.emailConfirm !== this.props.email) {
			emailConfirmError = "Asegúrese que los emails coincidan.";
		}

		if (emailError || phoneError || emailConfirmError) {
			this.setState({ emailError, phoneError, emailConfirmError });
			return false;
		}

		return true;
	};


	continue = e => {
		e.preventDefault();
		const isValid = this.validatePhone();
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

	handleInputChange = (telNumber) => {
		this.props.handlePhone(telNumber)
	};

	render() {
		const { handleChange, email, emailConfirm, phone } = this.props;
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
					{this.state.phoneError}
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
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{this.state.emailError}
					</div>
					<br />
					<Form.Label>Confirmación de Email *</Form.Label>
					<Form.Control
						type="email"
						placeholder="example@mail.com"
						name='emailConfirm'
						onChange={handleChange('emailConfirm')}
						value={emailConfirm}
					/>
					<div style={{ fontSize: 12, color: "red" }}>
						{this.state.emailConfirmError}
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
