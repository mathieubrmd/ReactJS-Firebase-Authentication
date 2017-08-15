import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Authentication from './components/Pages/Authentication';
import Dashboard from './components/Pages/Dashboard/Dashboard';
import Navigation from './components/Pages/Dashboard/Navigation';
import Profile from './components/Pages/Dashboard/Profile';

function PrivateRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
        {...rest}
        render={(props) => authed === true
            ? <Component {...props} />
            : <Redirect to={{pathname: '/authentication', state: {from: props.location}}} />}
        />
    )
}
  
function PublicRoute ({component: Component, authed, ...rest}) {
    return (
        <Route
        {...rest}
        render={(props) => authed === false
            ? <Component {...props} />
            : <Redirect to='/' />}
        />
    )
}

class Router extends Component {
    render() {
        const { authed } = this.props;

        return (
            <BrowserRouter>
                <div>
                    <Navigation visible={authed} />
                    <PublicRoute authed={authed} path='/authentication' component={Authentication} />
                    <PrivateRoute exact authed={authed} path='/' component={Dashboard} />
                    <PrivateRoute exact authed={authed} path='/profile' component={Profile} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;