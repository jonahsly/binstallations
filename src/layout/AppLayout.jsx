import Navbar from '../components/Navbar';
import LeftSidebar from '../components/LeftSidebar';
import RightSidebar from '../components/RightSidebar';
import MainContent from '../components/MainContent';

const AppLayout = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="content-layout">
        <LeftSidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default AppLayout;
