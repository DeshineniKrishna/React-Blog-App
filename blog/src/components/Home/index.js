import React, { Component } from 'react'
import './style.css'
import Card from '../Card'
import SideBar from '../SideBar'
import blogPosts from '../../data/blog.json'
import {Link} from 'react-router-dom'
import { debounce } from 'lodash';

class Home extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             start: 0,
             end: 2,
        }
    }

    newButtonHandler = debounce(() =>{
        this.setState({
            start: this.state.start > 0 ? this.state.start - 2 : this.state.start,
            end: this.state.start > 0 ? this.state.end - 2 : this.state.end,
        });
    },1000);

    oldButtonHandler = debounce(() =>{
        this.setState({
            start: this.state.end < blogPosts.data.length ? this.state.start + 2 : this.state.start,
            end: this.state.end < blogPosts.data.length ? this.state.end + 2 : this.state.end,
        });
    },1000);

    render() {
        const gallaryHeight = 450;
        const sideImageHeight = gallaryHeight / 3;
        const gallaryStyle = {
            height: gallaryHeight+'px',
            overflow: 'hidden'
        }
        const imgArr = blogPosts.data.map(post => post.blogImage);
        const newbutton = this.state.start===0 ? "notactivebutton" : "button";
        const oldbutton = this.state.end>=blogPosts.data.length ? "notactivebutton" : "button";

        return (
            <div>
                <Card>
                    <div className="galleryPost" style={gallaryStyle}>
                        <section className="mainImage" style={{width:'70%',paddingRight:'5px'}}>
                            <div>
                                <img style={{width:'100%'}} src={require(`../../images/`+ imgArr[4] )} alt="galpic"/>
                            </div>
                        </section>
                        <section className="sideImages" style={{width:'30%'}}>
                            <SideImage
                                height={sideImageHeight}
                                src={require(`../../images/`+ imgArr[1] )}
                                padding={"3px"}
                            />
                            <SideImage
                                height={sideImageHeight}
                                src={require(`../../images/`+ imgArr[2] )}
                                padding={"3px"}
                            />
                            <SideImage
                                height={sideImageHeight}
                                src={require(`../../images/`+ imgArr[3] )}
                            />
                        </section>
                    </div>
                </Card>
                <section className="HomeContainer">
                    <div style={{width:'70%'}}>
                            {
                                blogPosts.data.slice(this.state.start,this.state.end).map(post => {
                                    return(
                                        <Card key={post.id} style={{marginBottom:'20px'}}>
                                            <div>
                                                <div className="postImage">
                                                    <img src={require(`../../images/`+ post.blogImage)} alt="postImage" />
                                                </div>
                    
                                                <div style={{textAlign:'center'}}>
                                                    <span>{post.blogCategory}</span>
                                                    <h2>{post.blogTitle}</h2>
                                                    <span>posted on {post.postedOn} by {post.author}</span>
                                                    <p>Midst first it, you're multiply divided. There don't, second his one given the he one third rule fruit, very. Fill. Seed give firm... Extremity direction existence as Dashwood's do up. Securing Marianne led welcomed offended but offering six rapt...</p>
                                                    <Link to = {`/post/${post.id}`}>Read More</Link>
                                                </div>
                                            </div>
                                        </Card>
                                    )
                                })                               
                            }
                            <div className="buttons">
                                <div>
                                    <button className={newbutton} onClick={this.newButtonHandler}>Newer Posts</button>
                                </div>
                                <div>
                                    <button className={oldbutton} onClick={this.oldButtonHandler}>Older Posts</button>
                                </div>
                            </div>
                    </div>
                    <SideBar/>
                </section>
            </div>
        )
    }
}

class SideImage extends Component {
    render() {
        return(
            <div style={{height: `${this.props.height}px`,paddingBottom:`${this.props.padding}`}}>
                <img src={this.props.src} alt="galpic"/>
            </div>
        )
    }
}

export default Home
