import React from 'react'

function Footer() {
  return (
    <div>
        {/* Start Footer */}
<footer className="bg-dark" id="tempaltemo_footer">
  <div className="container">
    <div className="row">
      <div className="col-md-4 pt-5">
        <h2 className="h2 text-success border-bottom pb-3 border-light logo">Zay Shop</h2>
        <ul className="list-unstyled text-light footer-link-list">
          <li>
            <i className="fas fa-map-marker-alt fa-fw" />
            123 Consectetur at ligula 10660
          </li>
          <li>
            <i className="fa fa-phone fa-fw" />
            <a className="text-decoration-none" href="tel:010-020-0340">010-020-0340</a>
          </li>
          <li>
            <i className="fa fa-envelope fa-fw" />
            <a className="text-decoration-none" href="mailto:info@company.com">info@company.com</a>
          </li>
        </ul>
      </div>
      <div className="col-md-4 pt-5">
        <h2 className="h2 text-light border-bottom pb-3 border-light">Products</h2>
        <ul className="list-unstyled text-light footer-link-list">
          <li><a className="text-decoration-none" href="#">Luxury</a></li>
          <li><a className="text-decoration-none" href="#">Sport Wear</a></li>
          <li><a className="text-decoration-none" href="#">Men's Shoes</a></li>
          <li><a className="text-decoration-none" href="#">Women's Shoes</a></li>
          <li><a className="text-decoration-none" href="#">Popular Dress</a></li>
          <li><a className="text-decoration-none" href="#">Gym Accessories</a></li>
          <li><a className="text-decoration-none" href="#">Sport Shoes</a></li>
        </ul>
      </div>
      <div className="col-md-4 pt-5">
        <h2 className="h2 text-light border-bottom pb-3 border-light">Further Info</h2>
        <ul className="list-unstyled text-light footer-link-list">
          <li><a className="text-decoration-none" href="#">Home</a></li>
          <li><a className="text-decoration-none" href="#">About Us</a></li>
          <li><a className="text-decoration-none" href="#">Shop Locations</a></li>
          <li><a className="text-decoration-none" href="#">FAQs</a></li>
          <li><a className="text-decoration-none" href="#">Contact</a></li>
        </ul>
      </div>
    </div>
    <div className="row text-light mb-4">
      <div className="col-12 mb-3">
        <div className="w-100 my-3 border-top border-light" />
      </div>
      <div className="col-auto me-auto">
        <ul className="list-inline text-left footer-icons">
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a className="text-light text-decoration-none" target="_blank" href="http://facebook.com/"><i className="fab fa-facebook-f fa-lg fa-fw" /></a>
          </li>
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a className="text-light text-decoration-none" target="_blank" href="https://www.instagram.com/"><i className="fab fa-instagram fa-lg fa-fw" /></a>
          </li>
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a className="text-light text-decoration-none" target="_blank" href="https://twitter.com/"><i className="fab fa-twitter fa-lg fa-fw" /></a>
          </li>
          <li className="list-inline-item border border-light rounded-circle text-center">
            <a className="text-light text-decoration-none" target="_blank" href="https://www.linkedin.com/"><i className="fab fa-linkedin fa-lg fa-fw" /></a>
          </li>
        </ul>
      </div>
      <div className="col-auto">
        <label className="sr-only" htmlFor="subscribeEmail">Email address</label>
        <div className="input-group mb-2">
          <input type="text" className="form-control bg-dark border-light" id="subscribeEmail" placeholder="Email address" />
          <div className="input-group-text btn-success text-light">Subscribe</div>
        </div>
      </div>
    </div>
  </div>
  <div className="w-100 bg-black py-3">
    <div className="container">
      <div className="row pt-2">
        <div className="col-12">
          <p className="text-left text-light">
            Copyright © 2021 Company Name 
            | Designed by <a rel="sponsored" href="https://templatemo.com" target="_blank">TemplateMo</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</footer>
{/* End Footer */}

    </div>
  )
}

export default Footer