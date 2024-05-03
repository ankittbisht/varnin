import React from "react";
import Slider from "react-slick";

import img1 from "../../../assets/banner.jpg";
import a from "../../../assets/1.jpg";
import b from "../../../assets/2.jpg";
import c from "../../../assets/3.jpg";
import d from "../../../assets/4.jpg";
import e from "../../../assets/5.jpg";
import f from "../../../assets/6.jpg";

function Project() {
  function SampleNextArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <button
          className="bg-white flex justify-center items-center border-none rounded-full w-[50px] h-[50px] absolute top-[350px] right-[35px] z-10"
          onClick={onClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2539_816)">
              <path
                d="M16.172 11L10.808 5.63605L12.222 4.22205L20 12L12.222 19.778L10.808 18.364L16.172 13H4V11H16.172Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_2539_816">
                <rect width="24" height="24" fill="black" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
      <div>
        <button
          className="bg-white flex justify-center items-center border-none rounded-full w-[50px] h-[50px] absolute top-[350px] right-[90px] z-10"
          onClick={onClick}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_2539_821)">
              <path
                d="M7.828 11L13.192 5.63605L11.778 4.22205L4 12L11.778 19.778L13.192 18.364L7.828 13H20V11H7.828Z"
                fill="black"
              />
            </g>
            <defs>
              <clipPath id="clip0_2539_821">
                <rect
                  width="24"
                  height="24"
                  fill="black"
                  transform="matrix(-1 0 0 1 24 0)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    );
  }

  // function SampleNextArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "red", zIndex:1 ,  position: "absolute" , right:"0px"}}
  //       onClick={onClick}
  //     />
  //   );
  // }

  // function SamplePrevArrow(props) {
  //   const { className, style, onClick } = props;
  //   return (
  //     <div
  //       className={className}
  //       style={{ ...style, display: "block", background: "green" , zIndex:1 ,  position: "absolute" , left:"0px" }}
  //       onClick={onClick}
  //     />
  //   );
  // }
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "80px",
    slidesToShow: 3,
    speed: 500,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const images = [a, b, c, d, e, f];
  return (
    <section className="project-section">
      <div className="container mx-auto   relative h-dvh top-0">
        <div className="top-1/4  text-center md:text-start md:left-[150px] mb-4 absolute z-10">
          <h2 className="text-6xl md:text-[150px] font-body mb-4">Projects</h2>
          <p className="text-white md:text-gray-700 text-base  w-full md:w-2/4 font-roboto">
            Kevin is an influential architect experienced in radical
            technological, environmental, and humanistic changes currently being
            implemented into 21st century architectural thinking.
          </p>
        </div>
        <div className="w-full md:w-3/4 mx-auto absolute z-0 text-left right-0">
          <img src={img1} alt="Project Image" className=" h-[80vh] md:h-screen w-full" />
        </div>
      </div>
      <div className="container mx-auto py-4 md:py-24 px-5 md:px-36 h-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-body">Our Latest Work</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 ">
          {images.map((image, index) => (
            <div key={index}>
              <img
                loading="lazy"
                src={image}
                alt={`Work ${index}`}
                className="h-80 w-full"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="container py-14 bg-yellow-100">
        <div className="flex text-4xl md:text-7xl justify-center font-body pb-14">
          <h1>Our Work</h1>
        </div>

        <div className="slider-container ">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div>
                <div
                  key={index}
                  className="w-11/12 bg-white h-56 relative text-center z-10 my-20  flex !important justify-center"
                >
                  <img
                    src={image}
                    alt={`Work ${index}`}
                    className="h-52 w-5/6 -top-12 rounded-2xl absolute object-cover"
                  />
                  <h4 className="font-roboto text-xl text-center absolute bottom-4">
                    Varnin
                  </h4>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default Project;
