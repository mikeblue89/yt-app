import axios from "axios";
const KEY = 'AIzaSyD3N01dKz6-6HV7csWz4jpoGJcBPSVhwUU';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
});
