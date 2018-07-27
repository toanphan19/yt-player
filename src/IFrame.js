import React from "react";

class IFrame extends React.Component {
  // Input: videoId, height, width

  constructor(props) {
    super(props);
    this.init();

    window.onYouTubeIframeAPIReady = () => {
      window.player = new window.YT.Player('player', {
        height: this.props.height,
        width: this.props.width,
        videoId: this.props.videoId,
        // playerVars: { 'autoplay': 1 },
        events: {
          onStateChange: this.autoPlay
        }
      });
    }
  }

  autoPlay(event) {
    // If queueing finished, autoplay
    if (event.data === 5) {
      window.player.playVideo();
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