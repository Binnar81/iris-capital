import React from "react";
import { darkLogo } from "../utils/utils";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";

export const Footer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    await login(data.email, data.password);
    reset();
  };

  return (
    <div className="w-full bg-[#282828] sm:pt-28 pt-12 sm:px-20 px-5">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-3 lg:grid-rows-1 grid-cols-1 lg:gap-5 gap-20">
          <div className="logo flex flex-col justify-between items-baseline">
            <img src={darkLogo} alt="Logo" />

            <div className="flex gap-6 text-white items-center lg:block hidden">
              <span className="text-sm font-light">©2024 IRISCAPITAL</span>
              <a href="#" className="text-sm font-light">
                Privacy Policy
              </a>
            </div>
          </div>

          <div className="f-contact">
            <h4 className="text-2xl mb-6 text capitalize text-[#f6f6f6]">
              CONTACT DETAILS
            </h4>
            <ul className="flex-col gap-3 flex text-[#f6f6f6]">
              <li>+1 (969) 548-6035</li>
              <li>2qqti@belgianairways.com</li>
              <li>
                800 Rippin Mountains, Jeannineton,<br></br> VA 63939-2741
              </li>
            </ul>
          </div>

          <div className="f-form">
            <h4 className="text-2xl mb-6 text capitalize text-[#f6f6f6]">
              GET IN TOUCH
            </h4>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="input flex flex-col w-[80%] mb-6">
                <label className="text-[#f6f6f6] mb-1">Your Name*</label>
                <input
                  {...register("nameRequired", { required: true })}
                  type="text"
                  placeholder=""
                  className="bg-transparent mb-2 border-b text-[#f6f6f68a] border-[#91b7ac97] focus:outline-none"
                />
                {errors.nameRequired && (
                  <span className="text-[red] text-sm">
                    This field is required
                  </span>
                )}
              </div>

              <div className="input flex flex-col w-[80%] mb-8">
                <label className="text-[#f6f6f6] mb-1">Your Email*</label>
                <input
                  {...register("email", {
                    required: "required",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "Entered value does not match email format",
                    },
                  })}
                  type="email"
                  className="bg-transparent mb-2 border-b text-[#f6f6f68a] border-[#91b7ac97] focus:outline-none"
                />
                {errors.email && (
                  <span role="alert" className="text-[red]">
                    {errors.email.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="py-2.5 bg-[#91B7AC] hover:bg-[#679286] text-white px-8 rounded-full"
              >
                Submit
              </button>
            </form>
            <div className="flex gap-6 text-white items-center lg:hidden block mt-20">
              <span className="text-sm font-light">©2024 IRISCAPITAL</span>
              <a href="#" className="text-sm font-light">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden mt-12">
        <SlideText />
      </div>
    </div>
  );
};

const SlideText = () => {
  return (
    <div className="flex gap-6 -mb-14">
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        <span className="text-[150px] font-semibold text-[#91b7ac37]">
          IRIS CAPITAL * IRIS CAPITAL * IRIS CAPITAL
        </span>
      </motion.div>

      <motion.div
        initial={{ x: 0 }}
        animate={{ x: "-100%" }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="flex flex-shrink-0"
      >
        <span className="text-[150px] font-semibold text-[#91B7AC37]">
          IRIS CAPITAL * IRIS CAPITAL * IRIS CAPITAL
        </span>
      </motion.div>
    </div>
  );
};
