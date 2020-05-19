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
    }

    employeeList = () => {
        API.getUsers()
        .then((res) => {
            this.setState({
                employees: res.data.results,
                employeeFilter: res.data.results
            })
        })
    .catch((err) => console.log(err))

    }

    handleInputChange = (e) => {
        const employees = this.state.employees
        const inputValue = e.target.value
        const employeeFilter = employees.filter((employee) => 
            employee.name.first.toLowerCase().indexOf(inputValue.toLowerCase()) > -1
        )
        this.setState({
            employeeFilter
        })

    }

    employeeSearch = (e) => {
        e.preventDefault()

        if (!this.state.search) {
            alert("Please enter a name")
        }
        const { search, employees } = this.state
        const employeeFilter = employees.filter((employee) => 
            employee.name.first.toLowerCase().includes(search.toLowerCase())
        )
        this.setState({
            employeeFilter
        })
    }

    sortByEmail = () => {
        const emailFilter = this.state.employeeFilter;
        if (this.state.order === 'asc') {
          const emailSort = emailFilter.sort((asc, desc) => (asc.email > desc.email ? 1 : -1));
    
          this.setState({
            employeeFilter: emailSort,
            order: 'desc',
          });
        } else {
          const emailSort = emailFilter.sort((asc, desc) => (asc.email > desc.email ? -1 : 1));
    
          this.setState({
            employeeFilter: emailSort,
            order: 'asc',
          });
        }
      };

    render() {
        console.log(this.state.employees)
    return (
        <div>
            <HeaderSearch
            employee={this.state.employees}
            employeeList={this.employeeList}
            handleInputChange={this.handleInputChange}
            />
            <EmployeeTable 
            results={this.state.employeeFilter}
            sortByEmail={this.sortByEmail}
            />
        </div>
    
    )
    }
}

export default Container