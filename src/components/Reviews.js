import React from "react";

const reviews = [
  {
    name: "Radha Sharma",
    review:
      "शृंगार की वस्तुएं बहुत ही सुंदर और दिव्य हैं। ठाकुरजी की सेवा के लिए यह सबसे अच्छी जगह है।",
    rating: 5,
  },
  {
    name: "Mohan Das",
    review:
      "बहुत ही उत्तम गुणवत्ता के पोशाक और सेवा सामग्री। पूरे परिवार को बहुत पसंद आया।",
    rating: 4,
  },
  {
    name: "Sita Devi",
    review:
      "यहां से खरीदे गए झूले और पोशाक वास्तव में दिव्य हैं। ठाकुरजी के शृंगार के लिए परफेक्ट।",
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <div className="px-5 pb-16">
      <h1 className="text-center mb-5 text-4xl text-gray-800">
        Customer Reviews
      </h1>

      <div className="flex flex-wrap justify-center gap-5">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="w-[350px] rounded-lg overflow-hidden shadow-md text-center p-5 bg-white"
          >
            <h2 className="text-xl text-black">{review.name}</h2>
            <p className="text-[#8c0145] mt-2">{review.review}</p>
            <div className="mt-3 text-yellow-500">
              {"⭐".repeat(review.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
