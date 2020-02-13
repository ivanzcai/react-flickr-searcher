export function transformer(response) {

    return mockResults;
}

export function tranformItem(item) {

    let result = {
        details: {

        }
    };

    result.thumbnail_link = item.media.m;
    result.full_image_link = item.link;
    result.details.author = item.author;
    result.details.date = item.date_taken.substring(0, 10)
    result.tags = item.tags.split(" ");

    return result;


}

let mockResults = [
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