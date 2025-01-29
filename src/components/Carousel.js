import React from "react";
import Slider from "react-slick";
import s1 from "../images/5.png";
import s2 from "../images/6 (1).png";
import s3 from "../images/8 (1).png";
import s4 from "../images/9 (1).png";

const Carousel = () => {
  const NextArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 right-2.5 transform -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full cursor-pointer z-10 hover:bg-black/70 transition-colors"
    >
      &gt;
    </div>
  );

  const PrevArrow = ({ onClick }) => (
    <div
      onClick={onClick}
      className="absolute top-1/2 left-2.5 transform -translate-y-1/2 bg-black/50 text-white p-2.5 rounded-full cursor-pointer z-10 hover:bg-black/70 transition-colors"
    >
      &lt;
    </div>
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  const slides = [
    {
      id: 1,
      title: "Slide 1",
      description: "This is the first slide.",
      image: s1,
    },
    {
      id: 2,
      title: "Slide 2",
      description: "This is the second slide.",
      image: s2,
    },
    {
      id: 3,
      title: "Slide 3",
      description: "This is the third slide.",
      image: s3,
    },
    {
      id: 4,
      title: "Slide 4",
      description: "This is the fourth slide.",
      image: s4,
    },
  ];

  return (
    <div className="max-w-[1200px] max-h-[900px] mx-auto my-8 relative pt-12 pb-8">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id}>
            <div className="relative h-[600px]">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-2.5 left-2.5 bg-black/50 text-white p-2.5 rounded-md">
                <h2 className="m-0 text-lg">{slide.title}</h2>
                <p className="m-0">{slide.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
