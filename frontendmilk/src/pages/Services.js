import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import service1 from '../img/service-1.jpg';
import service2 from '../img/service-2.jpg';
import service3 from '../img/service-3.jpg';

function Services() {
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
        Services
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
          Services
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
</>

      {/* Service Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto pb-4"
            data-aos="fade-up"
            data-aos-delay="100"
            style={{ maxWidth: 500 }}
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Our Services
            </p>
            <h1 className="mb-5">Services That We Offer For Entrepreneurs</h1>
          </div>
          <div className="row gy-5 gx-4">
            <div
              className="col-lg-4 col-md-6 pt-5"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="service-item d-flex h-100">
                <div className="service-img">
                  <img className="img-fluid" src={service1} alt="" />
                </div>
                <div className="service-text p-5 pt-0">
                  <div className="service-icon">
                    <img
                      className="img-fluid rounded-circle"
                      src={service1}
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">Best Animal Selection</h5>
                  <p className="mb-4">
                  Our dairy farm takes pride in raising a variety of healthy, happy animals that produce the highest quality milk and dairy products. 
                  </p>
                  <a className="btn btn-square rounded-circle" href="">
                    <i className="bi bi-chevron-double-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 pt-5"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <div className="service-item d-flex h-100">
                <div className="service-img">
                  <img className="img-fluid" src={service2} alt="" />
                </div>
                <div className="service-text p-5 pt-0">
                  <div className="service-icon">
                    <img
                      className="img-fluid rounded-circle"
                      src={service2}
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">Breeding &amp; Veterinary</h5>
                  <p className="mb-4">
                  We ensure our Jersey cows have a nutritious diet and regular veterinary check-ups to keep them in top condition.
                  </p>
                  <a className="btn btn-square rounded-circle" href="">
                    <i className="bi bi-chevron-double-right" />
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-4 col-md-6 pt-5"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <div className="service-item d-flex h-100">
                <div className="service-img">
                  <img className="img-fluid" src={service3} alt="" />
                </div>
                <div className="service-text p-5 pt-0">
                  <div className="service-icon">
                    <img
                      className="img-fluid rounded-circle"
                      src={service3}
                      alt=""
                    />
                  </div>
                  <h5 className="mb-3">Care &amp; Milking</h5>
                  <p className="mb-4">
                  We focus on providing our Ayrshire cows with a clean, comfortable environment and regular health checks to ensure they thrive.
                  </p>
                  <a className="btn btn-square rounded-circle" href="">
                    <i className="bi bi-chevron-double-right" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}
    </div>
  );
}

export default Services;
