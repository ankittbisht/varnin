import React from "react";
import logo from "../assets/Group 5.png";
import fb from "../assets/svgimages/fb.svg";
import linkedin from "../assets/svgimages/linkedin.svg";
import insta from "../assets/svgimages/insta.svg";

const Footer = () => {
  return (
    <footer className="">
      <div className="bg-black text-white px-5 md:px-36  py-8 md:py-14 border-b border-[#ffffff50]">
        <div className="container mx-auto grid grid-cols-12 md:grid-cols-3 md:gap-32">
          {/* Column 1 */}
          <div className="col-span-6 md:col-span-1 font-body font-normal text-xs md:text-sm w-3/4 md:w-full">
            <div className="mb-10">
              <p>info@kevin.com</p>
              <p>+1234567890</p>
            </div>
            <div>
              <p>600 Washington Street Suite 403 New York, NY 10014</p>
            </div>
          </div>

          {/* Column 2 */}
          <div className="col-span-6 md:col-span-1 text-center flex  flex-col  items-start md:items-center">
            <img src={logo} alt="Logo" className="mb-5 md:mb-12 h-10" />
            <div className="flex justify-center">
              <div className="flex items-start md:items-center flex-col md:flex-row gap-4 md:gap-8 text-sm font-body font-normal">
                <a href="https://facebook.com" className="mx-2 flex items-center">
                  <img
                    src={fb}
                    alt="Logo"
                    className="h-6 border border-white rounded-full"
                  />
                  <span className="ml-1">Facebook</span>
                </a>
                <a href="https://facebook.com" className="mx-2 flex items-center">
                  <img
                    src={linkedin}
                    alt="Logo"
                    className="h-6 border border-white rounded-full "
                  />
                  <span className="ml-1">linkedin</span>
                </a>
                <a href="https://facebook.com" className="mx-2 flex items-center">
                  <img
                    src={insta}
                    alt="Logo"
                    className="h-6 border border-white rounded-full "
                  />
                  <span className="ml-1">Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Column 3 */}
          <div className="col-span-12 md:col-span-1">
            <h4 className="mb-5 text-2xl font-body font-normal">Subscribe</h4>
            <input
              type="email"
              placeholder="Your Email"
              className="w-full pb-3 border-b border-[#ffffff50] bg-transparent text-white text-xs font-roboto  placeholder-[#ffffff50]"
            />
          </div>
        </div>
      </div>
      <div className="bg-black text-white px-5 md:px-36  py-4">
        <div className="flex justify-between text-sm font-body font-normal">
          <p>copyright@TechQilla.com</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
