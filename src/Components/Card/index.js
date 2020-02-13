import React from 'react'
import Thumbnail from './Thumbnail'
import Details from './Details';
import Tags from './Tags';


function Card(cardInfo) {
    return (
        <div className="card">
            <Thumbnail />
            <Details />
            <Tags />
        </div>
    );
}

export default Card;
