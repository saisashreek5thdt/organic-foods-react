import React from "react";

const Navbar = () => {
  return (
    <>
      {/* <!--=====================================
                    NAVBAR PART START
        =======================================--> */}
      <nav className="navbar-part">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="navbar-content">
                <ul className="navbar-list">
                  <li className="navbar-item">
                    <a className="navbar-link" href="/">
                      home
                    </a>
                  </li>
                  <li className="navbar-item dropdown-megamenu">
                    <a className="navbar-link dropdown-arrow" href="/">
                      category
                    </a>
                    <div className="megamenu">
                      <div className="container">
                        <div className="row row-cols-5">
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">food powders</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="/">noodles</a>
                                </li>
                                <li>
                                  <a href="/">Powdered milk</a>
                                </li>
                                <li>
                                  <a href="/">nut & yeast</a>
                                </li>
                                <li>
                                  <a href="/">almonds</a>
                                </li>
                                <li>
                                  <a href="/">pumpkin</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">earthy essence</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="/">noodles</a>
                                </li>
                                <li>
                                  <a href="/">Powdered milk</a>
                                </li>
                                <li>
                                  <a href="/">nut & yeast</a>
                                </li>
                                <li>
                                  <a href="/">almonds</a>
                                </li>
                                <li>
                                  <a href="/">pumpkin</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">sweets</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="/">carrot</a>
                                </li>
                                <li>
                                  <a href="/">broccoli</a>
                                </li>
                                <li>
                                  <a href="/">asparagus</a>
                                </li>
                                <li>
                                  <a href="/">cauliflower</a>
                                </li>
                                <li>
                                  <a href="/">eggplant</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">savories</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="/">carrot</a>
                                </li>
                                <li>
                                  <a href="/">broccoli</a>
                                </li>
                                <li>
                                  <a href="/">asparagus</a>
                                </li>
                                <li>
                                  <a href="/">cauliflower</a>
                                </li>
                                <li>
                                  <a href="/">eggplant</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">pickles</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="/">Apple</a>
                                </li>
                                <li>
                                  <a href="/">orange</a>
                                </li>
                                <li>
                                  <a href="/">banana</a>
                                </li>
                                <li>
                                  <a href="/">strawberrie</a>
                                </li>
                                <li>
                                  <a href="/">watermelon</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="col">
                            <div className="megamenu-wrap">
                              <h5 className="megamenu-title">dairy</h5>
                              <ul className="megamenu-list">
                                <li>
                                  <a href="/">Butter</a>
                                </li>
                                <li>
                                  <a href="/">Cheese</a>
                                </li>
                                <li>
                                  <a href="/">Milk</a>
                                </li>
                                <li>
                                  <a href="/">Eggs</a>
                                </li>
                                <li>
                                  <a href="/">cream</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="navbar-item dropdown">
                    <a className="navbar-link dropdown-arrow" href="/">
                      pages
                    </a>
                    <ul className="dropdown-position-list">
                      <li>
                        <a href="/">faqs</a>
                      </li>
                      <li>
                        <a href="/">about us</a>
                      </li>
                      <li>
                        <a href="/">privacy policy</a>
                      </li>
                    </ul>
                  </li>
                </ul>
                <div className="navbar-info-group">
                  <div className="navbar-info">
                    <i className="icofont-ui-touch-phone"></i>
                    <p>
                      <small>call us</small>
                      <span>(+91) 924 - 679 - 9010</span>
                    </p>
                  </div>
                  <div className="navbar-info">
                    <i className="icofont-ui-email"></i>
                    <p>
                      <small>email us</small>
                      <span>support@srimatreyfoods.com</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      {/* <!--=====================================
                    NAVBAR PART END
        =======================================--> */}
    </>
  );
};

export default Navbar;
