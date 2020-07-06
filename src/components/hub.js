/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Component } from "react"
import { StaticQuery, graphql, Link } from "gatsby"
import Tile from "./tile"
import ShareAd from "./shareAd"
import VoucherAd from "./voucherAd"
import LazyLoad from 'react-lazy-load';

export default class Hub extends Component{
  
  constructor(props) {
    super(props);
    this.state = { tileSize: 'tile-small' };
  }

  setLargeColumn = () => {
    document.querySelector('.home-grid').classList.add('single-column');
    document.querySelectorAll('.filter')[0].classList.remove('filter-large');
    document.querySelectorAll('.filter')[0].classList.add('filter-large-selected');
    document.querySelectorAll('.filter')[1].classList.add('filter-small');
    document.querySelectorAll('.filter')[1].classList.remove('filter-small-selected');
    this.setState({ tileSize: 'tile-large' })
  }

  setSmallColumn = () => {
    document.querySelector('.home-grid').classList.remove('single-column');
    document.querySelectorAll('.filter')[1].classList.remove('filter-small');
    document.querySelectorAll('.filter')[1].classList.add('filter-small-selected');
    document.querySelectorAll('.filter')[0].classList.remove('filter-large-selected');
    document.querySelectorAll('.filter')[0].classList.add('filter-large');
    this.setState({ tileSize: 'tile-small' })
  }

  render() {


  return(

  <StaticQuery
    query={graphql`
    query storyHub{
      allMarkdownRemark(sort: {
        order:DESC,
        fields: [frontmatter___date]
      } ) {
        edges {
          node {
            frontmatter{
              title
              slug
              thumb
              subtitle
              subtitle2
              dom
              icon
            }
          }
        }
      }
    }
    `}
    render={({allMarkdownRemark}) => (
      <>
      {/* insert all the ads */}
      {/* {allMarkdownRemark.edges.splice(3, 0, "Share")} */}
       <div className="story-hub-con">
         <div className="story-filter">
          <div className="filter-label">Discover stories</div>
          <div className="filter-label-buttons">
            <div onClick={this.setLargeColumn} className="filter filter-large"></div>
            <div onClick={this.setSmallColumn} className="filter filter-small-selected"></div>
          </div>
         </div>
         <div className="home-grid">
         {allMarkdownRemark.edges.map( (edge, index) => {

          if(edge.node.frontmatter.title == 'advert'){ // show an ad where we need to

            if(edge.node.frontmatter.subtitle == 'share-ad')
            {

              return (
                  <ShareAd key={index} tileSize={this.state.tileSize} tileNum={index}></ShareAd>
    
              )
            }
            // else
            // {
            //   return (

            //       <Tile key={index} advert={true} dom={edge.node.frontmatter.dom} domHome={edge.node.frontmatter.icon} tileSize={this.state.tileSize} tileNum={index} tileLink={edge.node.frontmatter.slug} tileImg={edge.node.frontmatter.thumb} tileTitle={edge.node.frontmatter.subtitle} tileSubtitle={edge.node.frontmatter.subtitle2}></Tile>
            //   )
            // }

          }
          else{

           return (
  
                <Tile key={index} advert={false} dom={edge.node.frontmatter.dom} domHome={edge.node.frontmatter.icon} tileSize={this.state.tileSize} tileNum={index} tileLink={edge.node.frontmatter.slug} tileImg={edge.node.frontmatter.thumb} tileTitle={edge.node.frontmatter.subtitle} tileSubtitle={edge.node.frontmatter.subtitle2}></Tile>
           )

          }
          
         })}
         </div>
        </div>
      </>
    )}
  />

  )
}



}
