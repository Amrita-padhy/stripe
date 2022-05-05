import React from "react";
import {useGlobalContext} from "./context";



const Navbar =() => {

const{openSidebar,openSubmenu,closeSubmenu} = useGlobalContext();

    return (
        <nav className='nav' >
          <div className='nav-center'>
            <div className='nav-header'>
              {/* <img src={<i class="bi bi-menu-app"></i>} className='nav-logo' alt='hei there' /> */}
              <i class="bi bi-menu-app"></i>
              <button className='btn toggle-btn'>
              <i class="bi bi-list"></i>
              </button>
            </div>
            <ul className='nav-links'>
              <li>
                <button className='link-btn' >
                  products
                </button>
              </li>
              <li>
                <button className='link-btn'>
                  developers
                </button>
              </li>
              <li>
                <button className='link-btn'>
                  company
                </button>
              </li>
            </ul>
            <button className='btn signin-btn'>Sign in</button>
          </div>
        </nav>
      );
}

export default Navbar