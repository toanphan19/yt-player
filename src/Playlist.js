import React from 'react';
import './Playlist.css';

class Thumbnail extends React.Component {
  // Input: imgUrl
  render() {
    return (
      <div className="video-thumbnail">
        <img src={this.props.imgUrl} alt="Thumbnail" />
      </div>
    );
  }
}

class Info extends React.Component {
  // Input: title
  render() {
    return (
      <div className="video-info">
        <span>{this.props.title}</span>
      </div>
    );
  }
}

class Video extends React.Component {
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

class Playlist extends React.Component {
  // Input: videos[]

  render() {
    return (
      <div id="playlist-container">
        {this.props.videos.map(video => {
          return (<Video imgUrl={video.imgUrl} title={video.title} />);
        })}
      </div>
    );
  }
}

export default Playlist;
