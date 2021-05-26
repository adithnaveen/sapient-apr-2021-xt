import React, { Component } from 'react'

import ContactCard from './ContactCard';
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
        // const contact = {
        //     id: "101",
        //     name: "Naeen Kumar",
        //     gender: "male",
        //     email: "adith.naveen@gmail.com",
        //     phone: "9900524255",
        //     picture: "https://randomuser.me/api/portraits/men/3.jpg"
        // };

        // const contacts = [
        //     {
        //         "id": 1,
        //         "name": "Justen",
        //         "gender": "Male",
        //         "email": "jbridgland0@sourceforge.net",
        //         "phone": "782-970-0958",
        //         picture: "https://randomuser.me/api/portraits/men/4.jpg"
        //     },
        //     {
        //         "id": 2,
        //         "name": "Renelle",
        //         "gender": "Female",
        //         "email": "rmcmichan1@irs.gov",
        //         "phone": "343-352-1408",
        //         picture: "https://randomuser.me/api/portraits/women/4.jpg"
        //     },
        //     {
        //         "id": 3,
        //         "name": "Cayla",
        //         "gender": "Male",
        //         "email": "cspeachley2@ustream.tv",
        //         "phone": "635-869-0818",
        //         picture: "https://randomuser.me/api/portraits/men/5.jpg"
        //     },
        //     {
        //         "id": 4,
        //         "name": "Doll",
        //         "gender": "Male",
        //         "email": "dmeryett3@ask.com",
        //         "phone": "795-902-7687",
        //         picture: "https://randomuser.me/api/portraits/men/6.jpg"
        //     },
        //     {
        //         "id": 5,
        //         "name": "Lincoln",
        //         "gender": "Female",
        //         "email": "lcanavan4@businessinsider.com",
        //         "phone": "534-161-4091",
        //         picture: "https://randomuser.me/api/portraits/women/6.jpg"
        //     }
        // ];

        // version 1.0 
        // const contactCards = contacts.map(c => <ContactCard contact={c} />)

        // version 2.0 to fetch from the end point 
        const contactCards = this.state.contacts.map(c => <ContactCard contact={c} key={c.id} />)

        return (
            <div className="container">
                <h1 className="alert alert-info">Working with Contacts</h1>
                <h3>Number of Contacts are {this.state.contacts.length}</h3>
                {/* <ContactCard contact={contact} /> */}
                {/* <ContactCard contact={contacts[0]} />
                <ContactCard contact={contacts[1]} />
                <ContactCard contact={contacts[2]} />
                <ContactCard contact={contacts[3]} /> */}

                {contactCards}

            </div>
        );
    }
}



export default App;