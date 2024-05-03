import React from "react";

import img1 from "../assets/[Downloader 2.png";

const TwoColumnComponent = () => {
  return (
    <div className="container mx-auto pt:0 md:pt-4 pb-0 md:pb-16">
      <div className="grid grid-cols-12 md:grid-cols-2 gap-4">
        {/* Left Column */}
        <div
          className="flex flex-col justify-center relative text-left
 z-10 left-8 top-0 md:left-[220px] md:top-[-40px] min-w-[70dvw] md:min-w-[410px] text-white md:text-black"
        >
          {/* Heading */}
          <h2 className="text-2xl md:text-[40px] leading-10 font-normal font-body mb-2">
            Witness superior quality, luxurious and value-engineered buildings
          </h2>
          {/* Description */}
          <p className="text-sm md:text-xs text-white md:text-[#898989] mb-4 font-roboto text-left">
            We provide design consulting renderings with a touch of poetry
          </p>
          {/* Button */}
          <button
            className="bg-[#0A23C7] text-center px-2 py-2
  text-white font-normal text-sm md:text-sm flex items-center gap-2 w-[230px] font-roboto justify-center"
          >
            Get first free consultation
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
        {/* Right Column */}
        <div className="relative">
          {/* Image */}
          <img
            src={img1}
            alt="Image"
            className=" relative left-[-40px]  md:left-[-55px] min-w-[100dvw] md:min-w-[678px] h-[400px] md:h-[600px]  "
          />
        </div>
      </div>
    </div>
  );
};

export default TwoColumnComponent;
