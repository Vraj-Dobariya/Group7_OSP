import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./viewScholarship.css";
import Navbar from "./Navbar";

const ViewScholarship = () => {
  const navigate = useNavigate();
  const { scholarship_id } = useParams();
  const [scholarshipName, setScholarshipName] = useState("");
  const [amount, setAmount] = useState("");
  const [endDate, setEndDate] = useState("");
  const [description, setDescription] = useState("");
  const [educationLevel, setEducationLevel] = useState("");
  const [eligibleCourses, setEligibleCourses] = useState([]);
  const [minPercentage, setMinPercentage] = useState("");
  const [annualFamilyIncome, setAnnualFamilyIncome] = useState("");
  const [benefits, setBenefits] = useState("");
  const [note, setNote] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchScholarship = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/scholarship/${scholarship_id}`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const datajson = await response.json();
        let objeC = JSON.parse(datajson.eligible_courses);
        setScholarshipName(datajson.scholarship_name);
        setAmount(datajson.amount);
        setEndDate(datajson.end_date);
        setDescription(datajson.description);
        setEducationLevel(datajson.education_level);
        setEligibleCourses(objeC);
        setMinPercentage(datajson.min_percentage);
        setAnnualFamilyIncome(datajson.annual_family_income);
        setBenefits(datajson.benefits);
        setNote(datajson.note);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching scholarship data:", err);
        setError("Failed to fetch data");
        setLoading(false);
      }
    };

    fetchScholarship();
  }, [scholarship_id]);

  const handleEdit = () => {
    navigate(`/admin/edit-scholarship/${scholarship_id}`, {
      state: {
        scholarship_id,
        scholarshipName,
        amount,
        endDate,
        description,
        educationLevel,
        eligibleCourses,
        minPercentage,
        annualFamilyIncome,
        benefits,
        note,
      },
    });
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this scholarship?")) {
      fetch(
        `http://localhost:8080/api/scholarship/deleteScholarship/${scholarship_id}`,
        {
          method: "DELETE",
        }
      )
        .then(() => {
          alert("Scholarship deleted successfully");
          navigate("/admin");
        })
        .catch((error) => console.error("Error deleting scholarship:", error));
    }
  };

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return scholarshipName ? (
    <>
      <Navbar />
      <div className="view-scholarship">
        <h1>
          <span id="scholarshipName">{scholarshipName}</span>
        </h1>
        <p>
          <strong>Amount:</strong>
          <span className="item-chip"> &#8377;{" " + amount}</span>
        </p>
        <p>
          <strong>End Date:</strong>{" "}
          <span className="item-chip">
            {" "}
            {new Date(endDate).toLocaleDateString()}
          </span>
          <i>(mm/dd/yyyy)</i>
        </p>
        <h3>Description</h3>
        <pre class="main-details">
          <span class="item-chip-details">{description}</span>
        </pre>

        <h3>Eligibility Criteria</h3>
        <p>
          <strong>Eligible Courses:</strong>
          <span class="item-chip-eC">
            {eligibleCourses.length ? (
              eligibleCourses.map((doc, index) => (
                <div key={index} class="item-chip">
                  {doc}
                </div>
              ))
            ) : (
              <li>None</li>
            )}
          </span>
        </p>
        <p>
          <strong>Minimum Percentage (CPI):</strong>{" "}
          <span class="item-chip">{minPercentage}</span>
        </p>
        <p>
          <strong>Annual Family Income: </strong>
          <i>(less than)</i>{" "}
          <span class="item-chip">&#8377;{" " + annualFamilyIncome}</span>{" "}
        </p>

        {/* <h3>Documents Required</h3>
      <ul>
        {documentsRequired.length ? (
          documentsRequired.map((doc, index) => <li key={index}>{doc}</li>)
        ) : (
          <li>None</li>
        )}
      </ul> */}

        <h3>Benefits</h3>
        <pre class="main-details">
          <span class="item-chip-details">{benefits}</span>
        </pre>
        <h3>Note</h3>
        <pre class="main-details">
          <span class="item-chip-details">{note}</span>
        </pre>

        <div className="button-container">
          <button className="edit-button" onClick={handleEdit}>
            Edit
          </button>
          <button className="delete-button" onClick={handleDelete}>
            Delete
          </button>
        </div>
      </div>
    </>
  ) : (
    <p>Scholarship data not available.</p>
  );
};

export default ViewScholarship;
