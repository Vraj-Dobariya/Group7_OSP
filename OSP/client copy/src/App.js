// App.jsx
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import AddScholarship from './components/Admin/AddScholarship'; // Import your AddScholarship page

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />} /> {/* Admin (Dashboard) */}
        <Route path="/admin/add-scholarship" element={<AddScholarship />} /> {/* Add Scholarship page */}
      </Routes>
    </div>
  );
}

export default App;