import React, { useState, useEffect } from "react";
import "./Profile.css";
import Navbar from '../Navbar/Navbar';





var Femail = "";



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
          value={formData[name] || ""}
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
      //{ label: "Address", name: "address", required: true },
      { label: "Village / Area / Locality", name: "village", required: true },
      {
        label: "Block / Taluka / Sub-district / Town",
        name: "block",
        required: true,
      },
      { label: "State", name: "state", required: true },
      { label: "PIN", name: "pin", required: true },
    ].map(({ label, name, required }) => (
      <div className="form-group" key={name}>
        <label>
          {label} {required && <span className="required">*</span>}
        </label>
        <input
          type="text"
          name={name}
          value={formData[name] || ""}
          onChange={handleInputChange}
          required={required}
        />
      </div>
    ))}
     <FileUpload
      label="Upload Bank aadhar (PDF)"
      accept="application/pdf"
      onChange={(e) => handlePdfUpload(e, "aadharcard")}
      file={pdfFiles.aadharcard}
      clearFile={() => clearPdfFile("aadharcard")}
    />
  </>
);



const PersonalDetails = ({ formData, handleInputChange }) => (
  <>
    {[
      { label: "First Name", name: "firstname", required: true },
      { label: "Middle Name", name: "middlename", required: true },
      { label: "Last Name", name: "lastname", required: true },
      { label: "Date of Birth", name: "dob", type: "date", required: true },
      {
        label: "Gender",
        name: "gender",
        type: "select",
        options: ["Male", "Female", "Other"],
        required: true,
      },
      { label: "Category", name: "category", required: true },
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
      {
        label: "Income",
        name: "incomelimit",
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

    
      <div className="form-group">
        <label>email</label>
        <input
          type="text"
          value={Femail}
          //onChange={handleInputChange}
          readOnly
        />
      </div>
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
          value={formData.courseLevel || ""}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Course Level</option>
          <option value={"UG"}>Undergraduate</option>
          <option value="PG">Postgraduate</option>
          <option value="PhD">PhD</option>
          <option value="Diploma">Diploma</option>
        </select>

        <label>
          Course Name <span className="required">*</span>
        </label>

        <select
          name="courseName"
          value={formData.courseName || ""}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Course Name</option>
          <option value="ICT">ICT</option>
          <option value="ICT with CS">ICT with CS</option>
          <option value="MNC">MNC</option>
          <option value="EVD">EVD</option>
          <option value="MSC IT">MSC IT</option>
          <option value="Msc Data Science">Msc Data Science</option>
          <option value="Mtech">Mtech</option>
          <option value="MSC in Agriculture">MSC in Agriculture</option>
          <option value="Phd">Phd</option>
        </select>
      </div>

      {[
        {
          label: "Tuition Fees",
          name: "tuitionFees",
          required: true,
          type: "number",
        },
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

const Class10Details = ({
  formData,
  handleInputChange,
  pdfFiles,
  handlePdfUpload,
  clearPdfFile,
}) => {
  // Function to calculate percentage
  const calculatePercentage = (marksObtained, totalMarks) => {
    if (marksObtained && totalMarks && totalMarks > 0) {
      return (
        (parseFloat(marksObtained) / parseFloat(totalMarks)) *
        100
      ).toFixed(2);
    }
    return ""; // Return empty if no valid data
  };

  return (
    <>
      <h3 className="section-title">Class 10 Details</h3>
      {[
        {
          label: "Name of Institute",
          name: "class10Institute",
          required: true,
        },
        // {
        //   label: "Address",
        //   name: "class10Address",
        //   required: true,
        // },
        {
          label: "Month Year of Passing",
          name: "class10PassingDate",
          type: "month",
          required: true,
        },
        {
          label: "Total Marks Obtained",
          name: "class10MarksObtained",
          type: "number",
          required: true,
        },
        {
          label: "Out of Total Marks",
          name: "class10TotalMarks",
          type: "number",
          required: true,
        },
      ].map(({ label, name, type = "text", required }) => (
        <div className="form-group" key={name}>
          <label>
            {label} {required && <span className="required">*</span>}
          </label>
          <input
            type={type}
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            required={required}
          />
        </div>
      ))}

      <div className="form-group">
        <label>Percentage</label>
        <input
          type="text"
          value={calculatePercentage(
            formData.class10MarksObtained,
            formData.class10TotalMarks
          )}
          readOnly
        />
      </div>

      <FileUpload
        label="Upload Class 10 Mark Sheet (PDF)"
        accept="application/pdf"
        onChange={(e) => handlePdfUpload(e, "class10MarkSheet")}
        file={pdfFiles.class10MarkSheet}
        clearFile={() => clearPdfFile("class10MarkSheet")}
      />
    </>
  );
};

const Class12Details = ({
  formData,
  handleInputChange,
  pdfFiles,
  handlePdfUpload,
  clearPdfFile,
}) => {
  // Function to calculate percentage
  const calculatePercentage = (marksObtained, totalMarks) => {
    if (marksObtained && totalMarks && totalMarks > 0) {
      return (
        (parseFloat(marksObtained) / parseFloat(totalMarks)) *
        100
      ).toFixed(2);
    }
    return ""; // Return empty if no valid data
  };

  return (
    <>
      <h3 className="section-title">Class 12 Details</h3>
      {[
        {
          label: "Name of Institute",
          name: "class12Institute",
          required: true,
        },
        // {
        //   label: "Address",
        //   name: "class12Address",
        //   required: true,
        // },
        {
          label: "Month Year of Passing",
          name: "class12PassingDate",
          type: "month",
          required: true,
        },
        {
          label: "Total Marks Obtained",
          name: "class12MarksObtained",
          type: "number",
          required: true,
        },
        {
          label: "Out of Total Marks",
          name: "class12TotalMarks",
          type: "number",
          required: true,
        },
      ].map(({ label, name, type = "text", required }) => (
        <div className="form-group" key={name}>
          <label>
            {label} {required && <span className="required">*</span>}
          </label>
          <input
            type={type}
            name={name}
            value={formData[name] || ""}
            onChange={handleInputChange}
            required={required}
          />
        </div>
      ))}

      <div className="form-group">
        <label>Percentage</label>
        <input
          type="text"
          value={calculatePercentage(
            formData.class12MarksObtained,
            formData.class12TotalMarks
          )}
          readOnly
        />
      </div>

      <FileUpload
        label="Upload Class 12 Mark Sheet (PDF)"
        accept="application/pdf"
        onChange={(e) => handlePdfUpload(e, "class12MarkSheet")}
        file={pdfFiles.class12MarkSheet}
        clearFile={() => clearPdfFile("class12MarkSheet")}
      />
    </>
  );
};

const CurrentEducationDetails = ({
  formData,
  handleInputChange,
  pdfFiles,
  handlePdfUpload,
  clearPdfFile,
}) => {
  // Function to calculate percentage based on CGPA
  const calculateCgpaPercentage = (cgpaObtained, cgpaTotal) => {
    if (cgpaObtained && cgpaTotal && cgpaTotal > 0) {
      return ((parseFloat(cgpaObtained) / parseFloat(cgpaTotal)) * 100).toFixed(
        2
      );
    }
    return ""; // Return empty if no valid data
  };

  // Array for batch options
  const batchOptions = [2020, 2021, 2022, 2023, 2024, 2025, 2026];

  // Array for semester options
  const semesterOptions = Array.from({ length: 8 }, (_, i) => i + 1);

  return (
    
    <>
   
      <h3 className="section-title">Current Education Details</h3>

      <div className="form-group">
        <label>
          Current Education Batch <span className="required">*</span>
        </label>
        <select
          name="currentEducationBatch"
          value={formData.currentEducationBatch || ""}
          onChange={handleInputChange}
          required
        >
          <option value="">Select Batch</option>
          {batchOptions.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>
          Current Semester <span className="required">*</span>
        </label>
        <select
          name="currentSemester"
          value={formData.currentSemester || "" }
          onChange={handleInputChange}
          required
        >
          <option value="">Select Semester</option>
          {semesterOptions.map((sem) => (
            <option key={sem} value={sem}>
              {sem}
            </option>
          ))}
        </select>
      </div>

      <div className="form-group">
        <label>
          CGPA Obtained <span className="required">*</span>
        </label>
        <input
          type="number"
          name="currentCgpaObtained"
          value={formData.currentCgpaObtained || ""}
          onChange={handleInputChange}
         // required
        />
      </div>

      <div className="form-group">
        <label>
          Total CGPA <span className="required">*</span>
        </label>
        <input
          type="number"
          name="currentCgpaTotal"
          value={formData.currentCgpaTotal || ""}
          onChange={handleInputChange}
         // required
        />
      </div>

      <div className="form-group">
        <label>Percentage</label>
        <input
          type="text"
          value={calculateCgpaPercentage(
            formData.currentCgpaObtained,
            formData.currentCgpaTotal
          )}
          readOnly
        />
      </div>

      <FileUpload
        label="Upload Current Education Mark Sheet (PDF)"
        accept="application/pdf"
        onChange={(e) => handlePdfUpload(e, "currentEducationMarkSheet")}
        file={pdfFiles.currentEducationMarkSheet}
        clearFile={() => clearPdfFile("currentEducationMarkSheet")}
      />
    </>
  );
};

const Profile = () => {
  const [image, setImage] = useState(null);
  const [pdfFiles, setPdfFiles] = useState({
    incomeCertificate: null,
    bankPassbook: null,
    aadharcard: null,
    tuitionFeeReceipt: null,
    nonTuitionFeeReceipt: null,
    class10MarkSheet: null,
    class12MarkSheet: null,
    currentEducationMarkSheet: null,
  });

  const [cloudinaryUrls, setCloudinaryUrls] = useState({
    incomeCertificate: null,
    bankPassbook: null,
    aadharcard: null,
    tuitionFeeReceipt: null,
    nonTuitionFeeReceipt: null,
    class10MarkSheet: null,
    class12MarkSheet: null,
    currentEducationMarkSheet: null,
  });
  

  const [preview, setPreview] = useState(null);
  const [formData, setFormData] = useState({
    firstname: "",
    middlename: "",
    lastname: "",
    dob: "",
    gender: "",
    category: "",
    email: "",
    mobileNumber: "",
    parentName: "",
    occupation: "",
    parentMobile: "",
    incomelimit: "",
    village: "",
    block: "",
    state: "",
    pin: "",
    bankAccount: "",
    ifscCode: "",
    bankName: "",
    bankBranch: "",
    courseLevel: "",
    courseName: "",
    tuitionFees: "",
    nonTuitionFees: "",
    class10Institute: "",
    class10PassingDate: "",
    class10MarksObtained: "",
    class10TotalMarks: "",
    class12Institute: "",
    class12PassingDate: "",
    class12MarksObtained: "",
    class12TotalMarks: "",
    currentEducationBatch: "",
    currentCgpaObtained: "",
    currentCgpaTotal: "",
    currentSemester: "",
  });

  
  
  useEffect(() => {

    const userInfo = JSON.parse(localStorage.getItem("userInfo"));


    const email = userInfo.email;

    Femail = email;

    setFormData((prev) => ({ ...prev, email: Femail }));


    console.log('f' , Femail);
    

    const endpoint1 = "http://localhost:8080/api/user/getprofile/";
    const id2 = endpoint1+email;

    console.log(id2);


    const fetchData = async () => {
      try {

        console.log(id2);

        const response = await fetch(id2 , {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(),
        });

        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        else
        {
          const data = await response.json();

        const formattedData = {
          firstname: String(data.first_name || ""),
          middlename: String(data.middle_name || ""),
          lastname: String(data.last_name || ""),
          dob: String(data.dob || ""),
          gender: String(data.gender || ""),
          category: String(data.category || ""),
          email: String(data.email || ""),
          mobileNumber: String(data.mobilenumber || ""),
          parentName: String(data.parent_name || ""),
          occupation: String(data.occupation || ""),
          parentMobile: String(data.parentmobile || ""),
          incomelimit: String(data.incomelimit || ""),
          village: String(data.village || ""),
          block: String(data.block || ""),
          state: String(data.state || ""),
          pin: String(data.pin || ""),
          bankAccount: String(data.bankaccount || ""),
          ifscCode: String(data.ifsccode || ""),
          bankName: String(data.bank_name || ""),
          bankBranch: String(data.branch_name || ""),
          courseLevel: String(data.courselevel || ""),
          courseName: String(data.coursename || ""),
          tuitionFees: String(data.tuitionfees || ""),
          nonTuitionFees: String(data.nontuitionfees || ""),
          class10Institute: String(data.class10institute || ""),
          class10PassingDate: String(data.class10passingdate || ""),
          class10MarksObtained: String(data.class10marksobtained || ""),
          class10TotalMarks: String(data.class10totalmarks || ""),
          class12Institute: String(data.class12institute || ""),
          class12PassingDate: String(data.class12passingdate || ""),
          class12MarksObtained: String(data.class12marksobtained || ""),
          class12TotalMarks: String(data.class12totalmarks || ""),
          currentEducationBatch: String(data.currenteducationbatch || ""),
          currentCgpaObtained: String(data.currentcgpaobtained || ""),
          currentCgpaTotal: String(data.currentcgpatotal || ""),
          currentSemester: String(data.current_semester || ""),
        };
        
        
         console.log(formattedData);
        // console.log('3');
 
         setFormData(formattedData);
        // console.log(formData);
        // console.log(4);
          
        }
        
      } catch (error) {
        console.error('Error fetching form data:', error);
      }
    };

    const endpoint = "http://localhost:8080/api/user/getemail/";
    const id = endpoint + email;
  
    console.log(email);
    
    
    (async () => {
    try {
      const response = await fetch(id , {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(),
      });

      if (response.ok) {
        console.log("Email is present in the database.");
        fetchData();
      } else if (response.status === 404) 
      {
        console.log("Email not found in the database.");
      } else 
      {
        console.error("An error occurred while checking the email.");
      }
    } 
    catch (error) {
      console.error("Error checking email:", error);
    }
  })();


    

    // const savedData = localStorage.getItem("profileData");
    // if (savedData) {
    //   const parsedData = JSON.parse(savedData);
    //   setFormData(parsedData.formData || {});
    //   setPdfFiles(parsedData.pdfFiles || {});
    //   if (parsedData.image) {
    //     setImage(parsedData.image);
    //     setPreview(parsedData.image);
    //   }
    // }
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

  const handleSave = async (e) => {
    e.preventDefault();

    //console.log("saved ");
    //console.log(formData);

    for (const key in pdfFiles) {
      const file = pdfFiles[key];
      if (file) {
        const formData2 = new FormData();
        formData2.append("file", file);

        const endpoint2 = `http://localhost:8080/api/user/pdf/${Femail}/${key}`;


        console.log('ff' , endpoint2);


        try {
          const response = await fetch(endpoint2, {
            method: "POST",
            body: formData2,
          });

          if (!response.ok) {
            throw new Error("File upload failed.");
          }

          const data = await response.json();
          const cloudinaryUrl = data.cloudinaryUrl; 

          setCloudinaryUrls((prevState) => ({
            ...prevState,
            [key]: cloudinaryUrl,
          }));


        } 
        catch (error) {
          console.error("Error uploading file:", error);
          alert("Error uploading file: " + error.message);
        }
      }
    }

    
    console.log(cloudinaryUrls);


    console.log("out of file");


    try {
      const response = await fetch("http://localhost:8080/api/user/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log("res from server");
      console.log(data);

      if (response.ok){
        console.log("data in db");
        const profileData = { formData, image: preview, pdfFiles };
        localStorage.setItem("profileData", JSON.stringify(profileData));
        alert("Profile saved successfully!");
      } 
      else {
        alert("Login failed: " + response.data.message);
      }
    } 
    catch (error) {
      console.error("Login error:", error);
      alert("An error occurred while logging in.");
    }

  };

  const handleClearForm = () => {
    setFormData({
      firstname: "",
      middlename: "",
      lastname: "",
      dob: "",
      gender: "",
      category: "",
      mobileNumber: "",
      parentName: "",
      occupation: "",
      parentMobile: "",
      incomelimit: "",
      village: "",
      block: "",
      state: "",
      pin: "",
      bankAccount: "",
      ifscCode: "",
      bankName: "",
      bankBranch: "",
      courseLevel: "",
      courseName: "",
      tuitionFees: "",
      nonTuitionFees: "",
      class10Institute: "",
      class10PassingDate: "",
      class10MarksObtained: "",
      class10TotalMarks: "",
      class12Institute: "",
      class12PassingDate: "",
      class12MarksObtained: "",
      class12TotalMarks: "",
      currentEducationBatch: "",
      currentCgpaObtained: "",
      currentCgpaTotal: "",
      currentSemester: "",
    });
    setImage(null);
    setPreview(null);
    setPdfFiles({
      incomeCertificate: null,
      bankPassbook: null,
      aadharcard: null,
      tuitionFeeReceipt: null,
      nonTuitionFeeReceipt: null,
      class10MarkSheet: null,
      class12MarkSheet: null,
      currentEducationMarkSheet: null,
    });
    
  };

  return (
    <>
      <Navbar/>
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

          <Class10Details
            formData={formData}
            handleInputChange={handleInputChange}
            pdfFiles={pdfFiles}
            handlePdfUpload={handlePdfUpload}
            clearPdfFile={clearPdfFile}
          />

          <Class12Details
            formData={formData}
            handleInputChange={handleInputChange}
            pdfFiles={pdfFiles}
            handlePdfUpload={handlePdfUpload}
            clearPdfFile={clearPdfFile}
          />

          <CurrentEducationDetails
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
    </>
    
  );
};

export default Profile;
