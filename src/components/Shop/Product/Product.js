import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Product extends Component {
    render() {
        return (
            <div>
                 <p>ProductPage</p>
                <Link to="/cart">
                <p>Cart</p>
                </Link>
            </div>
        );
    }
}

export default Product;