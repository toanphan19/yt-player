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
  constructor(props) {
    super(props);
    this.handleOnClickVideo = this.handleOnClickVideo.bind(this);
  }

  handleOnClickVideo(e) {
    this.props.handleOnClickVideo(this.props.index);
  }
  
  render() {
    const imgUrl = this.props.imgUrl;
    const title = this.props.title;

    return (
      <div className="video-container" onClick={this.handleOnClickVideo}>
        <Thumbnail imgUrl={imgUrl} />
        <Info title={title} />
      </div>
    );
  }
}

class Playlist extends React.Component {
  constructor(props) {
    super(props);
    this.handleOnClickVideo = this.handleOnClickVideo.bind(this);
  }

  handleOnClickVideo(index) {
    this.props.handleOnClickVideo(index);
  }

  render() {
    const videos = this.props.videos;

    return (
      <div id="playlist-container">
        {videos.map((v, index) => 
          <Video imgUrl={v.imgUrl}
            title={v.title}
            key={v.title}
            index={index}
            handleOnClickVideo={this.handleOnClickVideo} />
        )}
      </div>
    );
  }
}

export default Playlist;
