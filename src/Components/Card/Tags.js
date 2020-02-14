import React from 'react'
import './Tags.css'


//Todo: as a feature with more time, it would be good to make the tags clickable
function Tags({ tags }) {
    return (
        <div className="tags">
            {
                tags && tags.map(tag => {
                    return (<button type="button" className="disable" key={tag} className="btn btn-outline-info btn-sm">{tag}</button>)
                })
            }
        </div>
    );


}

export default Tags;
