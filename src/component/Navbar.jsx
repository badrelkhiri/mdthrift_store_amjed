import React, { useState } from 'react'
import './navbar.css'
function Navbar() {
  var [menuClass,setMenuClass] = useState("hamburger hamburger-open");
  var [linksDisplay,setLinksDisplay] = useState("");
  function controlMenu(){
    if(menuClass =='hamburger'){
      setMenuClass("hamburger hamburger-open")
      setLinksDisplay('')
    }
    else{
      setLinksDisplay('dn')
      setMenuClass("hamburger")
    }
  }
  return (
    <div className='con-nv container pt-3 w-100 border-bottom '>
        <nav className='d-flex justify-content-between '>
          <a href = '/'>
            <img className='navbar-brand' src='img/md_logo.png' alt='logo' width='90px' />
          </a>
            <label for="toggle" class={menuClass} onClick={controlMenu}>
              <div class="top-bun"></div>
              <div class="meat"></div>
              <div class="bottom-bun"></div>
            </label>
            <div className={' nav-links '+ linksDisplay }>
                <a className='nv-b btn fs-5' href='/'>HOME</a>
                <a className='nv-b btn fs-5' href='/products'>Products</a>
                <a className='nv-b btn fs-5' href='/#items'>Featured Items</a>
                <a className='nv-b btn fs-5' href='/#fashion'>Fashion</a>
                <a className='nv-b btn fs-5' href='/#diffrent'>Collection</a>
                <a className='nv-b btn fs-5' href='/#join'>Join Us</a>
                <a className=' h-btn login btn '>Login</a>
            </div>
        </nav>
    </div>
  )
}

export default Navbar
