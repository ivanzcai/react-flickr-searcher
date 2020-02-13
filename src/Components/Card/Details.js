import React from 'react'


function Details({ details }) {
    const { author, date } = { ...details }
    return (
        <div className="details card-body">
            <small className="text-muted card-date">{date}</small>
            <h4 className="author">{author}</h4>
        </div>
    );
}

export default Details;
