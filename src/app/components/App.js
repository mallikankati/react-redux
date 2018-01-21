import React, {PropTypes} from 'react';
import ReactDOM from 'react-dom';

import VideoDisplay from './VideoDisplay';
import VideoTitle from './VideoTitle';
import ChannelInfo from './ChannelInfo';
import Comments from './Comments';

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
