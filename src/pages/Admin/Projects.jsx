import React, { useEffect, useState } from 'react';
import DashboardLayout from './DashboardLayout';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { FaPlus, FaFolderPlus } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

const Projects = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [title, setTitle] = useState('');
  const [projectDesc, setProjectDesc] = useState('');
  const [categoryId, setCategoryId] = useState('');
  const [link, setLink] = useState('');
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);

  const [previewUrl, setPreviewUrl] = useState(null);
  const [projects, setAllProjects] = useState([]);

  const [showcategory, setShowCategory] = useState(false);
  const [showproduct, setShowProduct] = useState(false);
  const navigate = useNavigate();
  const {currentUser} = useSelector((state) => state.user);
  // Fetch categories
  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get('https://wahab-me-backend.vercel.app/api/categories');
        setCategories(res.data);
      } catch (error) {
        toast.error('Failed to load categories');
      }
    })();

    (async ()=>{
        try {
            const res = await axios.get('https://wahab-me-backend.vercel.app/api/projects');
            setAllProjects(res.data);
        } catch (error) {
            console.log(error);
        }
    })()
  }, []);

  // Add Category Handler
  const handleAddCategory = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://wahab-me-backend.vercel.app/api/categories', { name, description });
      if (res.data) {
        toast.success('Category Added');
        setName('');
        setDescription('');
        setCategories([...categories, res.data]); // Update UI
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };


  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
        setImage(file);
        setPreviewUrl(URL.createObjectURL(file))
    }
  }
  // Add Project Handler
  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', projectDesc);
      formData.append('category', categoryId);
      formData.append('image', image);
      formData.append('author', currentUser?._id);
      formData.append('link', link);

      const res = await axios.post('https://wahab-me-backend.vercel.app/api/projects', formData);
      if (res.data) {
        toast.success('Project Added');
        setTitle('');
        setProjectDesc('');
        setCategoryId('');
        setImage(null);
      }
    } catch (error) {
      toast.error(error.response?.data?.message || error.message);
    }
  };

  return (
    <DashboardLayout>
      <div className="max-w-3xl mx-auto">

<div className="flex gap-4 mb-6">
    <button onClick={() => setShowProduct(!showproduct)} className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md shadow-md transition-all duration-200">
    <FaPlus />
    Add New Project
 </button>
  <button onClick={(e) => setShowCategory(!showcategory)} className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-md shadow-md transition-all duration-200">
   <FaFolderPlus />
    Add Category
 </button>
</div>

       {
        showcategory && (<>
        <h2 className="text-2xl font-bold mb-4">Add Category</h2>
        <form className="flex flex-col gap-3 mb-8 bg-slate-300 p-6 rounded-lg" onSubmit={handleAddCategory}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-2 border border-gray-400 rounded-md"
            type="text"
            placeholder="Category Name"
            required
          />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="p-2 border border-gray-400 rounded-md"
            placeholder="Category Description"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Add Category
          </button>
        </form></>)}
       
       {
        showproduct && (<>
         <h2 className="text-2xl font-bold mb-4">Add Project</h2>
        <form className="flex flex-col gap-3 mb-4 bg-slate-300 p-6 rounded-lg" onSubmit={handleAddProject}>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="p-2 border border-gray-400 rounded-md"
            type="text"
            placeholder="Project Title"
            required
          />
          <input
            value={link}
            onChange={(e) => setLink(e.target.value)}
            className="p-2 border border-gray-400 rounded-md"
            type="text"
            placeholder="Add Project Link"
            required
          />

          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="p-2 border border-gray-400 rounded-md"
            required
          >
            <option value="">Select Category</option>
            {categories.map((cat) => (
              <option key={cat._id} value={cat._id}>
                {cat.name}
              </option>
            ))}
          </select>

          <textarea
            value={projectDesc}
            onChange={(e) => setProjectDesc(e.target.value)}
            className="p-2 border border-gray-400 rounded-md"
            rows="3"
            placeholder="Project Description"
            required
          />

          <input
            type="file"
            onChange={(e) => handleImageChange(e)}
            accept="image/*"
            className="p-2 border border-gray-400 rounded-md"
            required
          />
          {previewUrl && (
        <img
          src={previewUrl}
          alt="Preview"
          style={{ width: '200px', marginTop: '10px', borderRadius: '8px' }}
        />
      )}

          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Add Project
          </button>
         </form>
        </>)
       }

         <div className='grid grid-cols-4 gap-2'>
            {projects.map((item) => (
               <div onClick={() => navigate(item._id)} className="bg-white cursor-pointer shadow-md rounded-xl overflow-hidden w-full max-w-sm hover:shadow-lg transition-shadow duration-300">
    <img src={item.image}
    alt={item.title}
    className="w-full h-[200px] object-cover"
    />
<div className="p-4 space-y-2">
    <h4 className="text-sm font-semibold text-gray-800">{item.title}</h4>
    {/* <p className="text-gray-600 text-sm">{item.description}</p> */}
    <p className="text-gray-500 text-sm">
        <span className="font-medium">Category:</span> {item.category?.name || "N/A"}
    </p>
    <div className="flex justify-between text-sm text-gray-400 mt-2">
        <span>{new Date(item.date).toDateString()}</span>
        {/* <span>{item.time}</span> */}
    </div>
    </div>
</div>

                    ))}
         </div>
      </div>
    </DashboardLayout>
  );
};

export default Projects;
