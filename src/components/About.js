import React from "react";
import founderImage from "../images/founder.jpg"; // Ensure the image exists in this path

const AboutUs = () => {
  return (
    <div className="px-5 pb-16">
      <h1 className="text-center mb-5 text-4xl text-gray-800">About Us</h1>

      <div className="flex flex-wrap justify-center gap-10">
        {/* About the Founder */}
        <div className="w-[350px] rounded-lg overflow-hidden shadow-md text-center p-5 bg-white">
          <img
            src={founderImage}
            alt="Founder - Meera"
            className="w-32 h-32 mx-auto rounded-full object-cover mb-4"
          />
          <h2 className="text-2xl text-black">About the Founder</h2>
          <p className="text-[#8c0145] mt-2">
            My name is Meera, a proud Brijvasi deeply rooted in the path of
            devotion. Seva is the soul of bhakti, and adorning Thakurji is one
            of the purest and most meaningful forms of service. I started Jogan
            Meera to bring this sacred shringar seva.
          </p>
        </div>

        {/* About the Company */}
        <div className="w-[350px] rounded-lg overflow-hidden shadow-md text-center p-5 bg-white">
          <h1 className="w-32 h-32 mx-auto rounded-full object-cover mb-4">
            Jogan Meera Logo
          </h1>
          <h2 className="text-2xl text-black">About the Company</h2>
          <p className="text-[#8c0145] mt-2">
            We create exquisite shringar items for Thakurji, craft customized
            poshaks, and offer a variety of seva essentials. Our range includes
            poshaks for Thakurji and Radha Rani, beautifully designed
            accessories, jhulas, palnas, seva samagri, toys, and more. With
            worldwide shipping, we are committed to bringing the joy of
            Thakurji’s seva to devotees across the globe.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
