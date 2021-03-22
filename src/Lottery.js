import React, { Component } from 'react'
import Ball from './Ball';
import './Lottery.css'

class Lottery extends Component {
    static defaultProps = {
        numBalls: 6,
        title: 'Lotto',
        maxNum: 40

    }
    constructor(props) {
        super(props);
        this.state = {
            nums: [...Array(this.props.numBalls)] // or: [Array.from({length:this.props.numBalls})]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    generate() {
        this.setState(curState => ({
            nums: curState.nums.map(num =>
                Math.floor(Math.random() * this.props.maxNum + 1))
        }))

    }

    handleClick() {
        this.generate();
    }

    render() {
        return (
            <div className="Lottery">
                <h1 className="Lottery-title">{this.props.title}</h1>
                <div>
                    {this.state.nums.map(num => {
                        return <Ball num={num} />
                    })}
                </div>


                <button onClick={this.handleClick} className="Lottery-button">Generate</button>
            </div>

        )
    }
}

export default Lottery;