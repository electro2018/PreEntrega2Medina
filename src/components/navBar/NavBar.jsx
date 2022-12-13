import "./Navbar.css";

import {Link} from "react-router-dom"
import { CartWidget } from "../cartWidget/CartWidget";

const NavBar = () => {

    const nombre = "Todas"

  return (
    <div className="navbar-container">
      <div className="container-logo"><h2>Electrotienda</h2>
        
      </div>
      <ul className="navbar">
      <Link className="navbar-item" to="/" >Nosotros</Link>
        <Link className="navbar-item" to="/category/deportivas" >Productos</Link>
        <Link className="navbar-item" to="/category/urbanas" >Contactos</Link>
      </ul>
      <CartWidget />
    </div>
  );
};

export default NavBar;
