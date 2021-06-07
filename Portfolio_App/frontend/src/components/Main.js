import React from 'react'
import Chart from './Chart'
import Positions from './Positions'
import NewPosition from './NewPosition'

export default function Main() {
    return (
        <div>
            <NewPosition />
            <Positions />
        </div>
    )
}