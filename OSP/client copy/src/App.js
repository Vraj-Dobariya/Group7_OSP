import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import ForgotPassword from "./components/LoginRegister/ForgotPassword";
import Admin from "./components/Admin/Admin";
import AddScholarship from "./components/Admin/AddScholarship";
import PrivateRoute from "./components/middleware/protectRoute"; // Import the PrivateRoute component
import ViewScholarship from "./components/Admin/viewScholarship";
import AdminEditScholarship from "./components/Admin/editScholarship";
// import ViewProfile from "./components/Admin/AdminProfile";
import ListofScholarship from "./components/Admin/ListofScholarship";
import ViewApplicants from "./components/Admin/viewapplicants";
import ApplicantDetails from "./components/Admin/ApplicantDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LoginRegister />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/add-scholarship"
          element={
            <PrivateRoute>
              <AddScholarship />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/viewscholarship/:scholarship_id"
          element={
            <PrivateRoute>
              <ViewScholarship />
            </PrivateRoute>
          }
        />
         <Route
          path="/admin/viewscholarship/:scholarship_id"
          element={
            <PrivateRoute>
              <ViewScholarship />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/edit-scholarship/:scholarship_id"
          element={
            <PrivateRoute>
              <AdminEditScholarship />
            </PrivateRoute>
          }
        />
        <Route
          path="/admin/list-scholarships"
          element={
            <PrivateRoute>
              <ListofScholarship/>
            </PrivateRoute>
          }
        />
       
          <Route
          path="/scholarships/:id/applicants"
          element={
            <PrivateRoute>
              <ViewApplicants />
            </PrivateRoute>
          }
        />
        <Route
          path="/applicant-details/:id"
          element={
            <PrivateRoute>
              <ApplicantDetails />
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/admin/profile"
          element={
            <PrivateRoute>
              <ViewProfile />
            </PrivateRoute>
          }
        /> */}
      </Routes>

    </div>
  );
}

export default App;