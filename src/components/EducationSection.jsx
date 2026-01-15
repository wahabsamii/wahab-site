import React from 'react';

const educationData = [
  {
    title: 'MERN STACK DEV',
    duration: '2021-2025',
    description:
      "Developed deep expertise in full stack JavaScript development using MongoDB, Express.js, React, and Node.js. Gained hands-on experience building scalable web applications, RESTful APIs, and real-time systems. My MERN stack knowledge forms the backbone of many of the robust, dynamic platforms I’ve built in my portfolio.",
    isHighlighted: true,
  },
  {
    title: 'REACT NATIVE',
    duration: '2022-2025',
    description:
      "Specialized in mobile app development using React Native, creating cross-platform applications with native performance and a smooth user experience. Through various client projects, I’ve demonstrated flexibility, precision, and an eye for detail in delivering functional and visually engaging mobile apps.",
  },
  {
    title: 'PHP DEVELOPER',
    duration: '2022-2025',
    description:
      "Acquired solid experience in server-side programming and backend development using PHP. Worked extensively with frameworks like Laravel and CMS platforms like WordPress. Collaborated with diverse clients—from startups to large organizations—to develop custom solutions tailored to unique business requirements.",
  },
  {
    title: 'CMS DEVELOPER',
    duration: '2021-2025',
    description:
      "Focused on building and customizing content management systems such as WordPress, Webflow, Wix, and other no-code/low-code platforms. Delivered user-friendly admin dashboards, custom themes, and plugin functionalities. My CMS development skills enable businesses to manage content effortlessly and scale their digital presence with ease.",
  },
];

const EducationSection = () => {
  return (
    <div className="bg-black text-white py-16 px-4 md:px-20">
      <div className="text-center mb-12">
        <p className="text-[#FF014F] font-semibold uppercase tracking-widest">
          Education & Experience
        </p>
        <h2 className="text-3xl md:text-5xl font-extrabold mt-2 mb-4 leading-tight">
          Empowering Creativity <br /> through
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto text-sm md:text-base">
          My journey as a developer and creative consultant has been shaped by a strong educational foundation 
          and a diverse set of professional experiences. From marketing and design to leadership and 
          execution, each role has refined my ability to deliver innovative, results-driven solutions.
        </p>
      </div>

      <h3 className="text-xl md:text-2xl font-bold mb-6 flex items-center gap-2">
        Education
        <span className="w-6 h-[2px] bg-gray-500 rounded-sm"></span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {educationData.map((item, idx) => (
         <div
         key={idx}
         className={`relative rounded-xl p-6 overflow-hidden hover:rounded-xl bg-[#111111] hover:'border-[#FF014F]'`}
       >
         <h4 className="text-white font-semibold text-lg mb-1">
           {item.title}
         </h4>
         <p className="text-white font-bold mb-3">{item.duration}</p>
         <p className="text-gray-400 text-sm">{item.description}</p>
       
         <div className="absolute rounded-xl inset-0 border-t-2 border-l-2 border-r-2 border-b-2 border-transparent hover:border-[#FF014F] transition-all"></div>
       </div>
       
        
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
