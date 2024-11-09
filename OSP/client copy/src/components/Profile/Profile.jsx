import React, { useState, useEffect } from "react";
import "./Profile.css";

const FileUpload = ({ label, accept, onChange, file, clearFile }) => (
  <div className="form-group">
    <label>{label}</label>
    <div className="custom-file-upload">
      <button
        type="button"
        className="upload-btn"
        onClick={() => document.getElementById(label).click()}
      >
        {file ? file.name : "No chosen file"}
      </button>
      {file && (
        <button type="button" className="remove-file-btn" onClick={clearFile}>
          ✖
        </button>
      )}
    </div>
    <input
      type="file"
      id={label}
      accept={accept}
      onChange={onChange}
      style={{ display: "none" }}
    />
  </div>
);


const EducationDetails = ({
  formData,
  handleInputChange,
  pdfFiles,
  handlePdfUpload,
  clearPdfFile
}) => {
  // Function to calculate percentage for Class 10 and Class 12
  const calculatePercentage = (obtained, total) => {
    if (!obtained || !total || total === 0) return '';
    return ((obtained / total) * 100).toFixed(2);
  };

  // Function to calculate percentage for Current Education based on CGPA
  const calculateCgpaPercentage = (cgpaObtained, totalCgpa) => {
    if (!cgpaObtained || !totalCgpa || totalCgpa === 0) return '';
    return ((cgpaObtained / totalCgpa) * 100).toFixed(2);
  };

  return (
    <>
      <h3 className="section-title">Education Details</h3>

      {["Class 10", "Class 12", "Current Education Details"].map((section, index) => (
        <div key={section} className="education-section">
          <h4>{section}</h4>
          {[ 
            { label: "Name of Institute", name: `${section.toLowerCase().replace(/\s/g, '')}Institute`, required: true },
            { label: "Address", name: `${section.toLowerCase().replace(/\s/g, '')}Address`, required: true },
            { label: "Month Year of Passing", name: `${section.toLowerCase().replace(/\s/g, '')}PassingDate`, required: true, type: "month" }
          ].map(({ label, name, required, type = "text" }) => (
            <div className="form-group" key={name}>
              <label>{label} {required && <span className="required">*</span>}</label>
              <input
                type={type}
                name={name}
                value={formData[name]}
                onChange={handleInputChange}
                required={required}
              />
            </div>
          ))}

          {/* Fields for calculating percentage */}
          {section === "Current Education Details" ? (
            <>
              <div className="form-group">
                <label>Previous Year of Current Course <span className="required">*</span></label>
                <select
                  name="previousYearOfCurrentCourse"
                  value={formData.previousYearOfCurrentCourse}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select Year</option>
                  <option value="first">First Year</option>
                  <option value="second">Second Year</option>
                  <option value="third">Third Year</option>
                  <option value="fourth">Fourth Year</option>
                  <option value="NA">NA</option>
                </select>
                <small className="note">If you are in the first year, select NA.</small>
              </div>

              <div className="form-group">
                <label>CGPA Obtained <span className="required">*</span></label>
                <input
                  type="number"
                  name="currentCgpaObtained"
                  value={formData.currentCgpaObtained}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Out of CGPA <span className="required">*</span></label>
                <input
                  type="number"
                  name="currentCgpaTotal"
                  value={formData.currentCgpaTotal}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Percentage</label>
                <input
                  type="text"
                  value={calculateCgpaPercentage(formData.currentCgpaObtained, formData.currentCgpaTotal)}
                  readOnly
                />
              </div>
            </>
          ) : (
            <>
              <div className="form-group">
                <label>Total Marks Obtained <span className="required">*</span></label>
                <input
                  type="number"
                  name={`${section.toLowerCase().replace(/\s/g, '')}MarksObtained`}
                  value={formData[`${section.toLowerCase().replace(/\s/g, '')}MarksObtained`]}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Out of Total Marks <span className="required">*</span></label>
                <input
                  type="number"
                  name={`${section.toLowerCase().replace(/\s/g, '')}TotalMarks`}
                  value={formData[`${section.toLowerCase().replace(/\s/g, '')}TotalMarks`]}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Percentage</label>
                <input
                  type="text"
                  value={calculatePercentage(
                    formData[`${section.toLowerCase().replace(/\s/g, '')}MarksObtained`],
                    formData[`${section.toLowerCase().replace(/\s/g, '')}TotalMarks`]
                  )}
                  readOnly
                />
              </div>
            </>
          )}

          {/* File upload for mark sheet */}
          <FileUpload
            label={`Upload ${section} Mark Sheet (PDF)`}
            accept="application/pdf"
            onChange={(e) => handlePdfUpload(e, `${section.toLowerCase().replace(/\s/g, '')}MarkSheet`)}
            file={pdfFiles[`${section.toLowerCase().replace(/\s/g, '')}MarkSheet`]}
            clearFile={() => clearPdfFile(`${section.toLowerCase().replace(/\s/g, '')}MarkSheet`)}
          />
        </div>
      ))}
    </>
  );
};



const BankDetails = ({
  formData,
  handleInputChange,
  pdfFiles,
  handlePdfUpload,
  clearPdfFile,
}) => (
  <>
    <h3 className="section-title">Bank Details</h3>
    {[
      {
        label: "Savings Bank Account Number",
        name: "bankAccount",
        required: true,
      },
      { label: "IFSC Code", name: "ifscCode", required: true },
      { label: "Bank Name", name: "bankName", required: true },
      { label: "Bank Branch", name: "bankBranch", required: true },
    ].map(({ label, name, required }) => (
      <div className="form-group" key={name}>
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
        <input
          type="text"
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          required={required}
        />
      </div>
    ))}
    <FileUpload
      label="Upload Bank Passbook (PDF)"
      accept="application/pdf"
      onChange={(e) => handlePdfUpload(e, "bankPassbook")}
      file={pdfFiles.bankPassbook}
      clearFile={() => clearPdfFile("bankPassbook")}
    />
  </>
);

const CommunicationAddress = ({
  formData,
  handleInputChange,
  pdfFiles,
  handlePdfUpload,
  clearPdfFile,
}) => (
  <>
    <h3 className="section-title">Communication Address</h3>
    {[
      { label: "Address", name: "address", required: true },
      { label: "PIN", name: "pin", required: true },
      { label: "Village / Area / Locality", name: "village", required: true },
      {
        label: "Block / Taluka / Sub-district / Town",
        name: "block",
        required: true,
      },
      { label: "State", name: "state", required: true },
    ].map(({ label, name, required }) => (
      <div className="form-group" key={name}>
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
        <input
          type="text"
          name={name}
          value={formData[name]}
          onChange={handleInputChange}
          required={required}
        />
      </div>
    ))}
    <FileUpload
      label="Upload Proof Of Address (PDF)"
      accept="application/pdf"
      onChange={(e) => handlePdfUpload(e, "addressProof")}
      file={pdfFiles.addressProof}
      clearFile={() => clearPdfFile("addressProof")}
    />
  </>
);


const PersonalDetails = ({ formData, handleInputChange }) => (
  <>
    {[
      { label: "Full Name", name: "fullName", required: true },
      { label: "Date of Birth", name: "dob", type: "date", required: true },
      {
        label: "Gender",
        name: "gender",
        type: "select",
        options: ["Male", "Female", "Other"],
        required: true,
      },
      { label: "Category", name: "category", required: true },
      { label: "Email", name: "email", type: "email", required: true },
      {
        label: "Mobile Number",
        name: "mobileNumber",
        required: true,
      },
      { label: "Parent's Full Name", name: "parentName" },
      { label: "Occupation", name: "occupation" },
      {
        label: "Parent's Mobile No",
        name: "parentMobile",
      },
    ].map(({ label, name, type = "text", options, required, pattern }) => (
      <div className="form-group" key={name}>
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
        {type === "select" ? (
          <select
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            required={required}
          >
            <option value="">Select {label}</option>
            {options.map((option) => (
              <option key={option} value={option.toLowerCase()}>
                {option}
              </option>
            ))}
          </select>
        ) : (
          <input
            type={type}
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            required={required}
            pattern={pattern?.source}
          />
        )}
      </div>
    ))}
  </>
);

const CurrentAcademicDetails = ({
  formData,
  handleInputChange,
  pdfFiles,
  handlePdfUpload,
  clearPdfFile,
}) => {
  const calculateTotalFees = () => {
    const tuitionFees = parseFloat(formData.tuitionFees) || 0;
    const nonTuitionFees = parseFloat(formData.nonTuitionFees) || 0;
    return tuitionFees + nonTuitionFees;
  };

  return (
    <>
      <h3 className="section-title">Current Academic Details</h3>
      <div className="form-group">
        <label>
          Course Level <span className="required">*</span>
        </label>
        <select
          name="courseLevel"
          value={formData.courseLevel}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Course Level</option>
          <option value="UG">Undergraduate</option>
          <option value="PG">Postgraduate</option>
          <option value="PhD">PhD</option>
          <option value="Diploma">Diploma</option>
        </select>
      </div>

      {[
        { label: "Course Name", name: "courseName", required: true },
        { label: "Name of Institute", name: "instituteName", required: true },
        { label: "State", name: "state", required: true },
        { label: "Tuition Fees", name: "tuitionFees", required: true, type: "number" },
        { label: "Non-Tuition Fees", name: "nonTuitionFees", type: "number" },
      ].map(({ label, name, required, type = "text" }) => (
        <div className="form-group" key={name}>
          <label>
            {label} {required && <span className="required">*</span>}
          </label>
          <input
            type={type}
            name={name}
            value={formData[name]}
            onChange={handleInputChange}
            required={required}
          />
        </div>
      ))}

      <div className="form-group">
        <label>
          Total Current Fees <span className="required">*</span>
        </label>
        <input
          type="number"
          name="totalCurrentFees"
          value={calculateTotalFees()}
          readOnly
        />
      </div>

      <FileUpload
        label="Upload Tuition Fee Receipt/Fee Structure (PDF)"
        accept="application/pdf"
        onChange={(e) => handlePdfUpload(e, "tuitionFeeReceipt")}
        file={pdfFiles.tuitionFeeReceipt}
        clearFile={() => clearPdfFile("tuitionFeeReceipt")}
      />

      <FileUpload
        label="Upload Non-Tuition Fee Receipt (PDF)"
        accept="application/pdf"
        onChange={(e) => handlePdfUpload(e, "nonTuitionFeeReceipt")}
        file={pdfFiles.nonTuitionFeeReceipt}
        clearFile={() => clearPdfFile("nonTuitionFeeReceipt")}
      />
    </>
  );
};

const Profile = () => {
  const [image, setImage] = useState(null);
  const [pdfFiles, setPdfFiles] = useState({
    incomeCertificate: null,
    bankPassbook: null,
    addressProof: null,
    tuitionFeeReceipt: null,
    nonTuitionFeeReceipt: null,
    class10MarkSheet: null,
    class12MarkSheet: null,
    currentEducationMarkSheet: null
  });
  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    gender: "",
    category: "",
    email: "",
    mobileNumber: "",
    parentName: "",
    occupation: "",
    parentMobile: "",
    village: "",
    block: "",
    pin: "",
    state: "",
    address: "",
    bankAccount: "",
    ifscCode: "",
    bankName: "",
    bankBranch: "",
    courseLevel: "",
    courseName: "",
    instituteName: "",
    tuitionFees: "",
    nonTuitionFees: "",
    class10Institute: "",
    class10Address: "",
    class10PassingDate: "",
    class10MarksObtained: "",
    class10TotalMarks: "",
    class12Institute: "",
    class12Address: "",
    class12PassingDate: "",
    class12MarksObtained: "",
    class12TotalMarks: "",
    currentEducationInstitute: "",
    currentEducationAddress: "",
    currentEducationPassingDate: "",
    currentCgpaObtained: "",
    currentCgpaTotal: "",
    previousYearOfCurrentCourse: ""
  });

  useEffect(() => {
    const savedData = localStorage.getItem("profileData");
    if (savedData) {
      const parsedData = JSON.parse(savedData);
      setFormData(parsedData.formData || {});
      setPdfFiles(parsedData.pdfFiles || {});
      if (parsedData.image) {
        setImage(parsedData.image);
        setPreview(parsedData.image);
      }
    }
  }, []);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handlePdfUpload = (e, key) => {
    const file = e.target.files[0];
    setPdfFiles((prev) => ({ ...prev, [key]: file }));
  };

  const clearPdfFile = (key) => {
    setPdfFiles((prev) => ({ ...prev, [key]: null }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = (e) => {
    e.preventDefault();
    const profileData = { formData, image: preview, pdfFiles };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    alert("Profile saved successfully!");
  };

  const handleClearForm = () => {
    setFormData({
      fullName: "",
      dob: "",
      gender: "",
      category: "",
      email: "",
      mobileNumber: "",
      parentName: "",
      occupation: "",
      parentMobile: "",
      village: "",
      block: "",
      pin: "",
      state: "",
      address: "",
      bankAccount: "",
      ifscCode: "",
      bankName: "",
      bankBranch: "",
      courseLevel: "",
      courseName: "",
      instituteName: "",
      tuitionFees: "",
      nonTuitionFees: "",
      class10Institute: "",
      class10Address: "",
      class10PassingDate: "",
      class10MarksObtained: "",
      class10TotalMarks: "",
      class12Institute: "",
      class12Address: "",
      class12PassingDate: "",
      class12MarksObtained: "",
      class12TotalMarks: "",
      currentEducationInstitute: "",
      currentEducationAddress: "",
      currentEducationPassingDate: "",
      currentCgpaObtained: "",
      currentCgpaTotal: "",
      previousYearOfCurrentCourse: ""

    });
    setImage(null);
    setPreview(null);
    setPdfFiles({
      incomeCertificate: null,
      bankPassbook: null,
      addressProof: null,
      tuitionFeeReceipt: null,
      nonTuitionFeeReceipt: null,
      class10MarkSheet: null,
      class12MarkSheet: null,
      currentEducationMarkSheet: null
    });
    localStorage.removeItem("profileData");
  };

  return (
    <div className="profile-container">
      <h2 className="header-title">Student Details</h2>
      <p className="instructions">
        Please enter Name and Date of Birth as per AADHAAR.
      </p>

      <form onSubmit={handleSave} className="profile-form">
        <div className="profile-section">
          <h3 className="section-title">Personal Details</h3>
          <div className="profile-picture">
            <div className="image-container">
              {preview ? (
                <>
                  <img
                    src={preview}
                    alt="Profile Preview"
                    className="image-preview"
                  />
                  <button
                    type="button"
                    className="remove-image-btn"
                    onClick={() => {
                      setImage(null);
                      setPreview(null);
                    }}
                  >
                    ✖
                  </button>
                </>
              ) : (
                <p>No chosen file</p>
              )}
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              style={{ display: "block", marginTop: "10px" }}
            />
          </div>

          <PersonalDetails
            formData={formData}
            handleInputChange={handleInputChange}
          />

          <CommunicationAddress
            formData={formData}
            handleInputChange={handleInputChange}
            pdfFiles={pdfFiles}
            handlePdfUpload={handlePdfUpload}
            clearPdfFile={clearPdfFile}
          />

          <BankDetails
            formData={formData}
            handleInputChange={handleInputChange}
            pdfFiles={pdfFiles}
            handlePdfUpload={handlePdfUpload}
            clearPdfFile={clearPdfFile}
          />

          <CurrentAcademicDetails
            formData={formData}
            handleInputChange={handleInputChange}
            pdfFiles={pdfFiles}
            handlePdfUpload={handlePdfUpload}
            clearPdfFile={clearPdfFile}
          />

          <EducationDetails
          formData={formData}
          handleInputChange={handleInputChange}
          pdfFiles={pdfFiles}
          handlePdfUpload={handlePdfUpload}
          clearPdfFile={clearPdfFile}
        />

        </div>

        <div className="form-actions">
          <button type="submit" className="submit-btn">
            Save
          </button>
          <button type="button" className="clear-btn" onClick={handleClearForm}>
            Clear All
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
