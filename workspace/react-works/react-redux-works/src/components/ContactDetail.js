import React, { Component } from 'react'
import { connect } from 'react-redux';
import { getContactById } from '../actions/contacts-action';

// you want to show 1 contact 
class ContactDetail extends Component {

    componentDidMount() {
        let { id } = this.props.match.params;
        this.props.getContact(id);
    }

    render() {

        let { contact } = this.props;
        if (!contact) contact = {};

        return (
            <div>
                <h3>Contact Details</h3>
                <div className="row">
                    <div className="col-md-4">
                        <img src={contact.picture} alt={contact.name}
                            style={{ height: 200 }}
                            className="img img-thumbnail" />
                    </div>
                    <div className="col-md-8">
                        <table className="table table-striped">
                            <tbody>
                                <tr>
                                    <td className="table-primary">Name</td>
                                    <td className="card-title">{contact.name}</td>
                                </tr>
                                <tr>
                                    <td className="table-primary">Email</td>
                                    <td className="card-text">{contact.email}</td>
                                </tr>
                                <tr>
                                    <td className="table-primary">Contact</td>
                                    <td className="card-text">{contact.phone}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

let stateAsProps = (reducer) => (
    {
        contact: reducer.contactsReducer.contact
    }
)
let actionAsProps = { getContact: getContactById };


export default connect(stateAsProps, actionAsProps)(ContactDetail);