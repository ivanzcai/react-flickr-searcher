import React from 'react'
import './Tags.css'
import { useDispatch } from 'react-redux'



function Tags({ tags }) {
    const dispatch = useDispatch();
    return (
        <div className="tags">
            {
                tags && tags.map(tag => {
                    return (<button type="button" key={tag} onClick={(e) => { dispatch({ type: "ADD_TAG", payload: tag }) }} className="btn btn-outline-info btn-sm">{tag}</button>)
                })
            }
        </div>
    );


}

export default Tags;
