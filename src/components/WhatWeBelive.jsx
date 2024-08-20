import React from "react";
import { weBelive1, weBelive2 } from "../utils/utils";

export const WhatWeBelive = () => {
  return (
    <div className="w-full bg-[#282828] sm:py-28 sm:px-20 py-12 px-5">
      <div className="container mx-auto">
        <div className="flex flex-row gap-[30vw] sm:mb-24 mb-12">
          <span className="text-[1.8vw] mb-5 block font-regular text-[#f6f6f6]">
            Our story
          </span>
          <img
            src={weBelive1}
            className="w-[40vw] sm:h-[300px] h-[150px] object-cover"
          />
        </div>
        <h2 className="w-[70%] text-[5vw] font-medium text-[#f6f6f6] leading-[5vw] sm:mb-24 mb-12">
          Behind the Investment: Why We Chose the Real Estate Sector
        </h2>
        <div className="sm:flex justify-between">
          <img
            className="sm:w-[250px] w-[100%] object-cover mb-5"
            src={weBelive2}
          />
          <div className="para sm:w-[50%] ">
            <p className="text-[#F6F6F6] sm:mb-6 mb-3 text-[1.1vw]">
              At IRIS Capital, we are a team of experienced business
              professionals united by our passion for financing projects with a
              strong, purpose-driven focus. Our collective interest in the real
              estate sector has fueled our commitment to enhancing the industry
              and driving positive change through strategic investments. Adding
              to this, real estate sector is integral to the global economy,
              supporting both residential and commercial needs. Residential real
              estate not only provides housing but also helps individuals and
              families build long-term wealth while commercial real estate,
              including office buildings, warehouses, and retail outlets,
              underpins business activities and economic infrastructure.
            </p>

            <p className="text-[#F6F6F6] text-[1.1vw]">
              Our journey into real estate investment is deeply rooted in a
              shared belief that the spaces we live and work in shape our lives
              and communities. It all began with a desire to make a tangible
              difference in how people experience their environments. The real
              estate sector, with its potential to drive meaningful change and
              create lasting impact, resonated with our team’s vision of
              transforming neighborhoods and building futures. We saw an
              opportunity to support projects that not only promise financial
              returns but also enhance the quality of life for individuals ,
              corporates and families.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
