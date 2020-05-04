import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container'


class Names extends Component {
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
				<Form.Row>
					<Form.Group>
						<Form.Label>Nombre</Form.Label>
						<Form.Control
							type="text"
							placeholder="Nombre"
							name="firstName"
							onChange={handleChange('firstName')}
							value={value.firstName}
						/>
					</Form.Group>
					<Form.Group>
						<Form.Label>Apellido</Form.Label>
						<Form.Control
							type="text"
							placeholder="Apellido"
							name='lastName'
							onChange={handleChange('lastName')}
							value={value.lastName}
						/>
					</Form.Group>
				</Form.Row>
				<Button onClick={this.back}> Atras</Button>
				<Button onClick={this.continue}>Continue</Button>
			</Container>
		);
	}
}

export default Names;
