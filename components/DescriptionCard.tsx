'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { TypeAnimation } from 'react-type-animation';

const DescriptionCard = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative w-full h-screen pt-20">
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <img
          src="/gambarPrapag.jpg"
          alt="Background"
          className="w-full h-full object-cover blur-md"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
      </div>

      <div className="flex justify-center items-center h-full">
        <h1
          className="text-white text-center text-4xl md:text-5xl lg:text-8xl font-bold"
          data-aos="fade-up"
        >
          <TypeAnimation
            sequence={['Selamat Datang', 1000, 'いらっしゃいませ', 1000, 'Welcome', 1000]}
            wrapper="span"
            speed={50}
            repeat={1}
          />
          <br />
          Di Website <br />
          Desa Prapag Lor
        </h1>
      </div>
    </div>
  );
};

export default DescriptionCard;