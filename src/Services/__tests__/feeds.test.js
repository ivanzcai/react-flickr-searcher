import Feeds from '../feeds'
import axios from 'axios'
jest.mock('axios');
const jsonFlickrFeed = jest.fn();

test('should fetch feeds', async () => {
    const tagsString = "beach,sun,water";
    const response = { data: responseData };
    axios.get.mockResolvedValue(response);
    return Feeds.byTags(tagStrings).then(data => expect(data).toEqual(responseData));

});

const tagStrings = "beach,sun,sand";
const responseData = jsonFlickrFeed(
    {
        title: "Recent Uploads tagged beach, sky and nikkor",
        link: "https://www.flickr.com/photos/",
        "description": "",
        "modified": "2020-02-13T06:30:36Z",
        "generator": "https://www.flickr.com",
        "items": [
            {
                "title": "Shores of Whytecliff",
                "link": "https://www.flickr.com/photos/120552517@N03/49528238868/",
                "media": {
                    "m": "https://live.staticflickr.com/65535/49528238868_ea5b72bb14_m.jpg"
                },
                "date_taken": "2020-02-12T22:30:31-08:00",
                "description": "blah"
            }]
    }
)
