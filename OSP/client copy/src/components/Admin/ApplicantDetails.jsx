import React from "react";
import { useParams } from "react-router-dom";
import data from "./applicantdata.json";

const ApplicantDetails = () => {
    const { id } = useParams();
    const applicant = data.find((applicant) => applicant.id === id);

    if (!applicant) {
        return <p>Applicant not found.</p>;
    }

    return (
        <div className="applicant-details">
            <h1>Applicant Details</h1>
            <p><strong>Scholarship ID:</strong> {applicant.id}</p>
            <p><strong>Scholarship Name:</strong> {applicant.name}</p>
            <p><strong>Student ID:</strong> {applicant.studentId}</p>
            <p><strong>Student Name:</strong> {applicant.studentName}</p>
            <p><strong>Applied Date:</strong> {applicant.appliedDate}</p>
            <p><strong>End Date:</strong> {applicant.endDate}</p>
            {/* Add more details as needed */}
        </div>
    );
};

export default ApplicantDetails;
