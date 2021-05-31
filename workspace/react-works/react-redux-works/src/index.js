import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux';
import rootReducer from './reducers/root-reducer';
// dont use this in production 
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';

const store = createStore(rootReducer, composeWithDevTools());


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="container">
          <h2 className="alert alert-info">React Redux Application</h2>
        </div>
        <div className="row">
          <div className="col-md-5">Add Contact</div>
          <div className="col-md-7">
            <ContactsList /> 
          </div>
        </div>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));