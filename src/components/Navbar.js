import React from 'react'
import brooklogo from './images/brooklogo.png';
import person from './Assets/person.png';
export default function Navbar() {
  return (
    <>
    
	<section className="header">
			<nav className="navbar navbar-expand-lg navbar-light bg-light px-5">
    <a href="/" className="navbar-brand">
      <img src={brooklogo} alt="Logo" height="100vh" width="100vh" className="d-inline-block align-center mx-5" /> </a>
    <button 
      className="navbar-toggler" 
      type="button" 
      data-bs-toggle="collapse" 
      data-bs-target="#toggleMobileMenu" 
      aira-controls="toggleMobileMenu" 
      aria-expanded="False" 
      aria-label="Toggle navigator">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="toggleMobileMenu">
      <ul className="navbar-nav ms-auto text-center p-4">
        <li>
          <a className="nav-link" href="/">Home</a>
        </li>
        <li>
          <a className="nav-link" href="/about">About Us</a>
        </li>
       </ul>
       
      <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search Books" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>

      <img src={person} className="personimage" alt="..." />
          <a className="nav-link px-2" href="/">Login</a>
      
        
    </div>
  </nav>

</section>


  </>
  )
}
