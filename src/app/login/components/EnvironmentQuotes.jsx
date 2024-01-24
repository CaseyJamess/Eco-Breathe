'use client'
import React, { useState, useEffect } from 'react';

const quotes = [
    {
      body: "The greatest threat to our planet",
      detail: "is the belief that someone else will save it."
    },
    {
      body: "Air pollution is a silent killer. ",
      detail: "We need to act now."
    },

    {
      body: "We won't have a society if we",
      detail: " destroy the environment."
    },
    {
      body: "What's the use of a fine house",
      detail: " if you haven't got a tolerable planet to put it on?"
    },
    {
      body: "It's only one straw, ",
      detail: "said 8 billion people."
    },
    {
      body: "Air quality affects us all, some more than others. Let's be ",
      detail: "the change we want to see."
    },
    {
      body: "Air pollution is turning",
      detail: "Mother Nature prematurely gray."
    },
    {
      body: "We are the first generation to feel the impact of climate change and the last generation that can ",
      detail: "do something about it."
    }
  ];
  

function EnvironmentQuotes() {
    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);
    const [show, setShow] = useState(true);
  
    useEffect(() => {
      const timer1 = setInterval(() => {
        setShow(false);
      }, 7000); 
  
      const timer2 = setInterval(() => {
        setCurrentQuoteIndex(prevIndex => (prevIndex + 1) % quotes.length);
        setShow(true); 
      }, 8000); 
  
      return () => {
        clearInterval(timer1);
        clearInterval(timer2);
      };
    }, []);

    return (
      <div className=''>
        <blockquote className={`transition-all ease-in-out duration-1000 ${show ? 'opacity-100' : 'opacity-1'}`}>
          <p className='h4 text-gray-800'>
           "{quotes[currentQuoteIndex].body}
            {' '}
            <span className="">
              {quotes[currentQuoteIndex].detail}"
            </span>
          </p>
        </blockquote>
      </div>
    );
    
    }      
      

export default EnvironmentQuotes;
