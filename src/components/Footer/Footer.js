import React, { Component } from 'react';
import './Footer.css';
import axios from 'axios';

class Footer extends Component {
    constructor(){
        super()

        this.state={
            message: '',
            name: '',
            email: '',
            suscribeEmail: ''
        }
        this.addMessage = this.addMessage.bind(this)
    }

    addMessage(){
        console.log('sending message')
        axios.post('/api/messages', {
            name: this.state.name,
            email: this.state.email,
            message: this.state.message
        }).then(this.setState({message: '', name: '', email: ''}))
    }
    render() {
        console.log(this.state)
        return (
            <div className='footer'>
                <div className='contactBox'>
                    <div>
                        <text className='messageText'>MESSAGE US</text>
                    </div>
                    <div>
                        <text className='messageSubText'>Want more information? Suggestions to make our site better? Fill out the boxes below and get a message straight to us!</text>
                    </div>
                    <div className='messageBoxes'>
                        <div className='messageBoxesLeft'>
                            <input value={this.state.name} onChange={(e) => this.setState({name: e.target.value})} className='footerInputs' placeholder='NAME'/>
                            <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} className='footerInputs'  placeholder='EMAIL' />
                            <button className='sendMessageButton' onClick={this.addMessage}>SEND</button>
                        </div>
                        <div>
                            <textarea value={this.state.message} onChange={(e) => this.setState({message: e.target.value})}  placeholder='TALK TO US...' className='footerTextArea'></textarea>
                        </div>

                    </div>

                </div>


                <div className='bottomFooter'>
                    <div className='footerDonate'>
                        <div className='donateImageBox'>
                        <img className='footerDonateImage' src='https://lh3.googleusercontent.com/zg9rrJ8a54O-p4XsVhMVM9SMebI2o_BX0RdgeHTVKzEjS8FleyWdY28LyG4BXBmCFB3m7VMarCaaW66EU8szPjrV_6lNeQQGMdMwjsR-7hOymkXuwOQIOmVqFzF7ocAok83_7ieriL0ZO9sA5RZVF1JOJMBcPAOuttvt31S3H7YnuE2Phgdelr_S6DVLeGSuQATd2pCHui0gLMN0XzBNnsYoY9O2bDP2JJObnSnj1-IT5d48EyynNP5HdbCEpThkAkB-vuqoAE03eqqX6Qn_SJ70COrjL1rQkwcQT71KG2A_p3Fuwoxk6C57Qh5KdsxQhD4IkJna4531g5ErVvXAJw_k8MEkQGMG81iLVrSrsuHw-Ojy8x3b_ElBeIgsoGopc7BcrS30QvR4sL0qLO4M1NR8ZcZ6pO3JCqny8uzNmSKUTxrFItJR1dzqMXB8xgo3lBC1zItPgqiG_tv9EoSES3GK5DtY0ldcv9fMCK2dfQR-vyogUByniPj9Xqse1nXB_nQrmKOE6nn3GXtwyk8IiacBWSyUA81e72ILpxiD0mma9K3jKSa0QMOZohM65olHjiu8bPRP8hZqEljRowWtfWZGX_fjMJW5d6vsSW2rfZgiJNqFDETDs0wDqoznmIiVnqox3JFR0mJkKoQY4jdi5t8UVhSzQbeJSl4=w268-h204-no' />
                        </div>
                        <div className='donateTextAndButton'>
                            <div className='suscribeInputAndButton'>
                                <text className='messageSubText'>Feeling inspired? Want to donate to a company striving for a cure?</text>
                            </div>
                            <div>
                                <a href='https://donations.diabetes.org/site/Donation2;jsessionid=00000000.app234b?df_id=19705&mfc_pref=T&19705.donation=form1&loc=dorg_header-donate-now&s_src=dorg&s_subsrc=header-donate-now&NONCE_TOKEN=593623E4F0B003237298FB7DABA50A14'>
                                <button className='donateButton'>Donate</button>
                                </a>
                            </div>

                        </div>

                    </div>

                    <div className='logoAndSuscribe'>

                        <div>
                            <text className='messageSubText'>Interested in a monthly Email?</text>
                        </div>

                        <div className='suscribeInputAndButton'>
                        <input value={this.state.suscribeEmail} onChange={(e) => this.setState({suscribeEmail: e.target.value})} className='suscribeInput' placeholder='EMAIL' />
                        <button onClick={() => this.setState({suscribeEmail: ''})} className='suscribeButton'>SUSCRIBE</button>
                        </div>
                 </div>

                    <div className='socialMediaBox'>
                        <div>
                            <text className='followUsText'>Follow US</text>
                        </div>
                        <div className='socialMediaLogos'>
                            <img className='footerLogo' src='https://cdn.shopify.com/s/files/1/1081/8218/t/15/assets/icon-twitter.png?17883907083265073744' />
                            <img className='footerLogo' src='https://cdn.shopify.com/s/files/1/1081/8218/t/15/assets/icon-facebook.png?17883907083265073744'/>
                            <img className='footerLogo' src='https://cdn.shopify.com/s/files/1/1081/8218/t/15/assets/icon-pinterest.png?17883907083265073744' />
                            <img className='footerLogo' src='https://cdn.shopify.com/s/files/1/1081/8218/t/15/assets/icon-instagram.png?17883907083265073744' />

                        </div>

                    </div>

                </div>
                
            </div>
        );
    }
}

export default Footer;