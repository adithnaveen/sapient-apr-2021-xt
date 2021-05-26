import React, { Component } from 'react'
import axios from 'axios';
import styled from 'styled-components';
import ContactList from './ContactList';
class App extends Component {

    state = {
        contacts: []
    }

    componentDidMount() {
        // using fetch 
        // fetch("http://localhost:4000/contacts/")
        //     .then(resp => resp.json())
        //     .then(resp => this.setState({ contacts: resp }))

        // using axios 
        axios.get("http://localhost:4000/contacts/")
            .then(resp => {
                this.setState({ contacts : resp.data});
            })
            // .catch(err => console.log(err))
            // .then(somdata => console.log(somdata));
    }

  

    render() {
         
     let Title = styled.h1`
     font-size: 1.5em;
     text-align: center;
     color: palevioletred;
    `;

    let Button = styled.button`
        background-color:${props => props.primary ? "cyan" :"blue"};
        color:${props => props.primary ? "black" :"white"};
        margin:1em;
        padding: 5px 10px;
        border-radius:3px;
    `;
    let DangerButton = styled(Button)`
        border-color:red;
    `;

        return (
            <div className="container">
                <h1 className="alert alert-info">Working with Contacts</h1>
                <Title>Working with Contacts</Title>
                <Button>Styled Button</Button>
                <Button primary >Styled Button</Button>
                <DangerButton>This is Danger</DangerButton>
                <DangerButton primary>This is Danger Primary</DangerButton>
                <ContactList contacts={this.state.contacts} />
            </div>
        );
    }
}
export default App;