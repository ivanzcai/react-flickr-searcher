import React from 'react'
import Thumbnail from './Thumbnail'
import Details from './Details';
import Tags from './Tags';


function Card({ cardInfo, index }) {
    console.log("cardInfo", cardInfo);
    const { thumbnail_link, details, tags } = { ...cardInfo };
    return (
        <div className="card" key={`card_${index}`} >
            <Thumbnail thumbnail_link={thumbnail_link} />
            <Details details={details} />
            <Tags tags={tags} />
        </div>
    );
}

export default Card;
