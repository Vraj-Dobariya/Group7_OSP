import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { ChakraProvider } from "@chakra-ui/react";
import UserProvider from "./context/userProvider"; // Import the provider


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
 <UserProvider>
  <ChakraProvider>
  <App />
  </ChakraProvider>
  </UserProvider>
  </BrowserRouter>
);
