import { Link, useLocation } from 'react-router-dom';
import './Navbar.css'; // Import the CSS file

const Navbar = () => {
  const location = useLocation(); 

  return (
    <nav className="navbar">
      <div className="links">
        <Link to="/student" className={location.pathname === "/student" ? "active" : ""}>
          Dashboard
        </Link>
        <Link to="/student/scholarship" className={location.pathname === "/student/scholarship" ? "active" : ""}>
          Apply For Scholarship
        </Link>
        <Link to="/student/profile" className={location.pathname === "/student/profile" ? "active" : ""}>
          Profile
        </Link>
        <Link to="/student/change-password" className={location.pathname === "/student/change-password" ? "active" : ""}>
          Change Password
        </Link>
        <Link to="/student/logout" className={location.pathname === "/student/logout" ? "active" : ""}>
          Logout
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
