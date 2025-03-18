import { Routes, Route } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import MainContent from '../components/MainContent/MainContent';

const course1 = () => {
  return (
    <div className="app-layout">
      <div className="main-area">
        <LeftSideBar />
        <MainContent />
      </div>
    </div>
  );
};

export default course1;
