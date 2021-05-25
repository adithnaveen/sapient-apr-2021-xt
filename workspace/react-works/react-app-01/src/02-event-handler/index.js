import React, { Component } from 'react'

import './App.css';

import Btn from './Btn';

// stateless component 

const Btn1 = (props) => (
    <button className="btn btn-warning" onClick={props.handler}> {props.caption} </button>
)


class App extends Component {

    constructor() {
        super();
        this.btnHandler = this.btnHandler.bind(this);
        this.newBtnHandler = this.newBtnHandler.bind(this);
    }

    btnHandler() {
        console.log("You clicked Me... ");
    }
    newBtnHandler() {
        console.log("you click New btn handler");
    }

    sampleBtnHander = () => {
        console.log("Sample BTN Handler");
    }

    btnHandler1() {
        console.log("You clicked Me...btnHandler1 ");
    }

    increment = () => {
        console.log('incrementing');
        this.setState({ count: this.state.count + 1 })

    }
    decrement = () => {
        console.log('decrementing');
        this.setState({ count: this.state.count - 1 })
    }

    incrementOrDecrement = (val) => {
        this.setState({ count: this.state.count + val })
    }

    state = { count: 0 }

    render() {
        // dont call setState inside render 
        // this.setState({ count: this.state.count + 1 })
        return (
            <div className="app-content">
                <h3 className="alert alert-success">This is component Area</h3>
                <button className="btn btn-primary" onClick={this.btnHandler} >Button 1</button>
                <button className="btn btn-primary" onClick={this.newBtnHandler} > New Button 1</button>
                <button className="btn btn-primary" onClick={this.sampleBtnHander} > Sample BTN Handler</button>
                <button className="btn btn-primary" onClick={this.btnHandler1.bind(this)} > Sample BTN Handler</button>

                <hr />
                <button className="btn btn-secondary" onClick={this.increment}> Increment</button>
                <button className="btn btn-secondary" onClick={this.decrement} >Decrement</button>
                <h2>The value of count {this.state.count}</h2>

                <button className="btn btn-danger" onClick={() => { this.incrementOrDecrement(1) }}>INCR</button>
                <button className="btn btn-danger" onClick={() => { this.incrementOrDecrement(-1) }}>DECR</button>

                <hr />
                <Btn caption="Increment" handler={() => this.incrementOrDecrement(1)} />
                <Btn caption="Decrement" handler={() => this.incrementOrDecrement(-1)} />
                <hr />
                <Btn1 caption="Increment" handler={() => this.incrementOrDecrement(1)} />
                <Btn1 caption="Decrement" handler={() => this.incrementOrDecrement(-1)} />
            </div>
        );
    }
}

export default App;