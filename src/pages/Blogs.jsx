import React, { useEffect, useState } from 'react'
import SubHero from '../components/SubHero'
import axios from 'axios';
import { FaRegUser } from "react-icons/fa6";
import { CiCalendar } from "react-icons/ci";
import { IoCalendarClearOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';


function Blogs() {
  const [loading, setLoading] = useState(false);
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const fetch_blogs = async() => {
    try {
      setLoading(true);
      const res = await axios.get('https://wahab-me-backend.vercel.app/api/blog');
      setBlogs(res.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetch_blogs();
  }, []);
  return (
  <div>
    <SubHero title={"Latest Blogs"}/>
    {/* <BlogSection loading={loading} setLoading={setLoading}/> */}
    <section className='bg-black text-white py-20 px-6 md:px-20'>
       <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-[#FF014F] font-medium uppercase">Blog and News</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 leading-snug">
          Elevating Personal Branding the <br /> through Powerful Portfolios
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div key={index} onClick={() => navigate(`/blog/${blog?.slug}`)} className="bg-[#0f0f0f] cursor-pointer rounded-xl overflow-hidden border border-gray-800">
            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <p className="text-sm text-white mb-2 flex items-center gap-2">
                <span className="flex items-center gap-3 bg-gray-800 px-2 py-1 rounded-full">
                  <div className='flex items-center gap-2'><FaRegUser/> {blog?.author?.name || 'wahab'}</div> <div className='flex items-center gap-2'><IoCalendarClearOutline /> {new Date(blog.date).toLocaleDateString()}</div>
                </span>
              </p>
              <h3 className="font-semibold text-lg leading-snug mb-3">{blog.title}</h3>
              <button className="text-sm text-white hover:underline flex items-center gap-1">
                Read More →
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  )
}

export default Blogs