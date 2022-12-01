import * as React from "react";
import logo from "../../images/logo.svg";

const Header = () => {
  return (
    <>
      <header>
        <div className="top-nav">
        <div className="container-custom">

<ul>
  <li><a href="#">Store Finder</a></li>
  <li><a href="#">Services</a></li>
  <li><a href="#">Contact Us</a></li>
  <li><a href="#">Track My Order</a></li>
  <li><a href="#">Ryman Blog</a></li>
  <li><a href="#">Store Finder</a></li>

</ul>


</div>
        </div>
        <div className="container-fluid bg-grey">
        <div className="container-custom">
            <div className="logo">
              {<a href="#" className="">
                <img src={logo} alt="RYMAN" title="RYMAN" />
              </a> }
            </div>

<div className="navbar">
<ul>
  <li><a href="#">Shop</a></li>
  <li><a href="#">Stationery</a></li>
  <li><a href="#">Furniture</a></li>
  <li><a href="#">Printing</a></li>
  <li><a href="#">Storage</a></li>
  <li><a href="#">Christmas</a></li>
  <li><a href="#">Black Friday</a></li>
  <li><a href="#">Deals</a></li>
</ul>
</div>

        </div>
        </div>
      </header>
    </>
  );
};

export default Header;

