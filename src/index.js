import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import YTPlayer from './YTPlayer';


if (localStorage.getItem("ytvideos") === null) {
  ReactDOM.render(
    <YTPlayer videoId="q0yVJUuSZ10"/>,
    document.getElementById('root')
  );
} else {
  let videos = JSON.parse(localStorage.getItem("ytvideos"));
  
  ReactDOM.render(
    <YTPlayer videoId={videos[0].id} videos={videos}/>,
    document.getElementById('root')
  );
}

registerServiceWorker();

