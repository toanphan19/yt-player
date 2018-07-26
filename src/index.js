import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Playlist from './Playlist';
import IFrame from './IFrame';
import logo from './logo.svg';

const videos = [];
for (let i = 0; i < 5; i++) {
  let video = { imgUrl: logo, title: "LET IT GO " + i };
  videos.push(video);
}

ReactDOM.render(
  <div>
    <IFrame />
    <Playlist videos={videos} />
  </div>,
  document.getElementById('root')
);

registerServiceWorker();
