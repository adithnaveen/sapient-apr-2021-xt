import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import ContactsList from './components/ContactsList';
import ContactForm from './components/ContactForm';
import ContactDetail from './components/ContactDetail';

import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root-reducer';
// dont use this in production 
import { composeWithDevTools } from 'redux-devtools-extension';

import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import { HashRouter as Router, Link, Route } from 'react-router-dom';

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
// const store = createStore(rootReducer, applyMiddleware(thunk));

const Home = () => {
  return (
    <div>
      <h2>Contact Address Book Application</h2>
    </div>
  )
}


class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <h2 className="alert alert-info">React Redux Application</h2>
          </div>
          <div className="row">
            <div className="col-md-5">

              <ul className="list-group">
                <li className="list-group-item">
                  <Link to="/">Home</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/add-new-contact">Add New Contact</Link>
                </li>
                <li className="list-group-item">
                  <Link to="/view-contacts">View Contacts</Link>
                </li>
              </ul>

            </div>
            <div className="col-md-7">
              <Route path="/" exact={true} component={Home} />
              <Route path="/add-new-contact" exact={true} component={ContactForm} />
              <Route path="/view-contacts" exact={true} component={ContactsList} />
              <Route path="/contact-detail/:id" exact={true} component={ContactDetail} />

            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));