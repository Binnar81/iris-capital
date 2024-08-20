import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";
import { BsPlusLg } from "react-icons/bs";

export const Services = () => {
  return (
    <div className="mx-auto  sm:py-28 py-12 text-center">
      <div className="w-[85%] mx-auto">
        <span className="text-[1.8vw] mb-5 block font-medium">What we do</span>
        <h2 className="text-[4.8vw] font-medium leading-[5vw]">
          We do strategic venture capital investments
        </h2>
      </div>
      <div className="sm:mt-20 mt-10 sm:ps-10 ps-2 me-1">
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={20}
          loop={false}
          breakpoints={{
            360: {
              slidesPerView: 1.2,
              spaceBetween: 10,
            },
            // when window width is >= 640px
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            // when window width is >= 768px
            768: {
              slidesPerView: 2.5,
              spaceBetween: 15,
            },
            // when window width is >= 1024px
            1024: {
              slidesPerView: 3.5,
              spaceBetween: 20,
            },
          }}
        >
          <SwiperSlide>
            <SlideCard
              text="Seed and early-stage funding"
              desc="With our primary mission to identify and support..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard
              text="Growth Capital Investment"
              desc="Our growth capital investment strategy targets established..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard
              text="Debt Financing"
              desc="We provide debt financing to real estate businesses, offering..."
            />
          </SwiperSlide>
          <SwiperSlide>
            <SlideCard
              text="Real Estate Technology Investment"
              desc="We provide investment in Real Estate Technology..."
            />
          </SwiperSlide>
          <SwiperSlide className="me-52">
            <SlideCard
              text="Speciality Investments"
              desc="We strongly emphasise impact investing, focusing..."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

const SlideCard = ({ text, desc }) => {
  return (
    <div className=" bg-white border border-[#91B7AC] rounded-3xl px-10 py-8 sm:h-96 h-60 relative">
      <h3 className="sm:text-[2.5vw] text-[4vw] sm:leading-[3vw] leading-[5vw] text-left text-[#91B7AC]">
        {text}
      </h3>

      <p className="absolute text-left bottom-8 left-10 w-[65%] text-[#0000007c]">
        {desc}
      </p>
      <div className="w-12 h-12 bg-[#91B7AC] flex justify-center items-center text-white text-2xl rounded-full absolute bottom-8 right-8">
        <BsPlusLg />
      </div>
    </div>
  );
};
