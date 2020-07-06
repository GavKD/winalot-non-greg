import { Link } from "gatsby"
import React, { Component } from "react"
import icon from "../../static/img/storyIcon-new.png"


export default class storyHero extends Component{

  render() {

    const { pageTitle } = this.props;
    const { heroImage } = this.props;
    const { dom } = this.props;
   


      if(dom){
        return (
          <div className="story-hero">
            <div className="story-title">
          <h1>{pageTitle}</h1>
          <img src={icon} alt={`${pageTitle}`}/>
            </div>  
            <div className="hero-image dom-hero">
              <img src={`../img/${heroImage}`} alt={`${pageTitle}`}/>
            </div>
          </div>
        )

      }else{

        return (
          <div className="story-hero">
            <div className="story-title">
              <h1>{pageTitle}</h1>
            </div>  
            <div className="hero-image">
              <img src={`../img/${heroImage}`} alt={`${pageTitle}`}/>
            </div>
          </div>
        )
      }
      }

  }