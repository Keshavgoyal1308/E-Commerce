import React, { useState } from "react";
import './navbar.css';
import cart_icon from'../Assets/Frontend_Assets/cart_icon.png';
import logo from '../Assets/Frontend_Assets/logo.png';

function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false);
    return(<div className="navbar">
        <div className="nav-logo">
            <img src={logo} alt=" " />
            <p>Shopper</p>
        </div>
        <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776;
      </div>
        <ul className={`nav-menu ${menuOpen ? "open" : ""}`}>
            <li>Shop<hr/></li>
            <li>Men</li>
            <li>Women</li>
            <li>Kids</li>
        </ul>
        <div className="nav-login-cart">
            <img src={cart_icon} alt=" "/>
            <div className="nav-cart-count">0</div>
            <button>Login</button>
        </div>
    </div>)

};
export default Navbar;
