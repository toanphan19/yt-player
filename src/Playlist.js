import React from 'react';
import './Playlist.css';

class Thumbnail extends React.Component {
  render() {
    const imgUrl = this.props.imgUrl;

    return (
      <div className="video-thumbnail">
        <img src={imgUrl} alt="Thumbnail" />
      </div>
    );
  }
}

class Info extends React.Component {
  render() {
    const title = this.props.title;
    
    return (
      <div className="video-info">
        <span>{title}</span>
      </div>
    );
  }
}

class Video extends React.Component {
  render() {
    const imgUrl = this.props.imgUrl;
    const title = this.props.title;

    return (
      <div className="video-container">
        <Thumbnail imgUrl={imgUrl} />
        <Info title={title} />
      </div>
    );
  }
}

class Playlist extends React.Component {
  render() {
    const videos = this.props.videos;

    return (
      <div id="playlist-container">
        {videos.map(v => 
          <Video imgUrl={v.imgUrl}
            title={v.title}
            key={v.title} />
        )}
      </div>
    );
  }
}

export default Playlist;
