import * as Types from './ActionTypes';
import YoutubeAPI from '../api/YoutubeAPI';

export function loadVideoData(){
    return function(dispatch){
        return YoutubeAPI.getVideoData().then(data =>{
            var videoData = convertVideoData(data);
            dispatch({type:Types.LOAD_VIDEO_DATA_SUCCESS, videoData});
        }).catch(error => {
            throw(error);
        });
    }
}

export function convertVideoData(data){
    var conData = {};
    if (data.items){
        //console.log("items :" + JSON.stringify(data.items[0]));
        var item = data.items[0];
        conData.videoId = item.id;
        conData.title = item.snippet.title;
        conData.description = item.snippet.description;
        conData.publishedAt = item.snippet.publishedAt;
        conData.channelId = item.snippet.channelId;
        conData.channelTitle = item.snippet.channelTitle;
        conData.vThumbnailUrl = item.snippet.thumbnails.medium.url;
        conData.stats = item.statistics;
        //console.log("item in loadVideoData:" + JSON.stringify(conData));
    }
    return conData;
}

export function loadChannelData(channelId){
    return function(dispatch){
        return YoutubeAPI.getChannelData(channelId).then(data =>{
            var  channelData = convertChannelData(data);
            dispatch({type:Types.LOAD_CHANNEL_DATA_SUCCESS, channelData});
        }).catch(error => {
            throw(error);
        });
    }
}

export function convertChannelData(data){
    var conData = {};
    //console.log("channel data in convertChannelData: " + JSON.stringify(data));
    if (data.items){
        var item = data.items[0];
        conData.channelId = item.id;
        conData.channelTitle = item.snippet.title;
        conData.description = item.snippet.description;
        conData.publishedAt = item.snippet.publishedAt;
        conData.cThumbnailUrl = item.snippet.thumbnails.medium.url;
        conData.stats = item.statistics;
        //console.log("channel data in loadChannelData:" + JSON.stringify(conData));
    }
    return conData;
}

export function loadCommentsData(){
    return function(dispatch){
        return YoutubeAPI.getVideoComments().then(data =>{
            var  commentsData = convertCommentsData(data);
            dispatch({type:Types.LOAD_COMMENTS_DATA_SUCCESS, commentsData});
        }).catch(error => {
            throw(error);
        });
    }
}

export function convertCommentsData(data){
    var commentsArray = [];
    if (data.items){
        //console.log("comment items :" + JSON.stringify(data.items));
        //console.log("item in loadVideoData:" + JSON.stringify(conData));
        for (const [index, item] of data.items.entries()) {
            var comData = {};
            comData.id = item.snippet.topLevelComment.id;
            comData.authorName = item.snippet.topLevelComment.snippet.authorDisplayName;
            comData.authorProfileImageUrl = item.snippet.topLevelComment.snippet.authorProfileImageUrl;
            comData.authorChannelUrl = item.snippet.topLevelComment.snippet.authorChannelUrl;
            comData.authorChannelId = item.snippet.topLevelComment.snippet.authorChannelId.value;
            comData.text = item.snippet.topLevelComment.snippet.textOriginal;
            comData.publishedAt = item.snippet.topLevelComment.snippet.updatedAt;
            commentsArray[index] = comData;
        }
        //console.log("comment items :" + JSON.stringify(commentsArray));
    }
    return commentsArray;
}
