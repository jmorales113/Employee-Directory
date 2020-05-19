import React from "react"
import "../styles/HeaderSearch.css"

function HeaderSearch(props) {
    return (

    <header>
    <div className="jumbotron">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">Click on carrots to filter by heading or use the search box to narrow your results</p>
    </div>
    <div className= "input">
    <input
    onChange={props.handleInputChange}
    value = {props.value}
    id = "employees"
    type = "text"
    name = "search"
    list= "employee"
    placeholder = "Search"
    />
    <hr/>
    </div>
    </header>
    )
}

export default HeaderSearch