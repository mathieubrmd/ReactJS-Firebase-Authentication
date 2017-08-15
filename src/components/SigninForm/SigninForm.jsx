import React, { Component } from 'react';
import { Button, Form, Header, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { signinEmailChanged, signinPasswordChanged, signinUser } from '../../actions';

class SigninForm extends Component {
  onEmailChange(event, data) {
    this.props.signinEmailChanged(data.value);
  }

  onPasswordChange(event, data) {
    this.props.signinPasswordChanged(data.value);
  }

  /* Handle the click event and signin the user with email/password */
  onButtonClick() {
    const { email, password } = this.props;

    this.props.signinUser({ email, password });
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
    const { email, password, loading, size } = this.props;

    return (
      <Form
        size={size}
        loading={loading}
      >
        <Header as="h1">Sign in</Header>

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
        <Button
          onClick={this.onButtonClick}
          type="submit"
          size={this.props.size}
          primary
        >
                    Sign in
        </Button>
      </Form>
    );
  }
}

const mapStateToProps = ({ signin }) => {
  const { email, password, error, loading } = signin;

  return { email, password, error, loading };
};

export default connect(mapStateToProps, {
  signinEmailChanged,
  signinPasswordChanged,
  signinUser })(SigninForm);

SigninForm.PropTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool,
  size: PropTypes.string,
  signinEmailChanged: PropTypes.func,
  signinPasswordChanged: PropTypes.func,
  signinUser: PropTypes.func,
};
