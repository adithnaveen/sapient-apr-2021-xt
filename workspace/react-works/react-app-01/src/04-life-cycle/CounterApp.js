import React, { Component } from 'react'


class CounterApp extends Component {
    constructor() {
        super();
        console.log("CounterApp.constructor()");
    }
    state = {
        count: 1
    }
    num = 1;
    render() {
        console.log(this);
        console.log("CounterApp. render()");
        console.log(`Num ${this.num}, Count : ${this.state.count}`);
        return (
            <div className="container">
                <h2 className="alert alert-danger">{this.props.title}</h2>
                <h3>Count Value is {this.state.count}</h3>
                <h3>Num Value is {this.num}</h3>

                <button className="btn btn-primary"
                    onClick={() => {
                        this.setState({ count: this.state.count + 1 })
                    }}
                >Increment Count</button>

                <button className="btn btn-danger"
                    onClick={() => {
                        this.num++;
                        // console.log("Num is: " + this.num);
                        this.forceUpdate();
                    }}
                >Increment Num</button>


            </div>

        );
    }

    // life cycle methods 
    componentDidMount() {
        console.log("CounterApp.componentDidMount()");
    }

    componentWillUnmount() {
        console.log("CounterApp.componentWillUnmount()");
    }

    componentDidUpdate() {
        console.log("CounterApp.componentDidUpdate()");
    }
}

export default CounterApp;