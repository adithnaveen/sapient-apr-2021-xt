import React, { Component } from 'react'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppContent from './AppContent'

export class App extends Component {
    render() {
        const footerProps = {
            year:"2021",
            webAddress:"http://ps.com",
            company :"Publicis Sapient"
        }
        return (
            <div>
                <AppHeader company="Publicis Sapient" />
                <AppContent />
                <AppFooter {...footerProps} />
            </div>
        )
    }
}

export default App
