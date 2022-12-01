import * as React from "react";
import storeicn from "../../images/store-finder.svg";
import facebook from "../../images/facebook.svg"; 
import instagram from "../../images/instagram.svg";
import twitter from "../../images/twitter.svg";
import youtube from "../../images/youtube.svg";
import printest from "../../images/printest.svg";

const Footer = () => {
  return (
<>
    <div className="footer-content"> 
    <h3>Be the first to know... sign up for the latest news, offers, events & exclusive discounts by email</h3>
    <p>For details on how we will use your information please read our <a href="#"> Privacy Policy </a> and <a href="#"> Cookie Policy</a></p>
    
    <div className="footer-newslettter">
    <input name="email" type="email" id="newsletter" placeholder="Please enter your email" />
    <button className="action subscribe primary" title="Sign Up" type="submit">Sign Up</button>
    </div>
    
    </div>
     <footer className="footer">
      <div className="container-custom">
      <div className="footer-nav">
<div className="footer-links">
  <h4>About</h4>
  <ul>
    <li><a href="#">About Us</a></li>
    <li><a href="#"> Careers</a></li>
    <li><a href="#"> Services</a></li>
    <li><a href="#"> Gender Pay Gap Report</a></li>
    <li><a href="#"> Diversity, Equality & Inclusion Policy</a></li>
    <li><a href="#"> Theo Paphitis</a></li>
    <li><a href="#"> Environment</a></li>
    <li><a href="#"> Modern Slavery Statement</a></li>
  </ul>
</div>
<div className="footer-links">
  <h4>My Account</h4>
  <ul>
    <li><a href="#">Log In</a></li>
    <li><a href="#"> Business & Education</a></li>
  </ul>
</div>
<div className="footer-links">
  <h4>Customer Service</h4>
  <ul>
    <li><a href="#">Help & FAQs</a></li>
    <li><a href="#"> Delivery Info</a></li>
    <li><a href="#"> Returns Policy</a></li>
    <li><a href="#"> Terms & Conditions</a></li>
    <li><a href="#"> Privacy Policy</a></li>
  </ul>
</div>

<div className="find-location-sec">
<div className="store-find">
<a href="" className="store-locator-button">
<img src={storeicn} alt="" title=""/> Find Your Local Store</a>
</div>

<div className="social-links">
  <ul>
    <li><a href="#"> <img src={facebook} alt="" title="" /></a></li>
    <li><a href="#"> <img src={instagram} alt="" title="" /></a></li>
    <li><a href="#"> <img src={twitter} alt="" title="" /></a></li>
    <li><a href="#"> <img src={youtube} alt="" title="" /></a></li>
    <li><a href="#"> <img src={printest} alt="" title="" /></a></li>
  </ul>
</div>



</div>

      </div>





           </div>
      <div className="container-fluid">
       
        <div className="footer_links">
          {/* <div className="column">
            <p>Copyright © Bestway National Chemists Limited All rights reserved.</p>
          </div> */}

          <div className="column">
            <ul>
              {/* <li><a href="#" title="terms and conditions">terms and conditions</a></li>
              <li><a href="#" title="well.co.uk">well.co.uk</a></li> */}
            </ul>
          </div>
        </div>
      </div>



    </footer>
    </>
  );
};
export default Footer;
