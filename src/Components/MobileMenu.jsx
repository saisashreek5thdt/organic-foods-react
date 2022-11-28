import React from "react";

const MobileMenu = () => {
  return (
    <>
      {/* <!--=====================================
                    MOBILE-MENU PART START
        =======================================--> */}
      <div className="mobile-menu">
        <a href="/" title="Home Page">
          <i className="fas fa-home"></i>
          <span>Home</span>
        </a>
        <button className="cate-btn" title="Category List">
          <i className="fas fa-list"></i>
          <span>category</span>
        </button>
        <button className="cart-btn" title="Cartlist">
          <i className="fas fa-shopping-basket"></i>
          <span>cartlist</span>
          <sup>9+</sup>
        </button>
      </div>
      {/* <!--=====================================
                    MOBILE-MENU PART END
        =======================================--> */}
    </>
  );
};

export default MobileMenu;
