import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import WhoWeAre from "./pages/WhoWeAre";
import WhatWeDo from "./pages/WhatWeDo";
import ContactUs from "./pages/ContactUs";
import Investing from "./pages/Investing";
import WealthPlaning from "./pages/WealthPlaning";
import Team from "./pages/Team";
import SeedAndFunding from "./pages/whatwedo/SeedAndFunding";
import GrowthInvestment from "./pages/whatwedo/GrowthInvestment";
import DebtFinancing from "./pages/whatwedo/DebtFinancing";
import RealStateInvestment from "./pages/whatwedo/RealStateInvestment";
import SpecialInvestment from "./pages/whatwedo/SpecialInvestment";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Nav />}>
          {/* <Route path="" element={<Navigate to={"/home"} />} /> */}
          <Route path="" element={<Home />} />
          <Route path="who-we-are" element={<WhoWeAre />} />
          <Route path="what-we-do" element={<WhatWeDo />} />
          <Route
            path="what-we-do/seed-and-early-stage-funding"
            element={<SeedAndFunding />}
          />
          <Route
            path="what-we-do/growth-capital-investment"
            element={<GrowthInvestment />}
          />
          <Route path="what-we-do/debt-financing" element={<DebtFinancing />} />
          <Route
            path="what-we-do/real-estate-technology-investment"
            element={<RealStateInvestment />}
          />{" "}
          <Route
            path="what-we-do/speciality-investments"
            element={<SpecialInvestment />}
          />
          <Route path="contact-us" element={<ContactUs />} />
          <Route path="inside/investing" element={<Investing />} />
          <Route path="/inside/wealth-planing" element={<WealthPlaning />} />
          <Route path="/team" element={<Team />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
