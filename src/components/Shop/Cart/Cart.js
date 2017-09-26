import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Cart extends Component {
    render() {
        return (
            <div>
                <p>CartPage</p>
                <Link to="/">
                <p>News</p>
                </Link>
            </div>
        );
    }
}

export default Cart;