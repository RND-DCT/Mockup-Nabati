import React from "react"
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import AssignVIPCard from "./pages/master-data/AssignVIPCard"
import AssignSecurityCard from "./pages/master-data/AssignSecurityCard"

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="/login" replace />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/master-data/assign-vip-card" element={<AssignVIPCard />} />
          <Route path="/master-data/assign-security-card" element={<AssignSecurityCard />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
