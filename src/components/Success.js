import React, {Component} from 'react';

class Success1 extends Component {
	continue = e => {
		e.preventDefault();
		this.props.nextStep();
	}

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
	
	render (){
        return (
            <React.Fragment>
                <h1>Thank You For Your Submission</h1>
                <p>You will get an email with further instructions</p>
            </React.Fragment>
        )
	}
}

export default Success1;