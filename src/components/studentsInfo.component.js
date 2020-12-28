import React from 'react';
import { Link } from 'react-router-dom'

const StudentInfo=({ details })=> {
    return (
        <React.Fragment>
            <table className="table table-hover">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">Roll Number</th>
                        <th scope="col">Address</th>
                        <th scope="col">Date of Birth</th>
                        <th scope="col">SchoolName</th>
                        <th scope="col">SchoolAddress</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        details.map(item => (
                            <tr key={item._id}>
                                <td>
                                    <Link to ={`/edit-info/${item._id}`}>
                                    {item.rollNumber}    
                                    </Link></td>
                                <td>{item.address}</td>
                                <td>{item.dateOfBirth}</td>
                                <td>{item.schoolName}</td>
                                <td>{item.schoolAddress}</td>    
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </React.Fragment>
    );
}

export default StudentInfo;