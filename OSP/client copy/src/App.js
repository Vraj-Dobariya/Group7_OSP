// App.jsx
import './App.css';
import LoginRegister from './components/LoginRegister/LoginRegister';
import ForgotPassword from './components/LoginRegister/ForgotPassword';
import { Route, Routes } from 'react-router-dom';
import Admin from './components/Admin/Admin';
import { Profiler } from 'react';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Admin />} />
        {/* <Route path="/forgot-password" element={<ForgotPassword />} /> */}
      </Routes>
    </div>
  );
}

export default App;
