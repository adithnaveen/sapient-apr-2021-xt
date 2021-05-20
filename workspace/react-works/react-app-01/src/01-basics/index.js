import React, { Component } from 'react'
import AppFooter from './AppFooter'
import AppHeader from './AppHeader'
import AppContent from './AppContent'

export class App extends Component {
    render() {
        return (
            <div>
                <AppHeader company="Publicis Sapient" />
                <AppContent />
                <AppFooter year="2021" webAddress="http://ps.com" />
            </div>
        )
    }
}

export default App
