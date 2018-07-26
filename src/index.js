import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Playlist from './Playlist';
import registerServiceWorker from './registerServiceWorker';

import logo from './logo.svg';

const videos = [];
for (let i = 0; i < 5; i++) {
    let video = { imgUrl: logo, title: "LET IT GO " + i };
    videos.push(video);
}

ReactDOM.render(<Playlist videos={videos}/>, document.getElementById('root'));

registerServiceWorker();
