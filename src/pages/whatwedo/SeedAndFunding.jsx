import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import ServiceAbout from "../../components/ServiceAbout";
import { service1aboutimg, service1bannerimg } from "../../utils/utils";
import ServicePoints from "../../components/ServicePoints";
import ServiceInnerList from "../../components/ServiceInnerList";

const SeedAndFunding = () => {
  return (
    <>
      <ServiceBanner
        title="Seed and early-stage funding"
        imgUrl={service1bannerimg}
      />
      <ServiceAbout
        para1="With our primary mission to identify and support potential real estate start-ups, we provide initial capital to help them transform their ideas into operational businesses. We facilitate strategic Seed and early-stage investment to pioneering real estate ventures to move beyond the initial phase and expand their potential in the real estate marketplace"
        para2="As venture capitalists in the real estate sector, our support includes financing key activities such as market research, product development, and team building ensuring a solid foundation for growth. In the early stages, we offer additional capital to scale operations. By providing both financial resources and strategic guidance, we help real estate ventures navigate market complexities, manage risks, and achieve significant milestones, ultimately positioning them for long-term success."
        imgUrl={service1aboutimg}
      />
      <ServicePoints
        title=" We do strategic venture capital investments"
        list={
          <ul className="flex flex-col sm:gap-3 text-xl sm:ms-5">
            <ServiceInnerList point="Addressing the critical needs of early-stage real estate businesses by providing an initial capital injection to scale operations involving acquiring new properties, expanding into different markets, or enhancing existing infrastructure." />
            <ServiceInnerList point="Providing both financial resources and strategic guidance to help real estate ventures navigate market complexities and manage risks." />
            <ServiceInnerList point="Shaping a viable business strategy for start-ups by financing market research to identify new opportunities." />
            <ServiceInnerList point="Initial capital requirements for product development, team building during the seed stage, and setting a solid foundation for growth. " />
          </ul>
        }
      />
    </>
  );
};

export default SeedAndFunding;
