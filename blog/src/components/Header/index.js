import React, { Component } from 'react'
import './style.css'

export class Header extends Component {
    render() {
        return (
            <header className="header">
                <nav className="headerNav">
                    <a href="#">Home</a>
                    <a href="#">About Us</a>
                    <a href="#">Contact Us</a>
                </nav>
                <div>
                    SocialMedia Links
                </div>
            </header>
        )
    }
}

export default Header
