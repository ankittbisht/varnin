import React from "react";
import seventh from "../assets/svgimages/seventh.svg";
import fifth from "../assets/svgimages/fifth.svg";
import six from "../assets/svgimages/sixth.svg";

const Choosesection = () => {
  return (
    <div className="container mx-auto px-5 md:px-[160px] py-[70px]">
      <div className="text-start mb-8 pb-2 md:pb-12">
        <div className="relative">
          <h1 className="text-4xl md:text-7xl pb-10 font-body font-normal">
            Why choose us
          </h1>
          <p className="text-[#79754E] text-xs font-normal text-end absolute top-[50px] md:top-[75px] left-0 md:left-[190px] font-roboto tracking-[0.6em]">
            OUR RESULTS SPEAKS TRUTH
          </p>
        </div>
        <p className="pt-4 md:pt-0 text-sm font-roboto font-normal text-[#242424] opacity-70">
          We deliver strategic innovation, design excellence, and overall
          project governance from inception to timely, within budget, scope, and
          quality completion; Collaborating with interdisciplinary professionals
          ranging from developers to consultants, project management companies,
          architects, and engineers; Spearheading diverse project teams and
          establishing design concepts, ranging in size from city-wide scale to
          small fractions of inches; Ensuring quality across delivered projects
          while maintaining budgetary alignment.
        </p>
      </div>

      {/* Cards */}
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-32">
        {/* Card 1 */}
        <div className="h-full min-h-80 bg-white rounded-lg p-4 border-[1px] border-[#939393] ">
          <h1 className="text-end font-black text-5xl text-[#BBBBBB] font-prompt">01</h1>
          <img src={fifth} alt="Logo 1" className="h-32 md:h-24 mx-auto pb-4" />

          <h2 className="text-center text-xl md:text-base font-normal pb-2 font-body">
            Competitive prices
          </h2>
          <p className="text-center text-base md:text-xs font-roboto text-[#242424]">
            We offer competitive rates without compromising on quality of
            service.
          </p>
        </div>

        {/* Card 2 */}
        <div className="h-full min-h-80 bg-white rounded-lg  p-4 border-[1px] border-[#939393] text-center ">
          <h1 className="text-end font-black text-5xl text-[#BBBBBB] font-prompt">02</h1>

          <img src={six} alt="Logo 2" className="h-32 md:h-24 mx-auto pb-4" />

          <h2 className="text-center text-xl md:text-base font-normal  pb-2 font-body">
            Long-term partnership
          </h2>
          <p className="text-base md:text-xs font-roboto text-[#242424]">
            we strive to build long-term partnerships with my clients, providing
            ongoing support and maintenance.
          </p>
        </div>

        {/* Card 3 */}
        <div className="h-full min-h-80 bg-white rounded-lg  p-4 border-[1px] border-[#939393] text-center">
          <h1 className="text-end font-black text-5xl text-[#BBBBBB] font-prompt">03</h1>
          <img src={seventh} alt="third" className="h-32 md:h-24 mx-auto pb-4" />
          <h2 className="text-center text-xl md:text-base font-normal text-gray-800 pb-2 font-body">
            Performance-driven solution
          </h2>
          <p className="text-base md:text-xs  font-roboto text-[#242424]">
            We focus on speed, security, and scalablity to ensure your website
            delivers a world-class experience.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Choosesection;
