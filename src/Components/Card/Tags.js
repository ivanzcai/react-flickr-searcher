import React from 'react'


function Tags({ tags }) {

    return (
        <div className="tags">
            {
                tags && tags.map(tag => {
                    return (<button type="button" key={tag} className="btn btn-outline-info btn-sm">{tag}</button>)
                })
            }
        </div>
    );


}

export default Tags;
