import { useState, useEffect, useContext } from "react";
import "./editScholarship.css";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useContextState } from "../../context/userProvider";
const AdminEditScholarship = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const {user,baseURL} = useContextState();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const scholarshipName = state.scholarshipName || "";
  const amount = state.amount || "";
  const endDate = state.endDate || "";
  const description = state.description || "";
  const educationLevel = state.educationLevel || "a";
  const eligibleCourses = state.eligibleCourses || [];
  const minPercentage = state.minPercentage || "";
  const annualFamilyIncome = state.annualFamilyIncome || "";
  const benefits = state.benefits || "";
  const scholarship_id = state.scholarship_id || "";
  const note = state.note || "";

  const educationLevels = ["B.Tech", "M.Tech", "M.Sc", "M.Des", "Ph.D"];
  const eligibleCoursesOptions = {
    "B.Tech": ["B.Tech ICT", "B.Tech ICT with CS", "B.Tech MnC", "B.Tech EVD"],
    "M.Tech": [
      "M.Tech Machine Learning",
      "M.Tech Software Systems",
      "M.Tech VLSI and Embedded Systems",
    ],
    "M.Sc": ["M.Sc IT", "M.Sc AA", "M.Sc DS"],
    "M.Des": ["M.Des CD"],
    "Ph.D": ["Ph.D Regular", "Ph.D Rolling"],
  };
  const formatDate = (date) => {
    const d = new Date(date);
    const year = d.getFullYear();
    const month = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };
  const [formData, setFormData] = useState({
    scholarshipName: "",
    amount: "",
    endDate: "",
    description: "",
    educationLevel: "",
    eligibleCourses: [],
    minPercentage: "",
    annualFamilyIncome: "",
    benefits: "",
    note: "",
  });

  // Update formData when scholarship is loaded
  const [availableCourses, setAvailableCourses] = useState([]);

  useEffect(() => {
    setFormData({
      scholarshipName: scholarshipName || "",
      amount: amount || "",
      endDate: endDate ? formatDate(endDate) : "",
      description: description || "",
      eligibleCourses: Array.isArray(eligibleCourses) ? eligibleCourses : [],
      educationLevel: educationLevel || "",
      minPercentage: minPercentage || "",
      annualFamilyIncome: annualFamilyIncome || "",
      benefits: benefits || "",
      note: note || "",
    });
  }, []);

  useEffect(() => {
    if (formData.educationLevel) {
      setAvailableCourses(eligibleCoursesOptions[formData.educationLevel]);
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
      if (
        numericValue < 0 ||
        numericValue > 10 ||
        !/^\d*(\.\d{0,2})?$/.test(value)
      ) {
        return;
      }
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCourseChange = (event) => {
    const selectedCourse = event.target.value;

    // Check if the course is already selected
    if (!formData.eligibleCourses.includes(selectedCourse)) {
      setFormData((prevData) => ({
        ...prevData,
        eligibleCourses: [...prevData.eligibleCourses, selectedCourse],
      }));
    }
  };

  const removeCourse = (courseToRemove) => {
    setFormData((prevData) => ({
      ...prevData,
      eligibleCourses: prevData.eligibleCourses.filter(
        (course) => course !== courseToRemove
      ),
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirmSave = window.confirm(
      "Are you sure you want to save the edited details?"
    );
    if (!confirmSave) {
      return; // Exit the function if user does not confirm
    }
    try {
      let form = formData;
      form.eligibleCourses = JSON.stringify(form.eligibleCourses);
      const formct = JSON.stringify(form);

      const response = await fetch(
        `${baseURL}/api/scholarship/editScholarship/${scholarship_id}`,
        {
          method: "PUT",
          headers: {
            "Accept-Type": "application/json",
            "Content-Type": "application/json",
            authorization: `Bearer ${userInfo.token}`,
            
          },
          body: formct,
        }
      );

      const data = await response.json();
      if (response.ok) {
        navigate(`/admin/viewscholarship/${data.scholarship_id}`);
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
    const options = {
      timeZone: "Asia/Kolkata",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    };
    const istDate = tomorrow.toLocaleString("en-IN", options);
    const [day, month, year] = istDate.split("/");
    return `${year}-${month}-${day}`;
  };

  return (
    <div className="admin-add-scholarship">
      <h1>Edit Scholarship</h1>
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
            <label className="required">Select Eligible Courses</label>
            <select
              onChange={handleCourseChange}
              value=""
              disabled={!formData.educationLevel}
            >
              <option value="" disabled>
                {formData.educationLevel
                  ? "Select a course"
                  : "Select Education Level first"}
              </option>
              {availableCourses.map((course) => (
                <option key={course} value={course}>
                  {course}
                </option>
              ))}
            </select>

            {/* Display Selected Courses */}
            <div className="selected-items">
              {Array.isArray(formData.eligibleCourses) &&
                formData.eligibleCourses.map((course) => (
                  <span key={course} className="item-chip">
                    {course}
                    <button type="button" onClick={() => removeCourse(course)}>
                      x
                    </button>
                  </span>
                ))}
            </div>
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

        <h3>Benefits</h3>
        <div className="form-group">
          <textarea
            name="benefits"
            value={formData.benefits}
            onChange={handleChange}
            placeholder="Enter detailed benefits description"
          />
        </div>

        <h3>Note</h3>
        <div className="form-group">
          <textarea
            name="note"
            value={formData.note}
            onChange={handleChange}
            placeholder="Enter detailed Note"
          />
        </div>

        <button type="submit" className="submit-button">
          Save
        </button>
      </form>
    </div>
  );
};

export default AdminEditScholarship;
