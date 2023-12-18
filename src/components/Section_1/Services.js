import React from "react";
import full_body from "../../assets/images/full_body.jpg"
import own_design from "../../assets/images/own_design.jpg"
import recover from "../../assets/images/recover.jpg"
import lesson from "../../assets/images/lessons.jpg"

export const Services = () => {
  return (
    <section className="flex flex-col my-10 gap-5">
      <h2 className="text-center text-xl font-bold">Our Services</h2>
      <div className="flex flex-wrap w-[80%] m-auto justify-center items-center gap-10">

        <div className="group h-96 w-1/5 relative">
          <div className="border-solid p-2 border-main border-8 border-opacity-50 shadow-2xl group-hover:filter group-hover:blur-sm transition-all duration-500"><img className="filter grayscale" src={full_body}/></div>
          <button className="opacity-90 absolute top-36 left-6 font-bold text-white bg-main py-6 px-12 hover:transform hover:scale-105 transition-all duration-500">FULL TATTOO</button>
        </div>

        <div className="group h-96 w-1/5 relative">
          <div className="border-solid p-2 border-main border-8 border-opacity-50 shadow-2xl group-hover:filter group-hover:blur-sm transition-all duration-500"><img className="filter grayscale" src={lesson}/></div>
          <button className="opacity-90 absolute top-36 left-10 font-bold text-white bg-main py-6 px-12 hover:transform hover:scale-105 transition-all duration-500">LESSONS</button>
        </div>

        <div className="group h-96 w-1/5 relative">
          <div className="border-solid p-2 border-main border-8 border-opacity-50 shadow-2xl group-hover:filter group-hover:blur-sm transition-all duration-500"><img className="filter grayscale" src={recover}/></div>
          <button className="opacity-90 absolute top-36 left-7 font-bold text-white bg-main py-6 px-10 ps-11 hover:transform hover:scale-105 transition-all duration-500">OWN DESIGN</button>
        </div>

        <div className="group h-96 w-1/5 relative">
          <div className="border-solid p-2 border-main border-8 border-opacity-50 shadow-2xl group-hover:filter group-hover:blur-sm transition-all duration-500"><img className=" filter grayscale" src={own_design}/></div>
          <button className=" opacity-90 absolute top-36 left-8 font-bold text-white bg-main py-6 px-12 hover:transform hover:scale-105 transition-all duration-500">24/7 OPEN</button>
        </div>

      </div>
    </section>
  );
};
