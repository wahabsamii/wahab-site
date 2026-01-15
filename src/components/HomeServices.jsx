import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPencilRuler, FaRegLightbulb, FaCode } from 'react-icons/fa';
import { SiMaterialdesignicons } from 'react-icons/si';

function HomeServices() {
 const [categories, setCategories] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  const fetchCategories = async () => {
    try {
      const res = await axios.get("https://wahab-me-backend.vercel.app/api/categories/");
      setCategories(res.data.categories);
    } catch (error) {
      console.error("Error loading categories", error);
    } finally {
      setLoading(false);
    }
  };

  fetchCategories();
}, []);

  return (
    <div className="flex flex-col md:flex-row justify-between gap-6 p-8 py-16 bg-black">
       {
     loading ? <p>Loading...</p> : categories?.map((item) => (<p className='text-white'>{item.name}</p>))
    }
      {/* Box 1 */}
      <div data-aos="fade-up" className="group md:w-1/4 h-40 border-[1px] border-[#FF014F] cursor-pointer py-2.5 rounded-lg flex items-center justify-center text-white hover:shadow-md transition-shadow">
  <div className="text-center flex justify-center items-center flex-col">
    <FaPencilRuler className="text-center text-4xl text-[#FF014F] mb-4" />
   
    <h3 className="text-xl font-semibold mb-2 relative 
      text-white group-hover:text-[#FF014F] transition-colors duration-300
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
      after:bg-[#FF014F] after:w-0 group-hover:after:w-full 
      after:transition-all after:duration-300">
      Web Development
    </h3>

    <p>120 Projects</p>
  </div>
</div>
      {/* Box 2 */}
      <div data-aos="fade-up" className="group md:w-1/4 h-40 border-[1px] border-[#FF014F] cursor-pointer py-2.5 rounded-lg flex items-center justify-center text-white hover:shadow-md transition-shadow">
  <div className="text-center flex justify-center items-center flex-col">
    <FaRegLightbulb className="text-center text-4xl text-[#FF014F] mb-4" />

    <h3 className="text-xl font-semibold mb-2 relative 
      text-white group-hover:text-[#FF014F] transition-colors duration-300
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
      after:bg-[#FF014F] after:w-0 group-hover:after:w-full 
      after:transition-all after:duration-300">
      App Development
    </h3>

    <p>80 Projects</p>
  </div>
</div>
      {/* Box 3 */}
      <div data-aos="fade-up" className="group md:w-1/4 h-40 border-[1px] border-[#FF014F] cursor-pointer py-2.5 rounded-lg flex items-center justify-center text-white hover:shadow-md transition-shadow">
  <div className="text-center flex justify-center items-center flex-col">
    <SiMaterialdesignicons className="text-center text-4xl text-[#FF014F] mb-4" />

    <h3 className="text-xl font-semibold mb-2 relative 
      text-white group-hover:text-[#FF014F] transition-colors duration-300
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
      after:bg-[#FF014F] after:w-0 group-hover:after:w-full 
      after:transition-all after:duration-300">
      PHP Developer
    </h3>

    <p>50 Projects</p>
  </div>
</div>
      {/* Box 4 */}
      <div data-aos="fade-up" className="group md:w-1/4 h-40 border-[1px] border-[#FF014F] cursor-pointer py-2.5 rounded-lg flex items-center justify-center text-white hover:shadow-md transition-shadow">
  <div className="text-center flex justify-center items-center flex-col">
    <FaCode className="text-center text-4xl text-[#FF014F] mb-4" />

    <h3 className="text-xl font-semibold mb-2 relative 
      text-white group-hover:text-[#FF014F] transition-colors duration-300
      after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
      after:bg-[#FF014F] after:w-0 group-hover:after:w-full 
      after:transition-all after:duration-300">
      MERN Stack 
    </h3>

    <p>90 Projects</p>
  </div>
</div>

</div>
  );
}

export default HomeServices;
