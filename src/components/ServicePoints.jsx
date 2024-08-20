import React from "react";

const ServicePoints = ({ title, list }) => {
  return (
    <div className="w-full sm:px-28 px-5 sm:py-28 py-12">
      <div className="container mx-auto">
        <h2 className="text-[4.8vw] font-medium leading-[5vw] sm:mb-14">
          {title}
        </h2>
        {list}
      </div>
    </div>
  );
};

export default ServicePoints;
