import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { signin } from '../actions/auth'
import 
{ Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container, 
}from '@material-ui/core';

export class SignIn extends Component {
  state = {
    username: '',
    password: '',
  }

  static propTypes = {
    signin: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.props.signin(this.state.username, this.state.password)
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  render() {
    if (this.props.isAuthenticated) {
      return <Redirect to="/" />;
    }
    const { username, password } = this.state;
    return( 
      
    <Container component="main" maxWidth="xs">
    
    <div>
      <Typography component="h1" variant="h5">
        Sign In
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
          Sign In
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

export default connect(mapStateToProps, { signin })(SignIn);
