import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { addPosition } from '../actions/positions'
import { 
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Button,
    TextField,
    Grid,
    Box,
    Typography,
    Container, } from '@material-ui/core'

export class NewPosition extends Component {
    static propTypes = {
        addPosition: PropTypes.func.isRequired
    }

    state = {
        symbol: "",
        qty: "",
        price: ""
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value })

    onSubmit = (e) => {
        e.preventDefault();
        const { symbol, qty, purchase_price } = this.state
        const newPostion = { symbol, qty, purchase_price }
        this.props.addPosition(newPostion)
        this.setState({
            symbol: "",
            qty: "",
            purchase_price: ""
        })
        window.location.reload()
    }
    render() {
        const { symbol, qty, purchase_price } = this.state
        return (
            <TableContainer component={Paper}>
                <form onSubmit={this.onSubmit} noValidate>
                    <Table>
                        <TableBody>
                            <TableRow>
                                <TableCell>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="symbol"
                                        label="symbol"
                                        name="symbol"
                                        onChange={this.onChange}
                                        value={symbol}
                                        />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="qty"
                                        label="qty"
                                        name="qty"
                                        onChange={this.onChange}
                                        value={qty}
                                        />
                                </TableCell>
                                <TableCell>
                                    <TextField
                                        variant="outlined"
                                        required
                                        fullWidth
                                        id="purchase_price"
                                        label="purchase price"
                                        name="purchase_price"
                                        onChange={this.onChange}
                                        value={purchase_price}
                                        />
                                </TableCell>
                                <TableCell>
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        color="primary"
                                        >
                                    Create
                                    </Button>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </form>
            </TableContainer>
        )
    }
}

export default connect(null, { addPosition })(NewPosition)