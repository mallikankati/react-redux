import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as videoActions from '../actions/videoActions';

class Comments extends React.Component {

  constructor(props){
        super(props);
        this.commentsDataFired = false;
        //console.log("video data in ChannelInfo:" + JSON.stringify(this.props.videoData));
        //console.log("channel data in ChannelInfo:" + JSON.stringify(this.props.channelData));
  }

  render () {
      var commentCount = "";
      if (this.props.videoData && this.props.videoData.stats){
          commentCount = this.props.videoData.stats.commentCount;
      }
      if ((this.props.commentsData || this.props.commentsData.length == 0) && !this.commentsDataFired){
          this.props.actions.loadCommentsData();
          this.commentsDataFired = true;
      }
      var commentsData = this.props.commentsData;
      var commentList = [];
      if (commentsData){
          commentList = commentsData.map((comment, i) =>
                             <CommentRender comment={comment} key={i} />
                        );
          //console.log("comments data in render :" + JSON.stringify(commentsData))
      }
      return (<div className="vcomments">
                <div className="vcomments-summary">
                     <span className="vcomments-total">{commentCount}</span>
                     <span className="vcomments-summary-txt">Comments</span>
                </div>
                <ul className="vcomments-box">
                     {commentList}
                </ul>
            </div>);
  }
}

function mapStateToProps(state, ownProps){
    var vData = {};
    var returnObj = {};
    if (state.videoDataReducer){
        vData = Object.assign({}, state.videoDataReducer);
        returnObj.videoData = vData;
    }
    if (state.commentsDataReducer){
        vData = Object.assign([], state.commentsDataReducer);
        returnObj.commentsData = vData;
    }
    //console.log("video data in mapStateToProps:" + JSON.stringify(vData));
    return returnObj;
}

function mapDispatchToProps(dispatch){
    return {
        actions: bindActionCreators(videoActions, dispatch)
    };
}

const  CommentRender = ({comment}, {key}) => {
    var userAvatarUrl = "";
    var userName = "";
    var publishedAt = "";
    var commentText  = "";
    var commentId = "";
    if (comment){
        if (comment.id){
            commentId = comment.id;
        }
        if (comment.authorProfileImageUrl){
            userAvatarUrl = comment.authorProfileImageUrl;
            //console.log("comment avatar url: " + comment.uThumbnailUrl);
        }
        if (comment.authorName){
            userName = comment.authorName;
        }
        if (comment.publishedAt){
            publishedAt = moment(comment.publishedAt).fromNow();
        }
        if (comment.text){
            commentText = comment.text;
        }
    }
    var avatarStyle = {
        backgroundImage: 'url(' + userAvatarUrl + ')'
    };

    return (<li className="vcomment-details" key={key}>
                <div className="vcomment-header">
                    <div className="vcomment-avatar">
                        <div className="vcomment-avatar-image" style={avatarStyle}>
                        </div>
                    </div>
                    <div className="vcomment-author">
                        <div className="vcomment-author-name">{userName}</div>
                        <div className = "vcomment-time">{publishedAt}</div>
                    </div>
                </div>
                <div className ="vcomment-text">{commentText}</div>
            </li>);
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments);


