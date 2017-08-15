import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import firebase from 'firebase';

class Profile extends Component {
  render() {
    return (
      <div>
        <h1>Profile</h1>
        <Button color="red" onClick={() => firebase.auth().signOut()}>Log Out</Button>
      </div>
    );
  }
}

export default Profile;
