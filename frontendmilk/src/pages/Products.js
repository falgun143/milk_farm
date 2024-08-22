import React from 'react'
import { Link } from 'react-router-dom'
import product3 from '../img/product-3.jpg'
import product4 from '../img/product-4.jpg'
function Products() {
  return (
    <>
    {/* Page Header Start */}
    <div
      className="container-fluid page-header py-5 mb-5 wow fadeIn"
      data-wow-delay="0.1s"
    >
      <div className="container text-center py-5">
        <h1 className="display-3 text-white mb-4 animated slideInDown">
          Products
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
            Products
            </li>
          </ol>
        </nav>
      </div>
    </div>
    {/* Page Header End */}
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
       
        <div
          className="col-md-6 col-lg-4 col-xl-3 wow fadeInUp"
          data-wow-delay="0.5s"
        ><Link to={"/dairyproducts"}>
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
        ><Link to="/organicproducts">
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
  </>
  )
}

export default Products