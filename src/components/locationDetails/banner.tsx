import * as React from "react";
import bannerImage from "../../images/hero-banner.png"
import { Link } from "@yext/pages/components";
// import { bannerText } from "../constants";
export type Address = {
  line1: string;
  city: string;
  region: string;
  postalCode: string;
  countryCode: string;
};
type props = {
  Name: any;
  TagLine: any;
  // BackgroundImage: any;
  // CtaButton: any;

};
type Banner = {
  name?: string;
  address?: Address;
  openTime?: string;
  children?: React.ReactNode;
  TagLine?:any;
};

const Banner = (Data: props) => {
 
  return (
    <>
      <div className="hero">
        <img
          className="hero-img"
          src={bannerImage}
          alt="banner"
          title="banner"
        />
        <div className="container text-center">
          <h1>
          {Data.Name ? Data.Name:""}
          </h1>
          <p> {Data.TagLine ? Data.TagLine:""}</p>
         
            <div className="cta_btn">
              <Link
                rel="noopener noreferrer"
               
                href= "Book Now"
                className="button"
              >
               
              </Link>
            </div>
        
        </div>
      </div>
    </>
  );
};

export default Banner;
