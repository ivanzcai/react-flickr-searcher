import React from 'react'
import './SelectedTags.css'
function SelectedTags({ selectedTags }) {
    console.log("selectedTags", selectedTags);
    return (
        <div className="selected-tags">
            <h2>
                {
                    selectedTags && selectedTags.map(tag => {
                        return (<span key={tag} className="badge badge-pill badge-light">{tag}</span>)

                    })
                }
            </h2>
        </div>
    );
}

export default SelectedTags;
