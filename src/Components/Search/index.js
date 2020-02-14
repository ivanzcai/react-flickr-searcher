import React, { useEffect } from 'react'
import { connect, useDispatch, } from 'react-redux'
import SelectedTags from './SelectedTags';

export function Search({ selectedTags }) {
    // const mockSelectedTag = ["beach", "sand", "water"]
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({ type: "SEARCH", payload: "" });
    }, []);
    return (

        <section className="jumbotron text-center search">
            <div className="container">
                <input name="search" className="form-control form-control-lg" type="text" placeholder="Search images here" onChange={(e) => { dispatch({ type: "SEARCH", payload: e.target.value }) }} />
                <SelectedTags selectedTags={selectedTags} />
            </div>
        </section>

    );
}

const mapStateToProps = (state) => {
    return {
        selectedTags: state.selectedTags
    }
}


export default connect(mapStateToProps, null)(Search);
