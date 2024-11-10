import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginRegister from "./components/LoginRegister/LoginRegister";
import ForgotPassword from "./components/LoginRegister/ForgotPassword";
import Admin from "./components/Admin/Admin";

import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
  
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginRegister />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>
  
  );
}

export default App;
