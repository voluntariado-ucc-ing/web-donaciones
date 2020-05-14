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
		if (this.props.value.firstName !== '' && this.props.value.lastName !== '') {
			this.setState({ firstNameWritten: true })
			this.setState({ lastNameWritten: true })
			this.props.nextStep()
		}
		else {
			if (this.props.value.firstName === '') {
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
		const { handleChange, value } = this.props
		return (
			<Container>
				<Form.Group>
					<Form.Label>Nombre</Form.Label>
					<Form.Control
						type="text"
						placeholder="Nombre"
						name="firstName"
						onChange={handleChange('firstName')}
						value={value.firstName}
					/>
					{this.state.firstNameWritten ? null : (<Form.Text className="invalidInput">
						Debe introducir su nombre.
					</Form.Text>)}
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
					{this.state.lastNameWritten ? null : (<Form.Text className="invalidInput">
						Debe introducir su apellido.
					</Form.Text>)}
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
			</Container>
		);
	}
}

export default Names;
