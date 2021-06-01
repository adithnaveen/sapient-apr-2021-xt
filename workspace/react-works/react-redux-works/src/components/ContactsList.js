import React, { Component } from 'react'
import {fetchContacts} from '../actions/contacts-action'
// HOC 
import {connect} from 'react-redux';

import ContactCard from './ContactCard'

class ContactsList extends Component {

    componentDidMount() {
        this.props.getAllContact();
    }

    render() {
        let list = null; 
        let {contacts}  = this.props; 
        if(contacts instanceof Array && contacts.length > 0){
         list = contacts.map(
            c => <ContactCard key={c.id} contact={c} />)
            }
        return ( 
            <div className="container">
                <h3>Contact List</h3>
                {list}
            </div>
        );
    }
}

const stateToProps = (reducer) => {
    return {
        contacts: reducer.contactsReducer.contacts
    }
};
const actionAsProps = {
    getAllContact: fetchContacts
};


export default connect(stateToProps, actionAsProps)(ContactsList);