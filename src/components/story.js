import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React, { Component } from "react"
import Content from './content'
import StoryHero from './storyHero'
import SocialShare from './socialShare'
import VoucherAd from './voucherAd';

import 'intersection-observer'
import { InView } from 'react-intersection-observer'

let firstLoad = true;

export default class story extends Component{

  render() {

    const { title } = this.props;
    const { thumb } = this.props;
    const { html } = this.props;
    const { url } = this.props;
    const { slug } = this.props;
    const { dom } = this.props;
    const { handleView } = this.props;
    const { showAd } = this.props;
    const tags = ['greatbritishdogs'];
    const { mainArticle } = this.props;

    const inViewHandler = (inView, entry) => {

      if((mainArticle)&&(firstLoad))
      {
        firstLoad = false;

        if(inView)
        {
          handleView();
        }

      }
      else 
      {
        if(inView)
        {
          handleView();
          window.history.replaceState({},entry.target.id,`${url}${entry.target.id}/`)
        }
      }

    }
       
    // if(showAd)
    // {
    //   return (
    //     <InView threshold={0.2} id={slug} className="story" as="div" onChange={(inView, entry) => inViewHandler(inView, entry)}>
    //       <StoryHero pageTitle={title} dom={dom} heroImage={thumb}></StoryHero>
    //         <div className="story-content">
    //           <Content storyContent={html}/>
    //         </div>
    //         <SocialShare
    //           socialConfig={{
    //             config: {
    //               url: `${url}${slug}`,
    //               title,
    //             },
    //           }}
    //           tags={tags}
    //         ></SocialShare>
    //         <div className="story-end-line"></div>
    //         <br/>
    //         <VoucherAd></VoucherAd>
    //         <br/>
    //         <div className="story-end-line"></div>
    //         <br/>
    //   </InView>

    //   )
    // }
    // else
    // {
      return (
        <InView threshold={0.2} id={slug} className="story" as="div" onChange={(inView, entry) => inViewHandler(inView, entry)}>
          <StoryHero pageTitle={title} dom={dom} heroImage={thumb}></StoryHero>
            <div className="story-content">
              <Content storyContent={html}/>
            </div>
            <SocialShare
              socialConfig={{
                config: {
                  url: `${url}${slug}`,
                  title,
                },
              }}
              tags={tags}
            ></SocialShare>
            <div className="story-end-line"></div>
            <br/>
      </InView>

      )
    }


      }   

  // }