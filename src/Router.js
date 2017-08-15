import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'
import Authentication from './components/Pages/Authentication';
import Profile from './components/Pages/Profile';

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
            : <Redirect to='/profile' />}
        />
    )
}
  

class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <PublicRoute authed={this.props.authed} path='/authentication' component={Authentication} />
                    <PrivateRoute authed={this.props.authed} path='/profile' component={Profile} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;