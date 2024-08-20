import React from "react";
import { blogPost, weBelive1, weBelive2 } from "../utils/utils";

export const OurBlogs = () => {
  return (
    <div className="w-full sm:py-28 sm:px-20 py-12 px-5">
      <div className="container mx-auto">
        <div className="sm:w-[85%] w-[100%] mx-auto text-center mb-10">
          <span className="text-[1.8vw] mb-5 block font-medium">our blogs</span>
          <h2 className="text-[4.8vw] font-medium leading-[5vw]">
            Our integrated service model enables us to build a family
          </h2>
        </div>
        <div className="post-wrapper gap-4 grid sm:grid-cols-2 sm:grid-rows-2">
          {blogPost.map((item, index) => (
            <div key={index} className="post md:p-5 sm:p-5 p-5">
              <img src={item.img} />
              <a
                href="#"
                className="sm:text-3xl text-md block font-medium sm:mt-5 mt-3 hover:underline hover:decoration-1.5"
              >
                {item.title}
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
