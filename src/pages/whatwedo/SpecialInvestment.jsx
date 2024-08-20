import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import ServiceAbout from "../../components/ServiceAbout";
import ServicePoints from "../../components/ServicePoints";
import { service1aboutimg, service1bannerimg } from "../../utils/utils";
import ServiceInnerList from "../../components/ServiceInnerList";

const SpecialInvestment = () => {
  return (
    <>
      <ServiceBanner
        title="Speciality Investment for special real estate projects"
        imgUrl={service1bannerimg}
      />
      <ServiceAbout
        para1="We provide investment in Real Estate Technology (PropTech) companies that are transforming the real estate industry with innovative solutions, focusing on supporting startups that offer future forward technologies, such as smart building systems, virtual and augmented reality tools, data analytics platforms, and blockchain-based transaction solutions."
        para2="Our investment in PropTech targets partnering with visionary entrepreneurs to bring innovative ideas to life, supporting growth and creating value for property managers, developers and co-investors and fulfilling modern demands for technology-driven real estate solutions."
        imgUrl={service1aboutimg}
      />
      <ServicePoints
        title="What are the strategic targets of PropTech Investment?"
        list={
          <ul className="flex flex-col sm:gap-3 text-xl sm:ms-5">
            <ServiceInnerList point="Funding Innovative Property Management Solutions and Startups offering advanced property management software or platforms." />
            <ServiceInnerList point="Backing startups that provide virtual tours, immersive property showcases, and augmented reality tools for architects and developers, enhancing the buying and renting experience." />
            <ServiceInnerList point="Firms developing technologies focused on sustainability and eco-friendly building practices." />
            <ServiceInnerList point="Financing Real Estate FinTech solutions." />
          </ul>
        }
      />
    </>
  );
};

export default SpecialInvestment;
