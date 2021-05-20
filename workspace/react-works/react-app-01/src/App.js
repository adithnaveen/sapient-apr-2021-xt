import React, { Component, Fragment } from 'react'


class App extends Component {
    render() {
        // const msg = "This is My First H1";
        // const name = "Naveen Kumar KS"
        console.log(this.props);
        return (
            <Fragment>
                <h1>{this.props.message}</h1>
                <h3>by {this.props.name}</h3>
            </Fragment>
        );
    }
}

export default App;