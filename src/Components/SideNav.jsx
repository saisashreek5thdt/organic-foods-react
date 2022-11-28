import React from "react";

const SideNav = () => {
  return (
    <>
      {/* <!--=====================================
                  NAV SIDEBAR PART START
        =======================================--> */}
      <aside className="nav-sidebar">
        <div className="nav-header">
          <a href="/">
            <img src="assets/images/logo.png" alt="logo" />
          </a>
          <button className="nav-close">
            <i className="icofont-close"></i>
          </button>
        </div>
        <div className="nav-content">
          <div className="nav-btn">
            <a href="/" className="btn btn-inline">
              <i className="fa fa-unlock-alt"></i>
              <span>join here</span>
            </a>
          </div>
          {/* <!-- This commentable code show when user login or register --> */}
          {/* <div className="nav-profile">
            <a className="nav-user" href="/"><img src="assets/images/user.png" alt="user"></a>
            <h4 className="nav-name"><a href="assets/profile.html">Miron Mahmud</a></h4>
        </div> */}
          <ul className="nav-list">
            <li>
              <a className="nav-link dropdown-link" href="/">
                <i className="icofont-home"></i>Home
              </a>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="/">
                <i className="icofont-page"></i>category
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="/">product tab</a>
                </li>
                <li>
                  <a href="/">product grid</a>
                </li>
                <li>
                  <a href="/">product video</a>
                </li>
                <li>
                  <a href="/">product simple</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link dropdown-link" href="/">
                <i className="icofont-bag-alt"></i>my account
              </a>
              <ul className="dropdown-list">
                <li>
                  <a href="/">profile</a>
                </li>
                <li>
                  <a href="/">wallet</a>
                </li>
                <li>
                  <a href="/">wishlist</a>
                </li>
                <li>
                  <a href="/">compare</a>
                </li>
                <li>
                  <a href="/">checkout</a>
                </li>
                <li>
                  <a href="/">order history</a>
                </li>
                <li>
                  <a href="/">order invoice</a>
                </li>
                <li>
                  <a href="/">email template</a>
                </li>
              </ul>
            </li>
            <li>
              <a className="nav-link" href="/">
                <i className="icofont-info-circle"></i>about us
              </a>
            </li>
            <li>
              <a className="nav-link" href="/">
                <i className="icofont-contacts"></i>contact us
              </a>
            </li>
            <li>
              <a className="nav-link" href="/">
                <i className="icofont-warning"></i>privacy policy
              </a>
            </li>
            <li>
              <a className="nav-link" href="/">
                <i className="icofont-logout"></i>logout
              </a>
            </li>
          </ul>
          <div className="nav-info-group">
            <div className="nav-info">
              <i className="icofont-ui-touch-phone"></i>
              <p>
                <small>call us</small>
                <span>(+91) 924 - 679 - 9010</span>
              </p>
            </div>
            <div className="nav-info">
              <i className="icofont-ui-email"></i>
              <p>
                <small>email us</small>
                <span>support@srimatreyfoods.com</span>
              </p>
            </div>
          </div>
          <div className="nav-footer">
            <p>
              All Rights Reserved by <a href="/">Srimatrey Foods</a>
            </p>
          </div>
        </div>
      </aside>
      {/* <!--=====================================
                  NAV SIDEBAR PART END
        =======================================--> */}
    </>
  );
};

export default SideNav;
