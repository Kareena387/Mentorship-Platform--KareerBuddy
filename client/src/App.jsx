// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import RoleSelection from './pages/RoleSelection';
import Login from './pages/Login';
import RegisterMentor from './pages/Mentors/RegisterMentor';
import RegisterMentee from './pages/Mentees/RegisterMentee';
import MentorDashboard from './pages/Mentors/MentorDashboard';
import MenteeDashboard from './pages/Mentees/MenteeDashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Toastify CSS

const App = () => {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/role-selection" element={<RoleSelection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/mentors/register" element={<RegisterMentor />} />
        <Route path="/mentees/register" element={<RegisterMentee />} />
        <Route path="/mentors/dashboard" element={<MentorDashboard />} />
        <Route path="/mentees/dashboard" element={<MenteeDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
