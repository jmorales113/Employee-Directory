import React from "react"
import HeaderSearch from "./HeaderSearch.js"
import EmployeeTable from "./EmployeeTable.js"
import API from "../utils/API.js"

class Container extends React.Component {

    state = {
        search:"",
        employees: [],
        employeeFilter:[],
        order: ""
    }

    componentDidMount() {
        API.getUsers()
        .then((res) => { 
            this.setState({
            employees: res.data.results,
            employeeFilter: res.data.results
        })
    })
    .catch((err) => console.log(err))
    console.log(this.state.employees)
    }

    employeeSearch = () => {
        API.getUsers()
        .then((res) => {
            this.setState({
            employees: res.data.results,
            employeeFilter: res.data.results
            })
        })
    .catch((err) => console.log(err))

    }

    render() {
        console.log(this.state.employees)
    return (
        <div>
            <HeaderSearch />
            <EmployeeTable />
        </div>
    
    )
    }
}

export default Container