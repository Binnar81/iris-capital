import React from "react";
import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import { OurStory } from "../components/OurStory";
import { WhatWeBelive } from "../components/WhatWeBelive";
import { OurBlogs } from "../components/OurBlogs";

const Home = () => {
  return (
    <div className="w-full">
      <Banner />
      <Services />
      <OurStory />
      <WhatWeBelive />
      <OurBlogs />
    </div>
  );
};

export default Home;
