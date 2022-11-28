import React from "react";

const Header = () => {
  return (
    <>
      {/* <!--=====================================
                    HEADER TOP PART START
        =======================================--> */}
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-md-12 col-lg-5">
              <div className="header-top-welcome">
                <p>Welcome to Srimatery Foods Online Store!</p>
              </div>
            </div>
            <div className="col-md-5 col-lg-3"></div>
            <div className="col-md-7 col-lg-4">
              <ul className="header-top-list">
                <li>
                  <a href="/">need help</a>
                </li>
                <li>
                  <a href="/">contact us</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <!--=====================================
                    HEADER TOP PART END 
        =======================================--> */}

      {/* <!--=====================================
                    HEADER PART START
        =======================================--> */}
      <header className="header-part">
        <div className="container">
          <div className="header-content">
            <div className="header-media-group">
              <button className="header-user">
                <img src="assets/images/user.png" alt="user" />
              </button>
              <a href="/">
                <img src="assets/images/logo.png" alt="logo" />
              </a>
              <button className="header-src">
                <i className="fas fa-search"></i>
              </button>
            </div>

            <a href="/" className="header-logo">
              <img src="assets/images/logo.png" alt="logo" />
            </a>

            <form className="header-form">
              <input type="text" placeholder="Search anything..." />
              <button>
                <i className="fas fa-search"></i>
              </button>
            </form>

            <div className="header-widget-group">
              <a href="/" className="header-widget" title="My Account">
                <img src="assets/images/user.png" alt="user" />
                <span>My Account</span>
              </a>
              <button className="header-widget header-cart" title="Cartlist">
                <i className="fas fa-shopping-basket"></i>
                <sup>9+</sup>
                <span>
                  total price<small>&#8377;345.00</small>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* <!--=====================================
                    HEADER PART END
        =======================================--> */}
    </>
  );
};

export default Header;
