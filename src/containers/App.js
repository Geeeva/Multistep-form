import React, { Component } from 'react';
import Table from '../components/Table/Table';
import './App.css';
import 'normalize.css';
import data from '.././data/data.json';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: data,
        }
    }

    render () {
        return ( 
            <div className="App">
                <Table 
                    data={this.state.data}
                 />
            </div>
        )
    }
}

export default App;
