import React from "react";
import { Link } from "react-router-dom";
import './ScholarshipList.css';
// import data from "./Data.json";

const ScholarshipList = () => {
    const scholarships = data;

    return (
        <div className="scholarship-list">
            <h1>List of Scholarships</h1>
            <table className="scholarship-table">
                <thead>
                    <tr>
                        <th>Scholarship ID</th>
                        <th>Scholarship Name</th>
                        <th>Applied Date</th>
                        <th>Amount</th>
                        <th>Duration</th>
                        <th>End Date</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {scholarships.map((scholarship) => (
                        <tr key={scholarship.id}>
                            <td>{scholarship.id}</td>
                            <td>{scholarship.name}</td>
                            <td>{scholarship.appliedDate}</td>
                            <td>{scholarship.amount}</td>
                            <td>{scholarship.duration}</td>
                            <td>{scholarship.endDate}</td>
                            <td>{scholarship.status}</td>
                            <td>
                                <Link to={`/scholarship/${scholarship.id}`} className="view-details-link">
                                    View Details
                                </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ScholarshipList;
