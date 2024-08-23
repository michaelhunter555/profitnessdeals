"use client";
interface CategoriesListProps {
  category: string;
  link: string;
  description: string;
  icon?: React.ReactNode;
  img?: string;
}

export const categoriesList: CategoriesListProps[] = [
  {
    img: "",
    category: "Fitness Bikes",
    link: "/products/fitness-bikes",
    description: "Find Fitness bikes from top sellers to top brands",
  },
  {
    img: "",
    category: "Elliptical Trainers",
    link: "/products/elliptical-trainers",
    description: "Find Fitness bikes from top sellers to top brands",
  },
  {
    img: "",
    category: "Treadmills",
    link: "/products/treadmills",
    description: "Find Fitness bikes from top sellers to top brands",
  },
  {
    img: "",
    category: "Rowing Machines",
    link: "/products/rowing-machines",
    description: "Find Fitness bikes from top sellers to top brands",
  },
  {
    img: "",
    category: "Barbells & Dumbbells",
    link: "/products/barbells-dumbbells",
    description: "Find Fitness bikes from top sellers to top brands",
  },
  {
    img: "",
    category: "Home Gyms",
    link: "/products/home-gym",
    description: "Find Fitness bikes from top sellers to top brands",
  },
  {
    img: "",
    category: "Accessories",
    link: "/products/accessories",
    description: "Find Fitness bikes from top sellers to top brands",
  },
  {
    img: "",
    category: "Protein & Supplements",
    link: "/products/protein-and-supplements",
    description: "Find Fitness bikes from top sellers to top brands",
  },
];
