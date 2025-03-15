import NavBar from '../components/NavBar/NavBar';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import MainContent from '../components/MainContent/MainContent';
import "./AppLayout.css";

const AppLayout = () => {
  return (
    <div className="app-layout">
      <NavBar />
      <div className="main-area">
        <LeftSideBar />
        <MainContent />
      </div>
    </div>
  );
};

export default AppLayout;
