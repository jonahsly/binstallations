import DropdownMenu from "./DropdownMenu";
import logo from "../../assets/logo.png";
import "./NavBar.css";

const Navbar = () => {
    return (
      <header className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Logo" className="logo" />
        <h1>Mi Aplicación</h1>
        <DropdownMenu />
      </div>
    </header>
    );
  };
  
  export default Navbar;
  