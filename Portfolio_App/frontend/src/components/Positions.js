import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { getPositions, deletePosition, getHistoric } from '../actions/positions'
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button } from '@material-ui/core'
import ShowChart from '@material-ui/icons/ShowChart';
import DeleteForever from '@material-ui/icons/DeleteForever'

export class Positions extends Component {
    static propTypes = {
        positions: PropTypes.array.isRequired,
        selected: PropTypes.string.isRequired,
        getPositions: PropTypes.func.isRequired,
        deletePosition: PropTypes.func.isRequired,
        getHistoric: PropTypes.func.isRequired,
    }
    componentDidMount() {
        this.props.getPositions()
    }
    handleChartClick = (e) => {
        e.preventDefault()
        console.log(e.target.id)
        this.props.selected = e.target.id
    }
    render() {
        return(
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Delete</TableCell>
                            <TableCell>Plot</TableCell>
                            <TableCell>Symbol</TableCell>
                            <TableCell>Company</TableCell>
                            <TableCell>Shares</TableCell>
                            <TableCell>Purchase Price</TableCell>
                            <TableCell>Cost Basis</TableCell>
                            <TableCell>Current Price</TableCell>
                            <TableCell>Current Value</TableCell>
                            <TableCell>Profit/Loss</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.props.positions.map((position) => (
                            <TableRow key={position.id}>
                                <TableCell>
                                    <Button onClick={this.props.deletePosition.bind(this, position.id)}>
                                        <DeleteForever></DeleteForever>
                                    </Button>
                                </TableCell>
                                <TableCell id='1'>
                                    <Button id='1' onClick={this.handleChartClick}>
                                        <ShowChart id='1'></ShowChart>
                                    </Button>
                                </TableCell>
                                <TableCell>{position.symbol}</TableCell>
                                <TableCell>{position.company}</TableCell>
                                <TableCell>{position.qty}</TableCell>
                                <TableCell>{position.purchase_price}</TableCell>
                                <TableCell>{position.cost_basis}</TableCell>
                                <TableCell>{position.current_price}</TableCell>
                                <TableCell>{position.current_value}</TableCell>
                                <TableCell>{position.profit_loss}</TableCell>
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
export default connect(mapStateToProps, { getPositions, deletePosition, getHistoric })(Positions)