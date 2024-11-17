import "./App.css";
import { Route, Routes } from "react-router-dom";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import ForgotPassword from "./components/LoginRegister/ForgotPassword";
import Admin from "./components/Admin/Admin";
import AddScholarship from "./components/Admin/AddScholarship";
import PrivateRoute from "./components/middleware/protectRoute"; // Import the PrivateRoute component
import ViewScholarship from "./components/Admin/viewScholarship";
import AdminEditScholarship from "./components/Admin/editScholarship";
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
          path="/admin/edit-scholarship/:scholarship_id"
          element={
            <PrivateRoute>
              <AdminEditScholarship />
            </PrivateRoute>
          }
        />
      </Routes>
    </div>
  );
}

export default App;