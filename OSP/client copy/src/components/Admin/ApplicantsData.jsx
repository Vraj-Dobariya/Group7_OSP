import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useContextState } from "../../context/userProvider";
import NavbarAdmin from "./Navbar";
import { ToastContainer, toast, Slide, Bounce } from "react-toastify";

const ApplicantData = () => {
  const [applicants, setApplicants] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id, sid } = useParams();
  const { baseURL } = useContextState();
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const [selectedStatus, setSelectedStatus] = useState({});

  useEffect(() => {
    const fetchApplicants = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/api/scholarship/getApplicantData?id=${id}&scholarship_id=${sid}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer ${userInfo.token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }

        const { data } = await response.json();
        setApplicants(data);
        const initialStatus = data.reduce((acc, applicant) => {
          acc[applicant.applicant_id] = applicant.status;
          return acc;
        }, {});
        setSelectedStatus(initialStatus);
      } catch (err) {
        console.error("Error fetching applicants:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchApplicants();
  }, [id, userInfo.token]);

  const handleStatusChange = (applicantId, status) => {
    setSelectedStatus((prev) => ({
      ...prev,
      [applicantId]: status,
    }));
  };

  const handleSaveStatus = async (applicantId) => {
    const status = selectedStatus[applicantId];
    try {
      const response = await fetch(
        `http://localhost:8080/api/scholarship/statusUpdate`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${userInfo.token}`,
          },
          body: JSON.stringify({
            applicant_id: applicantId,
            s_id: sid,
            statusToUpdate: status,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }

      const updatedApplicants = [...applicants];
      const index = updatedApplicants.findIndex(
        (applicant) => applicant.applicant_id === applicantId
      );
      if (index !== -1) {
        updatedApplicants[index].status = status;
        setApplicants(updatedApplicants);
      }

      toast.success("Status updated successfully!");
    } catch (err) {
      console.error("Error updating status:", err);
      toast.error("Failed to update status.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <NavbarAdmin />
      <ToastContainer
        position="top-right"
        limit={2}
        newestOnTop={true}
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      <div className="min-h-screen bg-gray-100 px-6 py-8">
        <h2 className="text-2xl font-bold text-center mb-6">
          Applicant Details
        </h2>
        <div className="space-y-8">
          {applicants.map((applicant) => (
            <div
              key={applicant.applicant_id}
              className="bg-blue-300 shadow-md rounded-lg p-6"
            >
              <table className="w-full table-auto border-collapse">
                <tbody>
                  {[
                    ["ID", applicant.applicant_id],
                    [
                      "Name",
                      `${applicant.first_name} ${applicant.middle_name} ${applicant.last_name}`,
                    ],
                    ["DOB", new Date(applicant.dob).toLocaleDateString()],
                    ["Gender", applicant.gender],
                    ["Category", applicant.category],
                    ["Email", applicant.email],
                    ["Mobile", applicant.mobile_number],
                    ["Parent Name", applicant.parent_name],
                    ["Occupation", applicant.occupation],
                    ["Income", applicant.income],
                    ["Parent Mobile", applicant.parent_mobile],
                    ["Current Semester", applicant.current_semester],
                    ["Year of Admission", applicant.year_of_admission],
                    ["Street Address", applicant.street_address],
                    ["Pin Code", applicant.pin_code],
                    ["District", applicant.district_name],
                    ["Department", applicant.department_name],
                    ["Tuition Fees", applicant.tuition_fees],
                    ["Non-Tuition Fees", applicant.non_tuition_fees],
                    ["Status", applicant.status],
                  ].map(([label, value]) => (
                    <tr key={label} className="border-b">
                      <th className="text-left py-2 px-4 font-medium w-1/3">
                        {label}
                      </th>
                      <td className="py-2 px-4 w-2/3">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="mt-4 flex items-center justify-between">
                <div className="relative">
                  <select
                    className="bg-blue-500 text-white py-2 px-4 rounded-lg focus:outline-none cursor-pointer"
                    value={
                      selectedStatus[applicant.applicant_id] || applicant.status
                    }
                    onChange={(e) =>
                      handleStatusChange(applicant.applicant_id, e.target.value)
                    }
                  >
                    {[
                      "Accepted",
                      "Rejected",
                      "Under Review",
                      "Documents Verified",
                      "Submitted",
                    ].map((status) => (
                      <option
                        key={status}
                        value={status}
                        className="bg-gray-200 text-black"
                      >
                        {status}
                      </option>
                    ))}
                  </select>
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    selectedStatus[applicant.applicant_id] === "Accepted"
                      ? "bg-green-500 text-white"
                      : selectedStatus[applicant.applicant_id] === "Rejected"
                      ? "bg-red-500 text-white"
                      : selectedStatus[applicant.applicant_id] ===
                        "Under Review"
                      ? "bg-yellow-300"
                      : selectedStatus[applicant.applicant_id] ===
                        "Documents Verified"
                      ? "bg-orange-400"
                      : "bg-slate-400"
                  }`}
                >
                  {selectedStatus[applicant.applicant_id] || applicant.status}
                </span>
                <button
                  onClick={() => handleSaveStatus(applicant.applicant_id)}
                  className="bg-green-600 text-white py-2 px-4 rounded-lg focus:outline-none"
                >
                  Save
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ApplicantData;
