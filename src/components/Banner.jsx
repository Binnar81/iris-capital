import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { bannerImg, logoIconVector } from "../utils/utils";

gsap.registerPlugin(ScrollTrigger);

export const Banner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      bannerRef.current,
      { scale: 1, yPercent: 0 },
      {
        scale: 2,
        yPercent: -50,
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
          marker: true,
        },
      }
    );
  }, []);

  return (
    <div className="w-full px-10 pt-[100px] relative lg:h-[140vh] sm:h-[100vh] h-[80vh] overflow-hidden">
      <div className="masker absolute sm:top-[25vh] top-[25vh]">
        <h1 className="md:text-[8vw] text-[11vw] font-medium md:leading-[7vw] leading-[13vw] text-[#282828]">
          We Invest In Your Real Estate Vision
        </h1>
      </div>

      <div
        ref={bannerRef}
        className="sm:w-[40%] w-[60%] z-10 absolute bottom-[4vh] right-[5vw] rounded-3xl overflow-hidden"
      >
        <div className="overly">
          <img src={bannerImg} alt="" />
        </div>
      </div>
      <div className="sm:w-[33%] w-[50%] opacity-25 absolute -top-[2vh] -right-[10vw]">
        <img src={logoIconVector} alt="" />
      </div>
    </div>
  );
};
