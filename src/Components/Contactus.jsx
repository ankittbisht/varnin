import React from "react";
import call from "../assets/svgimages/call.svg";
import support from "../assets/svgimages/support.svg";
import location from "../assets/svgimages/location.svg";
import bnrImg from "../assets/image 4.png";
import bgImg from "../assets/Rectangle 78.png";
const MyComponent = () => {
  return (
    <div className="container mx-auto  px-[160px] py-[100px]">
      <div className="grid grid-cols-12 gap-4">
        {/* First Column */}
        <div className="col-span-8 md:col-span-8 ">
          {/* Heading and Paragraph */}
          <div className="pb-20">
            <h2 className="text-7xl font-normal  mb-6 font-body">Contact Us</h2>
            <p className="text-sm text-gray-600 mb-4 font-roboto">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 x">
            {/* Card 1 */}
            <div className="bg-white rounded-lg  text-start">
              <img src={call} alt="Logo 1" className="text-start h-11" />
              <h3 className="text-3xl font-normal font-body mb-2 mt-2">
                Let's talk
              </h3>
              <p className="text-xs font-normal font-roboto text-[#242424]">
                +1 (917) 523-2418
              </p>
              <p className="text-xs font-normal font-roboto text-[#242424]">
                +1 (917) 523-2418
              </p>
            </div>
            {/* Card 2 */}
            <div className="bg-white ">
              <img src={location} alt="Logo 2" className="text-start h-10" />
              <h3 className="text-3xl font-normal font-body  mb-2 mt-2">
                Address
              </h3>
              <p className="text-xs  font-normal font-roboto text-[#242424]">
                600 Washington Street Suite 403 New York, NY 10014
              </p>
            </div>
            {/* Card 3 */}
            <div className="bg-white ">
              <img src={support} alt="Logo 3" className="text-start  h-10" />
              <h3 className="text-3xl   mb-2 font-normal font-body mt-2">
                Support
              </h3>
              <p className="text-xs  font-normal font-roboto text-[#242424]">
                info@kevin.com
              </p>
            </div>
          </div>
          {/* Button */}
          <button className="text-xs flex items-center gap-2 bg-[#0A23C7] text-white font-roboto py-2 px-4 rounded">
            Send Message
            <svg
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.6875 9.87504C12.5711 9.75794 12.5057 9.59953 12.5057 9.43441C12.5057 9.2693 12.5711 9.11089 12.6875 8.99379L15.5625 6.12504H0.843737C0.677977 6.12504 0.519005 6.05919 0.401794 5.94198C0.284584 5.82477 0.218737 5.6658 0.218737 5.50004C0.218737 5.33428 0.284584 5.1753 0.401794 5.05809C0.519005 4.94088 0.677977 4.87504 0.843737 4.87504H15.5437L12.6875 2.01878C12.569 1.9011 12.5021 1.74114 12.5015 1.57412C12.5009 1.40709 12.5667 1.24668 12.6844 1.12816C12.8021 1.00964 12.962 0.942729 13.129 0.942143C13.2961 0.941557 13.4565 1.00734 13.575 1.12503L17.55 5.10629C17.6549 5.2117 17.7139 5.3544 17.7139 5.50316C17.7139 5.65192 17.6549 5.79462 17.55 5.90004L13.575 9.87504C13.5169 9.93362 13.4478 9.98011 13.3716 10.0118C13.2954 10.0436 13.2137 10.0599 13.1312 10.0599C13.0487 10.0599 12.967 10.0436 12.8909 10.0118C12.8147 9.98011 12.7456 9.93362 12.6875 9.87504Z"
                fill="white"
              />
            </svg>
          </button>
        </div>
        {/* Second Column */}
        <div className="col-span-8 md:col-span-4 relative">
          {/* Images */}
          <img src= {bgImg} alt="Image 2" className="top-[15px] left-[280px] w-[140px] absolute z-0" />
          <img src={bnrImg} alt="Image 1" className="top-[35px] left-[100px] mb-4 absolute z-10" />
          
        </div>
      </div>
    </div>
  );
};

export default MyComponent;
