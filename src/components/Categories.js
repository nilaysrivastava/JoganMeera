import React from "react";
import { useNavigate } from "react-router-dom";
import c1 from "../images/c1.jpg";
import c2 from "../images/c2.png";
import c3 from "../images/c3.jpg";

const Categories = () => {
  const navigate = useNavigate();

  const categories = [
    {
      id: 1,
      name: "Design Poshaaks",
      description: "Choose the fabric and size on your own!",
      image: c1,
    },
    {
      id: 2,
      name: "Handicraft items",
      description:
        "Explore the hand-crafted products made by our skilled artisans.",
      image: c2,
    },
    {
      id: 3,
      name: "Shringaar items",
      description: "Explore our wide range of Shringaar items.",
      image: c3,
    },
  ];

  const handleCardClick = (categoryId) => {
    if (categoryId === 1) {
      navigate("/poshaak");
    } else {
      navigate(`/category/${categoryId}`);
    }
  };

  return (
    <div className="px-5 pb-16">
      <h1 className="text-center mb-5 text-4xl text-gray-800">Our Products</h1>

      <div className="flex flex-wrap gap-5 justify-center">
        {categories.map((category) => (
          <div
            key={category.id}
            className="w-[300px] rounded-lg overflow-hidden shadow-md cursor-pointer text-center hover:shadow-lg transition-shadow"
            onClick={() => handleCardClick(category.id)}
          >
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-[200px] object-cover"
            />
            <div className="p-4">
              <h4 className="m-0 mb-2.5 text-2xl text-black">
                {category.name}
              </h4>
              <p className="m-0 text-[#8c0145]">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
