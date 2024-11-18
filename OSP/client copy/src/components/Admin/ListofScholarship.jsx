import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListofScholarship.css";
import scholarshipData from "./Scholarshipdata.json"; // Import JSON file directly

const ListofScholarship = () => {
  const [scholarships] = useState(scholarshipData); // Directly assign imported data
  const navigate = useNavigate();

  const handleViewApplicants = (id) => {
    navigate(`/scholarships/${id}/applicants`);
  };

  return (
    <div className="scholarship-list-container">
      <h1>List of Scholarships</h1>
      <table className="scholarship-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Scholarship ID</th>
            <th>Scholarship Name</th>
            <th>Number of Applicants</th>
            <th>View Applicants</th>
          </tr>
        </thead>
        <tbody>
          {scholarships.map((scholarship, index) => (
            <tr key={scholarship.id}>
              <td>{index + 1}</td>
              <td>{scholarship.id}</td> {/* Scholarship ID Column */}
              <td>{scholarship.name}</td>
              <td>{scholarship.numApplicants}</td> {/* Number of Applicants Column */}
              <td>
                <button
                  className="view-applicants-btn"
                  onClick={() => handleViewApplicants(scholarship.id)}
                >
                  View Applicants
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListofScholarship;
