import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header = () =>{
            return(
           
    <nav className="navbar navbar-expand-md bg-dark mb-2">
      
  <Link className="navbar-brand"pagelink="#">Harha Digitals</Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarCollapse">
    <ul className="navbar-nav ml-auto">
      <li>
        <Link to="/" className="nav-link pr-3"><FontAwesomeIcon icon="house-user" size="lg" className="pr-1"/>Home </Link>
      </li>
      <li>
        <Link  to="/services" className="nav-link">Services</Link>
      </li>
      <li>
        <Link to="/advertisement" className="nav-link">Advertisement</Link>
      </li>
      <li>
        <Link to="/aboutus" className="nav-link"><FontAwesomeIcon icon="exclamationcircle" size="lg" className="p-1"/>About Us</Link>
      </li>
      <li>
        <Link to="/contactus" className="nav-link"><FontAwesomeIcon icon="phone-alt" size="lg" className="p-1"/>Contact Us</Link>
      </li>
      <li>
        <Link to="/6/signup" className="nav-link"><FontAwesomeIcon icon="users" size="lg"className="p-1"/>Register</Link>
      </li>
      <li>
        <Link to="/state" className="nav-link"><FontAwesomeIcon icon="users" size="lg"className="p-1"/>Register</Link>
      </li>
      
      <li>
        <Link to="/" className="nav-link" onClick={Logout}><i className="fa fa-power-off" size="lg"> </i>Welcome {localStorage.getItem("name")} - Logout</Link>
      </li>
    </ul>

  </div> 
</nav>
           
 );
        
}
const Logout = () =>{
  localStorage.clear();
  window.location.reload();
}
export default Header;