import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPostions } from '../actions/positions'

export class Positions extends Component {
    static propTypes = {
        postions: PropTypes.array.isRequired,
        getPostions: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.getPostions()
    }
    render() {
        return(
            <div>
                <h1>Positions</h1>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    positions: state.positions.positions
})
export default connect(mapStateToProps, { getPostions })(Positions)