import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const BlogSection = ({loading, setLoading}) => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();
  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const res = await axios.get('https://wahab-me-backend.vercel.app/api/blog?limit=3');
      // https://wahab-me-backend.vercel.app
      setBlogs(res.data);
      setLoading(false);
    } catch (err) {
      // setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <div className="bg-black text-white py-20 px-6 md:px-20">
      

      <div className="max-w-7xl mx-auto text-center mb-12">
        <p className="text-[#FF014F] font-medium uppercase">Blog and News</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mt-2 leading-snug">
          Elevating Personal Branding the <br /> through Powerful Portfolios
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {blogs.map((blog, index) => (
          <div onClick={() => navigate(`/blog/${blog.slug}`)} key={index} className="bg-[#0f0f0f] cursor-pointer rounded-xl overflow-hidden border border-gray-800">
            <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
            <div className="p-5">
              <p className="text-sm text-white mb-2 flex items-center gap-2">
                <span className="inline-block bg-gray-800 px-2 py-1 rounded-full">
                  👤 {blog?.author?.name || 'wahab'} 📅 {new Date(blog.date).toLocaleDateString()}
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
    </div>
  );
};

export default BlogSection;
