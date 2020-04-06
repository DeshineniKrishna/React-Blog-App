import React, { Component } from 'react'
import './style.css'
import BlogPost from '../BlogPost'
import SideBar from '../SideBar'

export class Post extends Component {

    constructor(props) {
        super(props)
    
    }
    
    render() {
        return (
           <section className="container">
                <BlogPost {...this.props}/>
                <SideBar/>
           </section>        
        )
    }
}


export default Post
