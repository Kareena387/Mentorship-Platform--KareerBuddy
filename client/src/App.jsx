import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';  // Import Login page
import Home from './pages/Home';   
export default function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/" element={<Home />} />  {/* Home page */}
        <Route path="/login" element={<Login />} />  {/* Login page */}
      </Routes>
    </Router>
  );
}
