import React from 'react'

const Search = ({submitMovies}) => {
    return (
        <div>
            
                <form onSubmit={(e)=>submitMovies(e)} id="form">
                    <input type="text" id="search" className="search" placeholder="Search"/>
                </form>
        
        </div>
    )
}

export default Search
