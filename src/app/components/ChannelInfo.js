import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as videoActions from '../actions/videoActions';

class ChannelInfo extends React.Component {
    constructor(props){
        super(props);
        this.channelDataFired = false;
        //console.log("video data in ChannelInfo:" + JSON.stringify(this.props.videoData));
        //console.log("channel data in ChannelInfo:" + JSON.stringify(this.props.channelData));
    }

    render () {
        var channelTitle = "";
        if (this.props.videoData.channelTitle){
            channelTitle = this.props.videoData.channelTitle;
        }
        if (this.props.videoData.channelId && !this.channelDataFired){
            this.props.actions.loadChannelData(this.props.videoData.channelId);
            this.channelDataFired = true;
        }
        var publishedAt = "";
        if (this.props.videoData.publishedAt){
            publishedAt = moment(this.props.videoData.publishedAt).format("MMM DD YYYY h:mm:ss a");
        }
        var channelAvatarUrl = "";
        if (this.props.channelData && this.props.channelData.cThumbnailUrl){
            channelAvatarUrl = this.props.channelData.cThumbnailUrl;
            //console.log("channel avatar url: " + this.props.channelData.cThumbnailUrl);
        }
        var avatarStyle = {
            backgroundImage: 'url(' + channelAvatarUrl + ')'
        };
        return (<div className="cinfo">
                <div className="cinfo-avatar">
                    <div className="cinfo-avatar-image" style={avatarStyle}></div>
                </div>
                <div className="cinfo-details">
                    <span className="cinfo-text">{channelTitle}</span>
                    <span className="cinfo-subtext">Published on {publishedAt}</span>
                </div>
            </div>);
    }
}

function mapStateToProps(state, ownProps){
    var vData = {};
    var returnObj = {};
    //console.log("data in ChannelInfo mapStateToProps:" + JSON.stringify(state));
    if (state.videoDataReducer){
        vData = Object.assign({}, state.videoDataReducer);
        returnObj.videoData = vData;
    }
    if (state.channelDataReducer){
        vData = Object.assign({}, state.channelDataReducer);
        returnObj.channelData = vData;
    }
    //console.log("data in ChannelInfo mapStateToProps:" + JSON.stringify(returnObj));
    return returnObj;
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(videoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ChannelInfo);