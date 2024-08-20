import React from "react";
import { motion } from "framer-motion";
import {
  marquee1Img,
  marquee2Img,
  marquee3Img,
  marquee4Img,
  marquee5Img,
} from "../utils/utils";

export const OurStory = () => {
  return (
    <>
      <div className="bg-[#EEEEEE]  sm:px-20 px-5 sm:py-28 py-12">
        <div className="container mx-auto text-center">
          <div className="w-[75%] text-left pb-10">
            <span className="text-[1.8vw] sm:mb-5 mb-2 block font-medium">
              Who We Are
            </span>
            <h2 className="text-[4.8vw] font-medium leading-[5vw]">
              Innovating Real Estate: IRIS Capital's Vision
            </h2>
          </div>
          <div className="sm:w-[55%] w-[90%] ms-auto text-left flex flex-col sm:gap-10 gap-3">
            <p className="text-[1.2vw]">
              We are the team IRIS Capital, a passionate group of investors with
              a mission to support the real estate vision of entrepreneurs and
              businesses. At the core of our motive to become venture
              capitalists for real estate businesses, we find that the real
              estate sector is undergoing significant changes driven by
              technological advancements, shifting market demands, and a growing
              emphasis on sustainability.
            </p>

            <p className="text-[1.2vw]">
              By investing in potential and innovative real estate ventures, we
              tend to bridge the gap between emerging technologies and market
              opportunities, fueling the growth and adaptation of novel business
              models in the industry and empowering and accelerating pioneering
              real estate initiatives that redefine industry standards. We
              Invest In Your Real Estate Vision.
            </p>
          </div>
        </div>
      </div>
      <div className="overflow-hidden sm:pb-28 pb-12 bg-[#EEEEEE]">
        <MarqueeImg />
      </div>
    </>
  );
};

const ImgArr = [
  marquee1Img,
  marquee2Img,
  marquee3Img,
  marquee4Img,
  marquee5Img,
];

const MarqueeImg = () => {
  return (
    <div className="flex">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {ImgArr.map((item, index) => (
          <img
            className={
              "rounded-lg" +
              " " +
              "mr-8" +
              " " +
              (index % 2 == 0 ? "even" : "odd")
            }
            src={item}
            key={index}
          />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        {ImgArr.map((item, index) => (
          <img
            className={
              "rounded-lg" +
              " " +
              "mr-8" +
              " " +
              (index % 2 == 0 ? "even" : "odd")
            }
            src={item}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
};
