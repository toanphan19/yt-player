import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import YTPlayer from './YTPlayer';



ReactDOM.render(<YTPlayer videoId="q0yVJUuSZ10"/>, document.getElementById('root'));

registerServiceWorker();

