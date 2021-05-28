// accumulate all the components 

import React, { Suspense } from 'react'
import { Route, Switch, HashRouter as Router, Link } from 'react-router-dom'
import Home from './Home';
// import Sample from './Sample';
// import Hello from './Hello';

const Sample = React.lazy(() => import('./Sample'));
const Hello = React.lazy(() => import('./Hello'));
const NotFound = React.lazy(() => import('./NotFound'));
const GitHubRecords = React.lazy(() => import('./GitHubRecords'));

// import NotFound from './NotFound';



const App = () => {
    return (
        <div>
            <Router>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h1 className="alert alert-primary">Links</h1>
                            <div>
                                <ul>
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                    <li>
                                        <Link to="/sample">Sample</Link>
                                    </li>
                                    <li>
                                        <Link to="/hello">Hello</Link>
                                    </li>
                                    <li>
                                        <Link to="/records">GitHub Records</Link>
                                    </li>
                                    <li>
                                        <Link to="/something">NotFound</Link>
                                    </li>
                                </ul>
                            </div>

                        </div>
                        <div className="col-md-8">

                            <Suspense fallback={<div>Loading...</div>}>
                                <Switch>
                                    {/* /, /sample, /hello */}
                                    <Route path="/" exact={true}>
                                        <Home />
                                    </Route>

                                    <Route path="/sample" exact={true}>
                                        <Sample />
                                    </Route>
                                    <Route path="/hello" exact={true}>
                                        <Hello />
                                    </Route>
                                    <Route path="/records" exact={true}>
                                        <GitHubRecords />
                                    </Route>

                                    {/* <Route component={NotFound} /> */}
                                    <Route path='*'>
                                        <NotFound />
                                    </Route>
                                </Switch>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </Router>
        </div>
    )
}

export default App;