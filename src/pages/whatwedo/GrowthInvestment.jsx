import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import ServiceAbout from "../../components/ServiceAbout";
import ServicePoints from "../../components/ServicePoints";
import { service1aboutimg, service1bannerimg } from "../../utils/utils";
import ServiceInnerList from "../../components/ServiceInnerList";

const GrowthInvestment = () => {
  return (
    <>
      <ServiceBanner
        title="Growth Capital Investment"
        imgUrl={service1bannerimg}
      />
      <ServiceAbout
        para1="Our growth capital investment strategy targets established real estate companies ready to scale and seize new market opportunities. By providing the necessary capital, we accelerate their growth, boost brand visibility, and implement effective marketing strategies to attract both clients and investors."
        para2="We collaborate with mature companies that have proven business models, enhancing their profitability and building strong teams to ensure sustained success."
        imgUrl={service1aboutimg}
      />
      <ServicePoints
        title="What are the strategic Targets of Growth Capital?"
        list={
          <ul className="flex flex-col sm:gap-3 text-xl sm:ms-5">
            <ServiceInnerList point="Growth capital is primarily for established companies with a proven track record of profitability that have typically moved past the startup phase and need additional capital to scale their operations or pursue new opportunities." />
            <ServiceInnerList point="Growth capital is used to fuel projects that have a clear potential for scaling and delivering substantial returns." />
            <ServiceInnerList point="Structure investments in stages, releasing funds based on the achievement of specific growth milestones." />
            <ServiceInnerList point="Support the company in enhancing its reputation and credibility in the market and developing strategies for risk management." />
          </ul>
        }
      />
    </>
  );
};

export default GrowthInvestment;
