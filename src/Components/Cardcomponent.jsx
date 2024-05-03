import React from "react";
import ArchitectSVG from "../assets/svgimages/architect.svg";
import second from "../assets/svgimages/second.svg";
import third from "../assets/svgimages/third.svg";
import fourth from "../assets/svgimages/fourth.svg";

const CardComponent = () => {
  return (
    <div className="container  mt-[23px] px-5 md:px-[160px] py-[90px] bg-[#0A23C7]">
      {/* Heading and one-liner intro */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-normal text-white mb-2 font-body ">
          What do we do
        </h1>
        <p className="font-normal text-white font-roboto text-xs tracking-[0.3em]">
          WE FOSTER A UNIQUE ARCHITECTURAL IDENTITY WITH ALL OUR DESIGN
          CONSULTANCY.
        </p>
      </div>

      {/* Cards */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Card 1 */}
        <div className="h-full min-h-64 bg-white  p-4">
          <img src={ArchitectSVG} alt="Logo 1" className="h-28 md:h-[6rem] py-4" />

          <h2 className="text-xl md:text-base  pb-2 font-body font-normal">
            Architectural Planning
          </h2>
          <p className="text-base md:text-xs font-roboto text-[#242424]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sed
            duis blandit tincidunt massa sed arcu posuere.
          </p>
        </div>

        {/* Card 2 */}
        <div className="h-full min-h-64 bg-white  p-4">
          <img src={second} alt="Logo 2" className=" h-28 md:h-[6rem] py-4" />

          <h2 className="text-xl md:text-base pb-2 font-body font-normal">
            Quality completion
          </h2>
          <p className="text-base md:text-xs font-roboto text-[#242424]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sed
            duis blandit tincidunt massa sed arcu posuere.
          </p>
        </div>

        {/* Card 3 */}
        <div className="h-full min-h-64 bg-white  p-4">
          <img src={third} alt="third" className="h-28 md:h-[6rem] py-4" />
          <h2 className="text-xl md:text-base pb-2 font-body font-normal">
            Maintaining Budgetary
          </h2>
          <p className=" text-base md:text-xs font-roboto text-[#242424]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sed
            duis blandit tincidunt massa sed arcu posuere.
          </p>
        </div>

        {/* Card 4 */}
        <div className="h-full min-h-60 bg-white  p-4">
          <img src={fourth} alt="Logo 4" className=" h-28 md:h-[6rem] py-4" />
          <h2 className="text-xl md:text-base text-gray-800 pb-2 font-body font-normal">
            Quality ensuring
          </h2>
          <p className="text-base md:text-xs font-roboto text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea sed
            duis blandit tincidunt massa sed arcu posuere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardComponent;