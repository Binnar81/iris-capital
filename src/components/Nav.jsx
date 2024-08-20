import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { ReactLenis, useLenis } from "lenis/react";

const Nav = () => {
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  });

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <ReactLenis root>
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </ReactLenis>
  );
};

export default Nav;
