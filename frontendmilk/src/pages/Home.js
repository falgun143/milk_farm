import React, { useEffect } from 'react';
import WOW from 'wowjs';
import 'animate.css/animate.min.css';

import service1 from '../img/service-1.jpg'
import service2 from '../img/service-2.jpg'
import service3 from '../img/service-3.jpg'
import servoce from '../img/service.png'
import product1 from '../img/product-1.jpg'
import product2 from '../img/product-2.jpg'
import product3 from '../img/product-3.jpg'
import product4 from '../img/product-4.jpg'
import product from '../img/product.png'
import pro from '../img/experience.png'
import award from '../img/award.png'
import client from '../img/client.png'
import banner from '../img/banner.jpg'
import banner1 from '../img/banner-1.jpg'
import banner2 from '../img/banner-2.jpg'
import gallery1 from '../img/gallery-1.jpg'
import gallery2 from '../img/gallery-2.jpg'
import gallery3 from '../img/gallery-3.jpg'
import gallery4 from '../img/gallery-4.jpg'
import gallery5 from '../img/gallery-5.jpg'
import gallery6 from '../img/gallery-6.jpg'
import gallery7 from '../img/gallery-7.jpg'
import gallery8 from '../img/gallery-8.jpg'
import animal from '../img/animal.png'
import team1 from '../img/team-1.jpg'
import team2 from '../img/team-2.jpg'
import team3 from '../img/team-3.jpg'
import Banner from './Banner';
import { Carousel } from 'react-bootstrap';
import AboutUs from './AboutUs'
import Feature from './Feature';
import Services from './Services';
import Gallery from './Gallery';
import Team from './Team';
import Testimonial from './Testimonial';
import Crausal from '../pages/Crausal'

import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';
function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
    AOS.refresh();
  }, []);
  const imageStyle = {
    maxWidth: '100%',
    height: '100px',
    overflow: 'hidden',
    borderRadius: '50%',  // Full rounded corners
    objectFit: 'cover',   // Prevent stretching
  };
  return (
    <>
    <Crausal />
    {/* about Start */}
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
  {/* about end  */}
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
  <Banner/>
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
   {/* Gallery Start */}
   <div className="container-xxl py-5 px-0">
          <div className="row g-0">
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="100">
              <div className="row g-0">
                <div className="col-12">
                  <a className="d-block" href={gallery5} data-lightbox="gallery">
                    <img className="img-fluid" src={gallery1} alt="" />
                  </a>
                </div>
                <div className="col-12">
                  <a className="d-block" href={gallery1} data-lightbox="gallery">
                    <img className="img-fluid" src={gallery1} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="300">
              <div className="row g-0">
                <div className="col-12">
                  <a className="d-block" href={gallery2} data-lightbox="gallery">
                    <img className="img-fluid" src={gallery2} alt="" />
                  </a>
                </div>
                <div className="col-12">
                  <a className="d-block" href={gallery6} data-lightbox="gallery">
                    <img className="img-fluid" src={gallery6} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="500">
              <div className="row g-0">
                <div className="col-12">
                  <a className="d-block" href={gallery7} data-lightbox="gallery">
                    <img className="img-fluid" src={gallery7} alt="" />
                  </a>
                </div>
                <div className="col-12">
                  <a className="d-block" href={gallery3} data-lightbox="gallery">
                    <img className="img-fluid" src={gallery3} alt="" />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-delay="700">
              <div className="row g-0">
                <div className="col-12">
                  <a className="d-block" href={gallery4} data-lightbox="gallery">
                    <img className="img-fluid" src={gallery4} alt="" />
                  </a>
                </div>
                <div className="col-12">
                  <a className="d-block" href={gallery8} data-lightbox="gallery">
                    <img className="img-fluid" src={gallery8} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Gallery End */}
  {/* Product Start */}
  <div className="container-xxl py-5">
    <div className="container ">
      <div
        className="text-center mx-auto wow fadeInUp"
        data-wow-delay="0.1s"
        style={{ maxWidth: 500 }}
      >
        <p className="section-title bg-white text-center text-primary px-3">
          Our Products
        </p>
        <h1 className="mb-5">Our Dairy Products For Healthy Living</h1>
      </div>
      <div className="row gx-4 d-flex justify-content-center">
        {/* <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.1s"
        >
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src={product1} alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Pure Milk
              </a>
              <span className="text-primary me-1">$19.00</span>
              <span className="text-decoration-line-through">$29.00</span>
            </div>
          </div>
        </div> */}
        {/* <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.3s"
        >
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src={product2} alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Fresh Meat
              </a>
              <span className="text-primary me-1">$19.00</span>
              <span className="text-decoration-line-through">$29.00</span>
            </div>
          </div>
        </div> */}
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        ><Link to="dairyproducts">
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src={product3} alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Dairy Products
              </a>
              
            </div>
          </div></Link>
        </div>
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.7s"
        ><Link to="organicproducts">
          <div className="product-item">
            <div className="position-relative">
              <img className="img-fluid" src={product4} alt="" />
              <div className="product-overlay">
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-link" />
                </a>
                <a
                  className="btn btn-square btn-secondary rounded-circle m-1"
                  href=""
                >
                  <i className="bi bi-cart" />
                </a>
              </div>
            </div>
            <div className="text-center p-4">
              <a className="d-block h5" href="">
                Organic Food
              </a>
            </div>
          </div></Link>
        </div>
      </div>
    </div>
  </div>
  {/* Product End */}
 {/* Team Start */}
 <div className="container-xxl py-5">
          <div className="container">
            <div
              className="text-center mx-auto wow fadeInUp"
              data-wow-delay="0.1s"
              style={{ maxWidth: 500 }}
            >
              <p className="section-title bg-white text-center text-primary px-3">
                Our Team
              </p>
              <h1 className="mb-5">Experienced Team Members</h1>
            </div>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="100">
                <div className="team-item rounded p-4">
                  <img
                    className="img-fluid rounded mb-4"
                    src={team1}
                    alt=""
                  />
                  <h5>Adam Crew</h5>
                  <p className="text-primary">Founder</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="300">
                <div className="team-item rounded p-4">
                  <img
                    className="img-fluid rounded mb-4"
                    src={team2}
                    alt=""
                  />
                  <h5>Doris Jordan</h5>
                  <p className="text-primary">Veterinarian</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay="500">
                <div className="team-item rounded p-4">
                  <img
                    className="img-fluid rounded mb-4"
                    src={team3}
                    alt=""
                  />
                  <h5>Jack Dawson</h5>
                  <p className="text-primary">Farmer</p>
                  <div className="d-flex justify-content-center">
                    <a
                      className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-facebook-f" />
                    </a>
                    <a
                      className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-twitter" />
                    </a>
                    <a
                      className="btn btn-square btn-outline-secondary rounded-circle mx-1"
                      href=""
                    >
                      <i className="fab fa-instagram" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Team End */}
{/* Testimonial Start */}
<div className="container-xxl py-5">
        <div className="container">
          <div
            className="text-center mx-auto wow fadeInUp"
            data-wow-delay="0.1s"
            style={{ maxWidth: 500 }}
          >
            <p className="section-title bg-white text-center text-primary px-3">
              Testimonial
            </p>
            <h1 className="mb-5">What People Say About Our Dairy Farm</h1>
          </div>
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="testimonial-img">
                <img
                style={imageStyle}
                  className="img-fluid animated pulse infinite"
                  src={`https://img.freepik.com/premium-photo/young-smart-indian-businessman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-118033.jpg?w=900`}
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay="100"
                />
                <img
                style={imageStyle}
                  className="img-fluid animated pulse infinite"
                  src={'https://img.freepik.com/free-photo/front-view-smiley-woman-radio-studio-with-microphone_23-2148808787.jpg?t=st=1719641196~exp=1719644796~hmac=209a7ba81277491756bd31f117edd0d03c01bd800989255a78609a32c2857b01&w=900'}
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay="200"
                />
                <img
                style={imageStyle}
                  className="img-fluid animated pulse infinite"
                  src={`https://img.freepik.com/premium-photo/portrait-close-up-young-man-smiling_153437-1718.jpg?w=900`}
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay="300"
                />
                <img
                style={imageStyle}
                  className="img-fluid animated pulse infinite"
                  src={`https://img.freepik.com/premium-photo/bright-modern-office-35-years-old-handsome-indian-businessman-with-large-smile-generative-ai-aig18_31965-124962.jpg?w=900`}
                  alt=""
                  data-aos="fade-up"
                  data-aos-delay="400"
                />
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.5s">
              <Carousel interval={3000} pause={false} className="testimonial-carousel">
                <Carousel.Item>
                  <img
                    className="d-block w-100 "
                    src={`https://img.freepik.com/premium-photo/young-smart-indian-businessman-smiling-face-standing-blur-background-creative-colorful-office-interior-design-generative-ai-aig20_31965-118033.jpg?w=900`}
                    alt=""
                  />
                  <Carousel.Caption className='' >
                    
                    <span className="fs-5 carausalCap">
                    I have been a loyal customer for over a year now, and I couldn't be happier with the products from this dairy farm. The milk is always fresh, and I love knowing that it's sourced sustainably. 
                    </span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={'https://img.freepik.com/free-photo/front-view-smiley-woman-radio-studio-with-microphone_23-2148808787.jpg?t=st=1719641196~exp=1719644796~hmac=209a7ba81277491756bd31f117edd0d03c01bd800989255a78609a32c2857b01&w=900'}
                    alt=""
                  />
                  <Carousel.Caption>
                    
                    <span className="fs-5 carausalCap">
                    The difference in taste and quality is undeniable. I switched to this dairy farm's products because I wanted organic and ethically sourced milk and cheese for my family.
                    </span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`https://img.freepik.com/premium-photo/portrait-close-up-young-man-smiling_153437-1718.jpg?w=900`}
                    alt=""
                  />
                  <Carousel.Caption>
                    
                    <span className="fs-5 carausalCap">
                    I recently tried their new line of yogurt, and it’s hands down the best I’ve ever had. It's rich, creamy, and you can tell it’s made with fresh, high-quality ingredients. 
                    </span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img
                    className="d-block w-100"
                    src={`https://img.freepik.com/premium-photo/bright-modern-office-35-years-old-handsome-indian-businessman-with-large-smile-generative-ai-aig18_31965-124962.jpg?w=900`}
                    alt=""
                  />
                  <Carousel.Caption>
                    
                    <span className="fs-5 carausalCap">
                    I can’t say enough good things about this dairy farm. The milk delivery service is incredibly convenient, and the products are always delivered fresh.
                    </span>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}
</>

  )
}

export default Home
