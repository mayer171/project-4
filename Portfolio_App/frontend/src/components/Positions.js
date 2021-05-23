import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPositions } from '../actions/positions'
import { withStyles, makeStyles } from '@material-ui/core/styles'
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper } from '@material-ui/core'

export class Positions extends Component {
    static propTypes = {
        positions: PropTypes.array.isRequired,
        getPositions: PropTypes.func.isRequired
    }
    componentDidMount() {
        this.props.getPositions()
    }
    render() {
        return(
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Symbol</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.positions.map((position) => (
                            <TableRow key={position.id}>
                                <TableCell>{position.id}</TableCell>
                                <TableCell>{position.symbol}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        )
    }
}

const mapStateToProps = state => ({
    positions: state.positions.positions
})
export default connect(mapStateToProps, { getPositions })(Positions)