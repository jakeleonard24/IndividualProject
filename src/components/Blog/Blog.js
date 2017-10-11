import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import ReactQuill from 'react-quill';
import theme from 'react-quill/dist/quill.snow.css';
import './Blog2.css';
import axios from 'axios';
import Modal from 'react-modal';
import Blogs from '../newcomponent';
import Footer from '../Footer/Footer.js';
import Navbar from '../Navbar/Navbar';



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
            modal2IsOpen: false,
            blogs: [],
            isOpened: false,
            blogOpener:[],
            blogId: 0,
            comment: '',
            comments: [],
            aboutMe: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
        this.addBlogPost = this.addBlogPost.bind(this)
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.openModal = this.openModal.bind(this);
        this.updateTitle = this.updateTitle.bind(this);
        this.changeHeight = this.changeHeight.bind(this)
        this.setDate = this.setDate.bind(this)
        this.getUserBlogs = this.getUserBlogs.bind(this);
        this.addComment = this.addComment.bind(this);
        this.updateComment = this.updateComment.bind(this);
        this.openModal2 = this.openModal2.bind(this);
        this.afterOpenModal2 = this.afterOpenModal2.bind(this);
        this.closeModal2 = this.closeModal2.bind(this);
        this.updateAboutMe = this.updateAboutMe.bind(this);
        this.updateUsername = this.updateUsername.bind(this);
        this.updateEmail = this.updateEmail.bind(this);
        this.updateImage = this.updateImage.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        
        
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
                image: response.data.image

            })
        })

        axios.get('/api/comments').then(response => {
            console.log('comments', response)
            this.setState({
                comments: response.data
            })
        })
    }

    getUserBlogs(){
        axios.get('/api/myblogs').then(response => {
            this.setState({
                blogs: response.data,
                blogOpener: response.data.map((elem) =>{
                    return false
                })
                
            })
            
        })
    }
   

    logout(){
        axios.get('/auth/logout').then(response => {
            console.log('worked')
        })
    }

    updateAboutMe(input){
        this.setState({aboutMe: input})
    }

    updateUsername(input){
        this.setState({username: input})
    }

    updateEmail(input){
        this.setState({email: input})
    }

    uploadSuccess({data}){
        this.setState({
            image: data.file
        })
    }



   updateImage({file}){
       console.log('file', file)
        let data = new FormData();
        data.append('key', 'value')
        data.append('file', file);
        console.log(data, 'data')
       

        axios.post('/profile', data)
        .then(response => this.uploadSuccess(response))
        .catch(error => console.log(error))
    }
    handleFileUpload(event){
       
        console.log(event.target.files)
        console.log(this.state)
        const file = event.target.files[0]
        console.log('file', file)
        
        this.updateImage({file})
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

    updateComment(value){
        this.setState({
            comment: value
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

    setDate(){
        this.setState({
            date: new Date()
        })
    }

    openModal() {
        
            this.setState({modalIsOpen: true});
        
      }

      openModal2(){
          this.setState({modal2IsOpen: true})
      }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#5BC3EB';
      }

      afterOpenModal2(){
        this.subtitle.style.color = '#5BC3EB'
      }

      closeModal() {
        this.setState({modalIsOpen: false});
      }

      closeModal2(){
          this.setState({modal2IsOpen: false});
      }

    addBlogPost(){
        axios.post('/api/newblog', {
            userId: this.state.userId,
            title: this.state.title,
            blog: this.state.blog,
            date: this.state.date,
            image: this.state.image,
            username: this.state.username
        })
    }

    addComment(){
        if(this.state.comment.length > 0){
        axios.post('/api/newcomment', {
            username: this.state.username,
            email: this.state.email,
            blogId: this.state.blogId,
            comment: this.state.comment,
            image: this.state.image
        })

    }
    this.updateComment('')
    }

    style = {
        maxHeight: '1500px',
        backgroundColor: 'rgb(255, 255, 255)',
        border: '3px solid #F5F3EE',
        overflow: 'auto'
    }

    style2 = {
        maxHeight: '400px'
    }

    commentStyle1= {
        display: 'flex'
    }

    commentStyle2 = {
        display: 'none',
        backgroundColor: '#F5F3EE'
    }


   
    render() {
        
        console.log('state', this.state)

        let comments = this.state.comments.map((comment, i) => {
            return(
                <div>
                    <h3>{comment.username ? comment.username : "Guest"}</h3>
                    <p>{comment.comment}</p>
                </div>
            )
        })

       let blogs = this.state.blogs.map((blog, i) => {
            return(
                
                
                <div key={i} className='blogAllContent'>
                    <li onClick={()=> {this.changeHeight(i)}} style={this.state.blogOpener[i] ? this.style : this.style2} >

                         <div className='blogUserContainer'>
                              <img className='blogImage' src={blog.image ? blog.image : 'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png'} />
                        <p>{blog.username}</p>
                             </div>
                    
                              <div className="blogTitle">
                         <h3>{blog.title}</h3>
                      <p dangerouslySetInnerHTML={{__html: blog.blog}}></p> 
                    </div>
                    </li>

                <div style={this.state.blogOpener[i] ? this.commentStyle1 : this.commentStyle2} className='commentSection'>
                    {this.state.comments.map((comment, i) => {
                        if(comment.blognumber === blog.blogid){
                            return(
                                <div className="userComment">
                                <img className='blogImage' src={comment.image ? comment.image : 'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png'} />
                                    <h3 className='commentUsername'>{comment.username ? comment.username + ': ' : "Guest: "}</h3>
                                   
                                    <p>{' ' + comment.comment}</p>
                                    
                                </div>
                            )
                        }
                    })}
                     <div className='addCommentBox'>
                            <textarea value={this.state.comment} onClick={()=>{this.setState({blogId: blog.blogid})}} onChange={(e) => {this.updateComment(e.target.value)}} className='commentInput' placeholder='Write a comment'/>
                            <button className='addCommentButton' onClick={this.addComment}>Add Comment</button>
                     </div>
                 </div>
                </div>
              
                 
            )
        })

        return (
            <div>
            <Navbar userId={this.state.userId} username={this.state.username} />
            <div className='blogBackground'>
               <div className='blogHeader'>
                  <img className='blogHeaderImage' src='http://www.iddad.org/wp-content/uploads/2016/07/Submit-Your-Story-Header.png'/>
                   </div>

            <div className='blogBody'>
            <div className="blogParent">
                <div className="blogMain">
                    <div className='blogListContainer'>
                        {blogs}
                    </div>
                    
                    </div>
                <div className="blogRight">
                    <div className='blogRightUserBox'>
                        
                        

                        <div className='blogRightImageBox'>
                            <img onClick={this.openModal2} className='blogRightImage' src={this.state.image ? this.state.image : 'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png'} />
                        </div>

                    <div className='blogRightUserInfo'>
                        <div>
                            User Name: {this.state.username}
                        </div>
                        <div>
                            <br/>
                            Email: {this.state.email}

                        </div>
                    </div>
                        <div className='addPostBox'>
                         <button className='blogRightAddPostButton' onClick={this.openModal}>Add Post</button>
                        
                        <div>
                            <button onClick={this.getUserBlogs} className='blogRightAddPostButton'>My Posts</button>
                        </div>
                        </div>
                    </div>

                    <div className='blogRightBox'>
                       
                    </div>
                </div>
                
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
              
                <button className="bottomEditor" onClick={this.closeModal} onClick={this.setDate} onClick={this.addBlogPost}>Submit</button>
          </form> 
        </Modal>
        <Modal
            
            isOpen={this.state.modal2IsOpen}
            onAfterOpen={this.afterOpenModal2}
            onRequestClose={this.closeModal2}
            style={customStyles}
            contentLabel="Example Modal"
            aboutMe={this.state.aboutMe}
            updateAboutMe={this.updateAboutMe}
            username={this.state.username}
            email={this.state.email}
            image={this.state.image}
            updateUsername={this.updateUsername}
            updateEmail={this.updateEmail}
            updateImage={this.updateImage}
            >
            <div className='editProfileBox'>
                <div>
                <h2 ref={subtitle => this.subtitle = subtitle}>Edit Profile</h2>
                </div>

                <div className='editProfileImageBox'>
                    <img src={this.state.image ? this.state.image : 'http://vvcexpl.com/wordpress/wp-content/uploads/2013/09/profile-default-male.png'} />
                    <div className='fileInput'>
                    <input  type='file' name='userImage' onChange={this.handleFileUpload}/>
                    </div>
                </div>

                <div>
                    <p>Username:</p><input placeholder={this.state.username}/>
                </div>

                <div>
                    <p>Email:</p><input placeholder={this.state.email} />
                </div>

                <div className='editProfileTextAreaBox' >
                    <p>About Me:</p><textarea placeholder='Tell Us About You...' className='editProfileTextArea'></textarea>
                </div>
            </div>

            </Modal>


                <Footer />
            </div>
            </div>
        );
    }
}

export default Blog;