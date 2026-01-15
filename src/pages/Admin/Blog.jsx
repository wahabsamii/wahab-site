import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DashboardLayout from './DashboardLayout';
import {useSelector} from 'react-redux'
import { useNavigate } from 'react-router-dom';
function Blog() {
  const {currentUser} = useSelector((state) => state.user)
  const [blogs, setBlogs] = useState([]);
  const [form, setForm] = useState({ title: '', description: '', image: null, author:currentUser._id });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  // const [author, setAuthor] = useState("");
  const navigate = useNavigate();
  const [addblog, setAddblog] = useState(false);
  const fetchBlogs = async () => {
    try {
      const res = await axios.get('https://wahab-me-backend.vercel.app/api/blog');
      // https://wahab-me-backend.vercel.app
      setBlogs(res.data);
    } catch (err) {
      setError('Failed to fetch blogs');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('author', form.author);
    if (form.image) formData.append('image', form.image);

    try {
      if (isEditing) {
        await axios.put(`https://wahab-me-backend.vercel.app/api/blog/${editId}`, formData);
        setIsEditing(false);
        setEditId(null);
      } else {
        await axios.post('https://wahab-me-backend.vercel.app/api/blog', formData);
        // https://wahab-me-backend.vercel.app
      }
      setForm({ title: '', description: '', image: null });
      fetchBlogs();
    } catch (err) {
      setError('Failed to save blog');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://wahab-me-backend.vercel.app/api/blog/${id}`);
      fetchBlogs();
    } catch (err) {
      setError('Failed to delete blog');
    }
  };

  const handleEdit = (blog) => {
    setForm({
      title: blog.title,
      description: blog.description,
      image: null, // image won't be prefilled, requires re-upload
    });
    setIsEditing(true);
    setEditId(blog._id);
  };

  return (
    <DashboardLayout>
      <div className="p-6">
        <button className='p-2 rounded-xl mb-4 bg-[#FF014F] text-white px-4' onClick={() => setAddblog(!addblog)}>Add New Blog</button>
        {
          addblog && (<>
          <h2 className="text-2xl font-bold mb-4">{isEditing ? 'Update Blog' : 'Add New Blog'}</h2>
        <form onSubmit={handleSubmit} className="mb-6 space-y-4">
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Title"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            placeholder="Description"
            className="w-full border px-3 py-2 rounded"
            required
          />
          <input
            type="file"
            name="image"
            onChange={handleChange}
            className="w-full"
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          >
            {isEditing ? 'Update' : 'Add'}
          </button>
        </form>
          </>)
        }
        <h3 className="text-xl font-semibold mb-2">All Blogs</h3>
        {loading ? (
          <p>Loading blogs...</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div key={blog._id} className="border p-4 rounded shadow cursor-pointer" onClick={() => navigate()}>
                {blog.image && (
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-40 object-cover mb-2 rounded"
                  />
                )}
                <h3 className="text-lg font-bold">{blog.title}</h3>
                <p className="text-sm text-gray-600 mb-2">{blog.description.slice(0,20)}</p>
                <p className="text-sm text-gray-600 mb-2">Publish: {new Date(blog.date).toLocaleDateString()}</p>
                <div className="flex gap-2">
                  <button
                    onClick={() => handleEdit(blog)}
                    className="bg-yellow-400 px-3 py-1 rounded text-white"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(blog._id)}
                    className="bg-red-600 px-3 py-1 rounded text-white"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </DashboardLayout>
  );
}

export default Blog;
