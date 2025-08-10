import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../components/Loading';
import { toast } from 'react-toastify';

const categories = ['Event', 'Portrait', 'Wedding'];

const EditImage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    category: '',
    images: [], 
    existingImages: [], 
  });
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    // Fetch item details to edit
    const fetchItem = async () => {
      setLoading(true);
      try {
        const res = await axios.get(`https://sekani-backend.onrender.com/api/images/${id}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const item = res.data;
        setFormData({
          category: item.category,
          images: [],
          existingImages: item.images || [],
        });
      } catch (err) {
        console.error('Failed to fetch image item:', err);
        alert('Failed to load image data.');
      } finally {
        setLoading(false);
      }
    };

    fetchItem();
  }, [id, token]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    // multiple files
    setFormData((prev) => ({
      ...prev,
      images: Array.from(e.target.files), // FileList to array
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      
      const data = new FormData();
      data.append('category', formData.category);

      
      formData.images.forEach((file) => {
        data.append('images', file);
      });

      

      await axios.put(`https://sekani-backend.onrender.com/api/images/${id}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'multipart/form-data',
        },
      });

      toast.success('Image updated successfully!');
      navigate('/dashboard');
    } catch (err) {
      console.error('Failed to update image:', err);
      toast.error('Update failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-[6rem] bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">Edit Image</h2>

      {loading ? (
        <Loading />
      ) : (
        <form onSubmit={handleSubmit}>

          <label className="block mb-2 font-semibold">Category</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleInputChange}
            required
            className="w-full mb-4 px-3 py-2 border rounded"
          >
            <option value="" disabled>Select category</option>
            {categories.map((cat) => (
              <option key={cat} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <label className="block mb-2 font-semibold">Upload Images (choose new files to replace)</label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleFileChange}
            className="w-full mb-4"
            accept="image/*"
          />

          {formData.existingImages.length > 0 && (
            <div className="mb-4">
              <p className="mb-1 font-semibold">Existing Images:</p>
              <div className="flex flex-wrap gap-2">
                {formData.existingImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`existing-${idx}`}
                    className="w-20 h-20 object-cover rounded border"
                  />
                ))}
              </div>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="btn"
          >
            {loading ? 'Saving...' : 'Save Changes'}
          </button>
        </form>
      )}
    </div>
  );
};

export default EditImage;
