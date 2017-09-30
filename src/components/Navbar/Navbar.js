import React, { Component } from 'react';
import './Navabr.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
      
        return (
            <div className='Nav'>
                <div className='navbar'>
                    <Link to='/'>
                    <div className='logoBox'>Logo</div>
                    </Link>

                    <Link to='/storefront'>
                    <div className='shopBox'>Shop</div>
                    </Link>

                    <Link to='/about'>
                    <div className='aboutBox'>About</div>
                    </Link>

                    <Link to='/blog'>
                    <div className='blogBox'>Blog</div>
                    </Link>

                    
                    <a href={'http://localhost:3333/auth'}> <div className='loginBox'>Login</div></a>
                    

                </div>
                
            </div>
        );
    }
}

export default Navbar;