import React from "react";

const ServiceBanner = ({ title, imgUrl }) => {
  return (
    <div className="w-full sm:px-10 px-5 sm:py-28 py-12 h-screen">
      <div className="container mx-auto relative h-full">
        <img
          src={imgUrl}
          alt=""
          className="sm:w-[25%] absolute right-0 top-10"
        />
        <h1 className="absolute bottom-0 md:text-[6vw] text-[11vw] font-medium md:leading-[6vw] leading-[13vw] text-[#282828] w-[75%]">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default ServiceBanner;
