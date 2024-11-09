import { useState } from 'react';
import './AddScholarship.css';

const AdminAddScholarship = () => {
  const [formData, setFormData] = useState({
    scholarshipName: '',
    amount: '',
    duration: '',
    endDate: '',
    description: '',
    educationLevel: '',
    eligibleCourses: '',
    minPercentage: '',
    annualFamilyIncome: '',
    applicationSteps: '',
    applicationDeadline: '',
    documentsRequired: '',
    benefits: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Scholarship Data Submitted:', formData);
  };

  return (
    <div className="admin-add-scholarship">
      <h1>Add Scholarship</h1>
      <form onSubmit={handleSubmit} className="admin-add-scholarship-form">
        <div className="form-grid">
          <div className="form-group">
            <label>Scholarship Name</label>
            <input type="text" name="scholarshipName" value={formData.scholarshipName} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Amount</label>
            <input type="number" name="amount" value={formData.amount} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Duration</label>
            <input type="text" name="duration" value={formData.duration} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>End Date</label>
            <input type="date" name="endDate" value={formData.endDate} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Description</label>
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </div>
        </div>

        <h3>Eligibility Criteria</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Education Level</label>
            <input type="text" name="educationLevel" value={formData.educationLevel} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Eligible Courses</label>
            <input type="text" name="eligibleCourses" value={formData.eligibleCourses} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Minimum Percentage</label>
            <input type="number" name="minPercentage" value={formData.minPercentage} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Annual Family Income</label>
            <input type="number" name="annualFamilyIncome" value={formData.annualFamilyIncome} onChange={handleChange} required />
          </div>
        </div>

        <h3>Application Process</h3>
        <div className="form-grid">
          <div className="form-group">
            <label>Steps (comma separated)</label>
            <input type="text" name="applicationSteps" value={formData.applicationSteps} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Deadline</label>
            <input type="date" name="applicationDeadline" value={formData.applicationDeadline} onChange={handleChange} required />
          </div>
        </div>

        <h3>Documents Required</h3>
        <div className="form-group">
          <label>Documents (comma separated)</label>
          <input type="text" name="documentsRequired" value={formData.documentsRequired} onChange={handleChange} required />
        </div>

        <h3>Benefits</h3>
        <div className="form-group">
          <label>Benefits (comma separated)</label>
          <input type="text" name="benefits" value={formData.benefits} onChange={handleChange} required />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default AdminAddScholarship;
