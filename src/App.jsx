import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import AppLayout from './layout/AppLayout';
import Home from './pages/Home';
import LoadingPage from './pages/LoadingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

import './styles/global.css';

function App() {
  return (
    <Router>
      <AppProvider>
        <Routes>
          

          <Route path="/" element={<LoadingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </AppProvider>
    </Router>
  );
}

export default App;
