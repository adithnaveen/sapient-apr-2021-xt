import React, { Component } from 'react'

// HOC 
import {connect} from 'react-redux';

import ContactCard from './ContactCard'

class ContactsList extends Component {

    render() {
        let list = this.props.contacts.map(
            c => <ContactCard key={c.id} contact={c} />)
        return ( 
            <div className="container">
                <h3>Contact List</h3>
                {list}
            </div>
        );
    }
}

export default connect()(ContactsList);