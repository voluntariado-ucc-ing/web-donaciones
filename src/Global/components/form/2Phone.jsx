import React, { Component } from 'react';
import IntlTelInput from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import style from '../../css/Formcopy.css'
import Button from '@material-ui/core/Button';



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
				<IntlTelInput
					preferredCountries={['ar']}
					separateDialCode={true}
					containerClassName={style.tel}
				/>
				<Form.Group as={Col} md="6"
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
				<Button onClick={this.back}> Atras</Button>
				<Button onClick={this.continue}>Continue</Button>
			</Container >
		);
	}

}


export default Phone;
