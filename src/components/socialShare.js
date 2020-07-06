import { Link } from "gatsby"
import PropTypes from 'prop-types';
import React, { Component } from "react"
import {
	FacebookShareButton,
	TwitterShareButton,
} from 'react-share';

const SocialShare = ({ socialConfig, tags }) => (
          <div className="story-footer">
            <TwitterShareButton url={socialConfig.config.url} className="button is-outlined is-rounded twitter" title={socialConfig.config.title} hashtags={tags} >
              <div className="social-link story-footer-twitter"></div>
            </TwitterShareButton>
            <FacebookShareButton url={socialConfig.config.url} className="button is-outlined is-rounded facebook" >
              <div className="social-link story-footer-facebook"></div>
            </FacebookShareButton>
            <a href="javascript:document.body.scrollTop = 0;document.documentElement.scrollTop = 0;"><div className="back-to-top">Back to top</div></a>
          </div>
        );

  SocialShare.propTypes = {
    socialConfig: PropTypes.shape({
      config: PropTypes.shape({
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
      }),
    }).isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
  };
  SocialShare.defaultProps = {
    tags: [],
  };

  export default SocialShare;