import React, { Component } from 'react';
import firebase from 'firebase';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Authentication from './components/Pages/Authentication';

import './App.css';

class App extends Component {

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

  render() {

    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Authentication />
      </Provider>
    );
  }
}

export default App;
