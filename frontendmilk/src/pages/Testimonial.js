import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Carousel } from 'react-bootstrap';


function Testimonial() {
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
    <>
  {/* Page Header Start */}
  <div
    className="container-fluid page-header py-5 mb-5 wow fadeIn"
    data-wow-delay="0.1s"
  >
    <div className="container text-center py-5">
      <h1 className="display-3 text-white mb-4 animated slideInDown">
      Testimonial
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
          Testimonial
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
</>

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
  );
}

export default Testimonial;
