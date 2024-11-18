import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ListofScholarship.css";

const ListofScholarship = () => {
  const [scholarships, setScholarships] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchScholarships = async () => {
      console.log('Fetching list of scholarship');
      // console.log('working');
      try {
        const response = await fetch("http://localhost:8080/api/user/getlistofscholarships");
        const data = await response.json();
        setScholarships(data);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    };

    fetchScholarships();
  }, []);

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
              <td>{scholarship.id}</td>
              <td>{scholarship.name}</td>
              <td>{scholarship.numApplicants}</td>
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

