import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signup } from '../actions/auth'
import { createMessage } from '../actions/messages';
import 
{ Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container, 
}from '@material-ui/core';



export class SignUp extends Component {
  state = {
    username: '',
    email: '',
    password: '',
  }

  static propTypes = {
    signup: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { username, email, password } = this.state;
    const newUser = {
      username,
      password,
      email,
    };
    console.log('this is working')
    this.props.signup(newUser);
    
  };
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />
    }
    const { username, email, password } = this.state;
    return( 
      
    <Container component="main" maxWidth="xs">
    
    <div>
      <Typography component="h1" variant="h5">
        Sign up
      </Typography>
      <form onsubmit={this.onSubmit} noValidate>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="Username"
              name="username"
              onChange={this.onChange}
              value={username}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              onChange={this.onChange}
              value={email}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              onChange={this.onChange}
              value={password}
            />
          </Grid>
          
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          onClick={this.onSubmit}
        >
          Sign Up
        </Button>
        
      </form>
    </div>
    <Box mt={5}>
      
    </Box>
  </Container>
    ) 
    
  }
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup, createMessage })(SignUp);
