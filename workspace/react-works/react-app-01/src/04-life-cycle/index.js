import React, { Component } from 'react'
import CounterApp from './CounterApp';

class App extends Component {
    state = {
        showCounterApp: false,
        title: "CounterApp"
    }
    render() {

        let output = null;
        if (this.state.showCounterApp === true) {
            output = <CounterApp title={this.state.title} />
        }

        return (
            <div className="container">
                <h2 className="alert alert-primary">Life Cycle Example</h2>

                <button className="btn btn-warning"
                    onClick={() => { this.setState({ showCounterApp: !this.state.showCounterApp }) }}
                >Show Hide CounterApp</button>

                <button className="btn btn-primary"
                    onClick={() => {
                        if (this.state.title === 'CounterApp') {
                            this.setState({ title: "Counter App Title Toggled" })
                        } else {
                            this.setState({ title: "CounterApp" })
                        }
                    }}
                >Toggle Title</button>

                <br />
                <br />
                {output}

            </div>
        );
    }
}

export default App;