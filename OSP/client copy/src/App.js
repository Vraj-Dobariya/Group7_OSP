import './App.css';
import LoginRegister from './LoginRegister';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Import the newly created dashboard components
import StudentDashboard from './StudentDashboard';  // Correct path for StudentDashboard
import AdminDashboard from './AdminDashboard';      // Correct path for AdminDashboard

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LoginRegister />} />
          <Route path="/student-dashboard" element={<StudentDashboard />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
