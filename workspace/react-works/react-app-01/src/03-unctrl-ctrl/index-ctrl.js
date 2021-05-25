import React, { Component } from 'react'
import EmployeeForm from './EmployeeForm';


class App extends Component {

    render() {
        return (
            <div className="container">
                <h1 className="alert alert-info">Controlled Component Demo</h1>
                
                   
                        <EmployeeForm /> 
                     
            </div>
        );
    }
}

export default App;