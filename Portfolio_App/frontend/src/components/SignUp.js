import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signup } from '../actions/auth'
import { createMessage } from '../actions/messages';


export class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    password2: '',
  }

  static propTypes = {
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  }
  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password, password2 } = this.state;
    if (password !== password2) {
      this.props.createMessage({ passwordNotMatch: 'Passwords do not match' });
    } else {
      const newUser = {
        username,
        password,
        email,
      };
      this.props.signup(newUser);
    }
  };

  render() {
    
}
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { register, createMessage })(Register);
