import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactQuill from 'react-quill';
import theme from 'react-quill/dist/quill.snow.css';
import './Blog2.css';
import axios from 'axios';
import Modal from 'react-modal';
import Blogs from '../newcomponent';
import Footer from '../Footer/Footer.js';
import {Collapse} from 'react-collapse';


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
            blogs: [],
            isOpened: false,
            blogOpener:[]
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.addBlogPost = this.addBlogPost.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.changeHeight = this.changeHeight.bind(this)
        
        
    }


    componentDidMount(){
        axios.get('/api/blogs').then(response => {
            this.setState({
                blogs: response.data,
                blogOpener: response.data.map((elem) =>{
                    return false
                })
                
            })
            
        })

        axios.get('/api/user').then(response =>{
            console.log('currentUser',response)
            this.setState({
                userId: response.data.id,
                username: response.data.username,
                email: response.data.email,
                image: response.data.email

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

    changeHeight(i){
        console.log('change height function')
        const booleanArray = this.state.blogOpener;
        booleanArray[i] = !booleanArray[i]
      this.setState({
        blogOpener: booleanArray
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

    style = {
        maxHeight: '700px',
        backgroundColor: '#F1F1D4',
        border: '3px solid white',
        overflow: 'auto'
    }

    style2 = {
        maxHeight: '250px'
    }

   
    render() {
        console.log(customStyles)
        console.log('state', this.state)

       let blogs = this.state.blogs.map((blog, i) => {
            return(
                
                <div key={i} className='blogBoxEntire'>
                <li onClick={()=> {this.changeHeight(i)}} style={this.state.blogOpener[i] ? this.style : this.style2} >

                <div className='blogUserContainer'>
                <img className='image' src={'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png'} />
                <p>{blog.username}</p>
                </div>
                    
                <div className="blogTitle">
                <h3>{blog.title}</h3>
                 <p dangerouslySetInnerHTML={{__html: blog.blog}}></p> 
                </div>
                </li>
                </div>
                 
            )
        })

        return (
            <div>
               <div className='blogHeader'>
                   <div className='blogHeaderContent'>
                   <h1>Read Our Stories</h1>
                       <h2>Share Your's</h2>
                   </div>
                   </div>


            <div className="blogParent">
                <div className="blogMain">
                    <div className='blogListContainer'>
                        {blogs}
                    </div>
                    
                    </div>
                <div className="blogRight">
                    <div className='blogRightUserBox'>
                        
                        <button className='blogRightAddPostButton' onClick={this.openModal}>Add Post</button>

                        <div>
                            <img className='image' src={this.state.image ? this.state.image : 'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png'} />
                        </div>
                        <div>
                            User Name: {this.state.username}
                            <br/>
                            Email: {this.state.email}

                        </div>
                        
                    </div>

                    <div className='blogRightBox'>
                        <a href='https://www.amazon.com/gp/product/B008A0O75G/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B008A0O75G&linkId=4c0345abccd0ff9ff3156351982e6f8c'>
                        <img className='blogImage' src='https://images-na.ssl-images-amazon.com/images/I/71ynQcBSf9L._SX522_.jpg' />
                        </a>
                    </div>
                </div>
                
            </div>


               <Modal 
                    
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={this.modalStyle}
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
                <Footer />
            </div>
        );
    }
}

export default Blog;