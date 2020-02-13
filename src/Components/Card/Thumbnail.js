import React from 'react'


function Thumbnail({ thumbnail_link }) {
    console.log("thumbnail_link", thumbnail_link)
    return (
        <div className="thumbnail">
            <img width="100%" height="225" src={thumbnail_link} />
        </div>
    );
}

export default Thumbnail;
