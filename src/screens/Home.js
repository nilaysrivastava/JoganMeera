import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Search.css";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#ffce50" }}>
      <div>
        <Navbar />
      </div>
      <div
        style={{
          backgroundColor: "#ffce50",
        }}
      >
        <Carousel />
      </div>
      <div>
        <Categories />
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
