import React from 'react'
import Lottie from 'lottie-react';
import animate from '../img/cart-empty.json'

import { Link } from 'react-router-dom';
import CartProduct from './CartProduct';
import { useStateValue } from '../components/StateProvider';
import Subtotal from './Subtotal';
import { motion } from "framer-motion";


function Cart() {

    const [{ basket }, dispatch] = useStateValue();
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
        Cart
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
          Cart
          </li>
        </ol>
      </nav>
    </div>
  </div>
  {/* Page Header End */}
  {/* Cart Page Start */}
  <div className="container-fluid py-5">
    <div className="container py-5">
      <div>
  <h2>Your Shopping Cart</h2>
  <div className="table-responsive">
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Products</th>
          <th scope="col">Name</th>
          <th scope="col">Price</th>
          <th scope="col">Quantity</th>
          <th scope="col">Total</th>
          <th scope="col">Handle</th>
        </tr>
      </thead>
      <tbody>
      {basket.length ? (
          basket.map(item => (
            <CartProduct
              key={item.id} 
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
            />
          ))
        ) : (
            <Lottie className='json-data' animationData={animate}/>
        )}
      </tbody>
    </table>
  </div>
</div>

     <Subtotal/>
    </div>
  </div>
  {/* Cart Page End */}
</>

    </div>
  )
}

export default Cart
