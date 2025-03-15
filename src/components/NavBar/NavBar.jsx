import { useAppContext } from '../../context/AppContext';
import './NavBar.css';

const Navbar = () => {
  const { language, setLanguage } = useAppContext();

  return (
    <nav className="navbar">
      <div className="navbar-logo">🌐</div>
      <div className="navbar-title">Mi Aplicación</div>
      <select
        className="language-selector"
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value="es">Español</option>
        <option value="en">English</option>
        <option value="ar">العربية</option>
      </select>
    </nav>
  );
};

export default Navbar;