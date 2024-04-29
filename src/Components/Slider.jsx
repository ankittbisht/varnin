import React from "react";
import img from "../assets/Rectangle 75.png";
import arrow from "../assets/svgimages/arrow.svg";

const Slider = () => {
  return (
    <div className="container mx-auto grid grid-cols-3 gap-4 bg-[#0A23C7] pl-[160px] pt-36">
      <div className="col-span-1  py-8 ">
    
        <h2 className="text-4xl pr-8 mb-4 font-roboto font-semibold text-white">
          Beijing Hualian Group Taiyuan
        </h2>
        <div className="font-roboto font-normal text-sm mb-20 text-white opacity-70">
          <p className="">Beijing Hualian Group Taiyuan+</p>
          <p className="">Beijing Hualian Group Taiyuan</p>
          <p className="mb-4">
            A new 99,861m2 6 level shopping center, and a 9,325m2 public plaza
            on top of an underground parking podium. The design intent is to
            create a contemporary bold design for BHG that incorporates
            elongated pixelated glass that wraps the facade in a sleek geometric
            skin. The glass is illuminated from behind to produce a mysterious
            effect as the atmosphere transforms from day to night.
          </p>
          <p className="">Taiyuan, Shanxi, China 2016</p>
        </div>

        <h5 className="font-body text-lg text-white">1/2</h5>
      </div>
      <div className="col-span-2 pt-8 ">
      
        

          <div className="flex flex-col items-center relative ">
          <img src={img} alt="Image 2" className="  h-full" />
          <button className=" border-[1px] rounded-full top-[-125px] left-[550px] absolute">
            <img src= {arrow} alt="" className="h-full p-2" />
          </button>
          <button className=" border-[1px] rounded-full top-[-125px] left-[610px] absolute">
            <img src= {arrow} alt="" className="h-full p-2  rotate-180" />
          </button> <h2 className="text-[130px] -top-28 left-0 text-white font-normal font-body absolute">Projects</h2>

          
        
          </div>
        </div>
     
    </div>
  );
};

export default Slider;
