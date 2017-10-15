import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Iframe from 'react-iframe';
import './Storefront.css';
import {Parallax} from 'react-parallax';
import Navbar from '../../Navbar/Navbar';
import Footer from '../../Footer/Footer'

class Storefront extends Component {
    constructor(){
        super()

        this.state = {
            mouseOverPink: false,
            mouseOverGreen: false
        }

        this.mouseOver = this.mouseOver.bind(this)
        
    }

    mouseOver(){
        this.setState({
            mouseOverPink: !this.state.mouseOverPink
        })
    }

    hoverStyle = {
        boxShadow: '10px 10px 5px #888888'
    }
    render() {
       
        return (
            <div className='storeBody'>
                <Navbar />
              
               <div className='storeHeader'>
                   <div className='storeHeaderContent'>
                    <h1 className='storeHeaderText'>WEAR IT</h1>
                    <br/>
                    <h1 className='storeHeaderText'>OWN IT</h1>
                   </div>

               </div>
             

                
                <div className='productContainer'>
                    

                    

                    

                    
                <div className='productBox'>
                    <a href='http://amzn.to/2zkTJ95'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/61UmSCnItML._UX679_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2zkTJ95'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$44.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2ggQIC4'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/81JwuSk1uoL._UX679_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2ggQIC4'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$18.95</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2gfJcHw'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/61V%2BRYegUzL._UX679_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2gfJcHw'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$29.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2zlWDdR'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/613t4KVRRDL._UX679_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2zlWDdR'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$29.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2zlNge4'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/71N-nGdMhFL._UX679_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2zlNge4'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$24.95</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2zm4YxN'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/71LkvRhJAFL._UX679_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2zm4YxN'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$24.95</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2ggM6Mi'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/61QvIqjmuUL._UY695_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2ggM6Mi'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$59.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2hEAoYe'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/71-vOjoVzGL._UX679_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2hEAoYe'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$15.99</p>
                    </div>
                    </div>
                
                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B073N2W37J/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B073N2W37J&linkId=05862e5809ef26afaaeb94b43a0bf421'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/81oMSsBDb7L._UX522_.jpg' />
                    
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B073N2W37J/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B073N2W37J&linkId=05862e5809ef26afaaeb94b43a0bf421'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$15.89</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B074H5LYQM/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B074H5LYQM&linkId=261bc51cc2586197b7210e8441e6882f'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/81eXSzSP7zL._UX522_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B074H5LYQM/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B074H5LYQM&linkId=261bc51cc2586197b7210e8441e6882f'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$14.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B073ZKCTB7/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B073ZKCTB7&linkId=13eb2b36515aadb4dac2b3ea8147345e'>
                        <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/7144nsbzzPL._UX385_.jpg' />
                        </a>
                        <div className='productDetails'>
                        <a href='https://www.amazon.com/gp/product/B073ZKCTB7/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B073ZKCTB7&linkId=13eb2b36515aadb4dac2b3ea8147345e'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$16.99</p>
                    </div>
                        </div>

                    

                    <div className='productBox'>
                    <a href='http://amzn.to/2xf7vHY'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/710KqPSR9NL._UY679_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2xf7vHY'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$18.00</p>
                    </div>
                    </div>

                    

                    <div className='productBox'>
                    <a href='http://amzn.to/2fPtvq6'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/71SxRMLguWL._UY679_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2fPtvq6'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$36.99 </p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2yOSw95'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/815WNP%2BbdlL._UX522_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2yOSw95'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$16.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2y6dhzo'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/71R0TIVI3oL._UX522_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2y6dhzo'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$15.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2xmN5BM'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/71bmJ6aHpzL._UX522_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2xmN5BM'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$40.37</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2yiJB0o'>
                    <img className='productImage' src={this.state.mouseOverGreen ? 'https://images-na.ssl-images-amazon.com/images/I/71DmxXE%2B5xL._SX522_.jpg' : 'https://images-na.ssl-images-amazon.com/images/I/71TmCtmd7ZL._SX522_.jpg'} 
                    onMouseOver={() => {this.setState({mouseOverGreen: true})}}
                    onMouseOut={() => {this.setState({mouseOverGreen: false})}}/>
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2yiJB0o'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$19.95</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2zl3XGv'>
                    <img className='productImage' src={ this.state.mouseOverPink ? 'https://images-na.ssl-images-amazon.com/images/I/81pMMlnDfBL._SX522_.jpg' : 'https://images-na.ssl-images-amazon.com/images/I/815SkUHrb6L._SX522_.jpg'}
                    onMouseOver={() => {this.setState({mouseOverPink: true})}}
                    onMouseOut={() => {this.setState({mouseOverPink: false})}} />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2zl3XGv'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$42.95</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2ghRv5I'>
                    <img className='productImage' src={this.state.mouseOverMen ? 'https://images-na.ssl-images-amazon.com/images/I/61bMtwlKOdL._SX522_.jpg' : 'https://images-na.ssl-images-amazon.com/images/I/61aVbCVVkQL._SX522_.jpg'} 
                    onMouseOver={() => {this.setState({mouseOverMen: true})}}
                    onMouseOut={() => {this.setState({mouseOverMen: false})}}/>
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2ghRv5I'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$27.15</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2ghr9AP'>
                    <img className='productImage' src={this.state.mouseOverPolka ?'https://images-na.ssl-images-amazon.com/images/I/51MQk7Hof3L.jpg' : 'https://images-na.ssl-images-amazon.com/images/I/51FvnTKmFFL.jpg'} 
                    onMouseOver={() => {this.setState({mouseOverPolka: true})}}
                    onMouseOut={() => {this.setState({mouseOverPolka: false})}}
                    />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2ghr9AP'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$26.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='http://amzn.to/2z41qjU'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/61LIWI0TQNL._UX522_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='http://amzn.to/2z41qjU'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$40.37</p>
                    </div>
                    </div>

                    
                
                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B0756VQT1X/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0756VQT1X&linkId=0e0989dc4695751fd16cf83d5cbb228c'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/81JNbt6EOLL._UX385_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B0756VQT1X/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0756VQT1X&linkId=0e0989dc4695751fd16cf83d5cbb228c'>    
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$19.99</p>
                    </div>
                    </div>

                   

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B073YQXCQ9/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B073YQXCQ9&linkId=63eae91886ffe2982b456a29c83eb5f1'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/81PCSUa6YFL._UX385_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B073YQXCQ9/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B073YQXCQ9&linkId=63eae91886ffe2982b456a29c83eb5f1'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$17.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B018N0G480/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B018N0G480&linkId=04ae1184d927beb67ce89b3ddcc88d59'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/61881qr-g-L._UX385_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B018N0G480/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B018N0G480&linkId=04ae1184d927beb67ce89b3ddcc88d59'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$21.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B018F6DNF4/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B018F6DNF4&linkId=d4c4d9da2e0b57f42accf858439acc19'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/511jQVD9UlL._UX385_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B018F6DNF4/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B018F6DNF4&linkId=d4c4d9da2e0b57f42accf858439acc19'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$21.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B019G64CPC/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B019G64CPC&linkId=61594c799206c5f5dd097fc4ec1092f8'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/51qJPE1mwSL._UX385_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B019G64CPC/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B019G64CPC&linkId=61594c799206c5f5dd097fc4ec1092f8'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$49.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B074119FF2/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B074119FF2&linkId=5608e3d30aadf75cea6d90aa127a52eb'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/81O4mHf9XSL._UX385_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B074119FF2/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B074119FF2&linkId=5608e3d30aadf75cea6d90aa127a52eb'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$17.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B0751BFVY1/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0751BFVY1&linkId=d4c3add82d247bc0d19be7a4f11f1e31'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/51M8LtgpvrL._UX385_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B0751BFVY1/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B0751BFVY1&linkId=d4c3add82d247bc0d19be7a4f11f1e31'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$30.99</p>
                    </div>
                    </div>

                    
                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/1514369729/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1514369729&linkId=5d268d807c1de7512ede96db2518cfae'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/41i4BBnD4pL._SX311_BO1,204,203,200_.jpg' />
                  
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/1514369729/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1514369729&linkId=5d268d807c1de7512ede96db2518cfae'>
                    
                  <p className='viewButton'>View</p>
                    </a>
                   
                    <p>$9.99</p>
                    </div>
                    
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/0470178116/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0470178116&linkId=cc48e67bd7641709094b73278fe957d6'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/51EnLmtKEbL._SX396_BO1,204,203,200_.jpg' />
                  
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/0470178116/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0470178116&linkId=cc48e67bd7641709094b73278fe957d6'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$14.54</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B06ZXXBSZ4/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B06ZXXBSZ4&linkId=25cd757bc18289caab00b4a1f914e11f'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/71SO8iBti3L._UY575_.jpg' />
                    
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B06ZXXBSZ4/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B06ZXXBSZ4&linkId=25cd757bc18289caab00b4a1f914e11f'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$11.95</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/1938170008/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1938170008&linkId=67dd5002da4d8f579af0e68f7dab42b3'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/51P1eOQvEIL._SX326_BO1,204,203,200_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/1938170008/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1938170008&linkId=67dd5002da4d8f579af0e68f7dab42b3'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$8.63</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/0297640860/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0297640860&linkId=0c15851eada15c1ba356f0db98b01b2f'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/51y1KUQiKdL._SX258_BO1,204,203,200_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/0297640860/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0297640860&linkId=0c15851eada15c1ba356f0db98b01b2f'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$12.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/0763784559/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0763784559&linkId=6ade5d4a9d557b57dcd118ed25db87dd'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/51-66G%2B%2BUDL._SX331_BO1,204,203,200_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/0763784559/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=0763784559&linkId=6ade5d4a9d557b57dcd118ed25db87dd'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$18.73</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B01HJ64RRO/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01HJ64RRO&linkId=8a47daa9b5633fda78a0533899bea45e'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/41MlyrHkeWL._SX466_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B01HJ64RRO/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01HJ64RRO&linkId=8a47daa9b5633fda78a0533899bea45e'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$13.00</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/1119315646/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1119315646&linkId=a2af57a54655ec9868276dfec60878c6'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/51kw%2BbfJ1-L._SX390_BO1,204,203,200_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/1119315646/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=1119315646&linkId=a2af57a54655ec9868276dfec60878c6'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$15.63</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B01NCTU8B9/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01NCTU8B9&linkId=a2846d5b805fbce889903406e7fec9fa'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/51vpUh5sCeL.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B01NCTU8B9/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B01NCTU8B9&linkId=a2846d5b805fbce889903406e7fec9fa'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$22.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B013G5ZCIU/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B013G5ZCIU&linkId=885fbbb8e7539f91c818ae25f8ad9def'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/41jr2kY34zL._SY445_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B013G5ZCIU/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B013G5ZCIU&linkId=885fbbb8e7539f91c818ae25f8ad9def'>   
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$13.99</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B00CBOAVXY/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00CBOAVXY&linkId=2bd90a7dc96fd98a2b9a3f81400d081e'>
                    <img className='productImage' src='https://images-na.ssl-images-amazon.com/images/I/61j79uoPVnL._SX355_.jpg' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B00CBOAVXY/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00CBOAVXY&linkId=2bd90a7dc96fd98a2b9a3f81400d081e'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$25.95</p>
                    </div>
                    </div>

                    <div className='productBox'>
                    <a href='https://www.amazon.com/gp/product/B00PGDXBRA/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00PGDXBRA&linkId=45608dcdc3e2fc45b7d015abc3203b41'>
                    <img className='productImage' src='data:image/webp;base64,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' />
                    </a>
                    <div className='productDetails'>
                    <a href='https://www.amazon.com/gp/product/B00PGDXBRA/ref=as_li_tl?ie=UTF8&tag=typeoneshop-20&camp=1789&creative=9325&linkCode=as2&creativeASIN=B00PGDXBRA&linkId=45608dcdc3e2fc45b7d015abc3203b41'>
                   <p className='viewButton'>View</p>
                   </a>
                    <p>$6.45</p>
                    </div>
                    </div>

                

                
            </div>
            <Footer />
            </div>
            

        );
    }
}

export default Storefront;

