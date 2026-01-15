import React from "react";
import Img from '../assets/expert-img.jpg'
const ConsultingExp = () => {
  return (
    <div className="bg-black text-white py-10 px-4 md:px-20">
      {/* Experience Section */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 max-w-6xl mx-auto">
        {/* Left Column */}
        <div className="w-full md:w-1/2">
          <h2 className="text-2xl font-extrabold mb-6">Experiences</h2>

          <div className="mb-8 bg-gray-800 p-4 rounded-xl">
            <p className="text-[#FF014F] text-sm font-semibold mb-1">Experience</p>
            <h3 className="text-xl font-bold mb-1">Arfa Kareem (2 Years)</h3>
            <p className="text-sm font-semibold mb-2">Full Stack Dev</p>
            <p className="text-sm text-gray-400">
              Design and redesign web applications for client eg design figma and xd.
            </p>
          </div>

          <div className="bg-gray-800 p-4 rounded-xl">
            <p className="text-[#FF014F] text-sm font-semibold mb-1">Experience</p>
            <h3 className="text-xl font-bold mb-1">Freelancing (3 Years)</h3>
            <p className="text-sm font-semibold mb-2">Web Developer & Designer</p>
            <p className="text-sm text-gray-400">
              Creative and detail-oriented Web Developer & Designer with a passion for building responsive, user-friendly websites. 
            </p>
          </div>
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <img
            src={Img}
            alt="Experience Photo"
            className="rounded-2xl w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default ConsultingExp;
