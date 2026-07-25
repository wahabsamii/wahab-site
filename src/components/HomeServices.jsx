import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FaPencilRuler, FaRegLightbulb, FaCode } from 'react-icons/fa';
import { SiMaterialdesignicons } from 'react-icons/si';
import { toast } from 'react-toastify';

function HomeServices() {
 const [categories, setCategories] = useState([]);
 const [loading, setLoading] = useState(true);
 const [services, setServices] = useState([]);

  const fetchServices = async() => {
    try {
      const res = await axios.get('http://localhost:4000/api/service/');
      setServices(res.data.services);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchServices();
  }, []);
 

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
    <div className="p-8 pt-16 bg-black">
      <div className="text-center">
        <p className="text-[#FF014F] text-sm font-semibold uppercase">Latest Service</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3 text-white">
          Solutions
        </h1>
      </div>

      {/* Box 1 */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-8 bg-black">
        {
        services.map((service) => (
          <div key={service._id} data-aos="fade-up"  className="group border border-[#FF014F] cursor-pointer p-6 rounded-lg flex items-center justify-center text-white hover:shadow-md transition-shadow">
            <div className="text-center flex justify-center items-center flex-col">
                {/* {IMAGE } */}
                  <img src={service.image} alt="" width={40} className='mb-3'/>
            
              <h3 className="text-xl font-semibold mb-2 relative 
                text-white group-hover:text-[#FF014F] transition-colors duration-300
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] 
                after:bg-[#FF014F] after:w-0 group-hover:after:w-full 
                after:transition-all after:duration-300">
                {service.title}
              </h3>
              <p>{service.description}</p>
            </div>
          </div>
        ))
      }
      </div>
</div>
  );
}

export default HomeServices;
