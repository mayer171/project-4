import React, { Component } from 'react'
import ReactDom from 'react-dom'
import Chart from './Chart'
//import SignIn from './Signin'
import SignUp from './SignUp'
import Positions from './Positions'
import { Provider } from 'react-redux'
import store from '../store'


class App extends Component {
    
    render () {
        return (
        <Provider store={store}>
            <h1>Nav Bar</h1>
            
            <Chart />
            <Positions /> 
        </Provider>
        
        )
    }
}

ReactDom.render(<App />, document.getElementById('app'))