import React from "react";
import banner from "../../../assets/about.jpg";
import img1 from "../../../assets/Rectangle 4.png";
import img2 from "../../../assets/Rectangle 5.png";

const AboutUsSection = () => {
  return (
    <section>
      <div className="container relative">
        <div className="grid grid-cols-2">
          <div className="text-center col-span-2 md:col-span-1 bg-[#0A23C7] text-white flex flex-col justify-center items-center p-8">
            <h1 className="text-4xl font-body mb-8">About Us</h1>
            <p className="text-lg mb-8 font-roboto">
              We provide design consulting renderings with a touch of poetry
            </p>
            <a
              href="#"
              className="font-roboto bg-white text-blue-900 px-6 py-3  hover:bg-blue-200 transition-colors duration-300"
            >
              Get first free consultation
            </a>
          </div>
          <div className="col-span-2 md:col-span-1 ">
            <img
              src={banner}
              alt="City Skyline"
              className="h-screen w-full  object-cover"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto pb-12  pt-0 md:px-0 px-8 h-full">
        <div className="grid grid-col-12 md:grid-cols-2 gap-4">
          {/* First Column */}
          <div className="relative">
            {/* First Image */}
            <img
              src={img1}
              alt="First Image"
              className="md:block left-[70px] w-3/4 top-[100px] hidden z-10 absolute h-[500px]"
            />

           
            <img
              src={img2}
              alt="Second Image"
              className="z-0 absolute w-[150px] md:w-3/4 h-[975px] md:h-[500px] top-0 md:top-[145px] left-[-32px] md:left-[115px]"
            />
          </div>

          {/* Second Column */}
          <div className="flex flex-col justify-center  h-screen text-left w-full md:w-[470px] gap-2">
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-body  font-normal  mb-2">
             About Varnin
            </h2>
          
            {/* Long Description */}
            <p className="text-sm  md:text-sm font-roboto font-normal">
              Kevin is an influential architect experienced in radical
              technological , environmental, and humanistic changes currently
              being implemented into 21st century architectural thinking.
            </p>
            <p className="text-sm md:text-sm font-roboto font-normal">
              A passionate, transformative, and highly motivated design
              professional leveraging executive experience in architecture,
              management, and strategic consulting.
            </p>

            <p className="text-sm md:text-sm font-roboto font-normal">
              Kevin have been instrumental in fostering highly collaborative
              environments, driving innovation, and continuously achieving
              diverse range of creative goals, objectives, and milestones. Kevin
              devoted his career to promoting design excellence, streamlining
              project management, and inducting best practices in project
              delivery, entitlement, architecture, and construction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
