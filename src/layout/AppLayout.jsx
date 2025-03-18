import { Routes, Route } from 'react-router-dom';
import Course1 from '../pages/course1';
import Navbar from '../components/Navbar/Navbar';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import MainContent from '../components/MainContent/MainContent';
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <Navbar />
      <Routes>
        <Route path='/isanitarias' element={<Course1 />} />
        <Route path='/icincendios' element={<Course1 />} />
        <Route path='/idegas' element={<Course1 />} />
      </Routes>
    </div>
  );
};

export default AppLayout;
