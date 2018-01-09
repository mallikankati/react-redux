import React from 'react';
import ReactDOM from 'react-dom';

import VideoDisplay from './components/VideoDisplay';
import VideoTitle from './components/VideoTitle';
import ChannelInfo from './components/ChannelInfo';
import Comments from './components/Comments';

export default class App extends React.Component {
  render () {
    return (
        <div className="container">
            <VideoDisplay />
            <VideoTitle />
            <ChannelInfo />
            <Comments />
        </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));