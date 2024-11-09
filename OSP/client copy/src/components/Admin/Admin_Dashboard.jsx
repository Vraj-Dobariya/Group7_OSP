import { useState, useEffect } from 'react';
import './Admin_Dashboard.css';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const Admin_Dashboard = () => {
  const { data: scholarships, ispending, error } = useFetch('http://localhost:8000/scholarships');
  const [showOptions, setShowOptions] = useState(null);

  const handleDelete = (id) => {
    // Handle delete functionality here
    console.log("Deleting scholarship with ID:", id);
  };

  const handleEdit = (id) => {
    // Handle edit functionality here
    console.log("Editing scholarship with ID:", id);
  };

  const toggleOptions = (id) => {
    setShowOptions((prevId) => (prevId === id ? null : id));
  };

  return (
    <div className="admin-scholarship-list">
      {ispending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {scholarships &&
        <div> 
          <h1>Manage Scholarships</h1>
          <div className="scholarships-container">
            {scholarships.map((scholarship) => (
              <div key={scholarship.scholarship_id} className="scholarship-card">
                <img src="/logo-placeholder.png" alt="Scholarship Logo" className="scholarship-logo" />
                
                <h2>{scholarship.name}</h2>

                <div className="scholarship-details">
                  <span>₹ {scholarship.amount}</span>
                  <span>End Date: {scholarship.endDate}</span>
                </div>

                <button className="view-applications-button">View Applications</button>

                <div className="options-menu">
                  <button onClick={() => toggleOptions(scholarship.scholarship_id)} className="options-button">⋮</button>
                  {showOptions === scholarship.scholarship_id && (
                    <div className="options-dropdown">
                      <button onClick={() => handleEdit(scholarship.scholarship_id)}>Edit</button>
                      <button onClick={() => handleDelete(scholarship.scholarship_id)}>Delete</button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};

export default Admin_Dashboard;
