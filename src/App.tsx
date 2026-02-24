import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import LoadingPage from './pages/LoadingPage';

function App() {
  return (
    <>
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Navigate to="/sanitaria" replace />} />
            <Route path="/sanitaria" element={<Home />} />
            <Route path="/incendio" element={<Home />} />
            <Route path="/gas" element={<Home />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path="/home" element={<Navigate to="/sanitaria" replace />} />
            <Route path="*" element={<Navigate to="/sanitaria" replace />} />
          </Routes>
        </AppProvider>
      </Router>
    </>
  );
}

export default App;



