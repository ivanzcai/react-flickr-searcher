import axios from 'axios'
const endpoint = "https://www.flickr.com/services/feeds/photos_public.gne"  //TODO: put it in .env files

// expecting tagsString = "beach,sun,water"
class Feeds {
    static byTags(tagsString) {
        return axios.get(`${endpoint}?tags=${tagsString}`).then(response => response.data);
    }
}

export default Feeds;