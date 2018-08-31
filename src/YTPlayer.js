import React from 'react';

import IFrame from './IFrame';
import Playlist from './Playlist';
import SubmitForm from './SubmitForm';

import './YTPlayer.css';


class YTPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      videos: (this.props.videos === undefined)? [] : this.props.videos,
      iFrameVideoId: this.props.videoId
    }
    
    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleOnClickVideo = this.handleOnClickVideo.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleInputTextChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  handleOnClickVideo(index) {
    window.player.loadPlaylist(this.state.videos.map(x => x.id), index);
  }

  handleSubmitButton(e) {
    e.preventDefault();

    let apiKey = process.env.REACT_APP_YT_API_KEY;

    const URL = this.state.inputText;
    const playlistID = extractPlaylistId(URL);

    // GET request to youtube data api 
    const request = new XMLHttpRequest();
    request.open("GET",
      "https://www.googleapis.com/youtube/v3/playlistItems?"
      + "key=" + apiKey
      + "&part=snippet"
      + "&maxResults=50"
      + "&playlistId=" + playlistID
    );

    let data;
    request.onload = () => {
      data = JSON.parse(request.responseText);

      const videos = data.items.map(x => ({
        id: x.snippet.resourceId.videoId,
        imgUrl: x.snippet.thumbnails.default.url,
        title: x.snippet.title,
      }));
      this.setState({
        videos: videos
      });

      window.localStorage.setItem("ytvideos", JSON.stringify(videos));

      // Using window.player like this might not be good, probably?
      window.player.loadPlaylist(this.state.videos.map(x => x.id));

    }
    request.send();

    // Test with gapi

    window.gapi.client.youtube.playlistItems.list({
      'part': 'snippet, contentDetails',
      'playlistId': playlistID
    }).then(function (response) {
      let playlists = response.result.items;
      console.log("This is gapi talking: ");
      console.log(playlists);
    });

    // End of test with gapi

  
    const videoId = this.state.inputText;
    this.setState({
      iFrameVideoId: videoId
    });

  }

  render() {
    return (
      <div>
        <div id="player-container" className="container-fluid d-flex justify-content-center">
          <IFrame
            videoId={this.state.iFrameVideoId}
            height={window.innerHeight * 0.6}
            width={window.innerHeight * 0.6 * 16 / 9}/>
          <Playlist
            videos={this.state.videos}
            handleOnClickVideo={this.handleOnClickVideo} />
        </div>
        <SubmitForm
          inputText={this.state.inputText}
          handleInputTextChange={this.handleInputTextChange}
          handleSubmitButton={this.handleSubmitButton} />
      </div>
    );
  }
}

export default YTPlayer;


// Utilities functions
function extractPlaylistId(URL) {
  if (URL.indexOf("list=") > 0) {
    let startIndex = URL.indexOf("list=") + "list=".length;
    let endIndex = URL.indexOf("&", startIndex);
    
    if (endIndex < 0) {
      return URL.slice(startIndex);
    }
    return URL.slice(startIndex, endIndex);
  }

  console.log("Error: Cannot find playlistId in the URL.");
  return URL;
}