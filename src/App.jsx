import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import Home from './pages/Home';
import LoadingPage from './pages/LoadingPage';

function App() {
  return (
    <>
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/loading" element={<LoadingPage />} />
            <Route path='/home' element={<Home />} />
          </Routes>
        </AppProvider>
      </Router>
    </>
  );
}

export default App;
