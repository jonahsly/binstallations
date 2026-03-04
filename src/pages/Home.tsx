import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import LeftSideBar, { themes } from '../components/LeftSideBar/LeftSideBar';
import MainContent from '../components/MainContent/MainContent';
import { useAppContext } from '../context/AppContext';
import "./Home.css";

const courseByPath = {
  '/sanitaria': 'sanitaria',
  '/incendio': 'incendio',
  '/gas': 'gas',
};

const Home = () => {
  const location = useLocation();
  const { selectedCourse, setSelectedCourse, selectedTheme } = useAppContext();
  const [isMobile, setIsMobile] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const showThemeMenu = selectedCourse === 'sanitaria';
  // Keep the badge text in sync with the real theme selection.
  const selectedThemeLabel = themes.find((theme) => theme.id === selectedTheme)?.label ?? 'Tema';
  const selectedThemeTitle = selectedThemeLabel.replace(/^-+\s*/, '');

  useEffect(() => {
    const routeCourse = courseByPath[location.pathname] ?? 'sanitaria';
    if (routeCourse !== selectedCourse) {
      setSelectedCourse(routeCourse);
    }
  }, [location.pathname, selectedCourse, setSelectedCourse]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia('(max-width: 900px)');
    const syncLayout = (matches) => {
      setIsMobile(matches);
      setIsSidebarOpen(!matches);
    };

    syncLayout(mediaQuery.matches);

    const handleChange = (event) => syncLayout(event.matches);

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
      return () => mediaQuery.removeEventListener('change', handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  const handleToggleSidebar = () => setIsSidebarOpen((prev) => !prev);
  const handleCloseSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="app-layout">
      <Navbar/>
      {/* Mobile theme bar: current topic on the left, drawer toggle on the right. */}
      {isMobile && showThemeMenu && (
        <div className="mobile-theme-bar">
          <span className="mobile-theme-current" aria-live="polite">
            {`Tema: ${selectedThemeTitle}`}
          </span>
          <button
            type="button"
            className="mobile-theme-toggle"
            onClick={handleToggleSidebar}
            aria-expanded={isSidebarOpen}
            aria-controls="theme-sidebar"
          >
            {isSidebarOpen ? 'Ocultar temas' : 'Más temas'}
          </button>
        </div>
      )}
      <div className="main-area">
        {/* Clicking outside the drawer closes it. */}
        {isMobile && showThemeMenu && isSidebarOpen && (
          <button
            type="button"
            className="sidebar-backdrop"
            aria-label="Cerrar menu de temas"
            onClick={handleCloseSidebar}
          />
        )}
        {/* Keep close behavior centralized in Home for mobile interactions. */}
        {showThemeMenu && (
          <LeftSideBar
            id="theme-sidebar"
            className={isMobile ? `mobile-drawer ${isSidebarOpen ? 'open' : ''}` : ''}
            isMobile={isMobile}
            onClose={handleCloseSidebar}
          />
        )}
        <MainContent />
      </div>
    </div>
  );
};

export default Home;



