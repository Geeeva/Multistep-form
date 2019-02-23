import React, { Component } from 'react';

class FormUserDetails extends Component {
  	continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };


  render() {
    const { values, handleChange } = this.props;

    return (
        <React.Fragment>
        <h3>User Details</h3>
        <div type="text" className="wrap-input100 validate-input">
            <span className="label-input100">Your First Name</span>
            <input
              className="input100"
              type="text"
              placeholder="Enter Your First Name"
              onChange={handleChange('firstName')}
              value={values.firstName}
            />
            <span className="focus-input100"></span>
        </div>
        <br />
        <div type="text" className="wrap-input100 validate-input">
            <span className="label-input100">Your Last Name</span>
            <input
                  className="input100"
                  type="text"
                  placeholder="Enter Your Last Name"
                  onChange={handleChange('lastName')}
                  value={values.lastName}
            />
            <span className="focus-input100"></span>
        </div>
        <br />
        <div type="text" className="wrap-input100 validate-input">
            <span className="label-input100">Email</span>
            <input
                className="input100"
                type="text"
                placeholder="Enter Your Email"
                onChange={handleChange('email')}
                value={values.email}
            />
            <span className="focus-input100"></span>
        </div>
        <br />
        <div type="text" className="wrap-input100 validate-input">
            <span className="label-input100">Phone Number</span>
            <input
                className="input100"
                type="text"
                placeholder="Enter Your Phone Number"
                onChange={handleChange('phone')}
                value={values.phone}
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

export default FormUserDetails;