import { Link } from "gatsby";
import React, { Component } from "react";
import YouTube from 'react-youtube';

export default class FullScreenVideo extends Component{

  render() {

    let player;
    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        rel: 0,
        controls:0,
        showinfo:0,
        enablejsapi:1
      }
    };

    function closeVideo(){
      document.querySelector('.fullscreen-video').style.display = 'none';
      player.pauseVideo();
    }

    function onReady(event) {
      player = event.target;
    }

        return (
          <div className="fullscreen-video">
            <div onClick={closeVideo} className="close"></div>
            <YouTube className="gregVideo" videoId="qyV-KhEcjzw" opts={opts} onReady={onReady}/>
            {/* <iframe className="gregVideo" width="560" height="315" src="" frameBorder="0" allowFullScreen></iframe> */}
            <div onClick={closeVideo} className="fullscreen-video-backing"></div>
            <Link to={`/share-your-story/`}>
              <div className="share-advert">
                <div className="share-story-advert-text">
                  <b>Share</b> <i>your</i> <b>story</b>
                </div>
              </div>
            </Link>
          </div>
        )
      }

  }