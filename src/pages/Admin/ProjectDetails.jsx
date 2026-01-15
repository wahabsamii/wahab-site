import React, { useEffect, useState } from 'react';
import DashboardLayout from './DashboardLayout';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';

function ProjectDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);
  const [editing, setEditing] = useState(false);
  const [loading, setLoading] = useState(true);

  // Editable Fields
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null); // file
  const [previewImage, setPreviewImage] = useState('');

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`https://wahab-me-backend.vercel.app/api/projects/${id}`);
        setDetails(res.data);
        setTitle(res.data.title);
        setDescription(res.data.description);
        setPreviewImage(res.data.image);
      } catch (err) {
        toast.error('Failed to fetch project.');
      } finally {
        setLoading(false);
      }
    })();
  }, [id]);

  const handleEdit = () => setEditing(true);

  const handleCancel = () => {
    setEditing(false);
    setTitle(details.title);
    setDescription(details.description);
    setPreviewImage(details.image);
    setImage(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      if (image) formData.append('image', image);

      const res = await axios.put(`https://wahab-me-backend.vercel.app/api/projects/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      setDetails(res.data);
      toast.success('Project updated successfully!');
      setEditing(false);
    } catch (err) {
      toast.error('Update failed.');
    }
  };

  const handleDelete = async () => {
    if (!window.confirm('Are you sure you want to delete this project?')) return;

    try {
      await axios.delete(`https://wahab-me-backend.vercel.app/api/projects/${id}`);
      toast.success('Project deleted!');
      navigate('/admin/dashboard');
    } catch (err) {
      toast.error('Failed to delete project.');
    }
  };

  if (loading) {
    return (
      <DashboardLayout>
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-500">Loading...</p>
        </div>
      </DashboardLayout>
    );
  }

  if (!details) {
    return (
      <DashboardLayout>
        <div className="text-center mt-20 text-red-500 font-semibold">
          Project not found.
        </div>
      </DashboardLayout>
    );
  }

  return (
    <DashboardLayout>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg mt-10">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold text-gray-800">
            {editing ? 'Edit Project' : details.title}
          </h1>
          {!editing && (
            <div className="flex gap-2">
              <button
                onClick={handleEdit}
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-1 rounded-md"
              >
                Edit
              </button>
              <button
                onClick={handleDelete}
                className="bg-red-600 hover:bg-red-700 text-white px-4 py-1 rounded-md"
              >
                Delete
              </button>
            </div>
          )}
        </div>

        <div>
          <img
            src={previewImage}
            alt="Project"
            className="w-full h-72 object-cover rounded-lg mb-4"
          />

          {editing ? (
            <>
              <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full border border-gray-300 rounded p-2 mb-4"
              />
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows="4"
                className="w-full border border-gray-300 rounded p-2 mb-4"
              />
              <input type="file" onChange={handleImageChange} className="mb-4" />

              <div className="flex gap-4 mt-4">
                <button
                  onClick={handleUpdate}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded-md"
                >
                  Cancel
                </button>
              </div>
            </>
          ) : (
            <>
              <p className="text-gray-700 mb-2">
                <strong>Description:</strong> {details.description}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Category:</strong> {details.category?.name || 'N/A'}
              </p>
              <p className="text-gray-700 mb-2">
                <strong>Date:</strong> {new Date(details.date).toLocaleDateString()}
              </p>
              <p className="text-gray-700">
                <strong>Time:</strong> {details.time}
              </p>
            </>
          )}
        </div>
      </div>
    </DashboardLayout>
  );
}

export default ProjectDetails;
