import React from "react"
import "../styles/HeaderSearch.css"

function HeaderSearch(props) {
    return (

    <header>
    <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Click on email heading to sort by email or use the search box to narrow your results</p>
    </div>
    <div className= "input">
    <input
    onChange={props.handleInputChange}
    value = {props.value}
    type = "text"
    placeholder = "Search"
    />
    <hr/>
    </div>
    </header>
    )
}

export default HeaderSearch