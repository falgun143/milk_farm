import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ContactUs() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Page Header Start */}
      <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div className="container text-center py-5">
          <h1 className="display-3 text-white mb-4 animated slideInDown" data-aos="fade-up" data-aos-delay="200">
            Contact
          </h1>
          <nav aria-label="breadcrumb" className="animated slideInDown" data-aos="fade-up" data-aos-delay="300">
            <ol className="breadcrumb justify-content-center mb-0">
              <li className="breadcrumb-item">
                <a href="#">Home</a>
              </li>
              <li className="breadcrumb-item">
                <a href="#">Pages</a>
              </li>
              <li className="breadcrumb-item active" aria-current="page">
                Contact
              </li>
            </ol>
          </nav>
        </div>
      </div>
      {/* Page Header End */}
      {/* Contact Start */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 500 }}>
          <p className="section-title bg-white text-center text-primary px-3">
              Contact Us
            </p>
            <h1 className="mb-5" data-aos="fade-up" data-aos-delay="500">
              If You Have Any Query, Please Contact Us
            </h1>
          </div>
          <div className="row g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s" data-aos="fade-up" data-aos-delay="600">
              <h3 className="mb-4">Leave a message!</h3>
              
              <form>
                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        placeholder="Your Name"
                        data-aos="fade-up"
                        data-aos-delay="700"
                      />
                      <label htmlFor="name">Your Name</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Your Email"
                        data-aos="fade-up"
                        data-aos-delay="800"
                      />
                      <label htmlFor="email">Your Email</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="subject"
                        placeholder="Subject"
                        data-aos="fade-up"
                        data-aos-delay="900"
                      />
                      <label htmlFor="subject">Subject</label>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="form-floating">
                      <textarea
                        className="form-control"
                        placeholder="Leave a message here"
                        id="message"
                        style={{ height: 250 }}
                        defaultValue={""}
                        data-aos="fade-up"
                        data-aos-delay="1000"
                      />
                      <label htmlFor="message">Message</label>
                    </div>
                  </div>
                  <div className="col-12" data-aos="fade-up" data-aos-delay="1100">
                    <button className="btn btn-secondary rounded-pill py-3 px-5" type="submit">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s" data-aos="fade-up" data-aos-delay="1200">
              <h3 className="mb-4">Contact Details</h3>
              <div className="d-flex border-bottom pb-3 mb-3">
                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                  <i className="fa fa-map-marker-alt text-body" />
                </div>
                <div className="ms-3">
                  <h6>Our Office</h6>
                  <span>123 Street, New York, USA</span>
                </div>
              </div>
              <div className="d-flex border-bottom pb-3 mb-3">
                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                  <i className="fa fa-phone-alt text-body" />
                </div>
                <div className="ms-3">
                  <h6>Call Us</h6>
                  <span>+012 345 67890</span>
                </div>
              </div>
              <div className="d-flex border-bottom-0 pb-3 mb-3">
                <div className="flex-shrink-0 btn-square bg-secondary rounded-circle">
                  <i className="fa fa-envelope text-body" />
                </div>
                <div className="ms-3">
                  <h6>Mail Us</h6>
                  <span>info@example.com</span>
                </div>
              </div>
              <iframe
                className="w-100 rounded"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                frameBorder={0}
                style={{ minHeight: 300, border: 0 }}
                allowFullScreen=""
                aria-hidden="false"
                tabIndex={0}
                data-aos="fade-up"
                data-aos-delay="1300"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </>
  );
}

export default ContactUs;
