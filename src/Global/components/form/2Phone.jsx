import React, { Component } from 'react';
import 'react-phone-number-input/style.css'
import PhoneInput from 'react-phone-number-input'
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import style from '../../css/Formcopy.css'
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';


class Phone extends Component {
	constructor(props) {
		super(props);
		this.state = {
			phoneOk: true,
			wrongEmail: false,
			equalEmail: true,
		}
	}

	continue = (e) => {
		var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
		e.preventDefault()
		if (this.props.phone.length > "12" && this.props.phone.length < "16")
			this.setState({ phoneOk: true })
		else
			this.setState({ phoneOk: false })

		if (emailRegex.test(this.props.email))
			this.setState({ wrongEmail: false })
		else
			this.setState({ wrongEmail: true })
		if (this.props.email !== this.props.emailConfirmation)
			this.setState({ equalEmail: false })
		else
			this.setState({ equalEmail: true }
				, () => {
					if (this.state.equalEmail === true && this.state.phoneOk === true && this.state.wrongEmail === false)
						this.props.nextStep()
				})

	}

	back = (e) => {
		e.preventDefault()
		this.props.prevStep()
	}

	handleInputChange = (telNumber) => {
		this.props.handlePhone(telNumber)
	}

	render() {
		const { handleChange, email, emailConfirmation, phone } = this.props
		return (
			<Container>
				<h3>DATOS PERSONALES</h3>
				<h5>Necesitamos los siguientes datos para poder comunicarnos con usted</h5>
				<br />
				<Form.Label>Teléfono o celular *</Form.Label>
				<br />
				<PhoneInput
					defaultCountry="AR"
					preferredCountries={['AR', 'BR', 'CH', 'US']}
					onChange={this.handleInputChange}
					value={phone}
				/>
				{
					this.state.phoneOk ?
						null :
						(<Form.Text className="invalidInput">
							Ingrese su el numero de area si el cero y el numero de telefono sin el 15
						</Form.Text>)
				}
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
					{
						this.state.wrongEmail === true ?
							(<Form.Text className="invalidInput">
								Debe introducir su email de forma correcta.
							</Form.Text>) : (null)
					}
					<br />
					<Form.Label>Confirmación de Email *</Form.Label>
					<Form.Control
						type="email"
						placeholder="example@mail.com"
						name='emailConfirmation'
						onChange={handleChange('emailConfirmation')}
						value={emailConfirmation}
					/>
					{
						this.state.equalEmail ?
							null :
							(<Form.Text className="invalidInput">
								Sus emails deben coincidir.
							</Form.Text>)
					}

				</Form.Group>
				<br />
				<div className="bottomButton">
					<Button onClick={this.back}
						className="backButton"
						variant="contained"
						color="secondary"
					> Atrás</Button>
					<Button onClick={this.continue}
						className="forwardButton"
						variant="contained"
						color="primary"
					>Continuar</Button>
				</div>
			</Container >
		);
	}

}


export default Phone;
