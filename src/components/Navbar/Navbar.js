import React, { Component } from 'react';
import './Navabr.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
      
        return (
            <div className='Nav'>
                <div className='navbar'>

                

                    <div className='navLinks'>
                    <div className='logoBox'>
                    <Link to='/'>
                    <div className='logoText'>Logo</div>
                    </Link>
                 </div>

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
                
            </div>
        );
    }
}

export default Navbar;