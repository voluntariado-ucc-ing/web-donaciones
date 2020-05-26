import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from '@material-ui/core/Button';
import Container from 'react-bootstrap/Container';
import '../../css/Formcopy.css';


class Names extends Component {
	constructor(props) {
		super(props);
		this.state = {
			firstNameWritten: true,
			lastNameWritten: true
		}
	}
	continue = (e) => {
		e.preventDefault()
		if (this.props.firstName !== '' && this.props.lastName !== '') {
			this.setState({ firstNameWritten: true })
			this.setState({ lastNameWritten: true })
			this.props.nextStep()
		}
		else {
			if (this.props.firstName === '') {
				this.setState({ firstNameWritten: false })
			}
			else {
				this.setState({ firstNameWritten: true })
				this.setState({ lastNameWritten: false })
			}
		}
	}
	back = (e) => {
		e.preventDefault()
		this.props.prevStep()
	}
	render() {
		const { handleChange, firstName, lastName } = this.props
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
					{this.state.firstNameWritten ? null : (<Form.Text className="invalidInput">
						Debe introducir su nombre.
					</Form.Text>)}
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
					{this.state.lastNameWritten ? null : (<Form.Text className="invalidInput">
						Debe introducir su apellido.
					</Form.Text>)}
				</Form.Group>
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
			</Container>
		);
	}
}

export default Names;
