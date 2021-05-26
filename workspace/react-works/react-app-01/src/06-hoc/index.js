import React, { Component } from 'react'

import ContactCard from './ContactCard';
import ContactList from './ContactList';
class App extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        fetch("http://localhost:4000/contacts/")
            .then(resp => resp.json())
            .then(resp => this.setState({ contacts: resp }))
    }
    render() {
       
        return (
            <div className="container">
                <h1 className="alert alert-info">Working with Contacts</h1>
                <ContactList contacts={this.state.contacts} />
            </div>
        );
    }
}
export default App;