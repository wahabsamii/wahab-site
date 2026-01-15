import React, { useEffect, useState } from 'react';

const skills = {
  design: [
    { name: 'MERN Full Stack', level: 100 },
    { name: 'PHP', level: 90 },
    { name: 'Javascript', level: 92 },
    { name: 'REACT', level: 90 },
    { name: 'REACT NATIVE', level: 95 },
  ],
  development: [
    { name: 'Nextjs', level: 100 },
    { name: 'Laravel', level: 99 },
    { name: 'WORDPRESS', level: 100 },
    { name: 'WEBFLOW', level: 100 },
    { name: 'Mobile App', level: 97 },
  ],
};

const SkillBar = ({ name, level }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level);
    }, 100); // delay for smoother animation
    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="mb-6">
      <div className="flex justify-between text-white text-sm font-semibold mb-2 hover:text-[#FF014F] transition">
        <span>{name}</span>
        <span>{level}%</span>
      </div>
      <div className="w-full bg-[#1a1a1a] rounded-full h-3 overflow-hidden">
        <div
          className="h-full bg-[#FF014F] rounded-full transition-all duration-1000 ease-in-out"
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

const SkillSection = () => {
  return (
    <div className="bg-black text-white px-6 py-12 md:px-16">
      
          <h2 className="text-2xl font-bold mb-8 hover:text-[#FF014F] transition">Our Skills
          </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Design Skills */}
        <div>
          {skills.design.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>

        {/* Development Skills */}
        <div>
          {skills.development.map((skill, index) => (
            <SkillBar key={index} name={skill.name} level={skill.level} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillSection;
