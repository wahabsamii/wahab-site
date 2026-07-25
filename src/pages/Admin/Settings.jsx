import React, { useEffect, useState } from 'react'
import DashboardLayout from './DashboardLayout'
import axios from 'axios';
import {toast} from "react-toastify";
function Settings() {
  const [showForm, setShowForm] = useState(false)

  const [services, setServices] = useState([]);

  const fetchServices = async() => {
    try {
      const res = await axios.get('https://wahab-me-backend.vercel.app/api/service/');
      setServices(res.data.services);
    } catch (error) {
      toast.error(error.message);
    }
  }

  useEffect(() => {
    fetchServices();
  }, []);

  const [formData, setFormData] = useState({
    title: '',
    description: '',
  });
  const [image, setImage] = useState("");
 

  // Handle form changes
  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Add new service
  const handleSubmit = async(e) => {
    e.preventDefault()

    if (!formData.title || !formData.description) {
      alert('Please enter service title and description.')
      return
    }

    const data = new FormData();

    data.append("title", formData.title);
    data.append("description", formData.description);
    data.append("image", image);
    const response = await axios.post('https://wahab-me-backend.vercel.app/api/service/', data);
    // const response = await axios.post('http://localhost:4000/api/service/', data, {
    //   headers: {
    //     "Content-Type": "multipart/form-data"
    //   }
    // });

    if (response) {
      toast.success("New Service Added.")
    }
    // const newService = {
    //   id: Date.now(),
    //   title: formData.title,
    //   description: formData.description,
    // }

    // setServices((prev) => [...prev, newService])

    // Reset form
    setFormData({
      title: '',
      description: '',
    })

    // Close form
    setShowForm(false)
  }

  // Delete service
  const handleDelete = async(id) => {
    const confirmDelete = window.confirm(
      'Are you sure you want to delete this service?'
    )

    const res = await axios.delete(`https://wahab-me-backend.vercel.app/api/service/${id}`);
    if (res) {
      toast.success("service deleted");
    }
    if (confirmDelete) {
      setServices((prev) =>
        prev.filter((service) => service.id !== id)
      )
    }
  }

  return (
    <DashboardLayout>
      <div className="p-6">

        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              Software Services
            </h1>

            <p className="text-gray-500 mt-1">
              Manage your company's software services.
            </p>
          </div>

          {/* Add Service Button */}
          <button
            onClick={() => setShowForm(true)}
            className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            + Add Service
          </button>
        </div>

        {/* Add Service Form */}
        {showForm && (
          <div className="bg-white border rounded-xl shadow-sm p-6 mb-8">

            {/* Form Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-800">
                Add New Service
              </h2>

              <button
                onClick={() => setShowForm(false)}
                className="text-gray-500 hover:text-gray-800 text-2xl"
              >
                ×
              </button>
            </div>

            <form onSubmit={handleSubmit}>

              {/* Service Image */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Image
                </label>

                <input
                  type="file"
                  name="image"
                  accept='image/*'
                  onChange={(e) => setImage(e.target.files[0])}
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              {/* Service Title */}
              <div className="mb-5">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Title
                </label>

                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  placeholder="e.g. Web Development"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Service Description */}
              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Service Description
                </label>

                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="5"
                  placeholder="Enter service description..."
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3">

                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Save Service
                </button>

              </div>

            </form>
          </div>
        )}

        {/* Current Services */}
        <div>

          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-gray-800">
              Current Services
            </h2>

            <span className="text-sm text-gray-500">
              {services.length} Services
            </span>
          </div>

          {/* No Services */}
          {services.length === 0 ? (
            <div className="bg-white border rounded-xl p-10 text-center">
              <p className="text-gray-500">
                No services added yet.
              </p>
            </div>
          ) : (

            /* Services Grid */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">

              {services.map((service) => (
                <div
                  key={service._id}
                  className="bg-white border rounded-xl p-6 shadow-sm hover:shadow-md transition"
                >

                  {/* {IMAGE } */}
                  <img src={service.image} alt="" width={40} className='mb-3'/>
                  {/* Title */}
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-6">
                    {service.description}
                  </p>

                  {/* Actions */}
                  <div className="flex gap-2 mt-5 pt-4 border-t">

                    <button
                      className="flex-1 px-3 py-2 text-sm border border-blue-500 text-blue-600 rounded-lg hover:bg-blue-50"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(service._id)}
                      className="flex-1 px-3 py-2 text-sm border border-red-500 text-red-600 rounded-lg hover:bg-red-50"
                    >
                      Delete
                    </button>

                  </div>

                </div>
              ))}

            </div>
          )}

        </div>

      </div>
    </DashboardLayout>
  )
}

export default Settings