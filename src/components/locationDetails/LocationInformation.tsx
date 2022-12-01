// import { t } from "i18next";
import * as React from "react";
import Hours from "../commons/hours";
import CustomMap from "./CustomMap";
// import map from "../images/map.jpg";
// import favorite from "../images/favorite.svg";
// import justeats from "../images/justeats.svg";
// import uber_eats from "../images/uber-eats.svg";
// import deliveroo from "../images/deliveroo.svg";
// import GetDirection from "../commons/GetDirection";
import Service from "./service";
import { Link, useAnalytics } from "@yext/pages/components";
import { useEffect, useRef, useState } from "react";
import Modal from "react-modal";
import Holidayhour from "./holidayHours";
import { svgIcons } from "../../types/svgicon";
import OpenClose from "../commons/openClose";
type props = {
  additionalHoursText: any;
  c_heading: any;
  prop: any;
  coords: any;
  address: any;
  phone: any;
  hours:any;
  deliveryHours: any;
  service: any;
  name: any;
  c_ctabutton: any;
  timezone: any;

  // aboutdata:any;

};
var LOCATION: any = null;
var url: any = "";
var currentLatitude: any = 0.0;
var currentLongitude: any = 0.0;
const LocationInformation = (data: props) => {

  const [modalIsOpen, setIsOpen] = useState(false);

  let subtitle: any;
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  function openModal() {
    document.body.classList.add("overflow-hidden");
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    document.body.classList.remove("overflow-hidden");
    setIsOpen(false);
  }

  function handleCloseModal () {
    document.body.classList.remove("overflow-hidden");
    setIsOpen(false);
  }

  const [timeStatus, setTimeStatus] = useState("");
  const onOpenHide = () => {
    if (timeStatus == "") {
      setTimeStatus("active");
    } else {
      setTimeStatus("");
    }
  };

  const [time, setTime] = React.useState({});
  const [delHours, setDelHours] = React.useState({});
  const [timezone, setTimeZone] = React.useState("");
  const [coordinates, setCoordinate] = React.useState({});
  const [closingTime, setClosingTime] = React.useState("");
  const [address_str, serAddress_str] = React.useState("");
  const [currentLocationLatLng, setCurrentLocationLatLng] =
    React.useState(null);

  // React.useEffect(() => {
  //   setTime(data.prop);
  //   setCoordinate(data.coords);
  //   setDelHours(data.deliveryHours);
  //   let key: any = Object.values(data.prop)[0];
  //   setClosingTime(key.openIntervals[0].end);

  //   // getCurrentLocationLatLng();
  // }, [setCurrentLocationLatLng]);
  // // const getCurrentLocationLatLng = () => {
  // //   navigator?.geolocation.getCurrentPosition(
  // //     ({ coords: { latitude: lat, longitude: lng } }) => {
  // //       const pos: any = { lat, lng };

  // //       setCurrentLocationLatLng(pos);
  // //       LOCATION = pos;
  // //     }
  // //   );
  // // };


  React.useEffect(() => {
    getString();
    setTime(data.prop);
    setCoordinate(data.coords);
    setDelHours(data.deliveryHours);
    let key: any = Object.values(data.prop)[0];
    if (typeof key.openIntervals != "undefined") {
      setClosingTime(key.openIntervals[0].end);
    }

    setTimeZone(data.timezone);
  })
  function getString() {
    let address_string = "";
    address_string =
      data.address.line1 +
      "," +
      data.address.line2 +
      "," +
      data.address.city +
      "," +
      data.address.region +
      "," +
      data.address.postalCode +
      "," +
      regionNames.of(data.address.countryCode);

    address_string = address_string.replace("undefined,", "");
    serAddress_str(address_string);
  }
  function getDirectionUrl() {
    var origin: any = null;
    if (data.address.city) {
      origin = data.address.city;
    } else if (data.address.region) {
      origin = data.address.region;
    } else {
      origin = data.address.country;
    }
    if (navigator.geolocation) {
      const error = (error: any) => {
        var getDirectionUrl =
          "https://www.google.com/maps/dir/?api=1&destination=" +
          data.coords.latitude +
          "," +
          data.coords.longitude +
          "&origin=" +
          origin
        window.open(getDirectionUrl, "_blank");
      };
      navigator.geolocation.getCurrentPosition(
        function (position) {
          currentLatitude = position.coords.latitude;
          currentLongitude = position.coords.longitude;

          var direction_url =
            "https://www.google.com/maps/dir/?api=1&destination=" +
            data.coords.latitude +
            "," +
            data.coords.longitude +
            "&origin=" +
            currentLatitude +
            "," +
            currentLongitude;
          window.open(direction_url, "_blank");
        },
        error,
        {
          timeout: 10000,
        }
      );
    }
    {console.log("fired conversion")}
  }
  const conversionDetails = {
    cid: "e1cd62c2-74f9-4d8a-ade1-b8e9001c4df4",
    cv: "1",
   
  };

  const conversionDetails_phone = {
    cid: "17620319-c59b-4719-9732-eaaf0ff35a3a",
    cv: "2",
  };
  const regionNames = new Intl.DisplayNames(["en"], { type: "region" });
  return (
    <>
      <div className="location-information">
        <div className="container mx-auto">
          <div className="w-full text-center pb-4 lg:pb-5">
            {/* <h2 className="store-time-status">
              <strong>OPEN NOW</strong> - CLOSES AT
              <span style={{ marginLeft: "2px" }}>{closingTime}</span>
            </h2> */}
          </div>

          <div className="boxes">
            {/* {time ? (
                <>
                  <OpenClose
                    hours={time ? time : {}}
                    deliveryHours={delHours ? delHours : {}}
                    timezone={timezone ? timezone : {}}
                  />
                </>
              ) : (
                <></>
              )} */}
            <div className="location_details">
              <div className="box store-info">
                <div className="inner-box">
                  {/* <h4 className="font-semibold">{data.c_heading.storeInfo}</h4> */}
                  <div className="store-address">
                  <span className="icon">{svgIcons.locationaddressicon}</span>
                    <div className=" address-sec ">
                      <h2 className="heading">{data.name}</h2>
                      <p>
                        {data.address && data.address.line1}
                        <br /> {data.address && data.address.city},{" "}
                        {data.address && data.address.postalCode}
                        <br />
                        {regionNames.of(data.address.countryCode)}
                      </p>
                    </div>
                  </div>
                  {data.phone ? (
                    <>
                      <div className="store-phone">
                      <span className="icon">{svgIcons.locatorphoneicon}</span>
                        <p>
                          <Link
                            data-ya-track="phone"
                            href={"tel:" + data.phone}
                            rel="noopener noreferrer"
                            eventName={`cta Click:phone"`}
                            conversionDetails={conversionDetails_phone}
                          >
                            {data.phone ? data.phone : ""}
                          </Link>
                        </p>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}

<div className="hours mb-5">STORE TIME
                    <div className="time-row">
                      <div className="day"></div>

                    </div>

                    {/* {time?<>
                      <Hours hours={time} />
                    </>:<></>

                    } */}

                    {time || delHours ? (
                      <>
                        {/* <h2 className="font-bold">{data.c_heading.storeHours}</h2> */}
                        <Hours
                          hours={time ? time : {}}
                          deliveryHours={delHours ? delHours : {}}
                          timezone={timezone ? timezone : {}}
                          additionalHoursText={data.additionalHoursText}
                        />
                      </>
                    ) : (
                      <></>
                    )}
 
{data.hours && data.hours.holidayHours ? (
                        <>
                          <button
                            className="current-location pharmacy-serv-head hide-mob"
                            onClick={openModal}
                          >
                            Holiday Hours
                          </button>
                          <Modal
                          onRequestClose={handleCloseModal}
                          shouldCloseOnOverlayClick={true}
                           isOpen={modalIsOpen} style={customStyles}>
                            <a
                              onClick={closeModal}
                              type="button"
                              id="closeButton"
                              data-modal-toggle="allergens-pdf"
                              className="closeButton bg-closeIcon bg-no-repeat bg-center w-7 h-7 bg-[length:48px]"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="20.953"
                                height="20.953"
                                viewBox="0 0 20.953 20.953"
                              >
                                <path
                                  id="Icon_ionic-md-close"
                                  data-name="Icon ionic-md-close"
                                  d="M28.477,9.619l-2.1-2.1L18,15.9,9.619,7.523l-2.1,2.1L15.9,18,7.523,26.381l2.1,2.1L18,20.1l8.381,8.381,2.1-2.1L20.1,18Z"
                                  transform="translate(-7.523 -7.523)"
                                  fill="#B1B1B1"
                                />
                              </svg>
                            </a>

                            <span className="text-xl font-extrabold">
                              Holiday Hours Calendar
                            </span>
                            <div className="pop-up-holyhrs">
                              <div>Date</div>

                              <div>Day</div>
                              <div> Opening Hours</div>
                            </div>
                            {data.hours.holidayHours && (
                              <Holidayhour hours={data.hours.holidayHours} />
                            )}
                          </Modal>

                        </>
                     ) : (
                        <></>
                      )} 
                  </div>

                  <div className="store-link">
                    {/* {data.c_heading.getDirection ? */}
                      <Link
                        className="direction"
                        onClick={getDirectionUrl}
                        href="javascript:void(0);"
                        rel="noopener noreferrer"
                        conversionDetails={conversionDetails}
                      >
                        {" "}
                        {/* {data.c_heading.getDirection} */}Get direction
                      </Link>
                      {/* : "get direction"} */}
                  </div>

                </div>
              </div>
            </div>

            <div className="box map-info">
              <div className="inner-box">
                <CustomMap prop={coordinates} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LocationInformation;
