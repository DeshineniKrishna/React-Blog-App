import React, { Component } from 'react'
import './style.css'
import Card from '../Card'
import Logo from '../Logo'
import Navbar from '../Navbar'

export class Hero extends Component {
    render() {
        return (
            <div>
                <Card>
                    <div style={{padding:'50px 0'}}>
                        <Logo/>
                    </div>
                    <Navbar/>
                </Card>
            </div>
        )
    }
}

export default Hero
