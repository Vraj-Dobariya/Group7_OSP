import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./ListofScholarship.css";

const ListofScholarship = () => {
  const [scholarships, setScholarships] = useState([]);
  const navigate = useNavigate();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  
  console.log(scholarships);
  useEffect(() => {
    const fetchScholarships = async () => {
      console.log("Fetching list of scholarship");
      // console.log('working');
      try {
        const response = await fetch(
          `http://localhost:8080/api/scholarship/getScholarships`,
          {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        const data = await response.json();
        setScholarships(data);
      } catch (error) {
        console.error("Error fetching scholarships:", error);
      }
    };

    fetchScholarships();
  }, []);

  const handleViewApplicants = (id) => {
    console.log(id);
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
            <tr key={scholarship.scholarship_id}>
              <td>{index + 1}</td>
              <td>{scholarship.scholarship_id}</td>
              <td>{scholarship.scholarship_name}</td>
              <td>{scholarship.applicants_count}</td>
              <td>
                <button
                  className="view-applicants-btn"
                  onClick={() =>
                    handleViewApplicants(scholarship.scholarship_id)
                  }
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
