import React, { useState } from "react";
import { Logo, headerLink } from "../utils/utils";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import { VscMenu } from "react-icons/vsc";

export const Header = () => {
  const [isMegaOpen, setIsMegaOpen] = useState(false);
  const [megaMenuData, setMegaMenuData] = useState([]);
  const closeMegaMenu=()=>{setIsMegaOpen(false);}

  return (
    <div className="relative z-50">
      <header className="sm:px-5 px-3 sm:py-3 py-2 bg-[#ffffff77]  rounded-full border border-[#28282841] flex justify-between items-center fixed w-[95%] backdrop-blur-3xl top-5 left-[50%] translate-x-[-50%]">
        <Link to="/" className="sm:w-[17vw] w-[25vw]">
          <img src={Logo} alt="logo" />
        </Link>
        <Navigation
          openMega={setIsMegaOpen}
          setMegaMenuData={setMegaMenuData}
          closeMegaMenu={closeMegaMenu}
        />
        <div className="flex items-center gap-2 text-3xl">
          
          <MobileMenu  closeMobileMenu={()=>{setIsMegaOpen(false)}} />
        </div>
      </header>
      {isMegaOpen && (
        <div className="bg-[#ffffff77] mt-2 p-8 fixed left-0 top-[100px] w-[95%] rounded-[25px] flex justify-center items-center transition border border-[#28282841] backdrop-blur-3xl left-[50%] translate-x-[-50%]  hidden md:block">
          <MegaMenu megaMenuData={megaMenuData} closeMegaMenu={closeMegaMenu}/>
        </div>
      )}
    </div>
  );
};

const Navigation = ({ openMega, setMegaMenuData ,closeMegaMenu}) => {
  const handleMegaMenuOpen = (megaMenus) => {
    openMega((old) => !old);
    setMegaMenuData(megaMenus);
  };


  return (
    <div className="md:block hidden">
      <div className="sm:flex gap-6 ">
        {headerLink.map((item, index) => (
          <div key={index}>
            {item?.inside?.length > 0 ? (
              <Link
                to={item.url}
                onClick={() => {
                  handleMegaMenuOpen(item?.inside);
                }}
                className="text-lg cursor-pointer text-[#282828] hover:text-[#91B7AC] flex justify-center items-center gap-x-2"
              >
                {item.name}
                {item.inside.length > 0 && <IoIosArrowDown />}
              </Link>
            ) : (
              <Link
                to={item.url}
                onClick={closeMegaMenu}
                className="text-lg cursor-pointer text-[#282828] hover:text-[#29c79a] flex justify-center items-center gap-x-2"
              >
                {item.name}
                {item.inside.length > 0 && <IoIosArrowDown />}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

const MobileMenu = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [test, setTest] = useState([]);
  const closeMegaMenu=()=>{ setMobileOpen(false)}

  const handelMobileMenu = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleMobileMegaMenu = (insidedata) => {
    if (test.length > 0) {
      setTest([]);
    } else {
      setTest(insidedata);
    }
  };


  return (
    <>
      <div
        onClick={handelMobileMenu}
        className="bg-[#91b7ac] p-2 text-[20px] rounded-full font-light text-white md:hidden"
      >
        <VscMenu />
      </div>
      {mobileOpen && (
        <div className="mobile-menu absolute left-[50%] -translate-x-[50%] top-[85px] block md:hidden bg-[#ffffff] w-[98%] border border-[#28282841] rounded-[25px] py-7 px-7">
          <ul className="mobile-link flex items-start flex-col gap-3">
            {headerLink.map((item, index) => (
              <div key={index}>
                {item?.inside?.length > 0 ? (
                  <div>
                    <Link
                      to={item.url}
                      onClick={() => {
                        handleMobileMegaMenu(item?.inside);
                        
                      }}
                      className="text-lg cursor-pointer text-[#282828] hover:text-[#91B7AC] flex items-center gap-x-2"
                    >
                      {item.name}
                      {item.inside.length > 0 && <IoIosArrowDown />}
                    </Link>
                    {test?.length > 0 && (
                      <ul className="flex items-start flex-col gap-y-2 transition my-2 ms-2">
                        {test?.map((el, index) => (
                          <li className="text-left text-sm" key={index}>
                            <Link to="#"
                            > {el.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    to={item.url}
                    onClick={closeMegaMenu}
                    className="text-lg cursor-pointer text-[#282828] hover:text-[#29c79a] flex justify-center items-center gap-x-2"
                  >
                    {item.name}
                    {item.inside.length > 0 && <IoIosArrowDown />}
                  </Link>
                )}
              </div>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const Button = () => {
  return (
    <Link
      to="/contact-us"
      className="md:px-5 px-3.5 py-2 md:pe-4 pe-2.5 sm:text-md text-sm bg-[#91B7AC] rounded-full text-white font-medium  hover:bg-[#282828] hover:text-white flex items-center md:gap-3 gap-2 transition"
    >
      Contact Us{" "}
      <IoIosArrowForward className="w-[22px] h-[22px] bg-[#fff] rounded-full p-0.5 text-[#91B7AC] text-sm" />
    </Link>
  );
};

const MegaMenu = ({ megaMenuData, closeMegaMenu }) => {
  return (
    <ul className="flex justify-center items-start flex-col gap-y-2 transition ">
      {megaMenuData?.map((el, index) => (
        <li className="text-left" key={index}>
          <Link 
          to={el.url}
          onClick={closeMegaMenu}
          >{el.name}</Link>
        </li>
      ))}
    </ul>
  );
};
