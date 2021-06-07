import React, { Component } from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import Main from './Main'
import SignIn from './Signin'
import store from '../store'
import SignUp from './SignUp'
import Nav from './Nav'
import { loadUser } from '../actions/auth'
import PrivateRoute from './PrivateRoute'


class App extends Component {
    componentDidMount() {
        store.dispatch(loadUser())
    }
    
    render () {
        return (
        <Provider store={store}>
            
            <Router>
            <div>
                <Nav />
                <div id="appDiv">
                <Switch>
                    <PrivateRoute exact path="/" component={Main} />
                    <Route exact path="/signup" component={SignUp} />
                    <Route exact path="/signin" component={SignIn} />
                </Switch>
                </div>
            </div>
            </Router>
        </Provider>
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))