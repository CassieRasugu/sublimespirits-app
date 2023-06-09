import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";
import logoImg from "../../images/logo2.jpg";
import {MdMenu} from "react-icons/md";

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const handleNavbar = () => setToggleMenu(!toggleMenu);

    return (
        <nav className='navbar' id = "navbar">
          <div className='container navbar-content flex'>
            <div className='brand-and-toggler flex flex-sb'>
              <Link to = "/" className='navbar-brand flex'>
                <img src = {logoImg} alt = "site logo" />
                <span className='text-uppercase fw-7 fs-24 ls-1'>sublimespirits</span>
              </Link>
              <button type = "button" className='navbar-toggler-btn' onClick={handleNavbar}>
            <MdMenu size = {35} style = {{
              color: `${toggleMenu ? "#fff" : "#010101"}`
            }} />
          </button>
        </div>

        <div className={toggleMenu ? "navbar-collapse show-navbar-collapse" : "navbar-collapse"}>
          <ul className = "navbar-nav">
            <li className='nav-item'>
              <Link to = "cocktails" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>Cocktails</Link>
            </li>

            <li className='nav-item'>
              <Link to = "about" className='nav-link text-uppercase text-black fs-22 fw-6 ls-1'>About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
