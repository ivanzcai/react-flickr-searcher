import Feeds from '../feeds'
import axios from 'axios'
jest.mock('axios');

test('should fetch feeds by axios get', async () => {
    const tagsString = "beach,sun,water";
    const response = { data: responseData };
    axios.get.mockResolvedValue(response);
    return Feeds.byTags(tagStrings).then(data => expect(data).toEqual(responseData));

});


const tagStrings = "beach,sun,sand";

const responseData = {
    test: "test"
}
