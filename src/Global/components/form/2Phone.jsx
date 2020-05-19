import React, { Component } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import style from '../../css/Formcopy.css'
import Button from '@material-ui/core/Button';
import '../../css/Formcopy.css';



class Phone extends Component {
	continue = (e) => {
		e.preventDefault()
		this.props.nextStep()
	}
	back = (e) => {
		e.preventDefault()
		this.props.prevStep()
	}

	render() {
		const { handleChange, value } = this.props
		return (
			<Container>
				<p>Necesitamos los siguientes datos para poder comunicarnos con usted!</p>
				<br />
				<Form.Label>Telefono o celular</Form.Label>
				<br />
				<IntlTelInput
					preferredCountries={['ar']}
					separateDialCode={true}
					containerClassName={style.tel}
				/>
				<Form.Group
					controlId="formEmail">
					<Form.Label>Email</Form.Label>
					<Form.Control
						type="email"
						placeholder="example@mail.com"
						name='email'
						onChange={handleChange('email')}
						value={value.email}
					/>
					<Form.Label>Confirmacion</Form.Label>
					<Form.Control
						type="email"
						placeholder="example@mail.com"
						name='emailconfirmation'
						onChange={handleChange('emailconfirmation')}
						value={value.emailconfirmation}
					/>
				</Form.Group>
				<Button onClick={this.back}
					className="backButton"
					variant="contained"
					color="secondary"
				> Atras</Button>
				<Button onClick={this.continue}
					className="forwardButton"
					variant="contained"
					color="primary"
				>Continue</Button>
			</Container >
		);
	}

}


export default Phone;
