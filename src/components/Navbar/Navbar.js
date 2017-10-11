import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
      
        return (
            <div className='Nav'>
                <div className='navbar'>

                

                    
                    <div className='logoBox'>
                    <Link to='/'>
                    <div className='logoText'>Logo</div>
                    </Link>
                    </div>
                    <div className='navLinks'>
                    <Link to='/storefront'>
                    <div className='shopBox'>Shop</div>
                    </Link>

                    <Link to='/blog'>
                    <div className='blogBox'>Blog</div>
                    </Link>
                   
                    
                    <a className='loginBox' href={this.props.userId ? 'http://localhost:3000/#/blog' : 'http://localhost:3333/auth'}> <div className='loginBox'>{this.props.userId ? 'Hi, ' + this.props.username : 'Login'}</div></a>
                     </div>

                </div>
                
            </div>
        );
    }
}

export default Navbar;