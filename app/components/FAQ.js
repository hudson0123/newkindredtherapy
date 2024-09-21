"use client"

import React, { useState } from 'react';

export default function FAQ() {
  // State to track which FAQ is open
  const [openFAQ, setOpenFAQ] = useState(null);

  // FAQs data
  const faqs = [
    {
      question: "What is your return policy?",
      answer: "Our return policy allows for returns within 30 days of purchase."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order by logging into your account and checking the order history."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes, we ship to over 50 countries worldwide."
    }
  ];

  // Toggle function to show/hide answer
  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div id="faq" className='relative h-[100dvh] place-content-center sm:p-16 bg-white mx-[5dvh]'>
      <h1 className='z-10 text-3xl sm:text-4xl font-bold mb-8 text-center'>Frequently Asked Questions</h1>
      <div className='absolute bg-[#eaebff] h-12 w-72 right-[36dvw] top-[40vdh] blur-md z-1'></div>
      <div className='space-y-4'>
        {faqs.map((faq, index) => (
          <div key={index} className='border-b border-gray-200 pb-4'>
            <div
              className='flex justify-between items-center cursor-pointer p-4 bg-[#eaebff] rounded-md shadow hover:bg-[#d6d7ff]'
              onClick={() => toggleFAQ(index)}
            >
              <h2 className='text-lg sm:text-xl font-medium'>{faq.question}</h2>
              <span className='text-lg'>
                {openFAQ === index ? '-' : '+'}
              </span>
            </div>
            {/* Animate height of the answer */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out`}
              style={{
                maxHeight: openFAQ === index ? '300px' : '0px',
                opacity: openFAQ === index ? 1 : 0,
              }}
            >
              <div className='mt-2 p-4 text-gray-700 bg-gray-100 rounded-md'>
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
