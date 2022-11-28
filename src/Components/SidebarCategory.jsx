import React from "react";

const SidebarCategory = () => {  

  return (
    <>
      {/* <!--=====================================
                CATEGORY SIDEBAR PART START
        =======================================--> */}
      <aside className="category-sidebar">
        <div className="category-header">
          <h4 className="category-title">
            <i className="fas fa-align-left"></i>
            <span>categories</span>
          </h4>
          <button className="category-close">
            <i className="icofont-close"></i>
          </button>
        </div>
        <ul className="category-list">
          <li className="category-item">
            <a className="category-link dropdown-link" href="/">
              <i className="flaticon-vegetable"></i>
              <span>food powders</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="/">asparagus</a>
              </li>
              <li>
                <a href="/">broccoli</a>
              </li>
              <li>
                <a href="/">carrot</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="/">
              <i className="flaticon-groceries"></i>
              <span>earthy essence</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="/">Grains & Bread</a>
              </li>
              <li>
                <a href="/">Dairy & Eggs</a>
              </li>
              <li>
                <a href="/">Oil & Fat</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="/">
              <i className="flaticon-fruit"></i>
              <span>sweets</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="/">Apple</a>
              </li>
              <li>
                <a href="/">Orange</a>
              </li>
              <li>
                <a href="/">Strawberry</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="/">
              <i className="flaticon-fruit"></i>
              <span>savouries</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="/">Apple</a>
              </li>
              <li>
                <a href="/">Orange</a>
              </li>
              <li>
                <a href="/">Strawberry</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="/">
              <i className="flaticon-dried-fruit"></i>
              <span>pickles</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="/">noodles</a>
              </li>
              <li>
                <a href="/">Powdered milk</a>
              </li>
              <li>
                <a href="/">nut & yeast</a>
              </li>
            </ul>
          </li>
          <li className="category-item">
            <a className="category-link dropdown-link" href="/">
              <i className="flaticon-dairy-products"></i>
              <span>dairy</span>
            </a>
            <ul className="dropdown-list">
              <li>
                <a href="/">Egg</a>
              </li>
              <li>
                <a href="/">milk</a>
              </li>
              <li>
                <a href="/">butter</a>
              </li>
            </ul>
          </li>
        </ul>
        <div className="category-footer">
          <p>
            All Rights Reserved by <a href="index.html">Srimatrey Foods</a>
          </p>
        </div>
      </aside>
      {/* <!--=====================================
                CATEGORY SIDEBAR PART END
        =======================================--> */}
    </>
  );
};

export default SidebarCategory;
