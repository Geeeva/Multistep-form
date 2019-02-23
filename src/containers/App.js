import React, { Component } from 'react';
import UserForm from '.././components/UserForm';
import './App.css';
import 'normalize.css';

class App extends Component {
    constructor(props) {
        super(props)

        this.state = {
           
        }
    }

    render() {
        return(
            <div className="App">
                <div className="container-fluid">
                    <div className="container-contact100">
                        <div className="wrap-contact100">
                            <div className="contact100-form validate-form">
                                <span className="contact100-form-title">
                                    Registration Form
                                </span>
                                <UserForm />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
