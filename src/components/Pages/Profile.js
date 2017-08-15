import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { FadeInLeft, FadeInRight, RubberBand } from 'animate-css-styled-components';
import firebase from 'firebase';

class Profile extends Component {
    render() {
        return <Button color='red' onClick={() => firebase.auth().signOut()}>Log Out</Button>;
    }
}

export default Profile;