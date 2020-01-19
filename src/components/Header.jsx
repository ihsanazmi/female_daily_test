import React, { Component } from 'react'
import Icon from '../img/icon.jpeg'

class Header extends Component {
    render() {
        return (
            <div className="d-flex flex-column w-100" style={{height:'104px', backgroundColor:'#fff'}}>
                <div className="main-header">
                    <div className="header-left">
                        <span className="burger-button"><i className="fas fa-bars"></i></span>
                        <img src={Icon} alt="icon"/>
                    </div>
                    <form className="search-input">
                        <div className="search-input-field">
                            <i className="fas fa-search search-icon"></i>
                            <input className="search-input-field_home" placeholder="Search products, articles, topics, brands, etc" type="text"/>
                        </div>
                    </form>
                    <div className="header-right">
                        <div className="header-login">
                            <a className="header-profile" href="/">LOGIN / SIGNUP</a>
                        </div>
                    </div>
                </div>

                <div className="main-header-category">
                    <div className="main-header-dummy"></div>
                    <div className="main-header-center">
                        <a href="/" className="main-header-item">skincare</a>
                        <a href="/" className="main-header-item">make up</a>
                        <a href="/" className="main-header-item">body</a>
                        <a href="/" className="main-header-item">hair</a>
                        <a href="/" className="main-header-item">fragrance</a>
                        <a href="/" className="main-header-item">nails</a>
                        <a href="/" className="main-header-item">tools</a>
                        <a href="/" className="main-header-item">brands</a>
                    </div>
                    <div className="main-header-dummy2"></div>
                </div>
            </div>
        )
    }
}

export default Header
