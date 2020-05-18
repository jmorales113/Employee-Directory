import React from "react"
import HeaderSearch from "./HeaderSearch.js"
import EmployeeTable from "./EmployeeTable.js"


class Container extends React.Component {
    render() {
    return (
        <div>
            <HeaderSearch />
            <EmployeeTable />
        </div>
    
    )
    }
}

export default Container