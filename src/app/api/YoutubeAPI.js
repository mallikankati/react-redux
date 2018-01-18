import config from '../../config'

export default class YoutubeAPI{

    static getVideoData(){
        const URL = config.yt.API_URL + '/v3/videos';
        const qParams = '?key='+config.yt.API_KEY+'&part=id,snippet,status,statistics,liveStreamingDetails&id=' + config.yt.VIDEO_ID;
        const request = new Request(URL + qParams, {
            method: 'GET'
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getChannelData(channelId){
        const URL = config.yt.API_URL + '/v3/channels';
        const qParams = '?key='+config.yt.API_KEY+'&part=id,snippet,status,statistics,topicDetails,brandingSettings&id=' + channelId;
        const request = new Request(URL + qParams, {
            method: 'GET'
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }

    static getVideoComments(){
        const URL = config.yt.API_URL + '/v3/commentThreads';
        const qParams = '?key='+config.yt.API_KEY+'&part=snippet&maxResults=100&videoId=' + config.yt.VIDEO_ID;
        const request = new Request(URL + qParams, {
            method: 'GET'
        });

        return fetch(request).then(response => {
            return response.json();
        }).catch(error => {
            return error;
        });
    }
}