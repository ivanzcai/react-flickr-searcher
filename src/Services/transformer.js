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
    result.details.author = extractName(item.author);
    result.details.date = item.date_taken.substring(0, 10)
    result.tags = item.tags.split(" ");
    if (result.tags[0] === "") {
        result.tags.shift();
    }
    return result;


}

function extractName(str) {
    let name = ""
    if (str.length > 0) {
        let regx2 = /\(\".*?\"\)/;
        name = regx2.exec(str)[0];
        name = name.substr(2, name.length - 4); // removing the bracket and double qoutes
    }
    return name;
}
//mystring = mystring.replace('/r','/');