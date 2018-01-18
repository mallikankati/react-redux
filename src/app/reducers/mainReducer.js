import {combineReducers} from 'redux';

const initialState = {
    videoData:[],
    channelData:[],
    comments:[]
}

const mainReducer = combineReducers(
    {videoDataReducer,
     channelReducer,
     commentsReducer,
    })

function videoDataReducer(state=initialState.videoData, action){
    return state;
}

function channelReducer(state=initialState.channelData, action){
    return state;
}

function commentsReducer(state=initialState.comments, action){
    return state;
}

export default mainReducer;