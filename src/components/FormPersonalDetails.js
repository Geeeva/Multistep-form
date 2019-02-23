import React, { Component } from 'react';

class FormPersonalDetails extends Component {

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
                <h3>Personal Details</h3>
                <div type="text" className="wrap-input100 validate-input">
                    <span className="label-input100">Occupation</span>
                    <input
                      className="input100"
                      type="text"
                      placeholder="Enter Your Occupation"
                      onChange={handleChange('occupation')}
                      value={values.occupation}
                    />
                    <span className="focus-input100"></span>
                </div>
                <br />
                <div type="text" className="wrap-input100 validate-input">
                    <span className="label-input100">Your City</span>
                    <input
                        className="input100"
                        type="text"
                        placeholder="Enter Your City"
                        onChange={handleChange('city')}
                        value={values.city}
                    />
                    <span className="focus-input100"></span>
                </div>
                <br />
                <div type="text" className="wrap-input100 validate-input">
                    <span className="label-input100">Date of birth</span>
                    <input
                      className="input100"
                      type="text"
                      placeholder="Day"
                      onChange={handleChange('day')}
                      value={values.day}
                    />
                    <span className="focus-input100"></span>
                </div>
                <br />
                <div type="text" className="wrap-input100 validate-input">
                    <input
                      className="input100"
                      type="text"
                      placeholder="Month"
                      onChange={handleChange('month')}
                      value={values.month}
                    />
                    <span className="focus-input100"></span>
                </div>
                <br />
                <div type="text" className="wrap-input100 validate-input">
                    <input
                      className="input100"
                      type="text"
                      placeholder="Year"
                      onChange={handleChange('year')}
                      value={values.year}
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

export default FormPersonalDetails;
