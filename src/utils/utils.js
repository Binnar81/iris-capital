import Logo from "../assets/images/iris-logo.svg";
import darkLogo from "../assets/images/dark-logo.svg";
import fillIcon from "../assets/images/icon.svg";
import bannerImg from "../assets/images/home-banner-img.webp";
import marquee1Img from "../assets/images/marquee-img1.webp";
import marquee2Img from "../assets/images/marquee-img2.webp";
import marquee3Img from "../assets/images/marquee-img3.webp";
import marquee4Img from "../assets/images/marquee-img4.webp";
import marquee5Img from "../assets/images/marquee-img5.webp";
import weBelive1 from "../assets/images/we-belive-img1.webp";
import weBelive2 from "../assets/images/we-belive-img2.webp";
import service1bannerimg from "../assets/images/Seed-and-early-stage-funding.webp";
import service1aboutimg from "../assets/images/property-investment-concept.webp";
import logoIconVector from "../assets/images/logo-icon-vector.svg";

// const headerLink = ["Home", "Who we are", "What we do", "Insights", "Team"];

const headerLink = [
  {
    name: "Who we are",
    url: "/who-we-are",
    inside: [],
  },
  {
    name: "What we do",
    inside: [
      {
        name: "Seed and early-stage funding",
        url: "what-we-do/seed-and-early-stage-funding",
      },
      {
        name: "Growth Capital Investment",
        url: "what-we-do/growth-capital-investment",
      },
      {
        name: "Debt Financing",
        url: "what-we-do/debt-financing",
      },
      {
        name: "Real Estate Technology Investment",
        url: "what-we-do/real-estate-technology-investment",
      },
      {
        name: "Speciality Investments",
        url: "what-we-do/speciality-investments",
      },
    ],
  },
  {
    name: "Insights",
    url: null,
    inside: [
      {
        name: "Investing",
        url: "/inside/investing",
      },
      {
        name: "Wealth planing",
        url: "/inside/wealth-planing",
      },
      {
        name: "Family culture and learning",
        url: "/inside/family-culture-and-learning",
      },
    ],
  },
  {
    name: "Team",
    url: "team",
    inside: [],
  },
];

const blogPost = [
  {
    title:
      "Investing in the Sustainable Transition  in the Sustainable Transition",
    url: "suitable-investment",
    img: weBelive1,
  },

  {
    title:
      "Investing in the Sustainable Transition  in the Sustainable Transition",
    url: "suitable-investment",
    img: weBelive2,
  },
  {
    title:
      "Investing in the Sustainable Transition  in the Sustainable Transition",
    url: "suitable-investment",
    img: weBelive2,
  },
  {
    title:
      "Investing in the Sustainable Transition  in the Sustainable Transition",
    url: "suitable-investment",
    img: weBelive1,
  },
];

export {
  Logo,
  bannerImg,
  marquee1Img,
  marquee2Img,
  headerLink,
  marquee3Img,
  marquee4Img,
  marquee5Img,
  weBelive1,
  weBelive2,
  logoIconVector,
  blogPost,
  darkLogo,
  service1bannerimg,
  service1aboutimg,
  fillIcon,
};
