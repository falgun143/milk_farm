import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
  {/* Footer Start */}
  <div
    className="container-fluid bg-dark footer mt-5 py-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container py-5">
      <div className="row g-5">
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Our Office</h5>
          <p className="mb-2">
            <i className="fa fa-map-marker-alt me-3" />
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <i className="fa fa-phone-alt me-3" />
            +012 345 67890
          </p>
          <p className="mb-2">
            <i className="fa fa-envelope me-3" />
            info@example.com
          </p>
          <div className="d-flex pt-3">
            <a
              className="btn btn-square btn-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-twitter" />
            </a>
            <a
              className="btn btn-square btn-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-facebook-f" />
            </a>
            <a
              className="btn btn-square btn-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-youtube" />
            </a>
            <a
              className="btn btn-square btn-secondary rounded-circle me-2"
              href=""
            >
              <i className="fab fa-linkedin-in" />
            </a>
          </div>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Quick Links</h5>
          <a className="btn btn-link" href="">
            About Us
          </a>
          <a className="btn btn-link" href="">
            Contact Us
          </a>
          <a className="btn btn-link" href="">
            Our Services
          </a>
          <a className="btn btn-link" href="">
            Terms &amp; Condition
          </a>
          <a className="btn btn-link" href="">
            Support
          </a>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Business Hours</h5>
          <p className="mb-1">Monday - Friday</p>
          <h6 className="text-light">09:00 am - 07:00 pm</h6>
          <p className="mb-1">Saturday</p>
          <h6 className="text-light">09:00 am - 12:00 pm</h6>
          <p className="mb-1">Sunday</p>
          <h6 className="text-light">Closed</h6>
        </div>
        <div className="col-lg-3 col-md-6">
          <h5 className="text-white mb-4">Newsletter</h5>
          <p>We take pride in being a local, family-owned farm.</p>
          <div className="position-relative w-100">
            <input
              className="form-control bg-transparent w-100 py-3 ps-4 pe-5"
              type="text"
              placeholder="Your email"
            />
            <Link to="/signup">
            <button
              type="button"
              className="btn btn-secondary py-2 position-absolute top-0 end-0 mt-2 me-2"
            >
              SignUp
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Footer End */}
  {/* Copyright Start */}
  <div className="container-fluid bg-secondary text-body copyright py-4">
    <div className="container">
      <div className="row">
        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
          ©{" "}
          <a className="fw-semi-bold" href="#">
            Milky
          </a>
          , All Right Reserved.
        </div>
        
      </div>
    </div>
  </div>
  {/* Copyright End */}
  {/* Back to Top */}
  <a
    href="#"
    className="btn btn-lg btn-primary btn-lg-square rounded-circle back-to-top"
  >
    <i className="bi bi-arrow-up" />
  </a>
</>

  )
}

export default Footer
