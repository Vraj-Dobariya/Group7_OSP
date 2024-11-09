import { useState } from 'react';

const AddScholarship = () => {
  // State to hold form values
  const [formData, setFormData] = useState({
    name: '',
    amount: '',
    duration: '',
    endDate: '',
    description: '',
    eligibility: {
      education_level: '',
      eligible_courses: '',
      min_percentage: '',
      annual_family_income: '',
    },
    application_process: {
      steps: '',
      deadline: '',
    },
    documents_required: '',
    benefits: '',
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.includes('eligibility')) {
      const eligibilityField = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        eligibility: {
          ...prevData.eligibility,
          [eligibilityField]: value,
        },
      }));
    } else if (name.includes('application_process')) {
      const processField = name.split('.')[1];
      setFormData((prevData) => ({
        ...prevData,
        application_process: {
          ...prevData.application_process,
          [processField]: value,
        },
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Submit the form data to your API or backend here
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="add-scholarship">
      <h1>Add Scholarship</h1>
      <form onSubmit={handleSubmit} className="add-scholarship-form">
        <div className="form-group">
          <label>Scholarship Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Amount</label>
          <input
            type="number"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Eligibility Criteria</h3>
        <div className="form-group">
          <label>Education Level</label>
          <input
            type="text"
            name="eligibility.education_level"
            value={formData.eligibility.education_level}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Eligible Courses</label>
          <input
            type="text"
            name="eligibility.eligible_courses"
            value={formData.eligibility.eligible_courses}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Minimum Percentage</label>
          <input
            type="number"
            name="eligibility.min_percentage"
            value={formData.eligibility.min_percentage}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Annual Family Income</label>
          <input
            type="number"
            name="eligibility.annual_family_income"
            value={formData.eligibility.annual_family_income}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Application Process</h3>
        <div className="form-group">
          <label>Steps (comma separated)</label>
          <input
            type="text"
            name="application_process.steps"
            value={formData.application_process.steps}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Deadline</label>
          <input
            type="date"
            name="application_process.deadline"
            value={formData.application_process.deadline}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Documents Required</h3>
        <div className="form-group">
          <label>Documents (comma separated)</label>
          <input
            type="text"
            name="documents_required"
            value={formData.documents_required}
            onChange={handleChange}
            required
          />
        </div>

        <h3>Benefits</h3>
        <div className="form-group">
          <label>Benefits (comma separated)</label>
          <input
            type="text"
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
}

export default AddScholarship;
