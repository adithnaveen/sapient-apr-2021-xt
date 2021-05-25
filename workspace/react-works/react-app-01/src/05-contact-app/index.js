import React, { Component } from 'react'

import ContactCard from './ContactCard';
class App extends Component {

    render() {
        const contact = {
            id: "101",
            name: "Naeen Kumar",
            gender: "male",
            email: "adith.naveen@gmail.com",
            phone: "9900524255",
            picture: "https://randomuser.me/api/portraits/men/3.jpg"
        };

        const contacts = [{
            id: "101",
            name: "Naeen Kumar",
            gender: "male",
            email: "adith.naveen@gmail.com",
            phone: "9900524255",
            picture: "https://randomuser.me/api/portraits/men/3.jpg"
        }, {}, {}, {}];


        return (
            <div className="container">
                <h1 className="alert alert-info">Working with Contacts</h1>
                <ContactCard contact={contact} />
            </div>
        );
    }
}

export default App;