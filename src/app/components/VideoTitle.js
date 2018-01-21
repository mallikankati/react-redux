import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as videoActions from '../actions/videoActions';

class VideoTitle extends React.Component {
    constructor(props){
        super(props);
        //console.log("video data in VideoDisplay:" + JSON.stringify(this.props.videoData));
    }
    render () {
        var title = "";
        var viewCount = 0;
        if (this.props.videoData.title){
            title = this.props.videoData.title;
        }
        if (this.props.videoData.stats){
            viewCount = this.props.videoData.stats.viewCount;
        }
        return (<div className="vtitle">
                <div className="vtitle-details">
                     <span className="vtitle-text">{title}</span>
                     <span className="vtitle-subtext">{viewCount} views</span>
                </div>
            </div>);
  }
}

function mapStateToProps(state, ownProps){
    const vData = Object.assign({}, state.videoDataReducer);
    //console.log("video data in mapStateToProps:" + JSON.stringify(vData));
    return {videoData:vData};
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(videoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(VideoTitle);