import React from "react";
import { weBelive2 } from "../utils/utils";

const WhoWeAre = () => {
  return (
    <>
      <div className="w-full sm:py-20 sm:pt-40 sm:px-10 py-12 px-5 flex justify-center items-center">
        <div className="container mx-auto grid md:grid-cols-2 grid-cols-1 items-center">
          <div className="relative z-1">
            <h1 className="md:text-[8vw] text-[5vw]  font-semibold leading-[7vw] mb-12">
              Who We Are
            </h1>
            <p className="w-[80%] mb-5">
              We are the team IRIS Capital, a passionate group of investors with
              a mission to support the real estate vision of entrepreneurs and
              businesses. At the core of our motive to become venture
              capitalists for real estate businesses, we find that the real
              estate sector is undergoing significant changes driven by
              technological advancements, shifting market demands, and a growing
              emphasis on sustainability.
            </p>
            <p className="w-[80%] md:mb-0 mb-5">
              By investing in potential and innovative real estate ventures, we
              tend to bridge the gap between emerging technologies and market
              opportunities, fueling the growth and adaptation of novel business
              models in the industry and empowering and accelerating pioneering
              real estate initiatives that redefine industry standards. We
              Invest In Your Real Estate Vision.
            </p>
          </div>
          <div className="w-full sm:-ml-20">
            <img src={weBelive2} alt="" className="w-full rounded-3xl" />
          </div>
        </div>
      </div>
      <div className="w-full bg-[#EEEEEE] sm:py-20 sm:px-10 py-12 px-5 h-screen flex justify-center items-center">
        About us
      </div>
    </>
  );
};

export default WhoWeAre;
