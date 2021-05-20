import React, { Component } from 'react'

import './AppHeader.css';

class AppHeader extends Component {

    render() {
        return (
            <div className="banner">
                {/*  this is my comment  */}
                <h1>This is App Header</h1>
                <h3>{this.props.company}</h3>
                <hr />
            </div>
        );
    }
}

export default AppHeader;