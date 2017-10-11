import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './News.css';
import Footer from '../Footer/Footer'
import Iframe from 'react-iframe';
import Navbar from '../Navbar/Navbar';


class News extends Component {
    constructor(){
        super()

        this.state = {
            articles: [],
            sideArticles: [],
            youtubeVideos: []
            
            
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
    axios.get('/api/youtube').then(response => {
            this.setState({
                youtubeVideos: response.data.items
            })
    })
        
    

    }


    render() {
        console.log(this.state.articles)
        console.log(this.state.sideArticles)
        console.log(this.state.youtubeVideos)

        var sideArticles = this.state.sideArticles.filter((article, i) =>{
            if(article.image) {
                return article
            }
        }).map((article, i) => {
            return(
                <div key={i}>
                    <li >
                     <a href={article.url} className='sideNewsArticleBox'>
                         
                        <img className='sideNewsImage'src={article.image.thumbnail.contentUrl} />
                        
                        
                        <h3>{article.name}</h3>
                        
                        {/* <p>{article.description}</p> */}
                     </a>
                    </li>
                </div>
            )
        })

        var articles = this.state.articles.filter((article, i) =>
    {
        if(i !== 10){
            return article
        }
    })
        .map((value) => {
            return(
                <div>
                    

                    <li>
                     <a href={value.url} >
                         <div>
                        <img className='newsImage'src={value.image ? value.image.thumbnail.contentUrl : 'http://in5d.com/wp-content/uploads/2014/12/in5d-news.jpg'} />
                        </div>
                        <h3>{value.name}</h3>
                        <p>{value.description}</p>
                     </a>
                    </li>
                </div>
            )
        })

        var videos = this.state.youtubeVideos.filter((video, i) =>{
            if( i !== 1 && i !== 3 && i !== 4 && i !== 9){
                return video
            }
        })
        
        .map((video, i) => {
            return(
                <div className='news2VideoBox'>
                    <a href={'https://www.youtube.com/watch?v=' + video.id.videoId}>
                    <div>
                        <img className='news2VideoBoxImage' src={video.snippet.thumbnails.medium.url} />
                    </div>
                    </a>
                    <a href={'https://www.youtube.com/watch?v=' + video.id.videoId}>
                    <div>
                        <h3>{video.snippet.title}</h3>
                    </div>
                    </a>
                </div>
            )
        })
        
        return (
            <div>
            <Navbar />
            <div className='newsBody'>
               
               
                <div className='newsBackground'>
                <div className='newsHeader'>
                   <div className='inTheNews'>
                        <h2>In the News</h2>
                   </div>
                  
               </div>
                    <div className='newsBodyContainer'>
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
                            <a href='http://www.kmov.com/story/36495454/jdrf-walk-raises-half-a-million-to-cure-type-1-diabetes'>
                            <div className='headArticle'>
                                <div className='mainArticleImageBox'>
                                  <img  className='mainArticleImage'src='http://kmov.images.worldnow.com/images/15051078_G.jpg'/>

                                </div>

                                <div className='mainArticleDescription'>
                                    <h1>JDRF walk raises half a million to cure Type 1 diabetes</h1>
                                    <p>ST. LOUIS, Mo. (KMOV.com) -
Thousands filled the streets of downtown St. Louis Sunday morning, with one goal in mind, to find a cure for Type 1 diabetes (T1D).</p>
                                </div>
                            </div>
                            </a>
                            <div className='articleListContainer'>
                             
                                {articles}  
                            
                            </div>
                        </div>

                        <div className='sideArticleContainer'>
                            
                            
                                {sideArticles}
                            
                                
                        </div>
                        
                    </div>

                    <div className='newsSubBody'>
                        <div className='newsSubContent'>
                            <div className='subContentTextBox'>
                                <h1 className='newsSubContentTitle'>MORE GREAT CONTENT</h1>
                                <p className='newsSubContentSubtitle'>Other amazing places to learn about type 1</p>
                            </div>
                            <div>
                                <a href='http://diabetesstopshere.org/'>
                                <img className='blogLinkImage' src='https://www.healthline.com/hlcmsresource/images/Best-of-blogs/2017/Blog-logos/350x350_The_Best_Diabetes_Blogs_of_the_Year-diabetes_stops_here.jpg'/></a>
                            </div>
                            <div>
                                <a href='https://www.healthline.com/diabetesmine'>
                                <img className='blogLinkImage' src='https://www.healthline.com/hlcmsresource/images/Best-of-blogs/2017/Blog-logos/350x350_The_Best_Diabetes_Blogs_of_the_Year-diabetes_mine.jpg' /></a>
                            </div>
                            <div>
                                <a href='https://asweetlife.org/'>
                                <img  className='blogLinkImage' src='https://www.healthline.com/hlcmsresource/images/Best-of-blogs/2017/Blog-logos/350x350_The_Best_Diabetes_Blogs_of_the_Year-a_sweet_life.jpg'/></a>
                            </div>
                            <div>
                                <a href='http://www.d-mom.com/'>
                                <img className='blogLinkImage' src='https://www.healthline.com/hlcmsresource/images/Best-of-blogs/2017/Blog-logos/350x350_The_Best_Diabetes_Blogs_of_the_Year-d_mom.jpg' /></a>
                            </div>
                            <div>
                                <a href='https://collegediabetesnetwork.org/blog'>
                                <img className='blogLinkImage' src='https://www.healthline.com/hlcmsresource/images/Best-of-blogs/2017/Blog-logos/350x350_The_Best_Diabetes_Blogs_of_the_Year-college_diabetic_network.jpg' /></a>
                            </div>
                        </div>

                    </div>

                    <div className='newsBody2'>
                     <div className='news2ArticleContainer'>
                         <div className='news2Article'>
                         <a href='https://www.healthline.com/diabetesmine/sunday-funnies-2017b#2'>
                             <div>
                                 
                                <img className='news2ArticleImage' src='https://www.healthline.com/hlcmsresource/images/00_Diabetes-Mine/DMSundayFunnies/2017/August2017/DogCureWalk.jpg' />
                             </div></a>
                             <div className='news2ArticleDescription'>
                             <a href='https://www.healthline.com/diabetesmine/sunday-funnies-2017b#2'>
                                <div>
                                    <h2>Sunday Funnies: Fall Is Here</h2>
                                </div>
                                </a>
                                <div>
                                    <p>An article chalk full of diabetes themed memes.  You'll find them hysterical and your friends will be left clueless!</p>
                                </div>
                             </div>

                         </div>

                         <div className='news2Article'>
                             <a href='https://asweetlife.org/7-pumpkin-spice-products-for-people-with-diabetes/'>
                             <div>
                                <img className='news2ArticleImage' src='https://www.healthfulpursuit.com/wp-content/uploads/2011/09/Pumpkin-Spice-Smoothie-1.jpg' />
                             </div></a>
                             <div className='news2ArticleDescription'>
                             <a href='https://asweetlife.org/7-pumpkin-spice-products-for-people-with-diabetes/'>
                                <div>
                                    <h2>7 Pumpkin Spice Products for People with Diabetes</h2>
                                </div></a>
                                <div>
                                    <p>Fall is here! Being a person with diabetes doesn’t mean you have to forgo all things pumpkin; It just means you may need to get a little creative. </p>
                                </div>
                             </div>

                         </div>

                         <div className='news2Article'>
                             <a href='https://asweetlife.org/emergency-preparedness-guide-for-people-with-diabetes/'>
                             <div>
                                <img className='news2ArticleImage' src='https://cdn.asweetlife.org/wp-content/uploads/2017/09/disaster-800x600.jpg' />
                             </div></a>
                             <div className='news2ArticleDescription'>
                             <a href='https://asweetlife.org/emergency-preparedness-guide-for-people-with-diabetes/'>
                                <div>
                                    <h2>Emergency Preparedness Guide for People With Diabetes</h2>
                                </div></a>
                                <div>
                                    <p>It's an unpredictable world we live in.  With nature being as volitile as ever, it is time to brush up on our emergency Preparedness. </p>
                                </div>
                             </div>

                         </div>

                         <div className='news2Article'>
                             <a href='http://www.d-mom.com/15-non-candy-ideas-for-trick-or-treating-and-halloween-parties/'>
                             <div>
                                <img className='news2ArticleImage' src='http://cdn.history.com/sites/2/2013/11/Halloween-Hero-1-A.jpeg' />
                             </div></a>
                             <div className='news2ArticleDescription'>
                             <a href='http://www.d-mom.com/15-non-candy-ideas-for-trick-or-treating-and-halloween-parties/'>
                                <div>
                                    <h2>15+ Non-Candy Ideas for Trick-Or-Treating and Halloween Parties</h2>
                                </div></a>
                                <div>
                                    <p>Halloween time means candy, and candy means sugar, and sugar means skyrocketing blood glucose.  Here's some candy alternatives this season.</p>
                                </div>
                             </div>

                         </div>

                         <div className='news2Article'>
                             <a href='https://www.diabetesdaily.com/blog/how-to-exercise-without-worrying-about-your-blood-sugar-475335/'>
                             <div>
                                <img className='news2ArticleImage' src='http://goqii.com/blog/wp-content/uploads/exercise-stretch.jpg' />
                             </div></a>
                             <div className='news2ArticleDescription'>
                             <a href='https://www.diabetesdaily.com/blog/how-to-exercise-without-worrying-about-your-blood-sugar-475335/'>
                                <div>
                                    <h2>How to Exercise Without Worrying About Your Blood Sugar
</h2>
                                </div></a>
                                <div>
                                    <p>Excercising with diabetes can be a lesson in frustration.  In this article one person describes her solution to the problem. </p>
                                </div>
                             </div>

                         </div>

                         <div className='news2Article'>
                             <a href='https://www.animas.com/animas-blogs/wendy-rose/diabetes-support-camp'>
                             <div>
                                <img className='news2ArticleImage' src='http://daytonparentmagazine.com/wp-content/uploads/2016/04/camp-2.jpg' />
                             </div></a>
                             <div className='news2ArticleDescription'>
                             <a href='https://www.animas.com/animas-blogs/wendy-rose/diabetes-support-camp'>
                                <div>
                                    <h2>Diabetes Camp</h2>
                                </div></a>
                                <div>
                                    <p>Thinking of sending your kid to a Diabetes Summer Camp, but worried sick about their well-being? One Mom describes her experience. </p>
                                </div>
                             </div>

                         </div>

                         <div className='news2Article'>
                             <a href='https://collegediabetesnetwork.org/content/greek-life-t1d-0'>
                             <div>
                                <img className='news2ArticleImage' src='https://az616578.vo.msecnd.net/files/2016/04/02/6359523694573900471717663329_300-5-greeklife1.jpg' />
                             </div></a>
                             <div className='news2ArticleDescription'>
                             <a href='https://collegediabetesnetwork.org/content/greek-life-t1d-0'>
                                <div>
                                    <h2>Greek Life & T1D</h2>
                                </div></a>
                                <div>
                                    <p>College student details how to get the full experience of college while managing all the daily tasks that come with T1D. </p>
                                </div>
                             </div>

                         </div>

                      
                 

                     </div>

                     <div className='news2VideoContainer'>
                        {videos}
                     </div>
                    
                 </div>

                    </div>
                    <div className='aboutContainer'>
                        <div>

                        </div>
                    </div>
                
                
            
                <Footer />
            </div>
            </div>
        );
    }
}

export default News;