"use client";

import React, { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { motion } from "framer-motion";

const FAQs = () => {

  const questions = [
    {
      id: 0,
      question: "What is EcoBreathe?",
      answer:
        "EcoBreathe is a real-time air quality monitoring service that helps you make informed decisions for outdoor activities, health, and more.",
    },
    {
      id: 1,
      question: "How do I sign up?",
      answer:
        'You can sign up for free by clicking the "Sign Up" button on the top-right corner of the homepage. Follow the instructions to create your account.',
    },
    {
      id: 2,
      question: "Why should I sign up for EcoBreathe?",
      answer:
        "Signing up for EcoBreathe allows you to get personalised air quality notifications, access historical data, and contribute to community reporting.",
    },
    {
      id: 3,
      question: "Is the app available on mobile?",
      answer:
        "Currently, no. EcoBreathe is currently only available on web but is intended to be available for mobile. Check back soon.",
    },
    {
      id: 4,
      question: "How accurate is the data?",
      answer:
        "EcoBreathe relies on high-quality sensors and data sources to provide accurate and up-to-date air quality information.",
    },
  ];

  const [isOpen, setIsOpen] = useState([]);

  const toggleDropdown = (id) => {
    setIsOpen((prevOpen) => {
      const updatedOpen = [...prevOpen];
      updatedOpen[id] = !updatedOpen[id];
      return updatedOpen;
    });
  };

  return (
    <div className="my-16 bg-component max-w-screen-md mx-auto w-full">
      {questions.map(({ id, question, answer }, index) => (
        <div
          className={`p-6 border-l border-r border-blue-950 dark:border-white border-t ${
            index === questions.length - 1 ? "border-b" : ""
          } border-blue-950`}
          key={id}
        >
          <div className="flex items-center justify-between">
            <button
              className="text-xl text-start  "
              onClick={() => toggleDropdown(id)}
            >
              {question}
            </button>

            <div className="cursor-pointer " onClick={() => toggleDropdown(id)}>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen[id] ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isOpen[id] ? <FiMinus size={30} /> : <FiPlus size={30} />}
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{
              height: isOpen[id] ? "auto" : 0,
              opacity: isOpen[id] ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="mt-2 overflow-hidden"
          >
            <p>{answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FAQs;
