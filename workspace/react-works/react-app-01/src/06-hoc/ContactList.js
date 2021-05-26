import React from 'react'
import ContactCard from './ContactCard'
import PropTypes from 'prop-types';
import Loading from './Loading';

const ContactList = ({contacts, name}) => {
    let list = contacts.map(c => <ContactCard contact={c} key ={c.id} />)
    return <div>
        {name}
        {list}
        </div>
}

// you can do type checking 
ContactList.propTypes = {
    contacts: PropTypes.array,
    name:PropTypes.string.isRequired
};

// assign default values for the properties 
ContactList.defaultProps ={
    name:"Harry"
}

export default Loading('contacts')(ContactList)
