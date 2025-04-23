import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import MainContent from '../components/MainContent/MainContent';
import "./Home.css";

const Home = () => {
  return (
    <div className="app-layout">
      <Navbar/>
      <div className="main-area">
        <LeftSideBar />
        <MainContent />
      </div>
    </div>
  );
};

export default Home;
