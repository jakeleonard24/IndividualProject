import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Iframe from 'react-iframe';
import './Storefront.css';

class Storefront extends Component {
    render() {
        return (
            <div>
                <p>Storefront</p>
                <Link to="/product">
                <p>Product</p>
                </Link>

{/* 
                <div className='productContainer'>

                <Iframe url="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=typeoneshop-20&marketplace=amazon&region=US&placement=0470178116&asins=0470178116&linkId=6a6cd379cd3604da8dc7d3a3c8aa1562&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff" 
                width="200px"
                height="240px"
                display="initial"
                position="relative"
                />
               
                </div>

                <div className='productContainer'>

                 <Iframe className='amazonProduct' url="//ws-na.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operation=GetAdHtml&MarketPlace=US&source=ac&ref=tf_til&ad_type=product_link&tracking_id=typeoneshop-20&marketplace=amazon&region=US&placement=B06ZXXBSZ4&asins=B06ZXXBSZ4&linkId=14b2634c6c9639e39957e007a030b122&show_border=false&link_opens_in_new_window=false&price_color=333333&title_color=0066c0&bg_color=ffffff" 
                 width="200px"
                 height="240px"
                 display="initial"
                 position="relative"
                 />
                </div> */}

                <div className='productContainer'>
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/41i4BBnD4pL._SX311_BO1,204,203,200_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/51EnLmtKEbL._SX396_BO1,204,203,200_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/71SO8iBti3L._UY575_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/81oMSsBDb7L._UX522_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/81eXSzSP7zL._UX522_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/71SO8iBti3L._UY575_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/71SO8iBti3L._UY575_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/71SO8iBti3L._UY575_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/71SO8iBti3L._UY575_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/71SO8iBti3L._UY575_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/71SO8iBti3L._UY575_.jpg' />
                    <img className='image' src='https://images-na.ssl-images-amazon.com/images/I/71SO8iBti3L._UY575_.jpg' />
                </div>
            </div>

        );
    }
}

export default Storefront;

