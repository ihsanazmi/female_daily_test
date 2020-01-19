import React, { Component } from 'react'
import btn_playstore from '../img/btn_playstore.png'
import btn_appstore from '../img/btn_appstore.png'
import facebook from '../img/socemed_icon/facebook.png'
import instagram from '../img/socemed_icon/instagram.png'
import twitter from '../img/socemed_icon/twitter.png'
import youtube from '../img/socemed_icon/youtube.png'
import Icon from '../img/icon.jpeg'

class Footer extends Component {
    render() {
        return (
            <div className="footer mb-5">
                <div className="footer-content">
                    <div className="d-flex flex-row justify-content-between footer-content1">
                        <ul className="list-unstyled">
                            <li><a href="/">About Us</a></li>
                            <li><a href="/">Feedback</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                        <ul className="list-unstyled">
                            <li><a href="/">Terms & Condition</a></li>
                            <li><a href="/">Privacy Policy</a></li>
                            <li><a href="/">Help</a></li>
                        </ul>
                        <ul className="list-unstyled">
                            <li><a href="/">Awards</a></li>
                            <li><a href="/">Newsletter</a></li>
                        </ul>
                        <div style={{width:'25%'}}>
                            <p className="download-app">Download Our Mobile App</p>
                            <div className="d-flex justify-content-between" style={{width:'280px'}}>
                                <a href="/" className="text-decoration-none">
                                    <img src={btn_appstore} alt=""/>
                                </a>
                                <a href="/" className="text-decoration-none">
                                    <img src={btn_playstore} alt=""/>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-row" style={{width:'100%'}}>
                        <div style={{width:'75%'}}>
                            <div style={{margin:'15px 0'}}>
                                <a href="/">
                                    <img src={Icon} alt="icon"/>
                                </a>
                            </div>
                            <p className="copyright">Copyright © 2015 - 2020 Female Daily Network ∙ All the rights reserved</p>
                        </div>
                        <ul className="d-flex flex-row align-items-center p-0 list-unstyled socmed-list" style={{width:'25%'}}>
                            <li><a className="text-decoration-none" href="/"><img src={facebook} alt="facebook-logo" style={{width:'32px', height:'32px'}}/></a></li>
                            <li><a className="text-decoration-none" href="/"><img src={instagram} alt="facebook-logo" style={{width:'32px', height:'32px'}}/></a></li>
                            <li><a className="text-decoration-none" href="/"><img src={twitter} alt="facebook-logo" style={{width:'32px', height:'32px'}}/></a></li>
                            <li><a className="text-decoration-none" href="/"><img src={youtube} alt="facebook-logo" style={{width:'32px', height:'32px'}}/></a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
