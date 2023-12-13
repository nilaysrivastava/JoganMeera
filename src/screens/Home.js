import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Search from "../components/Search";

export default function Home() {
  return (
    <div style={{"backgroundColor":"#ffffff"}}>
      <div>
        <Navbar />
      </div>
      <div>
        <Search />
      </div>
      <div >
        <Card/>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
