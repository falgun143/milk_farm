import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import service1 from '../img/service-1.jpg'
import service2 from '../img/service-2.jpg'
import service3 from '../img/service-3.jpg'
import servoce from '../img/service.png'
import product from '../img/product.png'
import Banner from './Banner';
import Team from './Team';


  function About() {
    useEffect(() => {
      AOS.init({
        duration: 1000,
      });
      AOS.refresh();
    }, []);

  return (

    <>
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white mb-4 animated slideInDown">
        About Us
      </h1>
      <nav aria-label="breadcrumb animated slideInDown">
        <ol className="breadcrumb justify-content-center mb-0">
          <li className="breadcrumb-item">
            <a href="#">Home</a>
          </li>
          <li className="breadcrumb-item">
            <a href="#">Pages</a>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            About
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}


    <div className="container-xxl py-5">
    <div className="container">
      <div className="row g-5 align-items-end">
        <div className="col-lg-6">
          <div className="row g-2">
            <div
              className="col-6 position-relative"
              data-aos="fade-in"
              data-aos-delay="700"
            >
              <div className="about-experience bg-secondary rounded">
                <h1 className="display-1 mb-0">25</h1>
                <small className="fs-5 fw-bold">Years Experience</small>
              </div>
            </div>
            <div className="col-6" data-aos="fade-in" data-aos-delay="100">
              <img className="img-fluid rounded" src={service1} alt="" />
            </div>
            <div className="col-6" data-aos="fade-in" data-aos-delay="300">
              <img className="img-fluid rounded" src={service2} alt="" />
            </div>
            <div className="col-6" data-aos="fade-in" data-aos-delay="500">
              <img className="img-fluid rounded" src={service3} alt="" />
            </div>
          </div>
        </div>
        <div className="col-lg-6" data-aos="fade-in" data-aos-delay="500">
          <p className="section-title bg-white text-start text-primary pe-3">
            About Us
          </p>
          <h1 className="mb-4">Know About Our Dairy Farm &amp; Our History</h1>
          <p className="mb-4">
          At our dairy farm, animal welfare is our top priority. We believe that happy, healthy animals produce the best dairy products. Our cows are raised in a natural, stress-free environment with plenty of space to roam and graze.
          </p>
          <div className="row g-5 pt-2 mb-5">
            <div className="col-sm-6">
              <img className="img-fluid mb-4" src={servoce} alt="" />
              <h5 className="mb-3">Dedicated Services</h5>
              <span>
              We focus on providing our Ayrshire cows with a clean, comfortable environment and regular health checks to ensure they thrive.
              </span>
            </div>
            <div className="col-sm-6">
              <img className="img-fluid mb-4" src={product} alt="" />
              <h5 className="mb-3">Organic Products</h5>
              <span>
              They are prolific milk producers, providing large quantities of high-quality milk with a good balance of fat and protein.
              </span>
            </div>
          </div>
          <a className="btn btn-secondary rounded-pill py-3 px-5" href="">
            Explore More
          </a>
        </div>
      </div>
    </div>
  </div>
  <Banner/>
  <Team/>
  </>
);
}

export default About;