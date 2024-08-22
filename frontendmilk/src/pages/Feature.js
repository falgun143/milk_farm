import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import pro from '../img/experience.png';
import award from '../img/award.png';
import client from '../img/client.png';
import animal from '../img/animal.png';

function Feature() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <>
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white mb-4 animated slideInDown">
        Feature
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
          Feature
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
</>

      {/* Features Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
              <p className="section-title bg-white text-start text-primary pe-3">
                Why Us!
              </p>
              <h1 className="mb-4">Few Reasons Why People Choosing Us!</h1>
              <p className="mb-4">
              Our dairy products are sourced directly from our farm, ensuring they are always fresh and of the highest quality. From milking to processing, we maintain the highest standards to deliver premium products to your table
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                We are committed to sustainable farming
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                Our cows are our priority
              </p>
              <p>
                <i className="fa fa-check text-primary me-3" />
                We take pride in being a local, family-owned farm.               </p>
              <a className="btn btn-secondary rounded-pill py-3 px-5 mt-3" href="">
                Explore More
              </a>
            </div>
            <div className="col-lg-6">
              <div className="rounded overflow-hidden">
                <div className="row g-0">
                  <div className="col-sm-6" data-aos="fade-in" data-aos-delay="100">
                    <div className="text-center bg-primary py-5 px-4">
                      <img
                        className="img-fluid mb-4"
                        src={pro}
                        alt=""
                      />
                      <h1 className="display-6 text-white" data-toggle="counter-up">
                        25
                      </h1>
                      <span className="fs-5 fw-semi-bold text-secondary">
                        Years Experience
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6" data-aos="fade-in" data-aos-delay="300">
                    <div className="text-center bg-secondary py-5 px-4">
                      <img className="img-fluid mb-4" src={award} alt="" />
                      <h1 className="display-6" data-toggle="counter-up">
                        183
                      </h1>
                      <span className="fs-5 fw-semi-bold text-primary">
                        Award Winning
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6" data-aos="fade-in" data-aos-delay="500">
                    <div className="text-center bg-secondary py-5 px-4">
                      <img className="img-fluid mb-4" src={animal} alt="" />
                      <h1 className="display-6" data-toggle="counter-up">
                        2619
                      </h1>
                      <span className="fs-5 fw-semi-bold text-primary">
                        Total Animals
                      </span>
                    </div>
                  </div>
                  <div className="col-sm-6" data-aos="fade-in" data-aos-delay="700">
                    <div className="text-center bg-primary py-5 px-4">
                      <img className="img-fluid mb-4" src={client} alt="" />
                      <h1 className="display-6 text-white" data-toggle="counter-up">
                        51940
                      </h1>
                      <span className="fs-5 fw-semi-bold text-secondary">
                        Happy Clients
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Features End */}
    </div>
  );
}

export default Feature;
