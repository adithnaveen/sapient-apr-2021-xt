import React from 'react'

// rfc , rfce 

import './AppFooter.css';

const AppFooter = ({ year, webAddress }) => {
    return (
        <div className="app-footer">
            <hr />
            <p >App Footer</p>
            <p>Copy {year}, {webAddress} </p>
        </div>
    );
}

export default AppFooter;