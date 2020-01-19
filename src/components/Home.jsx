import React, { Component } from 'react'
import {Rating} from 'primereact/rating';
import axios from '../config/axios'

class Home extends Component {

    state={
        editor_choice: null
    }

    componentDidMount(){
        this.getEditorChoice()
    }

    getEditorChoice = ()=>{
        axios.get(`/wp`)
        .then(res=>{
            this.setState({editor_choice: res.data["editor's choice"]})

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
                                <img src="" alt="editor" style={{maxWidth: '100%', maxHeight:'100%'}}/>
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

    render() {
        if(this.state.editor_choice === null){
            return null
        }
        return (
            <div className="home-content">
                <div className="top-ads mx-auto"></div>
                <div className="billboard mx-auto"></div>

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
                                <a href="/" className="banner-btn">
                                    See My Matches
                                </a>
                            </div>
                        </div>
                    </div>

                <div className="bottom-ads"></div>
            </div>
        )
    }
}

export default Home
