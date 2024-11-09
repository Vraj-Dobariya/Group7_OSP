// App.jsx
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import AddScholarship from './components/Admin/AddScholarship'; // Import your AddScholarship page
import Navbar from './components/Admin/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Admin />} /> {/* Admin (Dashboard) */}
        <Route path="/admin/add-scholarship" element={<AddScholarship />} /> {/* Add Scholarship page */}
      </Routes>
    </div>
  );
}

export default App;
