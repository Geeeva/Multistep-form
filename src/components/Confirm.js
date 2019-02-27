import React, { Component } from 'react';
import axios from '../axios-registration-form';
//import Spinner from '.././UI/Spinner/Spinner';

class Confirm extends Component {

    state = {
        error: false,
        loading: false
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

   submissionDataHandler = (e) => {
       e.preventDefault();
       const {
            values: { firstName, lastName, email, phoneNumber, occupation, city, day, month, year, username, password}
        } = this.props;
       
       const registration = 
      { 
          firstName: firstName, 
          lastName: lastName, 
          email: email, 
          phoneNumber: phoneNumber, 
          occupation: occupation, 
          city: city, 
          day: day, 
          month: month, 
          year: year, 
          username: username, 
          password: password
      }

      axios.post('registration.json', registration)
          .then(response => console.log(response))
          .catch(error => console.log(error));

      this.props.nextStep();
   }

    render() {
        const {
            values: {firstName, lastName, email, phoneNumber, occupation, city, day, month, year, username, password}
        } = this.props;
        return (
            <React.Fragment>
              <ul>
                  <li> First Name: {firstName}</li>
             
                  <li> Second Name: {lastName}</li>

                  <li> Email: {email}</li>

                  <li> Phone number: {phoneNumber}</li>

                  <li> Occupation: {occupation}</li>

                  <li> City: {city}</li>

                  <li> Date of birth: {day} {month} {year}</li>

                  <li> Your Username is: {username}</li>
              </ul>
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
                                onClick={this.submissionDataHandler}
                                >
                                <span>
                                    Submit
                                </span>
                            </button>
                        </div>
                    </div>
            </React.Fragment>
        );
    }
}

export default Confirm;
