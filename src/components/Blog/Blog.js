import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactQuill from 'react-quill';
import theme from 'react-quill/dist/quill.snow.css'
import './Blog.css';


class Blog extends Component {
    constructor(){
        super()
        
        this.state = {
            username:'',
            email: '',
            image: '',
            title: '',
            blog: '',
            date: '',
            addPostClicked: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }

    handleChange(value) {
        this.setState({blog: value})
    }

    handleClick(){
        this.setState({
            addPostClicked: !this.state.addPostClicked
        })
        
    }

    render() {
        return (
            <div>
               <div className='header'>
                <p>BlogPage</p>
                <Link to="/storefront">
                <p>Storefront</p>
                </Link>
                <button onClick={this.handleClick} >Add Post</button>

               </div>
               
                <div className='mainBody'>
                    <div className={this.state.addPostClicked ? 'viewAddPost' : 'noAddPost'}>
                        <input className='blogTitleInput' onChange={(e) => {this.setState({title:e.target.value})}} placeholder='Title of Post'/>
                        
                     <ReactQuill className='textEditor' theme="snow" value={this.state.blog}
                     onChange={this.handleChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Blog;