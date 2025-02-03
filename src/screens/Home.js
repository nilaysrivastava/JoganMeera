import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./Search.css";
import Carousel from "../components/Carousel";
import Categories from "../components/Categories";
import About from "../components/About";
import Faq from "../components/Faq";
import Reviews from "../components/Reviews";

export default function Home() {
  return (
    <div style={{ backgroundColor: "#ffce50" }}>
      <Navbar />
      <div style={{ backgroundColor: "#ffce50" }}>
        <Carousel />
      </div>
      <div id="products">
        <Categories />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="reviews">
        <Reviews />
      </div>
      <div id="faq">
        <Faq />
      </div>
      <Footer />
    </div>
  );
}
