import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export class FormUserDetails extends Component {
	continue = (e) => {
		e.preventDefault();
		this.props.nextStep();
	};
	render() {
		const { values, handleChange } = this.props;

		return (
			<MuiThemeProvider>
				<React.Fragment>
					<AppBar title="Enter User Details" />
					<TextField
						hintText="Enter your first name"
						floatingLabelText="First name"
						onChange={handleChange('firstName')}
						defaultValue={values.firstName}
						value={values.firstName}
					/>
					<br />
					<TextField
						hintText="Enter your last name"
						floatingLabelText="Last name"
						onChange={handleChange('lastName')}
						defaultValue={values.lastName}
						value={values.lastName}
					/>
					<br />
					<TextField
						hintText="Enter your email"
						floatingLabelText="Email"
						onChange={handleChange('email')}
						defaultValue={values.email}
						value={values.email}
					/>
					{'  '}
					<br />
					<RaisedButton
						label="Clean"
						primary={false}
						style={StyleSheet.button}
						onClick={this.props.cleanFields(values)}
					/>
					{'      '}
					<RaisedButton label="Continue" primary={true} style={StyleSheet.button} onClick={this.continue} />
				</React.Fragment>
			</MuiThemeProvider>
		);
	}
}

const styles = {
	button: {
		margin: 15
	}
};

export default FormUserDetails;
