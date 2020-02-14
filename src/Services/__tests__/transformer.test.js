import { transformer, transformItem } from '../transformer'

test('return expected data using data transformItem function ', () => {

    expect(transformItem(inputData[0])).toEqual(expectResult[0])

});

test('return expected data using data transformItem function 2', () => {

    expect(transformItem(inputData[1])).toEqual(expectResult[1])

});


test('return expected data using data transformer function ', () => {

    expect(transformer(inputData)).toEqual(expectResult)

});

const inputData = [
    {
        title: "title1",
        link: "https://test.com/2",
        media: {
            m: "https://test.com/1.jpg"
        },
        date_taken: "2020-01-25T16:22:29-08:00",
        description: " ",
        published: "2020-02-13T09:58:00Z",
        author: "nobody@flickr.com (\"ivan\")",
        author_id: "16230743@N06",
        tags: "sea beach sun bondi"
    },
    {
        title: "title2",
        link: "https://test2.com/2",
        media: {
            m: "https://test2.com/1.jpg"
        },
        date_taken: "2020-02-25T16:22:29-08:00",
        description: " ",
        published: "2020-02-13T09:58:00Z",
        author: "nobody@flickr.com (\"john\")",
        author_id: "16230743@N06",
        tags: "moon bat dark"
    },


]

const expectResult = [
    {
        thumbnail_link: "https://test.com/1.jpg",
        full_image_link: "https://test.com/2",
        details: {
            author: "ivan",
            date: "2020-01-25"
        },
        tags: ["sea", "beach", "sun", "bondi"]
    },
    {
        thumbnail_link: "https://test2.com/1.jpg",
        full_image_link: "https://test2.com/2",
        details: {
            author: "john",
            date: "2020-02-25"
        },
        tags: ["moon", "bat", "dark"]
    },
]
