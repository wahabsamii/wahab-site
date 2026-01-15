import axios from "axios";
import React, { useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { useNavigate } from "react-router-dom";

const Portfolio = ({loading, setLoading}) => {
  const [projects, setAllProjects] = useState([]);
  // const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        const res = await axios.get("https://wahab-me-backend.vercel.app/api/projects?limit=6");
        setAllProjects(res.data);
        setLoading(false);
      } catch (error) {
        console.error("Failed to load projects:", error);
      }finally{
        setLoading(false);
      }
    })();
  }, []);

  // if(loading) return <ThreeDots
  //         height="80"
  //         width="80"
  //         radius="9"
  //         color="#FF014F"
  //         ariaLabel="three-dots-loading"
  //         wrapperStyle={{}}
  //         wrapperClass=""
  //         visible={true}
  //       />
  return (
    <div className="bg-black text-white py-10 px-4 md:px-20" id="portfolio">
      {/* Header Section */}
      <div className="text-center mb-10">
        <p className="text-[#FF014F] text-sm font-semibold uppercase">Latest Portfolio</p>
        <h1 className="text-3xl md:text-4xl font-extrabold mt-2 mb-3 leading-tight">
          Transforming Ideas into<br /> Exceptional
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm">
          Business consulting consultants provide expert advice and guidance to help
          businesses improve performance, efficiency, and organization.
        </p>
      </div>

      {/* Portfolio Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((item, index) => (
          <div
            key={item._id || index}
            className="bg-[#1a1a1a] group rounded-2xl overflow-hidden cursor-pointer"
            onClick={() => navigate(`/project/${item._id}`)}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-cover"
            />
            <div className="p-5 ">
               <h3 className="font-bold relative transition-colors duration-300 text-white group-hover:text-[#FF014F] text-lg cursor-pointer mb-1
                after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[2px] after:bg-[#FF014F] after:w-0 group-hover:after:w-10 after:transition-all after:duration-300">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm mb-3">{item.category?.name || "Uncategorized"}</p>
              <button className="w-8 h-8 flex items-center justify-center rounded bg-[#111] border border-gray-600 text-white">
                <span className="text-xl">↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
