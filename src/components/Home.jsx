import React, { Component } from 'react'
import {Rating} from 'primereact/rating';
import axios from '../config/axios'
import img1 from '../img/avatar-group/acne_warrior.png'
import img2 from '../img/avatar-group/skincare_newbies.png'
import img3 from '../img/avatar-group/oily_mess_2.png'
import img4 from '../img/avatar-group/dare_to_splurge.png'
import logo1 from '../img/logo_brand/wardah_800x800.png'
import logo2 from '../img/logo_brand/maybe_800x800.png'
import logo3 from '../img/logo_brand/brands_1551120321_Emina_Logo_800x800.png'
import logo4 from '../img/logo_brand/Garnier_Lo_800x800.png'
import logo5 from '../img/logo_brand/tbs_800x800.png'
import logo6 from '../img/logo_brand/PIXY_NEW_L_800x800.png'
import user1 from '../img/editor/user1.jpg'

const group_data = [
    {img: img1, title: 'Acne Warrior', user:'3608', list: '170', comment: '305', desc:"Don't give up with your acnes yet, we're here to support you"},
    {img: img2, title: 'Skincare Newbies', user:'3449', list: '156', comment: '254', desc:"All those skincare tips your skin will thank you for"},
    {img: img3, title: 'Oily Mess', user:'1535', list: '33', comment: '75', desc:"Show your oily skin who’s the boss 😎"},
    {img: img4, title: 'Dare to Splurge', user:'567', list: '16', comment: '65', desc:"When you feel like giving your skin a treat✨"},
]

const data_logo = [
    {logo: logo1},
    {logo: logo2},
    {logo: logo3},
    {logo: logo4},
    {logo: logo5},
    {logo: logo6}
]

class Home extends Component {

    state={
        editor_choice: null,
        latest_article: null,
        latest_review: null,
    }

    componentDidMount(){
        this.getEditorChoice()
    }

    getEditorChoice = ()=>{
        axios.get(`/wp`)
        .then(res=>{
            this.setState({
                editor_choice: res.data["editor's choice"],
                latest_article: res.data["latest articles"],
                latest_review: res.data["latest review"]
            })

        })
        .catch(err=>{
            console.log(err)
        })
    }

    renderEditorChoice = ()=>{
        let i = 0
        let data = this.state.editor_choice.map(val=>{
            i++
            return(
                <div key={i}>
                    <div className="product-editor-container">
                        <div className="editor-card">
                            <a href="/" className="editor-img">
                                <img src={user1} alt="editor" style={{maxWidth: '100%', maxHeight:'100%'}}/>
                            </a>
                            <div>
                                <p className="editor-name">{val.editor}</p>
                                <p className="editor-position mt-0">{val.role}</p>
                            </div>
                        </div>
                        <div className="product-card-editor">
                            <a href="/" className="product-card-editor-img">
                                <img src={val.product.image} alt="product" style={{maxWidth:'100%', maxHeight:'100%'}}/>
                            </a>
                            <div className="product-card-editor-detail">
                                <div className="product-card-editor-rating">
                                    <span className="product-card-editor-rating-average">{val.product.rating}</span>
                                    <span><Rating value={val.product.rating} readonly={true} stars={5} cancel={false} className="p-rating" /></span>
                                    <span className="product-card-editor-rating-total">(8)</span>
                                </div>
                                <a className="product-card-editor-brand text-decoration-none" href="/">
                                    {val.product.name}
                                </a>
                                <a className="product-card-editor-title text-decoration-none" href="/">
                                    {val.product.description}
                                </a>
                                <p className="product-card-editor-shade">
                                    Beige Caramel
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )
        })
        return data
    }

    renderLatestArticle = ()=>{
        let i = 0
        let data = this.state.latest_article.map(val=>{
            i++
            return(
                <div key={i} className="article-list-item">
                    <div className="article-card">
                        <a href="/" className="article-img">
                            <img src={val.image} alt="article_img"/>
                        </a>
                        <a href="/" className="article-title text-decoration-none">
                            {val.title}
                        </a>
                        <p className="article-author">
                            <a href="/" className="article-author-name">{val.author}</a> | {val.published_at}
                        </p>
                    </div>
                </div>
            )
        })
        return data
    }

    renderGroupList = ()=>{
        let i = 0
        let data = group_data.map(val=>{
            i++
            return(
                <div key={i} className="group-list-item">
                    <div className="d-flex flex-column align-items-center shadow" style={{width:'260px', height:'100%'}}>
                        <a href="/" className="text-decoration-none">
                            <div className="d-flex justify-content-center align-items-center" style={{borderRadius:'50%', overflowX:'auto', width:'220px', height:'220px', margin:'10px'}}>
                                <img src={val.img} alt="avatar" style={{maxWidth:'100%', maxHeight:'100%'}} />
                            </div>
                        </a>
                        <a href="/" className="text-decoration-none" >
                            <h2 className="group-title">{val.title}</h2>
                        </a>
                        <div className="d-flex flex-wrap justify-content-center" style={{padding:'0 10px'}}>
                            <div className="d-flex flex-row align-items-center" style={{margin:'2px 0'}}>
                                <i className="fas fa-female"></i>
                                <p className="group-card-info">{val.user}</p>
                            </div>
                            <div className="d-flex flex-row align-items-center" style={{margin:'2px 0'}}>
                                <i className="fas fa-list-ul"></i>
                                <p className="group-card-info">{val.list}</p>
                            </div>
                            <div className="d-flex flex-row align-items-center" style={{margin:'2px 0'}}>
                                <i className="far fa-comment-alt"></i>
                                <p className="group-card-info">{val.comment}</p>
                            </div>
                        </div>
                        <p className="group-card-desc">{val.desc}</p>
                    </div>
                </div>
            )
        })

        return data
    }

    renderLogoBrand = ()=>{
        let i =0
        let data = data_logo.map(val=>{
            i++
            return(
                <div key={i}>
                    <a href="/" className="d-flex justify-content-center align-items-center text-decoration-none" style={{width:'160px', height:'86px'}}>
                        <img src={val.logo} alt="logo" style={{width:'100%'}}/>
                    </a>
                </div>
            )
        })
        return data
    }

    renderReview = ()=>{
        let i = 0
        let data = this.state.latest_review.map(val=>{
            i++
            return(
                <div key={i}>
                    <div className="review-card">
                        <div className="review-section">
                            <div className="review-section1">
                                <a href="/" className="review-product-img-container">
                                    <img src={val.product.image} alt="product" className="review-product-img"/>
                                </a>
                                <div className="review-content">
                                    <a href="/" className="review-brand-name">{val.product.name}</a>
                                    <a href="/" className="review-product-name">{val.product.desc}</a>
                                </div>
                            </div>
                            <div className="review-card-star">
                                <span><Rating value={val.star} readonly={true} stars={5} cancel={false} className="p-rating" /></span>
                                <p className="review-date">2 hours ago</p>
                            </div>
                            <a href="/" className="review-text text-decoration-none">
                            {val.comment} <span style={{color:'#db284e'}}>Read More</span>
                            </a>
                        </div>
                        <div className="review-card-user">
                            <div className="container-user">
                                <a href="/" className="review-user-img text-decoration-none">
                                    <img src="" alt="" style={{maxWidth:'100%', maxHeight:'100%'}}/>
                                </a>
                            </div>
                            <a href="/" className="review-user-name">{val.user}</a>
                            <p className="review-beauty-profile">Combination, Dark, Warm, 18 and Under</p>
                        </div>
                    </div>
                </div>
            )
        })
        return data
    }

    render() {
        if(this.state.editor_choice === null || this.state.latest_article === null || this.state.latest_review === null){
            return null
        }
        return (
            <div className="home-content">
                <div className="top-ads mx-auto d-flex align-items-center justify-content-center">
                    <p className="m-0 p-0">Top Frame 970x50</p>
                </div>
                <div className="billboard mx-auto d-flex align-items-center justify-content-center">
                    <p>Billboard 970x250</p>
                </div>

                {/* content */}
                <div className="home-content-section1 mt-5">
                    <h2 className="title-section">Editor's Choice</h2>
                    <div className="sub-title-section">
                        <p>Curated with love</p>
                    </div>
                    <div className="editor-choice-list">
                        {this.renderEditorChoice()}
                    </div>
                </div>

                <div className="banner-background">
                    <div className="banner-section">
                        <div className="banner-container">
                            <p className="banner-title m-0 p-0">Looking for products that are just simply perfect for you?</p>
                            <p className="banner-desc">here are some products that we believe match your skin, hair, and body! Have we mentioned that they solve your concerns too?</p>
                            <a href="/" className="banner-btn text-decoration-none">
                                See My Matches
                            </a>
                        </div>
                    </div>
                </div>

                <div className="billboard mx-auto d-flex justify-content-center align-items-center">
                    <h2>Horizontal 970x250</h2>
                    <h3>(Internal Campaign Only)</h3>
                </div>

                <div className="home-content-section2">
                    <h2 className="title-section">Latest Articles</h2>
                    <div className="title-split">
                        <p className="sub-title-section2 m-0 p-0">So you can make better purchase decision</p>
                        <a href="/">
                            See More
                            <span className="ml-4"><i className="fas fa-chevron-right"></i></span>
                        </a>
                    </div>
                    <div className="article-list">
                        {this.renderLatestArticle()}
                    </div>

                    <h2 className="title-section">Latest Reviews</h2>
                    <div className="title-split">
                        <p className="sub-title-section2 m-0 p-0">So you can make better purchase decision</p>
                        <a href="/">
                            See More
                            <span className="ml-4"><i className="fas fa-chevron-right"></i></span>
                        </a>
                    </div>
                    <div className="d-flex">
                        <div className="review-list" style={{width:'820px', margin:'0 20px 90px 0'}}>
                            <div className="d-flex justify-content-between">
                                {/* <Carousel 
                                    value={this.state.latest_review} 
                                    itemTemplate={this.productTemplate}
                                    numVisible={4} 
                                    numScroll={3} 
                                    responsiveOptions={responsiveOptions}
                                /> */}
                                {this.renderReview()}
                            </div>
                        </div>
                        <div className="mr2 d-flex justify-content-center align-items-center">
                            <h3>MR2 2 300x250</h3>
                        </div>
                    </div>
                    
                    <h2 className="title-section">Popular Groups</h2>
                    <div className="title-split">
                        <p className="sub-title-section2 m-0 p-0">Where the beauty TALK are</p>
                        <a href="/">
                            See More
                            <span className="ml-4"><i className="fas fa-chevron-right"></i></span>
                        </a>
                    </div>
                    <div className="d-flex flex-row justify-content-between" style={{margin: '0 0 60px 0'}}>
                        {this.renderGroupList()}
                    </div>
                    
                    <h2 className="title-section">Latest Videos</h2>
                    <div className="title-split">
                        <p className="sub-title-section2 m-0 p-0">Watch and learn, ladies</p>
                        <a href="/">
                            See More
                            <span className="ml-4"><i className="fas fa-chevron-right"></i></span>
                        </a>
                    </div>
                    <div className="d-flex flex-row justify-content-between" style={{margin:'0 0 60px 0'}}>
                        <div className="d-flex flex-column justify-content-between" style={{height:'426px'}}>
                            <div className="position-relative">
                                <iframe title="1" width="750" height="420" src="https://www.youtube.com/embed/X7rWF-q0Ci4" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                        <div className="d-flex flex-column justify-content-between" style={{height:'426px', width:'360px'}}>
                            <div className="position-relative">
                                <iframe title="2" width="360" height="202" src="https://www.youtube.com/embed/a9RA5r22Gsc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                            <div className="position-relative">
                            <iframe title="3" width="360" height="202" src="https://www.youtube.com/embed/a1CysMt-duI" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>

                    <h2 className="title-section">Trending This Week</h2>
                    <div className="title-split">
                        <p className="sub-title-section2 m-0 p-0">See our weekly most reviewed products</p>
                        <a href="/">
                            See More
                            <span className="ml-4"><i className="fas fa-chevron-right"></i></span>
                        </a>
                    </div>

                    <div style={{margin:'0 0 90px 0'}}>
                        
                    </div>
                    
                    <h2 className="title-section">Top Brands</h2>
                    <div className="title-split">
                        <p className="sub-title-section2 m-0 p-0">We all know and love</p>
                        <a href="/">
                            See More
                            <span className="ml-4"><i className="fas fa-chevron-right"></i></span>
                        </a>
                    </div>
                    <div className="d-flex justify-content-between" style={{maxWidth:'1140px'}}>
                        {this.renderLogoBrand()}
                        
                    </div>

                    <h1 className="title-main">Female Daily - Find everything you want to know about beauty on Female Daily</h1>
                    <p className="title-desc m-0 p-0">Product Reviews, Tips & Tricks, Expert and Consumer Opinions, Beauty Tutorials, Discussions, Beauty Workshops, anything! We are here to be your friendly solution to all things beauty, inside and out!</p>

                </div>

                <div className="bottom-ads fixed-bottom mx-auto d-flex align-items-center justify-content-center">
                    <p>Bottom Frame 970x50, 468x50, 320x50</p>
                </div>
            </div>
        )
    }
}

export default Home
