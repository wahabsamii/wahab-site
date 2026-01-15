import React, { useEffect, useState } from 'react'
import SubHero from '../components/SubHero'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import {TailSpin} from 'react-loader-spinner';
function Projects() {
  const paths = ["ALL", "MERN STACK DEVELOPMENT", "APP DEVELOPMENT", "PHP DEVELOPMENT","NEXT JS", "WORDPRESS", "WEBFLOW"];
  const [active,setActive] = useState("ALL");
  const [projects, setAllProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  console.log('adding new features')
  const navigate = useNavigate();

const filteredProjects = active === "ALL" ? projects : projects.filter((item) => 
  item.category?.name.toLocaleLowerCase() === active.toLocaleLowerCase());
    useEffect(() => {
      (async () => {
        try {
          setLoading(true);
          const res = await axios.get("https://wahab-me-backend.vercel.app/api/projects");
          setAllProjects(res.data);
          setLoading(false);
        } catch (error) {
          console.error("Failed to load projects:", error);
        }finally{
          setLoading(false);
        }
      })();
    }, []);

    if (loading) {
      return (
        <div className='h-[90vh] bg-black flex items-center justify-center'  style={{marginTop:'-110px'}}>
          <TailSpin color='#FF014F'/>
        </div>
      )
    }
  return (
    <div>
        <SubHero title={'Projects'}/>
        <section className='p-10 bg-black'>
          <div>
            <h4 className='text-3xl font-bold text-white mb-2'>All Projects</h4>
            <div className='my-4'>
              {
                paths.map((item, index) => (
                  <span onClick={() => setActive(item)} className={`mr-4 cursor-pointer ${item === active ? 'text-red-600 underline' : 'text-white'}`}>{item}</span>
                ))
              }
            </div>
             {/* Portfolio Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {filteredProjects.map((item, index) => (
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
        </section>
    </div>
  )
}

export default Projects