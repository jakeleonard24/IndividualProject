import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Storefront extends Component {
    render() {
        return (
            <div>
                <p>Storefront</p>
                <Link to="/product">
                <p>Product</p>
                </Link>
            </div>
        );
    }
}

export default Storefront;