import React from 'react';
import ReactDOM from 'react-dom';

export default class ChannelInfo extends React.Component {
  render () {
    return (<div className="cinfo">
                <div className="cinfo-avatar"></div>
                <div className="cinfo-details">
                     <span className="cinfo-text">FELXIE</span>
                     <span className="cinfo-subtext">Published on </span>
                </div>
            </div>);
  }
}