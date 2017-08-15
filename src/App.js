import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Loader, Dimmer } from 'semantic-ui-react';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {

  state = {
    authed: false,
    loading: true
  }

  componentDidMount () {
    this.removeListener = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({
          authed: true,
          loading: false,
        })
      } else {
        this.setState({
          authed: false,
          loading: false
        })
      }
    })
  }
  
  componentWillUnmount () {
    this.removeListener()
  }

  componentWillMount() {
    // Initialize Firebase
    const config = {
      apiKey: "AIzaSyB_O_9wguEBxNN2f6A1XSbrXnek4ebw_L0",
      authDomain: "authentication-90c74.firebaseapp.com",
      databaseURL: "https://authentication-90c74.firebaseio.com",
      projectId: "authentication-90c74",
      storageBucket: "",
      messagingSenderId: "829307440106"
    };
    firebase.initializeApp(config);
  }

  // Function that renders a loader while we check if the user is logged in.
  renderLoader() {
    return (
      <Dimmer active>
        <Loader indeterminate>Trying to log you in.</Loader>
      </Dimmer>
    );
  }

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    if (module.hot) {
      // Enable Webpack hot module replacement for reducers
      module.hot.accept('./reducers', () => {
        const nextRootReducer = require('./reducers/index');
        store.replaceReducer(nextRootReducer);
      });
    }

    // While we check if the user is logged in, we render a loader
    return this.state.loading === true ? this.renderLoader() : (
      <Provider store={store}>
        <Router authed={this.state.authed} />
      </Provider>
    );
  }
}

export default App;
