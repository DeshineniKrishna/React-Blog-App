import React, { useState, useEffect } from 'react'
import './style.css'
import Card from '../Card'
import blogPosts from '../../data/blog.json'

function BlogPost(props) { 

    const[post,setpost] = useState({
        blogImage:"",
    });
    const[postID,setpostID] = useState('');

    useEffect(() => {
       const postID = props.match.params.postid; 
       const post = blogPosts.data.find(post => post.id == postID);
       setpost(post);
       setpostID(postID);
    },[post,props.match.params.postid]);

    
    if(post.blogImage === "") return null;

    return (
        <div className="blogpostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">{post.blogCategory}</span>
                    <h1 className="postTitle">{post.blogTitle}</h1>
                    <span className="postedBy">posted on {post.postedOn} by {post.author}</span>
                </div>
                <div className="imageContainer">
                    <img src={require(`../../images/`+ post.blogImage )} alt="PostImage"/>
                </div>
                <div className="postContent">
                    <h3>{post.blogTitle}</h3>
                    <p>{post.blogText}</p>
                </div>
            </Card>
        </div>
    )
}

export default BlogPost