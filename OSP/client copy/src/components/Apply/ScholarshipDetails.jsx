import { useParams } from "react-router-dom"; 
import useFetch from "./useFetch";
import './ScholarshipDetails.css'; // Import the CSS file

const ScholarshipDetails = () => {
    const { id } = useParams();
    const { data: scholarships, ispending, error } = useFetch('http://localhost:8000/scholarships/' + id);

    return ( 
        <div className="scholarship-details">
            {ispending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {scholarships && (
                <div className="details-container">
                    <h1>{scholarships.name}</h1>
                    <div className="scholarship-info">
                        <h2>Amount: ₹ {scholarships.amount}</h2>
                        <h3>Duration: {scholarships.duration}</h3>
                        <h3>End Date: {scholarships.endDate}</h3>
                        <h4>Description:</h4>
                        <p>{scholarships.description}</p>
                        <h4>Eligibility Criteria:</h4>
                        <ul>
                            <li>Education Level: {scholarships.eligibility.education_level}</li>
                            <li>Eligible Courses: {scholarships.eligibility.eligible_courses.join(', ')}</li>
                            <li>Minimum Percentage: {scholarships.eligibility.min_percentage}%</li>
                            <li>Annual Family Income: ₹ {scholarships.eligibility.annual_family_income}</li>
                        </ul>
                        <h4>Application Process:</h4>
                        <ul>
                            {scholarships.application_process.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                            <li>Deadline: {scholarships.application_process.deadline}</li>
                        </ul>
                        <h4>Documents Required:</h4>
                        <ul>
                            {scholarships.documents_required.map((document, index) => (
                                <li key={index}>{document}</li>
                            ))}
                        </ul>
                        <h4>Benefits:</h4>
                        <ul>
                            {scholarships.benefits.map((benefit, index) => (
                                <li key={index}>{benefit}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </div>
    );
}

export default ScholarshipDetails;
