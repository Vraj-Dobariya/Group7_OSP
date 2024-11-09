import { useState, useEffect } from 'react';
import './ScholarshipList.css';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';

const ScholarshipList = () => {
  const { data: scholarships, ispending, error } = useFetch('http://localhost:8000/scholarships');

  return (
    <div className="scholarship-list">
      {ispending && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {scholarships &&
        <div> 
          <h1>Available Scholarship</h1>
        <div className="scholarships-container">
          {scholarships.map((scholarship) => (
            <div key={scholarship.scholarship_id} className="scholarship-card">
              <img src="/logo-placeholder.png" alt="Scholarship Logo" className="scholarship-logo" />
              <h2>{scholarship.name}</h2>
              <Link to={`/scholarship/${scholarship.id}`}>
                <p className="read-more">Read More ⟶</p>
              </Link>
              <div className="scholarship-details">
                <span>₹ {scholarship.amount}</span>
                <span>End Date: {scholarship.endDate}</span>
              </div>
              <button className="apply-button">Apply</button>
            </div>
          ))}
        </div>
        </div>
      }
    </div>
  );
};

export default ScholarshipList;
