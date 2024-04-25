import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserDataForm from './components/UserDataForm'; 
import Header from './components/Header';
import Footer from './components/Footer'; 
import HomePage from './components/HomePage'; 
import Login from './components/Login';
import Profile from './components/Profile';


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} /> 
        <Route path="/register" element={<UserDataForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Footer /> 
    </BrowserRouter>
  );
};

export default App;