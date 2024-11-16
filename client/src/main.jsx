import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'  // Your main app component
import './index.css'  // Import Tailwind CSS setup
import 'react-toastify/ReactToastify.css';  // Import Toastify CSS

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
