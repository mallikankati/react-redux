import React from 'react';
import ReactDOM from 'react-dom';

export default class VideoTitle extends React.Component {
  render () {
    return (<div className="vtitle">
                <div className="vtitle-details">
                     <span className="vtitle-text">Top 10 crazy longest goals by GOALKEEPER</span>
                     <span className="vtitle-subtext">8283485 views</span>
                </div>
            </div>);
  }
}