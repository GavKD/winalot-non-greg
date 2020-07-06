import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React, { Component } from "react"
import ClampLines from 'react-clamp-lines';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
import LazyLoad from 'react-lazy-load';

export default class tile extends Component{

  render() {

    const { tileSize } = this.props;
    const { tileNum } = this.props;
    const { tileLink } = this.props;
    const { tileImg } = this.props;
    const { tileTitle } = this.props;
    const { tileSubtitle } = this.props;
    const { advert } = this.props;
    const { dom } = this.props;
    const { domHome } =this.props;

    // if(advert)
    // {
    //   return (
        
    //     <div key={tileNum} id={`tile${tileNum}`} className={`tile tile-spon ${tileSize}`}>
    //       <OutboundLink href="https://winalot.katalystcampaigns.co.uk/" target="_blank">
    //       {/* <LazyLoad 
    //                 width={100}
    //                 height={100}
    //                 debounce={false}
    //                 offsetVertical={500}
    //                 > */}
    //           <div className="cell-background" style={{
    //           backgroundImage:`url(img/${tileImg})`,
    //           }}>
    //           </div>
    //           {/* </LazyLoad> */}
    //           <div className="cell-text spon-text">
    //             <div className="text-headline">
    //               <span>{tileTitle}</span> 
    //             </div>
    //             <ClampLines
    //               text={tileSubtitle}
    //               id="really-unique-id"
    //               lines={3}
    //               buttons={false}
    //               ellipsis="..."
    //               lessText="Collapse"
    //               className="text-headline"
    //               innerElement="p"
    //             />
    //           </div>
    //       </OutboundLink>
    //     </div>
    //   )
    // }
    // else{

      if (dom) {
        return (

          <div key={tileNum} id={`tile${tileNum}`} className={`tile ${tileSize}`}>
          <LazyLoad 
          debounce={false}
          offsetVertical={0}
          >
            <Link to={`/${tileLink}/`}>
              <div className="cell-background" style={{
              backgroundImage:`url(img/${tileImg})`,
              }}>
                <span className="domIcon" style={{
              backgroundImage:`url(img/${domHome})`,
              }}></span>
              </div>
              <div className="cell-text dom">
                <div className="text-headline dom">
                    <span>{tileTitle}</span>
                </div>
                <ClampLines
                    text={tileSubtitle}
                    id="really-unique-id"
                    lines={2}
                    buttons={false}
                    ellipsis="..."
                    lessText="Collapse"
                    className="text-subline dom"
                    innerElement="p"
                  />
              </div>
            </Link>
            </LazyLoad>
          </div>
  
        )
      }
      else{
        return (

          <div key={tileNum} id={`tile${tileNum}`} className={`tile ${tileSize}`}>
          <LazyLoad 
          debounce={false}
          offsetVertical={0}
          >
            <Link to={`/${tileLink}/`}>
              <div className="cell-background" style={{
              backgroundImage:`url(img/${tileImg})`,
              }}>
              </div>
              <div className="cell-text">
                <div className="text-headline">
                    <span>{tileTitle}</span>
                </div>
                <ClampLines
                    text={tileSubtitle}
                    id="really-unique-id"
                    lines={2}
                    buttons={false}
                    ellipsis="..."
                    lessText="Collapse"
                    className="text-subline"
                    innerElement="p"
                  />
              </div>
            </Link>
            </LazyLoad>
          </div>
  
        )
      }
      
    }

      }

   

  // }