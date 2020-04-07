import React, { useState, useEffect } from 'react'
import './style.css'
import Card from '../Card'
import blogPosts from '../../data/blog.json'
import { NavLink } from 'react-router-dom';

function SideBar(props) { 

    const[posts,setposts] = useState([]);

    useEffect(() => {
       const posts = blogPosts.data;
       setposts(posts);
    },[posts]);

    return (
        <div className="sidebarContainer">
            <Card style={{marginBottom :"20px", padding :"20px", boxSizing: "border-box"}}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileimage">
                    <img src="data:image/jpeg;base64,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" alt="myimage" />                            
                </div>
                <div className="cardBody">
                    <p className="bio">My name is VenkataSaiKrishna Deshineni. I'm learning ReactJS. Have a nice day :)</p>
                </div>
            </Card>

            <Card style={{marginBottom :"20px", padding :"20px", boxSizing: "border-box"}}>
                <div className="cardHeader">
                    <span>Social Network</span>
                </div>
                <div className="socialmedia">
                    <a href="#" className="fa fa-facebook"></a>
                    <a href="#" className="fa fa-twitter"></a>
                    <a href="#" className="fa fa-google"></a>
                    <a href="#" className="fa fa-linkedin"></a>
                    <a href="#" className="fa fa-instagram"></a>
                </div>
            </Card>

            <Card style={{marginBottom :"20px", padding :"20px", boxSizing: "border-box"}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.slice(0,4).map(post =>{
                            return (
                                <NavLink key={post.id} to={`/post/${post.id}`}>
                                    <div className="recentPost">
                                        <h3>{post.blogTitle}</h3>
                                        <span>{post.postedOn}</span>
                                    </div>
                                </NavLink>
                            )
                        })
                    }
                </div>
            </Card>
        </div>                
    )
}

export default SideBar
