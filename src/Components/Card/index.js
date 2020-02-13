import React from 'react'
import Thumbnail from './Thumbnail'
import Details from './Details';
import Tags from './Tags';


function Card({ cardInfo, index }) {
    console.log("cardInfo", cardInfo);
    const { thumbnail_link, details, tags, full_image_link } = { ...cardInfo };
    return (
        <div className="col-md-4">
            <div className="card mb-4 shadow-sm" key={`card_${index}`} >
                <Thumbnail thumbnail_link={thumbnail_link} full_image_link={full_image_link} />
                <Details details={details} />
                <Tags tags={tags} />
            </div>
        </div>
    );
}

export default Card;
