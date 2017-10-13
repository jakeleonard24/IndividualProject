import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';

class Navbar extends Component {
    render() {
      
        return (
            <div className='nav'>
                <div className='navbar'>

                

                    
                    <div className='logoBox'>
                    <Link to='/'>
                    <div ><img className='logoImage'src='https://lh3.googleusercontent.com/9hdNF3SJUAPhiHKN-YQEWAuVW_TIFzSeDqJ6nskpbEJ6crPTviLepFlRkXko2Ggxp3mOjbqJbNXz3Px5p7RgYF5cl5ySAxeq05yARVghoGDcYyzR4jNIwaANRAwS-3ymmhIqrzP7eFoVC4dvG_vl03NZRFQUbZvl4OWT2_q42BBC2NrNTd5E_W3skcOoKeUZNrSF4P1jVBPqfawCfcBo3I_n2g6vDosMnwqUeJhrLUA6GoDPOSO3OmczN81QCCS63TcD2pADgT9naOICI8IShfYsVgJ8wHDZqV7Mt7ChXcJ91wDZdZ9wnHmGxLHKrR1TKYf0WMvhhxSxLsAJ-2FjFAnAFq-Cs2Y4vwTaN6mYoWnHvuvcI5lYDmHITY5hlXbRUeRLabwtXwcog5IAZmpmIXW-zF3hhRQiMKpagAxBKZ0TSVU5r_Aq2i3cziLGAZi8SqsHwad3IckaEFTTyhKTYc9ffpMgKncp0AoLl3rFZr8ZkHTLCuBv0Tjb3of4739CN5OCDMlbO4Q9s269-LOp2k1OEg11k84tsUVvx7g5ir3V7mpcAk3DUT5v1VbiWiubQmKbmJn5QiQrf2iYOFp4wXyC8X0_zLJuTNHbF5ubMC-RBr308aKm_TS6RnWVNANN-6yMgH_5j--R3xOMHkH6BXO2GYcfON_J160=s500-no'/></div>
                    </Link>
                    </div>
                    <div className='navLinks'>
                    <Link to='/storefront'>
                    <div className='shopBox'>Shop</div>
                    </Link>

                    <Link to='/blog'>
                    <div className='blogBox'>Blog</div>
                    </Link>
                   
                    
                    <a className='loginBox' href={this.props.userId ? 'http://localhost:3333/auth/logout' : 'http://localhost:3333/auth'}> <div className='loginBox'>{this.props.userId ? 'Hi, ' + this.props.username : 'Login'}</div></a>
                     </div>

                </div>
                
            </div>
        );
    }
}

export default Navbar;