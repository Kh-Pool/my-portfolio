import Link from 'next/link'
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
  return (  
    <div className='accordion'>
      <nav className='navbar header-nav header-dark  navbar-expand-lg'>
        <div className='container p-0'>
          <a className="navbar-brand" href="index.html">KIMHAY <span className="theme-bg"></span></a>
          <button className="navbar-toggler" type="button"><span></span><span></span><span></span></button>
          <div id='navbar-collapse-toggle' className="navbar-collapse justify-content-end collapse">
              <ul className="navbar-nav ml-auto nav-ul">
                  <li><Link className='nav-link' href="">HOME</Link></li>
                  <li><Link className='nav-link' href="">ABOUT ME</Link></li>
                  <li><Link className='nav-link' href="">SKILLS</Link></li>
                  <li><Link className='nav-link' href="">PROJECTS</Link></li>
                  <li><Link className='nav-link' href="">CONTACT</Link></li>                
              </ul>
          </div>
        </div>
      </nav>      
    </div>
  )
}

export default Navbar
