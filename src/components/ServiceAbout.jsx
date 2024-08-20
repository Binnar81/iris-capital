import React from "react";

const ServiceAbout = ({ para1, para2, imgUrl }) => {
  return (
    <div className="w-full sm:px-28 px-5 sm:py-28 py-12 bg-[#eeeeee]">
      <div className="container mx-auto relative h-full grid sm:grid-cols-2 items-center sm:gap-20">
        <div className="">
          <img src={imgUrl} alt="" />
        </div>
        <div className="content">
          <p className="sm:mb-5 sm:text-xl leading-[250px]">{para1}</p>
          <p className="sm:text-xl">{para2}</p>
        </div>
      </div>
    </div>
  );
};

export default ServiceAbout;
