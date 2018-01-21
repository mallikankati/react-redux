import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as videoActions from '../actions/videoActions';

class VideoDisplay extends React.Component {
    constructor(props){
        super(props);
        //console.log("video data in VideoDisplay:" + JSON.stringify(this.props.videoData));
    }

    render () {
        var vThumbnailUrl = "";
        if (this.props.videoData.vThumbnailUrl){
            vThumbnailUrl = this.props.videoData.vThumbnailUrl;
        }
        //console.log("vThumbnailUrl :" + vThumbnailUrl);
        return (<div className="vdisplay">
               <img src={vThumbnailUrl} />
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

export default connect(mapStateToProps, mapDispatchToProps)(VideoDisplay);