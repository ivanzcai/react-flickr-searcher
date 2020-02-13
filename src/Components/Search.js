import React from 'react'
import { useDispatch } from 'react-redux'

function Search() {
    const dispatch = useDispatch();
    return (
        <section className="jumbotron text-center search">
            <div className="container">
                <input name="search" className="form-control form-control-lg" type="text" placeholder="beach,sky,water" onChange={(e) => { dispatch({ type: "SEARCH", payload: e.target.value }) }} />
            </div>
        </section>

    );
}




export default Search;
