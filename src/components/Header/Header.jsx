import React from 'react';
import Navbar from "../Navbar/Navbar";
import "./Header.css"


const Header = () => {
    return (
      <div className='holder'>
          <header className='header'>
              <Navbar />
              <div className='header-content flex flex-c text-center text-white'>
                  <h2 className='header-title text-capitalize'>WINE NOT !!!</h2><br />
                  <p className='header-text fs-18 fw-3'>Not for sale to persons under the age of 18</p>
              </div>
          </header>
      </div>
    )
  }

  export default Header
