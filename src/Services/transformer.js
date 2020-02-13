export function transformer(items) {
    let resultList = []
    resultList = items.map(item => transformItem(item));
    return resultList;


}

export function transformItem(item) {

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
