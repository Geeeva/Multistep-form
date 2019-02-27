import React, {Component} from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import FormRegistrationDetails from './FormRegistrationDetails';
import Confirm from './Confirm';
import Success from './Success';

class UserForm1 extends Component {

	state = {
		step: 1,
		firstName: '',
		lastName: '',
		email: '',
		occupation: '',
		city: '',
		bio: '',
		day: '',
		month: '',
		year: '',
		username: '',
		password: ''
	}

	//Proceed to next step

	nextStep = () => {
		const {step} = this.state;
		this.setState({
			step: step + 1
		});
	}

		//Go to previous step

	prevStep = () => {
		const {step} = this.state;
		this.setState({
			step: step - 1
		});
	}

	//Handle fields change

	handleChange = input => e => {
		this.setState({[input] : e.target.value})
	}

	changeHnadler = input => e => {
		this.setState({[input] : e.target.value})
	}

	render() {
	    const { step } = this.state;
	    const { firstName, lastName, email, phoneNumber, occupation, city, day, month, year, username, password} = this.state;
	    const values = { firstName, lastName, email, phoneNumber, occupation, city, day, month, year, username, password};
	    switch (step) {
	      	case 1:
		        return (
		          <FormUserDetails
		            nextStep={this.nextStep}
		            handleChange={this.handleChange}
		            values={values}
		          />
		        );

	      	case 2:
		        return (
		          <FormPersonalDetails
		            nextStep={this.nextStep}
		            prevStep={this.prevStep}
		            handleChange={this.handleChange}
		            values={values}
		          />
		        );

	       	case 3:
		        return (
		          <FormRegistrationDetails
		            nextStep={this.nextStep}
		            prevStep={this.prevStep}
		            handleChange={this.handleChange}
		            values={values}
		          />
		        );

	      	case 4:
		        return (
		          <Confirm
		            nextStep={this.nextStep}
		            prevStep={this.prevStep}
		            values={values}
		          />
		        );

	      	case 5:
	        return <Success />;
			default: 
	    }
	  }
}

export default UserForm1;