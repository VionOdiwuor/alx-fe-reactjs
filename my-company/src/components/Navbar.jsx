import React from 'react';
import { Link } from 'react-router-dom';


const navbarStyle = {
    display: 'flex',
    justifyContent: 'center',
    padding: '10px',
    backgroundColor: '#333',
  };
  
  const linkStyle = {
    color: 'white',
    textDecoration: 'none',
    padding: '10px 20px',
    fontSize: '16px',
  };
  
  const activeLinkStyle = {
    backgroundColor: '#555',
    borderRadius: '5px',
  };
function Navbar() {
  return (
    <nav style={navbarStyle}>
      <ul style={{listStyle: 'none', margin: 0, padding: 0, display: 'flex'}}>
        <li><Link to="/" style= {linkStyle} activeStyle={activeLinkStyle}>Home</Link></li>
        <li><Link to="/about"style= {linkStyle} activeStyle={activeLinkStyle}>About</Link></li>
        <li><Link to="/contact"style= {linkStyle} activeStyle={activeLinkStyle}>Contact</Link></li>
        <li><Link to="/services"style= {linkStyle} activeStyle={activeLinkStyle}>Services</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;