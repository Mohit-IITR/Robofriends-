import React from 'react'

function Searchbar(props) {
    return (
        <div style={{marginBottom: "30px", textAlign: "center"}}> 
            <h2>Search by name</h2>
            <input onChange={props.searchHandler} placeholder="search your monster"></input>
        </div>
    )
}

export default Searchbar