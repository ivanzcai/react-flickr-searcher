import React from 'react'
import './Thumbnail.css'

function Thumbnail({ thumbnail_link, full_image_link }) {
    console.log("thumbnail_link", thumbnail_link)
    return (
        <div className="thumbnail">
            <img width="100%" height="225" onClick={() => window.open(full_image_link, "_blank")} src={thumbnail_link} />
            <a href={full_image_link}>Full Image</a>
        </div>
    );
}

export default Thumbnail;
