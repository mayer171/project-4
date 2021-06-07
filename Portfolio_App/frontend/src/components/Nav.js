import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { logout } from '../actions/auth'
import { createMessage } from '../actions/messages'

import 
{ Typography,
  AppBar,
  Toolbar,
  Button,
  withStyles
}from '@material-ui/core';
import { compose } from 'redux'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  links: {
    display: 'flex',
    flexDirection: 'row',
  },
  welcome: {
    display: 'flex',
    flexDirection: 'Column'
  }
})

export class Nav extends Component {
    static PropTypes = {
      auth: PropTypes.object.isRequired,
      logout: PropTypes.func.isRequired,
    }
    render() {
      const { classes } = this.props
      const { isAuthenticated, user } = this.props.auth
      const authorized = (
        <div className={classes.welcome}>
          <Typography>
            {user ? `Welcome ${user.username}!` : ''}
          </Typography>
          <Button onClick={this.props.logout}>
            Logout
          </Button>
        </div>
      );
  
      const unauthorized = (
        <div className={classes.links}>
          <Link to="/signup" className="nav-link">
            Sign Up
          </Link>    
          <Link to="/signin" className="nav-link">
            Sign In
          </Link>
        </div>
        
      );
    
    return (  
      <div>
        <AppBar  position="fixed">
          <Toolbar className={classes.root}>
            <Typography variant="h5">
              Portfolio App
            </Typography>
            {isAuthenticated ? authorized : unauthorized}
          </Toolbar>
        </AppBar>
      </div>
  ) 
}
}

const mapStateToProps = (state) => ({
  auth: state.auth
})

export default compose(withStyles(styles, {withTheme: true}), connect(mapStateToProps, { logout }))(Nav)

