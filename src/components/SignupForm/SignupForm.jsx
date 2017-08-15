import React, { Component } from 'react';
import { Message, Button, Form, Header } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  signupEmailChanged,
  signupPasswordChanged,
  signupConfirmPasswordChanged,
  signupUser,
} from '../../actions';

class SignupForm extends Component {
  onEmailChange(event, data) {
    this.props.signupEmailChanged(data.value);
  }

  onPasswordChange(event, data) {
    this.props.signupPasswordChanged(data.value);
  }

  onConfirmPasswordChange(event, data) {
    this.props.signupConfirmPasswordChanged(data.value);
  }

  /* Handle the click event and signin the user with email/password */
  onButtonClick() {
    const { email, password, confirmPassword } = this.props;

    this.props.signupUser({ email, password, confirmPassword });
  }

  /* If the user failed to signin, we display the error message that we received from the server */
  renderErrorMessage() {
    const { error } = this.props;

    if (error !== '') {
      return (
        <Message
          visible
          error
          size="small"
        >
          {error}
        </Message>
      );
    }

    return undefined;
  }

  render() {
    const { email, password, confirmPassword, loading, size } = this.props;

    return (
      <Form
        size={size}
        loading={loading}
      >
        <Header as="h1">Sign up</Header>
        {this.renderErrorMessage()}
        <Form.Input
          label="Email"
          type="email"
          placeholder="foo@bar.com"
          value={email}
          onChange={this.onEmailChange}
        />
        <Form.Input
          label="Password"
          type="password"
          placeholder="password"
          value={password}
          onChange={this.onPasswordChange}
        />
        <Form.Input
          label="Confirm Password"
          type="password"
          placeholder="please confirm password"
          value={confirmPassword}
          onChange={this.onConfirmPasswordChange}
        />

        <Button
          onClick={this.onButtonClick}
          type="submit"
          size={this.props.size}
          secondary
        >
            Sign up
        </Button>
      </Form>
    );
  }
}

SignupForm.PropTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  confirmPassword: PropTypes.string.isRequired,
  error: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  size: PropTypes.string.isRequired,
  signupEmailChanged: PropTypes.func.isRequired,
  signupPasswordChanged: PropTypes.func.isRequired,
  signupUser: PropTypes.func.isRequired,
};

const mapStateToProps = ({ signup }) => {
  const { email, password, confirmPassword, error, loading } = signup;

  return { email, password, confirmPassword, error, loading };
};

export default connect(mapStateToProps, {
  signupEmailChanged,
  signupPasswordChanged,
  signupConfirmPasswordChanged,
  signupUser,
})(SignupForm);
