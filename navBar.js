import React from "react";
import {useGlobalContext} from "./context";



const Navbar =() => {

const{openSidebar,openSubmenu,closeSubmenu} = useGlobalContext();
const displaySubmenu = (e) =>{
   const page  =  e.target.textContent;
   console.log(page);
   const tempBtn = e.target.getBoundingClientRect()
  //  console.log(tempBtn);
   const center = (tempBtn.left + tempBtn.right)/2
   const buttom = tempBtn.buttom - 3
  openSubmenu(page,{center,buttom})
}
const handleSubmenu = (e) => {
  if (!e.target.classList.contains('link-btn')) {
    closeSubmenu();
  }
}


    return (
        <nav className='nav' onMouseOver={handleSubmenu} >
          <div className='nav-center'>
            <div className='nav-header'>
              {/* <img src={<i class="bi bi-menu-app"></i>} className='nav-logo' alt='hei there' /> */}
              {/* <i class="bi bi-menu-app"></i> */}
              <h3>stripe</h3>
              <button className='btn toggle-btn'onClick={openSidebar} >
              <i class="bi bi-list"></i>
              </button>
            </div>
            <ul className='nav-links'>
              <li>
                <button className='link-btn'onMouseOver={displaySubmenu} >
                  products
                </button>
              </li>
              <li>
                <button className='link-btn' onMouseOver={displaySubmenu}>
                  developers
                </button>
              </li>
              <li>
                <button className='link-btn'onMouseOver={displaySubmenu}>
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