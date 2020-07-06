import { Link } from "gatsby"
import PropTypes from "prop-types"
import React, { Component } from "react"

export default class VideoHeader extends Component{

  render() {

        function openVideo(){
          document.querySelector('.fullscreen-video').style.display = 'block';
        }

        return (
                <div className="video-header-con">
                  <div className="video-con">
                    <div onClick={openVideo} className="video-play"></div>
                    <video playsInline autoPlay={true} muted={true} loop={true} muted  src="./video/spring-loop.mp4" placeholder="./img/spring-loop.jpg"></video>
                  </div>
                  <div className="header-intro">
                    <div className="header-title">Great British Dogs</div>
                    <div className="header-intro-text">Home for stories of everyday canine love, loyalty and bravery. <span>Read on for some amazing dogs and tell us your tale…</span></div>
                  </div>
                  <div className="header-continue-arrow"></div>
                </div>
              )

        }
}
