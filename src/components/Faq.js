import React, { useState } from "react";

const faqs = [
  {
    question: "ठाकुरजी को प्रिय वस्त्र क्या है?",
    answer: "चीरवस्त्र",
  },
  {
    question: "ठाकुरजी की सेवा में 3 महत्वपूर्ण चीजें क्या हैं?",
    answer: "झारजी, बांटाजी, शीशा।",
  },
  {
    question: "ठाकुरजी को सबसे प्रिय शृंगार क्या है?",
    answer: "लगाव।",
  },
  {
    question: "ठाकुरजी को नज़र से बचाने के लिए क्या धारण करते हैं?",
    answer: "वघनखा।",
  },
  {
    question: "ठाकुरजी को संबोधित कैसे करें?",
    answer:
      'ठाकुरजी को प्रेम और सम्मान से "लाला," "लालजू," "लाडीलाल," "श्रीनाथजी," "कृष्ण कन्हैया," या "गोवर्धनधारी" जैसे प्रिय नामों से संबोधित करें।',
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="px-5 pb-16">
      <h1 className="text-center mb-5 text-4xl text-gray-800">FAQs</h1>

      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300">
            <button
              className="w-full text-left py-3 px-4 text-lg font-semibold text-black flex justify-between items-center hover:bg-gray-100 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <span className="text-[#8c0145]">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="px-4 pb-3 text-[#8c0145]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
