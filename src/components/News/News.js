import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './News.css';


class News extends Component {
    constructor(){
        super()

        this.state = {
            articles: [],
            
            
        }
       
    }

    
    

    componentDidMount(){
    axios.get('https://api.cognitive.microsoft.com/bing/v5.0/news/search?q=type+1+diabetes&count=20&mkt=en-us',
     {'headers': {'Ocp-Apim-Subscription-Key': BING_KEY}}).then(response => {
        console.log(response.data)
        this.setState({
            articles: response.data.value
        })
    })

    }


    render() {
        console.log(this.state.articles)

        var articles = this.state.articles.filter((value) => {
            if(value.image){
                return value
            }
        })
        .map((value) => {
            return(
                <div >
                    <a href={value.url} >
                    <div className='articleBox'>
                    <img className='articleImage' src={value.image.thumbnail.contentUrl} /><div className='articleTitle'>{value.name}</div>
                    </div>
                    </a>
                </div>
            )
        })
        
        return (
            <div>
                <p>Newspage</p>
                <Link to="/blog">
                <p>Blog</p>
                </Link>
             <div className='mainBody'>
                <div className='articleContainer'>
                    {articles}
                </div>
            </div>
                
            </div>
        );
    }
}

export default News;