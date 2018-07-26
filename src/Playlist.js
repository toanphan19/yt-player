import React, { Component } from 'react';
import './Playlist.css';

class Thumbnail extends Component {
  // Input: imgUrl
  render() {
    return (
      <div className="video-thumbnail">
        <img width="120" src={this.props.imgUrl} alt="Thumbnail" />
      </div>
    );
  }
}

class Info extends Component {
  // Input: title
  render() {
    return (
      <div className="video-info">
        <span>{this.props.title}</span>
      </div>
    );
  }
}

class Video extends Component {
  // Input: imgUrl

  render() {
    return (
      <div className="video-container">
        <Thumbnail imgUrl={this.props.imgUrl} />
        <Info title={this.props.title} />
      </div>
    );
  }
}

class Playlist extends Component {
  // Input: videos[]

  render() {
    return (
      <div className="playlist-container">
        {this.props.videos.map(video => {
          return (<Video imgUrl={video.imgUrl} title={video.title} />);
        })}
      </div>
    );
  }
}

export default Playlist;
