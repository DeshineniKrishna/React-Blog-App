import React, { Component } from 'react'
import './style.css' 

export class Card extends Component {
    render() {
        return (
            <div className="card" {...this.props}>
                {this.props.children}
            </div>
        )
    }
}

export default Card

