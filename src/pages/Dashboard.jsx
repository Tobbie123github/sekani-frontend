import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { BiPlus } from 'react-icons/bi';
import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";
import { toast } from 'react-toastify';

const Dashboard = () => {
  const [items, setItems] = useState([]);
  const [imageIndexes, setImageIndexes] = useState({});
  const [loading, setLoading] = useState(false);
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const res = await axios.get('https://sekani-backend.onrender.com/api/images', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Fetched images:', res.data);
        setItems(res.data);
      } catch (err) {
        console.error('Failed to fetch images:', err.response?.data || err.message || err);
        
      } finally {
        setLoading(false);
      }
    };
    fetchImages();
  }, [token]);

  // Navigate to add new image page
  const handleAddClick = () => {
    navigate('/add');
  };

  // Navigate to edit page for given item id
  const handleEditClick = (id) => {
    navigate(`/edit/${id}`);
  };

  // Delete
  const handleDeleteClick = async (id) => {
    if (!window.confirm('Are you sure you want to delete this item?')) return;

    setLoading(true);
    try {
      await axios.delete(`https://sekani-backend.onrender.com/api/images/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setItems((prev) => prev.filter((item) => item._id !== id));
       toast.success('Image deleted successfully!');
    } catch (err) {
      console.error('Failed to delete image item:', err);
      toast.error('Delete failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleNextImage = (itemId) => {
    setImageIndexes((prevIndexes) => {
      const currentImages = items.find((item) => item._id === itemId)?.images || [];
      const currentIndex = prevIndexes[itemId] || 0;
      const nextIndex = (currentIndex + 1) % currentImages.length;
      return { ...prevIndexes, [itemId]: nextIndex };
    });
  };

  const handlePrevImage = (itemId) => {
    setImageIndexes((prevIndexes) => {
      const currentImages = items.find((item) => item._id === itemId)?.images || [];
      const currentIndex = prevIndexes[itemId] || 0;
      const prevIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
      return { ...prevIndexes, [itemId]: prevIndex };
    });
  };

  const handleLogout = () => {
    setLoading(true);
    localStorage.removeItem('token');
    navigate('/login');
  };

  if (loading) {
    return <Loading />
  }

  return (
    <div className="mt-[6rem] ">
      {/* Dashboard Header */}
      <div className="flex md:p-6 flex-col md:flex-row justify-between  items-center  rounded-lg shadow-md mb-6">
        <h1 className="dark:text-gray-300 text-3xl  font-bold text-gray-800 mb-4 md:mb-0">Image Dashboard</h1>
        
        <div className="flex mt- gap-4">
                <Link to={"/addImage"} >
        <button
          onClick={handleAddClick}
          className="btn mb-5"
          disabled={loading}
          type="button"
        >
         <BiPlus className='text-xl'/> Add New Image
        </button>
        </Link>

          
        <button
          onClick={handleLogout}
          className="btn bg-red-700"
          disabled={loading}
          type="button"
        >
         Logout
        </button>
      



        </div>
        
        
      </div>

      {/* Images Grid */}
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {items.length === 0 ? (
          <p className="col-span-full text-center text-gray-600">No images found.</p>
        ) : (
          items.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.images[imageIndexes[item._id] || 0]}
                  alt={item.category}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = 'https://placehold.co/600x400/E5E7EB/6B7280?text=Error';
                  }}
                />
                {item.images.length > 1 && (
                  <>
                    <button
                      onClick={() => handlePrevImage(item._id)}
                      className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
                      type="button"
                    >
                      <i className="fas fa-chevron-left"><FaAngleLeft /></i>
                    </button>
                    <button
                      onClick={() => handleNextImage(item._id)}
                      className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-2 rounded-full hover:bg-opacity-75 transition duration-300"
                      type="button"
                    >
                      <i className="fas fa-chevron-right"><FaAngleRight /></i>
                    </button>
                  </>
                )}
              </div>
              <div className="p-4 flex flex-col items-center">
                <p className="text-gray-800 text-xl font-bold mb-2">{item.category}</p>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditClick(item._id)}
                    className="bg-yellow-500 text-white font-semibold py-2 px-4 rounded-full text-sm hover:bg-yellow-600 transition duration-300"
                    type="button"
                  >
                   Edit
                  </button>
                  <button
                    onClick={() => handleDeleteClick(item._id)}
                    className="bg-red-600 text-white font-semibold py-2 px-4 rounded-full text-sm hover:bg-red-700 transition duration-300"
                    type="button"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Dashboard;
