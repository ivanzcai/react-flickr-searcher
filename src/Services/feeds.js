import axios from 'axios'
const endpoint = "https://cors-anywhere.herokuapp.com/https://www.flickr.com/services/feeds/photos_public.gne"  //TODO: a hack to overcome the same orgin policy on the local environment!

// const tagsString = "beach,sun,water"
class Feeds {
    static byTags(tagsString) {
        const cleanTags = tagsString.replace(/[ ,;]+/g, ",");  // tags can be delimited by space, comma or semicolumn
        return axios.get(`${endpoint}?tags=${cleanTags}&format=json&nojsoncallback=true`)
            .then(response => {
                return response.data
            });
    }
}

export default Feeds;