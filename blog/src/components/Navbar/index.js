import React, { Component } from 'react'
import './style.css'
import searchicon from '../../images/searchicon.png'
import {Link} from 'react-router-dom'

export class Navbar extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             search : false,
        }
    }
    
    submitSearch = () =>{
        alert("working..");
        // this.setState({
        //     search : false,
        // });
    }

    openSearch = () =>{
        this.setState({
            search : true,
        });
    }

    render() {

        const searchClass = this.state.search ? "searchbar active" : "searchbar" ;

        return (
            <div className="navbar">
                <ul className="navbarmenu">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/aboutme">AboutMe</Link></li>
                    <li><Link to="/post/:postid">Posts</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <div className="search">
                    <form onSubmit={this.submitSearch}>
                        <input text="text" className={searchClass} placeholder="Search.."/>
                        <img onClick={this.openSearch} className="imgicon" src={searchicon} alt="search"/>
                    </form>
                </div>
            </div>
        )
    }
}

export default Navbar
