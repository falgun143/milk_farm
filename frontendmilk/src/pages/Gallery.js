import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import gallery1 from '../img/gallery-1.jpg'
import gallery2 from '../img/gallery-2.jpg'
import gallery3 from '../img/gallery-3.jpg'
import gallery4 from '../img/gallery-4.jpg'
import gallery5 from '../img/gallery-5.jpg'
import gallery6 from '../img/gallery-6.jpg'
import gallery7 from '../img/gallery-7.jpg'
import gallery8 from '../img/gallery-8.jpg'
function Gallery() {
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
        Gallery
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
          Gallery
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
</>

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
      </div>
    );
  }
  
  export default Gallery;