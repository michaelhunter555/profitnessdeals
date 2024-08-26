"use client";
import { CgGym } from "react-icons/cg";
import { CiCirclePlus } from "react-icons/ci";
import { GiStrongMan } from "react-icons/gi";
import { MdBikeScooter, MdOutlineRowing } from "react-icons/md";
import { PiPersonSimpleBike } from "react-icons/pi";
import { TbDeviceHeartMonitorFilled, TbTreadmill } from "react-icons/tb";

interface CategoriesListProps {
  category: string;
  link: string;
  description: string;
  icon?: React.ReactNode;
  img?: string;
}

const treadmillImg =
  "https://res.cloudinary.com/iconfitness/image/upload/dpr_auto,f_auto,fl_progressive.lossy,q_auto,w_auto/v1/site--1/PFTL10925-12685.png";

export const categoriesList: CategoriesListProps[] = [
  {
    img: "",
    category: "Fitness Bikes",
    link: "/products/fitness-bikes",
    description: "Find Fitness bikes from top sellers to top brands",
    icon: <PiPersonSimpleBike size={50} style={{ color: "black" }} />,
  },
  {
    img: "",
    category: "Elliptical Trainers",
    link: "/products/elliptical-trainers",
    description: "Find Fitness bikes from top sellers to top brands",
    icon: <MdBikeScooter size={50} style={{ color: "black" }} />,
  },
  {
    img: treadmillImg,
    category: "Treadmills",
    link: "/products/treadmills",
    description: "Find Fitness bikes from top sellers to top brands",
    icon: <TbTreadmill size={50} style={{ color: "black" }} />,
  },
  {
    img: "",
    category: "Rowing Machines",
    link: "/products/rowing-machines",
    description: "Find Fitness bikes from top sellers to top brands",
    icon: <MdOutlineRowing size={50} style={{ color: "black" }} />,
  },
  {
    img: "",
    category: "Barbells & Dumbbells",
    link: "/products/barbells-dumbbells",
    description: "Find Fitness bikes from top sellers to top brands",
    icon: <CgGym size={50} style={{ color: "black" }} />,
  },
  {
    img: "",
    category: "Home Gyms",
    link: "/products/home-gym",
    description: "Find Fitness bikes from top sellers to top brands",
    icon: <GiStrongMan size={50} style={{ color: "black" }} />,
  },
  {
    img: "",
    category: "Accessories",
    link: "/products/accessories",
    description: "Find Fitness bikes from top sellers to top brands",
    icon: <TbDeviceHeartMonitorFilled size={50} style={{ color: "black" }} />,
  },
  {
    img: "",
    category: "Protein & Supplements",
    link: "/products/protein-and-supplements",
    description: "Find Fitness bikes from top sellers to top brands",
    icon: <CiCirclePlus size={50} style={{ color: "black" }} />,
  },
];
