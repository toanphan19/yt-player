import React from "react";

class IFrame extends React.Component {
  constructor() {
    super();
    this.init();

    window.onYouTubeIframeAPIReady = () => {
      this.player = new window['YT'].Player('player', {
        height: '405',
        width: '720',
        videoId: 'M7lc1UVf-VE',
        events: {

        }
      });
    }

  }

  init() {
    // This code loads the IFrame Player API code asynchronously.
    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
  }

  render() {
    return (
      <div id="player"></div>
    );
  }
}

export default IFrame;