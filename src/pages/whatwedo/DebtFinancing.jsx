import React from "react";
import ServiceBanner from "../../components/ServiceBanner";
import ServiceAbout from "../../components/ServiceAbout";
import ServicePoints from "../../components/ServicePoints";
import { service1aboutimg, service1bannerimg } from "../../utils/utils";
import ServiceInnerList from "../../components/ServiceInnerList";

const DebtFinancing = () => {
  return (
    <>
      <ServiceBanner title="Debt Financing" imgUrl={service1bannerimg} />
      <ServiceAbout
        para1="We provide debt financing to real estate businesses, offering capital in the form of loans rather than equity. This approach allows companies to access the funds needed for expansion, development projects, or operational needs without diluting their ownership. Our debt financing solutions are for companies with strong cash flows and solid growth prospects that prefer to retain equity while requiring substantial capital for projects such as property development or acquisitions."
        para2="We typically offer debt financing to businesses seeking to leverage their existing assets to fund growth initiatives or bridge short-term capital gaps. By providing this financing, we enable companies to maintain control while benefiting from our strategic support and financial expertise, ensuring they can achieve their expansion goals and enhance their market position."
        imgUrl={service1aboutimg}
      />
      <ServicePoints
        title="What are the strategic targets of Debt Financing?"
        list={
          <ul className="flex flex-col sm:gap-3 text-xl sm:ms-5">
            <ServiceInnerList point="Providing debt capital to real estate companies looking to expand their portfolio or undertake new development projects requiring capital for the acquisition of land, construction costs, or renovation projects without diluting equity." />
            <ServiceInnerList point="Bridge loans or acquisition financing to facilitate quick transactions, enabling companies to capitalize on market opportunities and expand their market presence." />
            <ServiceInnerList point="Funds for operational expenses or to smooth cash flow during cyclical market fluctuations." />
            <ServiceInnerList point="Refinancing Existing Debt to companies seeking to refinance high-interest debt with more favourable terms." />
          </ul>
        }
      />
    </>
  );
};

export default DebtFinancing;
