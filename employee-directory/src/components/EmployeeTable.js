import React from "react"
import Moment from "react-moment"
import "../styles/EmployeeTable.css"

function EmployeeTable(props) {
    return (
        
        <table>
            <thead>
                <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Phone</th>
                <th onClick={props.sortByEmail}>Email</th>
                <th>DOB</th>
                </tr>
            </thead>
            <tbody>
                {props.results.map(
                ({dob, email, login, name, phone, picture }) => (
                <tr key={login.uuid}>
                    <td>
                    <img src={picture.thumbnail} />
                    </td>
                    <td>
                    {name.first} {name.last}
                    </td>
                    <td>
                    {phone}
                    </td>
                    <td>
                    {email}
                    </td>
                    <td>
                   <Moment format="MM/DD/YYYY"> {dob.date}></Moment>
                    </td>
                </tr>
                )
            )}
            </tbody>
        </table>
    )
}

export default EmployeeTable