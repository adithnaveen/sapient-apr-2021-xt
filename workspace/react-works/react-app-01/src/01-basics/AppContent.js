import React, { Component } from 'react'
import './AppContent.css';

export class AppContent extends Component {
    render() {
        console.log(this);
        return (
            <div className="app-component">
                <h2>Some content goes here</h2>
                <h2>Some content goes here</h2>
                <h2>Some content goes here</h2>
                <h2>Some content goes here</h2>
                <h2>Some content goes here</h2>
            </div>
        )
    }
}

export default AppContent
