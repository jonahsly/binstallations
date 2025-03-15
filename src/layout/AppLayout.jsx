import NavBar from '../components/NavBar/NavBar';
import LeftSideBar from '../components/LeftSideBar/LeftSideBar';
import RightSideBar from '../components/RightSideBar/RightSideBar';
import MainContent from '../components/MainContent/MainContent';

const AppLayout = () => {
  return (
    <div className="app-container">
      <NavBar />
      <div className="content-layout">
        <LeftSideBar />
        <MainContent />
        <RightSideBar />
      </div>
    </div>
  );
};

export default AppLayout;
