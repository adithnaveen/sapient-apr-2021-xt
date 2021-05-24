import React from 'react'

// rfc , rfce 

import './AppFooter.css';

const AppFooter = ({ year, webAddress, company }) => {
    return (
        <div className="app-footer">
            <hr />
            <p >App Footer</p>
            <p>Copy {year}, {webAddress}, {company} </p>
        </div>
    );
}

export default AppFooter;