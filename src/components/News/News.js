import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './News.css';
import Footer from '../Footer/Footer'


class News extends Component {
    constructor(){
        super()

        this.state = {
            articles: [],
            sideArticles: []
            
            
        }
       
    }

    
    

    componentDidMount(){
    axios.get('/api/news').then(response => {
            this.setState({
                
                articles: response.data.value
         })
    })

    axios.get('/api/news2').then(response => {
        this.setState({
            
            sideArticles: response.data.value
     })
})
        
    

    }


    render() {
        console.log(this.state.articles)
        console.log(this.state.sideArticles)

        var sideArticles = this.state.sideArticles.filter((article, i) =>{
            if(article.image && i !==0 && i !== 1 && i !==2) {
                return article
            }
        }).map((article, i) => {
            return(
                <div key={i}>
                    <li>
                     <a href={article.url} >
                         <div>
                        <img className='newsImage'src={article.image.thumbnail.contentUrl} />
                        </div>
                        <h4>{article.name}</h4>
                        {/* <p>{article.description}</p> */}
                     </a>
                    </li>
                </div>
            )
        })

        var articles = this.state.articles
        .map((value) => {
            return(
                <div>
                    

                    <li>
                     <a href={value.url} >
                         <div>
                        <img className='newsImage'src={value.image ? value.image.thumbnail.contentUrl : 'http://in5d.com/wp-content/uploads/2014/12/in5d-news.jpg'} />
                        </div>
                        <h4>{value.name}</h4>
                        <p>{value.description}</p>
                     </a>
                    </li>
                </div>
            )
        })
        
        return (
            <div>
               
                <div className='newsHeader'>
                    <div className='newsHeaderContent'>
                       <h1>Learn, Share, Explore</h1>
                       <h4>A place to stay up to date on Type 1</h4>
                     </div>    
                </div> 
                    <div className='newsBody'>
                        <div className='newsLeftColumn'>
                        <div className='newsDonateContainer'>
                           <a href='http://stepout.diabetes.org/site/PageServer?pagename=OUT_fw_spreadword'> <img src='http://stepout.diabetes.org/out11/so2011_160x600.gif'/>
                           </a>
                            <a href='http://www.diabetes.org/'>
                           <img className='ad2Image' src='https://i.pinimg.com/736x/e6/fd/a5/e6fda5707aea60700267695c5806881e--american-diabetes-association-true-north.jpg'/>
                           </a>
                            </div>
                            </div>
                        <div className='articleContainer'>
                            <div className='articleListContainer'>
                             
                                {articles}  
                            
                            </div>
                        </div>

                        <div className='sideArticleContainer'>
                            
                            
                                {sideArticles}
                            
                                
                        </div>
                        
                    </div>

                    <div className='aboutContainer'>
                        <div>

                        </div>
                    </div>
                
                
            
                <Footer />
            </div>
        );
    }
}

export default News;