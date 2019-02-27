import React, { Component } from 'react';

class FormRegistrationDetails extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <React.Fragment>
                <h3>Registration Details</h3>
                <div type="text" className="wrap-input100 validate-input">
                    <span className="label-input100">Username</span>
                    <input
                      className="input100"
                      type="text"
                      placeholder="Username"
                      onChange={handleChange('username')}
                      value={values.username}
                    />
                    <span className="focus-input100"></span>
                </div>
                <br />
                <div type="text" className="wrap-input100 validate-input">
                    <span className="label-input100">Password</span>
                    <input
                      className="input100"
                      type="password"
                      placeholder="Password"
                      onChange={handleChange('password')}
                      value={values.password}
                    />
                    <span className="focus-input100"></span>
                </div>
                <br />
                <div className="container-contact100-form-btn">
                    <div className="wrap-contact100-form-btn">
                        <div className="contact100-form-bgbtn"></div>
                        <button 
                            className="contact100-form-btn"
                            type="submit"
                            onClick={this.back}
                            >
                            <span>
                                Back
                            </span>
                        </button>
                    </div>
          
                    <div className="wrap-contact100-form-btn">
                        <div className="contact100-form-bgbtn"></div>
                        <button 
                            className="contact100-form-btn"
                            type="submit"
                            onClick={this.continue}
                            >
                            <span>
                                Continue
                            </span>
                        </button>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default FormRegistrationDetails;
