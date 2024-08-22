import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useStateValue } from './StateProvider';

import { logoutRedux } from '../store/userSlice';
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const [{ basket }] = useStateValue();
  const [isScrolled, setIsScrolled] = useState(false); // State to track scroll position
  const userData = useSelector((state) => state.users); // Redux state for user data
  const dispatch = useDispatch();
  const location = useLocation();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50); // Update isScrolled state based on scroll position
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // Function to determine active link class based on current location
  const getLinkClass = (...paths) => {
    return paths.includes(location.pathname) ? 'nav-item nav-link active' : 'nav-item nav-link';
  };

  // Function to toggle login/logout state
  const [ShowLoginOut, hideLoginOut] = useState(false);
  const handleLoginOut = () => {
    hideLoginOut(prev => !prev);
  };
  
  // Function to handle logout
  const handleLogout = () => {
    dispatch(logoutRedux());
  };

  return (
    <>
      {/* Topbar Start */}
      <div className={`container-fluid bg-dark px-0 ${isScrolled ? 'd-none' : ''}`}>
        <div className="row g-0 d-none d-lg-flex">
          <div className="col-lg-6 ps-5 text-start">
            <div className="h-100 d-inline-flex align-items-center text-light">
              <span>Follow Us:</span>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-facebook-f" />
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-twitter" />
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-linkedin-in" />
              </a>
              <a className="btn btn-link text-light" href="">
                <i className="fab fa-instagram" />
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-end">
            <div className="h-100 bg-secondary d-inline-flex align-items-center text-dark py-2 px-4">
              <span className="me-2 fw-semi-bold">
                <i className="fa fa-phone-alt me-2" />
                Call Us:
              </span>
              <span>+012 345 6789</span>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      
      {/* Navbar Start */}
      <nav className={`navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 `}>
        <Link to="/" className="navbar-brand d-flex align-items-center">
          <h1 className="m-0">Milky</h1>
        </Link>
        <button
          type="button"
          className="navbar-toggler me-0"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto p-4 p-lg-0">
            <Link to="/" className={`nav-item nav-link ${getLinkClass('/')}`}>
              Home
            </Link>
            <Link to="/about-us" className={`nav-item nav-link ${getLinkClass('/about-us')}`}>
              About
            </Link>
            <Link to="/services" className={`nav-item nav-link ${getLinkClass('/services')}`}>
              Services
            </Link>
            <Link to="/products" className={`nav-item nav-link ${getLinkClass('/products')}`}>
              Products
            </Link>
            <div className="nav-item dropdown">
              <a href="#!" className={getLinkClass('/cart', '/gallery', "/feature", "/team", '/test')} data-bs-toggle="dropdown">
                Pages
              </a>
              <div className="dropdown-menu bg-light m-0">
                <Link to="/gallery" className="dropdown-item">
                  Gallery
                </Link>
                <Link to="/feature" className="dropdown-item">
                  Features
                </Link>
                <Link to="/team" className="dropdown-item">
                  Our Team
                </Link>
                <Link to="/test" className="dropdown-item">
                  Testimonial
                </Link>
                <Link to="/signup" className="dropdown-item">
                  Signup
                </Link>
              </div>
            </div>
            <Link to="/contact" className={`nav-item nav-link ${getLinkClass('/contact')}`}>
              Contact
            </Link>
            {userData.name ? (
            <Link to="" className={getLinkClass('')}>
            Welcome {userData.name}
          </Link>
          ) : (
            <Link to="" className={getLinkClass('')}>
            Welcome Guest!
          </Link>
          )}
            
            <Link to="/cart" className="position-relative me-4 my-auto">
              <i className="fa fa-shopping-bag" style={{ fontSize: '1.5rem' }}></i> {/* Adjusted size with inline style */}
              <span className="position-absolute bg-secondary rounded-circle d-flex align-items-center justify-content-center text-dark px-1" style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>{basket?.length}</span>
            </Link>
            <div className="nav-item dropdown">
              <a href="#!" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                <i className="fas fa-user" style={{ fontSize: '1.5rem' }}></i> {/* Adjusted size with inline style */}
              </a>
              {userData.name ?
                <>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link to="/all-orders" className="dropdown-item">All Orders</Link>
                    <Link to="/all-users" className="dropdown-item">All Users</Link>
      
                    <Link to="/" className="dropdown-item" onClick={handleLogout}>Log Out</Link>
                  </div>
                </>
                :
                <>
                  <div className="dropdown-menu m-0 bg-secondary rounded-0">
                    <Link to="/Login" className="dropdown-item">Log In</Link>
                    {/* <Link to="/signup" className="dropdown-item">Sign Up</Link> */}
                  </div>
                </>
              }
            </div>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
      
      {/* Back to Top Button */}
      <div className="back-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <i className="fa fa-arrow-up"></i>
      </div>
    </>
  )
}

export default Header;
