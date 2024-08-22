import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import carau from '../img/carousel-1.jpg'
import carau2 from '../img/carousel-2.jpg'
function Crausal() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="container-fluid px-0 mb-5">
      <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-aos="fade-up" data-aos-delay="100">
            <img className="w-100" src={carau} alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-lg-8 text-start">
                    <p className="fs-4 text-white">Welcome to our dairy farm</p>
                    <h1 className="display-1 text-white mb-5 animated slideInRight">
                      The Farm of Dairy products
                    </h1>
                    <a
                      href=""
                      className="btn btn-secondary rounded-pill py-3 px-5 animated slideInRight"
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item" data-aos="fade-up" data-aos-delay="100">
            <img className="w-100" src={carau2} alt="Image" />
            <div className="carousel-caption">
              <div className="container">
                <div className="row justify-content-end">
                  <div className="col-lg-8 text-end">
                    <p className="fs-4 text-white">Welcome to our dairy farm</p>
                    <h1 className="display-1 text-white mb-5 animated slideInRight">
                      Best Organic Dairy Products
                    </h1>
                    <a
                      href=""
                      className="btn btn-secondary rounded-pill py-3 px-5 animated slideInLeft"
                    >
                      Explore More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#header-carousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Crausal;

