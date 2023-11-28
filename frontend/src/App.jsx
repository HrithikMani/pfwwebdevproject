

import './App.css'
import Home from './components/Home';
import React, { useEffect, useState } from "react";
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import NoPage from './components/NoPage';
import Login from './components/Login';
import Register from './components/Register';
import NavBar from './components/NavBar';
import ApiService from './api/testService';
import Profile from './components/Profile';
import JobApplicationForm from'./components/JobApplicationForm';
import JobList from './components/JobList';
function App() {
  


  return (
    
    <Router>

  
      <Routes>
      
      <Route path='*' element={<NoPage />} />


      <Route path="/" element={<Home />} />
      
      
      
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/job_application" element={<JobApplicationForm />} />
      <Route path="/job_list" element={<JobList />} />
      
      </Routes>
    </Router>
  )
}

export default App
