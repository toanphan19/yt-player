import React from 'react';

import IFrame from './IFrame';
import Playlist from './Playlist';
import SubmitForm from './SubmitForm';


class YTPlayer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      videos: [],
      iFrameVideoId: this.props.videoId
    }

    this.handleInputTextChange = this.handleInputTextChange.bind(this);
    this.handleSubmitButton = this.handleSubmitButton.bind(this);
  }

  handleInputTextChange(e) {
    this.setState({
      inputText: e.target.value
    });
  }

  handleSubmitButton(e) {
    e.preventDefault();

    let apiKey = "AIzaSyBgigvE-q9zKH-saSKkOtVrqU52yhLllTQ";
    const URL = this.state.inputText;
    const playlistID = extractPlaylistID(URL);

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
      })

      // Using window.player like this might good at all, but it's all I can do for now

      window.player.cuePlaylist(videos.map(x => x.id));
      window.player.playVideo();
    }
    request.send();
  
    const videoId = this.state.inputText;
    this.setState({
      iFrameVideoId: videoId
    });

  }

  render() {
    const videos = this.state.videos;

    return (
      <div className="container">
        <IFrame videoId={this.state.iFrameVideoId}/>
        <Playlist videos={videos} />
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
function extractPlaylistID(URL) {
  return URL;
}