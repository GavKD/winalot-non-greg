import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React, { Component } from "react"

export default class shareAd extends Component{

  render() {

    const { tileSize } = this.props;
    const { tileNum } = this.props;

        return (

          
          <div key={tileNum} id={`tile${tileNum}`} className={`tile share-story ${tileSize}`}>
          <Link to={`/share-your-story/`}>
            <div className="share-blanket">
              <div className="share-story-text">
              <b>Share</b><br/> <i>your</i> <b>story <br/> for a chance <br/> to win a <br/> monthly <br/> hamper </b>
              </div>
            </div>
          </Link>
          </div>

        )
      }

   

  }