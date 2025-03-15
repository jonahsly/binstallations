import { useLanguage } from '../../context/LanguageContext';
import './Navbar.css';

const Navbar = () => {
  //const { language, setLanguage, t } = useLanguage();

  return (
    <nav className="navbar">
      <div className="navbar-logo">🌐</div>
      <div className="navbar-title">{"Instalaciones Sanitarias"}</div>
      <select
        className="language-selector"
        /*value={language}*/
        /*onChange={(e) => setLanguage(e.target.value)}*/
      >
        <option value="es">Español</option>
        <option value="en">English</option>
      </select>
    </nav>
  );
};

export default Navbar;