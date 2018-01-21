import {combineReducers} from 'redux';
import * as Types from '../actions/ActionTypes';

const initialState = {
    videoData:{},
    channelData:{},
    comments:[]
}

const mainReducer = combineReducers(
    {videoDataReducer,
     channelDataReducer,
     commentsDataReducer,
    })

function videoDataReducer(state=initialState.videoData, action){
    switch(action.type){
        case Types.LOAD_VIDEO_DATA_SUCCESS:
            //console.log("data in videoDataReducer: " + JSON.stringify(action.videoData));
            return action.videoData;
        default:
            return state;
    }
}

function channelDataReducer(state=initialState.channelData, action){
    switch(action.type){
        case Types.LOAD_CHANNEL_DATA_SUCCESS:
            //console.log("data in channelDataReducer: " + JSON.stringify(action.channelData));
            return action.channelData;
        default:
            return state;
    }
    return state;
}

function commentsDataReducer(state=initialState.comments, action){
    switch(action.type){
        case Types.LOAD_COMMENTS_DATA_SUCCESS:
            //console.log("data in commentsDataReducer: " + JSON.stringify(action.commentsData));
            return action.commentsData;
        default:
            return state;
    }
    return state;
}

export default mainReducer;