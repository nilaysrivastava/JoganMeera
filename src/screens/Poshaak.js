import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { BiCartAdd } from "react-icons/bi";
import ky from "../images/k-y.jpg";
import kr from "../images/k-r.jpg";
import kw from "../images/k-w.jpg";
import my from "../images/m-y.jpg";
import mr from "../images/m-r.jpg";
import mw from "../images/m-w.jpg";
import xy from "../images/3-y.jpg";
import xr from "../images/3-r.jpg";
import xw from "../images/3-w.jpg";

const godsOptions = ["Krishna", "Mata", "X"];
const colors = ["Yellow", "Red", "White"];
const sizes = ["3", "4", "5"];

const images = {
  Krishna: {
    Yellow: ky,
    Red: kr,
    White: kw,
  },
  Mata: {
    Yellow: my,
    Red: mr,
    White: mw,
  },
  X: {
    Yellow: xy,
    Red: xr,
    White: xw,
  },
};

const colorMap = {
  Yellow: "bg-yellow-400",
  Red: "bg-red-500",
  White: "bg-white",
};

const Poshaak = () => {
  const [selectedGod, setSelectedGod] = useState(godsOptions[0]);
  const [selectedColor, setSelectedColor] = useState("Yellow");
  const [selectedSize, setSelectedSize] = useState(sizes[0]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleAddToCart = () => {
    alert(
      `Added to cart: ${selectedGod} idol in ${selectedColor} color, size ${selectedSize}`
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-yellow-100 to-orange-50">
      <Navbar />
      <div className="container mx-auto px-4 py-12 mt-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 text-orange-800">
            Customize Your Statue
          </h2>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* Image Section */}
            <div className="flex justify-center">
              <div className="relative group">
                <img
                  src={images[selectedGod][selectedColor]}
                  alt={`${selectedGod} in ${selectedColor}`}
                  className="w-[400px] h-[500px] object-cover rounded-lg shadow-xl"
                />
                <button
                  onClick={handleAddToCart}
                  className="absolute bottom-4 right-4 bg-orange-500 text-white p-3 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
                >
                  <BiCartAdd className="text-2xl" />
                </button>
              </div>
            </div>

            {/* Options Section */}
            <div className="space-y-8">
              {/* God Selection */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Select Idol
                </h3>
                <div className="flex gap-4">
                  {godsOptions.map((god) => (
                    <button
                      key={god}
                      onClick={() => setSelectedGod(god)}
                      className={`w-24 h-24 rounded-lg border-2 transition-all overflow-hidden
                        ${
                          selectedGod === god
                            ? "border-orange-500 scale-105"
                            : "border-gray-200"
                        }`}
                    >
                      <img
                        src={images[god].Yellow}
                        alt={god}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Selection */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Select Color
                </h3>
                <div className="flex gap-4">
                  {colors.map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`w-16 h-16 rounded-lg border-2 transition-all
                        ${colorMap[color]}
                        ${
                          selectedColor === color
                            ? "border-orange-500 scale-105"
                            : "border-gray-200"
                        }`}
                    />
                  ))}
                </div>
              </div>

              {/* Size Selection */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold mb-4 text-gray-800">
                  Select Size
                </h3>
                <div className="flex gap-4">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`w-16 h-16 flex items-center justify-center rounded-lg border-2 text-lg font-semibold
                        ${
                          selectedSize === size
                            ? "border-orange-500 bg-orange-50 text-orange-500 scale-105"
                            : "border-gray-200 bg-white text-gray-600"
                        }`}
                    >
                      {size}"
                    </button>
                  ))}
                </div>
              </div>

              {/* Selected Configuration */}
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="text-orange-800">
                  Selected: {selectedGod} - {selectedColor} - Size{" "}
                  {selectedSize}"
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Poshaak;
