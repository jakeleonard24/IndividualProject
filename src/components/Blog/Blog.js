import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactQuill from 'react-quill';
import theme from 'react-quill/dist/quill.snow.css'
import './Blog.css';
import axios from 'axios';
import Modal from 'react-modal';
import Blogs from '../newcomponent'


const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
  };

class Blog extends Component {
    constructor(){
        super()
        
        this.state = {
            userId:'',
            username:'',
            email: '',
            image: '',
            title: '',
            blog: '',
            date: '',
            modalIsOpen: false,
            blogs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.addBlogPost = this.addBlogPost.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        
    }


    componentDidMount(){
        axios.get('/api/blogs').then(response => {
            this.setState({
                blogs: response.data
            })
        })

        axios.get('/api/user').then(response =>{
            console.log('currentUser',response)
            this.setState({
                userId: response.data.id,
                username: response.data.username,
                email: response.data.email

            })
        })
    }

   

    logout(){
        axios.get('/auth/logout').then(response => {
            console.log('worked')
        })
    }

    handleChange(value) {
        console.log('handle change', value)
        this.setState({blog: value})
    }

    handleClick(){
        this.setState({
            modalIsOpen: !this.state.modalIsOpen
        })
        
    }

    updateTitle(value){
        this.setState({
            title: value
        })
    }

    openModal() {
        this.setState({modalIsOpen: true});
      }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = 'blue';
      }

      closeModal() {
        this.setState({modalIsOpen: false});
      }

    addBlogPost(){
        axios.post('/api/newblog', {
            userId: this.state.userId,
            title: this.state.title,
            blog: this.state.blog,
            date: this.state.date
        })
    }

    render() {
        console.log('state', this.state)

       let blogs = this.state.blogs.map((blog) => {
            return(
                <div key={blog.blogId} className='blogPost'>
                    <div className='imageBox'>
                        <img className='image' src={'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png'} />
                        <p>{blog.username}</p>
                    </div>

                    <div className='blogTextBox'>
                        <h3>{blog.title}</h3>
                        <div className='actualBlogText'>
                            <div dangerouslySetInnerHTML={{__html: blog.blog}}></div> 
                        </div>
                        
                    </div>
                </div>
            )
        })

        return (
            <div>
               <div className='header'>
                <p>BlogPage</p>
                <Link to="/storefront">
                <p>Storefront</p>
                </Link>
                <a href={'http://localhost:3333/auth'}><button>Login / Sign Up</button></a>
                <button onClick={this.openModal} >Add Post</button>
                <button onClick={() => {this.hitUser()}}>Hit user</button>
                <button onClick={() => {this.logout()}}>logout</button>

               </div>

            <div className="mainBody">
               <div className='blogsContainer'>
                   {blogs}
                   {/* <Blogs /> */}
               </div>
            </div>
               <Modal 
                    
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                    
               >
               <h2 ref={subtitle => this.subtitle = subtitle}>Add Post</h2>
               <input onChange={(e) => {this.updateTitle(e.target.value)}} className='blogTitleInput' placeholder='Post Title' />
                
            <form>
            <ReactQuill className='textEditor' theme="snow" value={this.state.blog}
                     onChange={this.handleChange} />
              
                <button className="bottomEditor" onClick={this.closeModal} onClick={this.addBlogPost}>Submit</button>
          </form> 
        </Modal>
                
                
                
                
                {/* <div className={this.state.addPostClicked ? 'mainBody' : 'noAddPost'}>
                    <div className={this.state.addPostClicked ? 'viewAddPost' : 'noAddPost'}>
                        <input className='blogTitleInput' onChange={(e) => {this.setState({title:e.target.value})}} placeholder='Title of Post'/>
                        
                     <ReactQuill className='textEditor' theme="snow" value={this.state.blog}
                     onChange={this.handleChange} />

                     
                    </div>
                    <div className={this.state.addPostClicked ? 'bottomEditor' : 'noAddPost'}>
                        <button onClick={this.handleClick}>Submit Post</button>
                     </div> */}
                {/* </div> */}
            </div>
        );
    }
}

export default Blog;