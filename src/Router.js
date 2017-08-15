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
        const { authed } = this.props;

        return (
            <BrowserRouter>
                <div>
                    <PublicRoute authed={authed} path='/authentication' component={Authentication} />
                    <PrivateRoute authed={authed} path='/profile' component={Profile} />
                    <PrivateRoute authed={authed} path='/home' component={Profile} />
                </div>
            </BrowserRouter>
        );
    }
}

export default Router;