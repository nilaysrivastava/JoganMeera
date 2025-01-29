import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BiCartAdd, BiTrashAlt } from "react-icons/bi";
import Navbar from "./Navbar";
import Footer from "./Footer";

const CategoryItems = () => {
  const { name, id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const items = [
    {
      id: 1,
      name: "Smartphone",
      description: "A sleek and powerful smartphone.",
      category: 2,
      price: 10000,
      image: "https://via.placeholder.com/150?text=Smartphone",
    },
    {
      id: 2,
      name: "Laptop",
      description: "High-performance laptop for work and play.",
      category: 2,
      price: 50000,
      image: "https://via.placeholder.com/150?text=Laptop",
    },
    {
      id: 3,
      name: "T-Shirt",
      description: "Comfortable and stylish cotton T-shirt.",
      category: 3,
      price: 500,
      image: "https://via.placeholder.com/150?text=T-Shirt",
    },
    {
      id: 4,
      name: "Jeans",
      description: "Durable and trendy denim jeans.",
      category: 3,
      price: 1200,
      image: "https://via.placeholder.com/150?text=Jeans",
    },
  ];

  const filteredItems = items.filter((item) => item.category === parseInt(id));

  return (
    <div className="min-h-screen flex flex-col bg-[#ffce50]">
      <Navbar />
      <div className="p-16 flex-grow">
        <h1 className="text-center mb-5">{name}</h1>
        <div className="flex flex-wrap gap-5 justify-center">
          {filteredItems.map((item) => (
            <ItemCard key={item.id} item={item} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

const ItemCard = ({ item }) => {
  const [qty, setQty] = useState(0);
  const [showQuantityControls, setShowQuantityControls] = useState(false);

  const handleIncrement = () => setQty((prevQty) => prevQty + 1);

  const handleDecrement = () => {
    setQty((prevQty) => {
      const newQty = prevQty - 1;
      if (newQty === 0) {
        setShowQuantityControls(false);
      }
      return newQty;
    });
  };

  const handleAddClick = () => {
    setShowQuantityControls(true);
    setQty(1);
  };

  const handleAddToCart = () => alert(`${item.name} added to cart!`);

  const handleDeleteFromCart = () => {
    setQty(0);
    setShowQuantityControls(false);
  };

  return (
    <div className="w-64 max-h-[400px] rounded-lg shadow-md overflow-hidden ml-4 mb-8">
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-3">
        <h5 className="flex justify-between mb-2">
          <span className="text-black">{item.name}</span>
          <span className="text-sm border border-[#8c0145] text-[#8c0145] p-1 rounded">
            &#8377; {item.price}/-
          </span>
        </h5>
        <p className="text-[#8c0145] text-xs">{item.description}</p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <div className="w-32">
            {showQuantityControls ? (
              <div className="flex rounded">
                <button
                  className="bg-[#8c0145] text-white px-2 py-1 rounded-l"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <div className=" text-center py-1 w-20 text-[#8c0145]">
                  {qty}
                </div>
                <button
                  className="bg-[#8c0145] text-white px-2 py-1 rounded-r"
                  onClick={handleIncrement}
                >
                  +
                </button>
              </div>
            ) : (
              <button
                className="w-full bg-[#8c0145] text-white py-1 rounded"
                onClick={handleAddClick}
              >
                Quantity
              </button>
            )}
          </div>
          <button
            className="bg-[#8c0145] text-white p-2 rounded"
            onClick={handleAddToCart}
          >
            <BiCartAdd className="text-lg" />
          </button>
          <button
            className="bg-[#8c0145] text-white p-2 rounded"
            onClick={handleDeleteFromCart}
          >
            <BiTrashAlt className="text-lg" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryItems;
