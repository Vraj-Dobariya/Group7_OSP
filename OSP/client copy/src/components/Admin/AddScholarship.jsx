import { useState, useEffect } from "react";
import "./AddScholarship.css";
import { useNavigate } from "react-router-dom";

const AdminAddScholarship = () => {
  const navigate = useNavigate();

  const documentOptions = ["ID Proof", "Income Certificate", "Marksheet", "Residence Proof"];
  const educationLevels = ["B.Tech", "M.Tech", "M.Sc", "M.Des", "Ph.D"];
  const eligibleCoursesOptions = {
    "B.Tech": ["ICT", "ICT with CS", "MnC", "EVD"],
    "M.Tech": ["Machine Learning", "Software Systems", "VLSI and Embedded Systems"],
    "M.Sc": ["IT", "AA", "DS"],
    "M.Des": ["CD"],
    "Ph.D": ["Regular", "Rolling"],
  };

  const [formData, setFormData] = useState({
    scholarshipName: "",
    amount: "",
    endDate: "",
    description: "",
    educationLevel: "",
    eligibleCourses: "",
    minPercentage: "",
    annualFamilyIncome: "",
    documentsRequired: [],
    benefits: "",
  });

  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    if (formData.educationLevel) {
      setAvailableCourses(eligibleCoursesOptions[formData.educationLevel]);
      setFormData((prevData) => ({
        ...prevData,
        eligibleCourses: "",
      }));
    } else {
      setAvailableCourses([]);
    }
  }, [formData.educationLevel]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if ((name === "amount" || name === "annualFamilyIncome") && value < 0) {
      return;
    }

    if (name === "minPercentage") {
      const numericValue = parseFloat(value);
      if (numericValue < 0 || numericValue > 10 || !/^\d*(\.\d{0,2})?$/.test(value)) {
        return;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDocumentChange = (e) => {
    const selectedDocument = e.target.value;
    if (selectedDocument && !formData.documentsRequired.includes(selectedDocument)) {
      setFormData((prevData) => ({
        ...prevData,
        documentsRequired: [...prevData.documentsRequired, selectedDocument],
      }));
    }
  };

  const removeDocument = (document) => {
    setFormData((prevData) => ({
      ...prevData,
      documentsRequired: prevData.documentsRequired.filter((doc) => doc !== document),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:8080/api/scholarship/addScholarship", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        navigate("/admin");
      } else {
        alert("Submission failed: " + data.message);
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("An error occurred while submitting.");
    }
  };

  const getTomorrowDate = () => {
    const today = new Date();
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);
    return tomorrow.toISOString().split("T")[0]; //2024-11-13T00:00:00.000Z
  };

  return (
    <div className="admin-add-scholarship">
      <h1>Add Scholarship</h1>
      <form onSubmit={handleSubmit} className="admin-add-scholarship-form">
        <div className="form-grid">
          <div className="form-group">
            <label className="required">Scholarship Name</label>
            <input
              type="text"
              name="scholarshipName"
              value={formData.scholarshipName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label className="required">Amount</label>
            <input
              type="number"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              min="0"
              required
            />
          </div>

          <div className="form-group">
            <label className="required">End Date</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleChange}
              min={getTomorrowDate()}
              required
            />
          </div>

          <div className="form-group">
            <label className="required">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <h3>Eligibility Criteria</h3>
        <div className="form-grid">
          <div className="form-group">
            <label className="required">Education Level</label>
            <select
              name="educationLevel"
              value={formData.educationLevel}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select Education Level
              </option>
              {educationLevels.map((level) => (
                <option key={level} value={level}>
                  {level}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="required">Eligible Courses</label>
            <select
              name="eligibleCourses"
              value={formData.eligibleCourses}
              onChange={handleChange}
              required
              disabled={!formData.educationLevel}
            >
              <option value="" disabled>
                {formData.educationLevel ? "Select a course" : "Select Education Level first"}
              </option>
              {availableCourses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group">
            <label className="required">Minimum Percentage (CPI)</label>
            <input
              type="number"
              name="minPercentage"
              value={formData.minPercentage}
              onChange={handleChange}
              min="0"
              max="10"
              step="0.01"
              required
            />
          </div>

          <div className="form-group">
            <label className="required">Annual Family Income</label>
            <input
              type="number"
              name="annualFamilyIncome"
              value={formData.annualFamilyIncome}
              onChange={handleChange}
              min="0"
              required
            />
          </div>
        </div>

        <h3>Documents Required</h3>
        <div className="form-group">
          <label className="required">Select Documents</label>
          <select onChange={handleDocumentChange} defaultValue="">
            <option value="" disabled>
              Select a document
            </option>
            {documentOptions.map((doc) => (
              <option key={doc} value={doc}>
                {doc}
              </option>
            ))}
          </select>
          <div className="selected-documents">
            {formData.documentsRequired.map((doc) => (
              <span key={doc} className="document-chip">
                {doc}
                <button type="button" onClick={() => removeDocument(doc)}>
                  x
                </button>
              </span>
            ))}
          </div>
        </div>

        <h3>Benefits</h3>
        <div className="form-group">
          <label className="required">Benefits</label>
          <textarea
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            required
            placeholder="Enter detailed benefits description"
          />
        </div>

        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AdminAddScholarship;
