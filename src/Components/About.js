import React from 'react'

function About() {
  return (
    <div>
        <div className="modal fade bg-white" id="templatemo_search" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog modal-lg" role="document">
      <div className="w-100 pt-1 mb-5 text-right">
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
      </div>
      <form action method="get" className="modal-content modal-body border-0 p-0">
        <div className="input-group mb-2">
          <input type="text" className="form-control" id="inputModalSearch" name="q" placeholder="Search ..." />
          <button type="submit" className="input-group-text bg-success text-light">
            <i className="fa fa-fw fa-search text-white" />
          </button>
        </div>
      </form>
    </div>
  </div>
  <section className="bg-success py-5">
    <div className="container">
      <div className="row align-items-center py-5">
        <div className="col-md-8 text-white">
          <h1>About Us</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="col-md-4">
          <img src="assets/img/about-hero.svg" alt="About Hero" />
        </div>
      </div>
    </div>
  </section>
  {/* Close Banner */}
  {/* Start Section */}
  <section className="container py-5">
    <div className="row text-center pt-5 pb-3">
      <div className="col-lg-6 m-auto">
        <h1 className="h1">Our Services</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
          Lorem ipsum dolor sit amet.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-3 pb-5">
        <div className="h-100 py-5 services-icon-wap shadow">
          <div className="h1 text-success text-center"><i className="fa fa-truck fa-lg" /></div>
          <h2 className="h5 mt-4 text-center">Delivery Services</h2>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 pb-5">
        <div className="h-100 py-5 services-icon-wap shadow">
          <div className="h1 text-success text-center"><i className="fas fa-exchange-alt" /></div>
          <h2 className="h5 mt-4 text-center">Shipping &amp; Return</h2>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 pb-5">
        <div className="h-100 py-5 services-icon-wap shadow">
          <div className="h1 text-success text-center"><i className="fa fa-percent" /></div>
          <h2 className="h5 mt-4 text-center">Promotion</h2>
        </div>
      </div>
      <div className="col-md-6 col-lg-3 pb-5">
        <div className="h-100 py-5 services-icon-wap shadow">
          <div className="h1 text-success text-center"><i className="fa fa-user" /></div>
          <h2 className="h5 mt-4 text-center">24 Hours Service</h2>
        </div>
      </div>
    </div>
  </section>
  {/* End Section */}
  {/* Start Brands */}
  <section className="bg-light py-5">
    <div className="container my-4">
      <div className="row text-center py-3">
        <div className="col-lg-6 m-auto">
          <h1 className="h1">Our Brands</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
            Lorem ipsum dolor sit amet.
          </p>
        </div>
        <div className="col-lg-9 m-auto tempaltemo-carousel">
          <div className="row d-flex flex-row">
            {/*Controls*/}
            <div className="col-1 align-self-center">
              <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="prev">
                <i className="text-light fas fa-chevron-left" />
              </a>
            </div>
            {/*End Controls*/}
            {/*Carousel Wrapper*/}
            <div className="col">
              <div className="carousel slide carousel-multi-item pt-2 pt-md-0" id="templatemo-slide-brand" data-bs-ride="carousel">
                {/*Slides*/}
                <div className="carousel-inner product-links-wap" role="listbox">
                  {/*First slide*/}
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                      </div>
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                      </div>
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                      </div>
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                      </div>
                    </div>
                  </div>
                  {/*End First slide*/}
                  {/*Second slide*/}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                      </div>
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                      </div>
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                      </div>
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                      </div>
                    </div>
                  </div>
                  {/*End Second slide*/}
                  {/*Third slide*/}
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_01.png" alt="Brand Logo" /></a>
                      </div>
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_02.png" alt="Brand Logo" /></a>
                      </div>
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_03.png" alt="Brand Logo" /></a>
                      </div>
                      <div className="col-3 p-md-5">
                        <a href="#"><img className="img-fluid brand-img" src="assets/img/brand_04.png" alt="Brand Logo" /></a>
                      </div>
                    </div>
                  </div>
                  {/*End Third slide*/}
                </div>
                {/*End Slides*/}
              </div>
            </div>
            {/*End Carousel Wrapper*/}
            {/*Controls*/}
            <div className="col-1 align-self-center">
              <a className="h1" href="#templatemo-slide-brand" role="button" data-bs-slide="next">
                <i className="text-light fas fa-chevron-right" />
              </a>
            </div>
            {/*End Controls*/}
          </div>
        </div>
      </div>
    </div>
  </section>
  {/*End Brands*/}

    </div>
  )
}

export default About