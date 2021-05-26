import React from 'react'
import ContactCard from './ContactCard'
import Loading from './Loading';

const ContactList = ({contacts}) => {
    let list = contacts.map(c => <ContactCard contact={c} key ={c.id} />)
    return <div>{list}</div>
}
export default Loading('contacts')(ContactList)
