import React from "react";
import Img from '../assets/Coding.jpg'
const ConsultingPortfolio = () => {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-20">
      <div className="text-center mb-10">
        <p className="text-[#FF014F] text-sm font-semibold uppercase">Latest Service</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3">
          Inspiring The World One Project
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
          Business consulting consultants provide expert advice and guida businesses to help them improve their performance, efficiency, and organizational
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-between max-w-6xl mx-auto">
        {/* Left Boxes */}
        <div className="flex flex-col gap-6 w-full md:w-1/2">
          {[
            {
              title: "Secure Code & Architecture",
              text: "Built with best practices to ensure your apps are safe, stable, and scalable.",
            },
            {
              title: "100% Custom Solutions",
              text: "Tailored designs and features that align perfectly with your brand and goals.",
            },
            {
              title: "On-time Delivery",
              text: "Reliable, deadline-focused delivery—every time, without compromise.",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="bg-[#1a1a1a] p-6 rounded-xl border-2 border-transparent hover:border-[#FF014F] transition-all duration-300"
            >
              <h2 className="font-bold text-lg mb-2">{item.title}</h2>
              <p className="text-sm text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>

        {/* Right Image with Decorations */}
        <div className="relative w-full md:w-1/2 flex justify-center items-center">
          <div className="relative inline-block">
  <img
    src={Img}
    alt="Consultant"
    className="rounded-xl"
  />
</div>


          {/* Circles and Shapes */}
          {/* <div className="absolute top-10 left-10 w-6 h-6 bg-[#FF014F] rounded-full z-0" />
          <div className="absolute bottom-10 left-6 w-20 h-20 border-2 border-[#FF014F] rounded-full z-0" />
          <div className="absolute top-6 right-6 w-4 h-4 bg-[#FF014F] rounded-full z-0" />
          <div className="absolute top-1/2 right-10 w-6 h-6 border-2 border-[#FF014F] rounded-full z-0" />
          // <div className="absolute bottom-10 right-6 w-24 h-12 bg-[#FF014F] rounded-t-full z-0" /> */}
        </div>
      </div>
    </div>
  );
};

export default ConsultingPortfolio;
