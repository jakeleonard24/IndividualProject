import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactQuill from 'react-quill';
import theme from 'react-quill/dist/quill.snow.css'
import './Blog.css';
import axios from 'axios';

class Blog extends Component {
    constructor(){
        super()
        
        this.state = {
            userId:'',
            username:'',
            image: '',
            title: '',
            blog: '',
            date: '',
            addPostClicked: false,
            blogs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.addBlogPost = this.addBlogPost.bind(this)
    }

    componentDidMount(){
        axios.get('http://localhost:3333/api/blogs').then(response => {
            this.setState({
                blogs: response.data
            })
        })
    }

    handleChange(value) {
        this.setState({blog: value})
    }

    handleClick(){
        this.setState({
            addPostClicked: !this.state.addPostClicked
        })
        
    }

    addBlogPost(){
        axios.post('http://localhost:3333/api/newblog', {
            userId: this.state.userId,
            title: this.state.title,
            blog: this.state.blog,
            date: this.state.date
        })
    }

    render() {
        console.log(this.state)

        // this.state.blogs.map((blog) => {

        // })
        return (
            <div>
               <div className='header'>
                <p>BlogPage</p>
                <Link to="/storefront">
                <p>Storefront</p>
                </Link>
                <a href={'http://localhost:3333/auth'}><button>Login / Sign Up</button></a>
                <button onClick={this.handleClick} >Add Post</button>

               </div>
               
                <div className={this.state.addPostClicked ? 'mainBody' : 'noAddPost'}>
                    <div className={this.state.addPostClicked ? 'viewAddPost' : 'noAddPost'}>
                        <input className='blogTitleInput' onChange={(e) => {this.setState({title:e.target.value})}} placeholder='Title of Post'/>
                        
                     <ReactQuill className='textEditor' theme="snow" value={this.state.blog}
                     onChange={this.handleChange} />

                     
                    </div>
                    <div className={this.state.addPostClicked ? 'bottomEditor' : 'noAddPost'}>
                        <button onClick={this.handleClick}>Submit Post</button>
                     </div>
                </div>
            </div>
        );
    }
}

export default Blog;