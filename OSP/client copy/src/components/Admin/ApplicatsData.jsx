import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextState } from "../../context/userProvider";
import "./ApplicantData.css"; // Import the CSS file here

const ApplicantData = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, sid } = useParams();
  const { baseURL } = useContextState();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [selectedStatus, setSelectedStatus] = useState({});

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/scholarship/getApplicantData?id=${id}&scholarship_id=${sid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const { data } = await response.json();
        setApplicants(data);
        setSelectedStatus((prev) => ({
          ...prev,
          [data.applicant_id]: data.status,
        }));
      } catch (err) {
        console.error("Error fetching applicants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [id, userInfo.token]);

  const handleStatusChange = (applicantId, status) => {
    setSelectedStatus((prev) => ({
      ...prev,
      [applicantId]: status,
    }));
  };

  const handleSaveStatus = async (applicantId) => {
    const status = selectedStatus[applicantId];
    try {
      const response = await fetch(
        `http://localhost:8080/api/scholarship/statusUpdate`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify({
            applicant_id: id,
            s_id: sid,
            statusToUpdate: status,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const updatedApplicants = [...applicants];
      const index = updatedApplicants.findIndex(
        (applicant) => applicant.applicant_id === applicantId
      );
      if (index !== -1) {
        updatedApplicants[index].status = status;
        setApplicants(updatedApplicants);
      }

      alert("Status updated successfully!");
    } catch (err) {
      console.error("Error updating status:", err);
      alert("Failed to update status.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="table-container">
      <h2>Applicant Details</h2>
      <div style={{ marginBottom: "200px" }}>
        {applicants.map((applicant) => (
          <>
            <div
              className="main-con"
              key={applicant.applicant_id}
              style={{ marginBottom: "20px" }}
            >
              <table className="table">
                <tbody>
                  <tr>
                    <th>ID</th>
                    <td>{applicant.applicant_id}</td>
                  </tr>
                  <tr>
                    <th>Name</th>
                    <td>{`${applicant.first_name} ${applicant.middle_name} ${applicant.last_name}`}</td>
                  </tr>
                  <tr>
                    <th>DOB</th>
                    <td>{new Date(applicant.dob).toLocaleDateString()}</td>
                  </tr>
                  <tr>
                    <th>Gender</th>
                    <td>{applicant.gender}</td>
                  </tr>
                  <tr>
                    <th>Category</th>
                    <td>{applicant.category}</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{applicant.email}</td>
                  </tr>
                  <tr>
                    <th>Mobile</th>
                    <td>{applicant.mobile_number}</td>
                  </tr>
                  <tr>
                    <th>Parent Name</th>
                    <td>{applicant.parent_name}</td>
                  </tr>
                  <tr>
                    <th>Occupation</th>
                    <td>{applicant.occupation}</td>
                  </tr>
                  <tr>
                    <th>Income</th>
                    <td>{applicant.income}</td>
                  </tr>
                  <tr>
                    <th>Parent Mobile</th>
                    <td>{applicant.parent_mobile}</td>
                  </tr>
                  <tr>
                    <th>Current Semester</th>
                    <td>{applicant.current_semester}</td>
                  </tr>
                  <tr>
                    <th>Year of Admission</th>
                    <td>{applicant.year_of_admission}</td>
                  </tr>
                  <tr>
                    <th>Street Address</th>
                    <td>{applicant.street_address}</td>
                  </tr>
                  <tr>
                    <th>Pin Code</th>
                    <td>{applicant.pin_code}</td>
                  </tr>
                  <tr>
                    <th>District</th>
                    <td>{applicant.district_name}</td>
                  </tr>
                  <tr>
                    <th>Department</th>
                    <td>{applicant.department_name}</td>
                  </tr>
                  <tr>
                    <th>Tuition Fees</th>
                    <td>{applicant.tuition_fees}</td>
                  </tr>
                  <tr>
                    <th>Non-Tuition Fees</th>
                    <td>{applicant.non_tuition_fees}</td>
                  </tr>
                  <tr>
                    <th>Status</th>
                    <td>
                      <span
                        className={`status ${
                          applicant.status === "Accepted"
                            ? "status-accepted"
                            : applicant.status === "Rejected"
                            ? "status-rejected"
                            : applicant.status === "In Review"
                            ? "status-in-review"
                            : ""
                        }`}
                      >
                        {applicant.status}
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="dropdown">
              <button className="dropdown-button">...</button>
              <div className="dropdown-content">
                <span
                  onClick={() =>
                    handleStatusChange(applicant.applicant_id, "Accepted")
                  }
                >
                  Accepted
                </span>
                <span
                  onClick={() =>
                    handleStatusChange(applicant.applicant_id, "Rejected")
                  }
                >
                  Rejected
                </span>
                <span
                  onClick={() =>
                    handleStatusChange(applicant.applicant_id, "In Review")
                  }
                >
                  In Review
                </span>
              </div>
            </div>
            <span
              className={`status ${
                selectedStatus[applicant.applicant_id] === "Accepted"
                  ? "status-accepted"
                  : selectedStatus[applicant.applicant_id] === "Rejected"
                  ? "status-rejected"
                  : selectedStatus[applicant.applicant_id] === "In Review"
                  ? "status-in-review"
                  : ""
              }`}
            >
              {selectedStatus[applicant.applicant_id] || applicant.status}
            </span>
            <button
              onClick={() => handleSaveStatus(applicant.applicant_id)}
              className="save-button"
            >
              Save
            </button>
          </>
        ))}
      </div>
    </div>
  );
};

export default ApplicantData;
