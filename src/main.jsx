import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as  Router, Routes, Route } from 'react-router-dom'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
      <Routes>
        {/* <Route path="/login" element={<Login />} /> */}
        <Route path="/signup" element={<App />} />
        {/* <Route path="/home" element={<Home />} /> */}
      </Routes>
    </Router>
  </React.StrictMode>
)
