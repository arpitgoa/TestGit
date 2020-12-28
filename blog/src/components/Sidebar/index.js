import React, {useState,useEffect} from 'react'
import Card from '../UI/Card';
import './style.css';
import blogPost from '../../data/blog.json';
import { NavLink } from 'react-router-dom';

const Sidebar = (props) => {


    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const posts = blogPost.data;
        setPosts(posts);
    }, [posts]);


    return (
        <div className="sidebarContainer">
            <Card style={{marginBottom:'20px'}}>
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Arpit Jhanwar, I am a Data engineer specialization in backend </p>
                </div>
            </Card>

            <Card style={{marginBottom:'20px'}}>
                <div className="cardHeader">
                    <span>Social network</span>
                </div>
            </Card>

            <Card style={{marginBottom:'20px'}}>
                <div className="cardHeader">
                    <span>Recent Posts</span>
                </div>
                <div className="recentPosts">
                    {
                        posts.map(post => {
                            return (
                                <NavLink to={`/post/${post.id}`}>
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

export default Sidebar
