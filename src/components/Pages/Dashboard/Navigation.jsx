import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Navigation extends Component {
  render() {
    return this.props.visible === false ? null : (
      <div>
        MENU LOL
      </div>
    );
  }
}

Navigation.PropTypes = {
  visible: PropTypes.bool,
};

export default Navigation;
