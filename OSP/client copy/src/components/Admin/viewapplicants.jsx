import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './viewapplicants.css';
import data from "./applicantdata.json";

const ViewApplicants = () => {
    const applicants = data;
    const [selectedStatus, setSelectedStatus] = useState({});
    const navigate = useNavigate(); // React Router hook to programmatically navigate

    const handleStatusChange = (id, status) => {
        setSelectedStatus((prev) => ({
            ...prev,
            [id]: status
        }));
    };

    const handleViewDetails = (id) => {
        navigate(`/applicant-details/${id}`); // Navigate to details page
    };

    return (
        <div className="applicant-list">
            <h1>List of Applicants</h1>
            <table className="applicant-table">
                <thead>
                    <tr>
                        <th>No</th>
                        <th>Student ID</th>
                        <th>Student Name</th>
                        <th>Applied Date</th>
                        <th>End Date</th>
                        <th>Action</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {applicants.map((applicant, index) => (
                        <tr key={applicant.id}>
                            <td>{index + 1}</td> {/* Added serial number */}
                            <td>{applicant.studentId}</td>
                            <td>{applicant.studentName}</td>
                            <td>{applicant.appliedDate}</td>
                            <td>{applicant.endDate}</td>
                            <td>
                                <div className="status-container">
                                    <span className="status-label">{selectedStatus[applicant.id] || "Select Status"}</span>
                                    <div className="dropdown">
                                        <button className="dropdown-button">...</button>
                                        <div className="dropdown-content">
                                            <span onClick={() => handleStatusChange(applicant.id, "Accepted")}>Accepted</span>
                                            <span onClick={() => handleStatusChange(applicant.id, "Rejected")}>Rejected</span>
                                            <span onClick={() => handleStatusChange(applicant.id, "In Review")}>In Review</span>
                                        </div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <button onClick={() => handleViewDetails(applicant.id)} className="view-details-button">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default ViewApplicants;
