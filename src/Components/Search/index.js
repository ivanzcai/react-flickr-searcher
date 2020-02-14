import React, { useEffect } from 'react'
import { useDispatch, } from 'react-redux'
import SelectedTags from './SelectedTags';

function Search() {
    const mockSelectedTag = ["beach", "sand", "water"]
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "SEARCH", payload: "" });
    }, []);
    return (

        <section className="jumbotron text-center search">
            <div className="container">
                <input name="search" className="form-control form-control-lg" type="text" placeholder="beach, sky, water" onChange={(e) => { dispatch({ type: "SEARCH", payload: e.target.value }) }} />
                <SelectedTags selectedTags={mockSelectedTag} />
            </div>
        </section>

    );
}




export default Search;
