import React, { useEffect, useState } from 'react';
import Masonry from 'react-masonry-css';
import { motion, AnimatePresence } from 'framer-motion';
import axios from 'axios';
import './mansory.css';
import Loading from '../components/Loading';

const Portfolio = () => {
  const [imagesByCategory, setImagesByCategory] = useState({});
  const [activeTab, setActiveTab] = useState(null);
  const [loading, setLoading] = useState(true);

  const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await axios.get('https://sekani-backend.onrender.com/api/images/all');
        
        // Group images by category
        const grouped = res.data.reduce((acc, item) => {
          if (!acc[item.category]) acc[item.category] = [];
          item.images.forEach(img => {
            acc[item.category].push({
              src: img,
              alt: item.category
            });
          });
          return acc;
        }, {});

        setImagesByCategory(grouped);
        setActiveTab(Object.keys(grouped)[0] || null);
      } catch (err) {
        console.error('Failed to fetch images:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <Loading />
  }

  if (!activeTab) {
    return <p className="text-center mt-20 text-lg">No images found.</p>;
  }

  const tabs = Object.keys(imagesByCategory);

  return (
    <section className="py-12 mt-[5rem] px-4 max-w-7xl mx-auto min-h-screen">
      <h2 className="dark:text-gray-300 h1 text-center mb-10 text-4xl">
        My Works
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 mb-8 flex-wrap">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`
              relative pb-2 text-lg font-medium transition-all duration-300
              ${activeTab === tab
                ? "text-[#AF4C0F]"
                : "text-gray-500 hover:text-[#AF4C0F]"
              }
            `}
          >
            {tab}
            <AnimatePresence>
              {activeTab === tab && (
                <motion.div
                  layoutId="underline"
                  className="absolute left-0 right-0 bottom-0 h-[2px] bg-[#AF4C0F]"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  exit={{ scaleX: 0 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </AnimatePresence>
          </button>
        ))}
      </div>

      {/* Masonry Image Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {imagesByCategory[activeTab]?.map((image, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className=" overflow-hidden bg-red-500 rounded-lg shadow-xl cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full"
                   
                  onError={(e) => {
                    e.target.src = 'https://placehold.co/600x400/E5E7EB/6B7280?text=Image+Error';
                  }}
                />
              </motion.div>
            ))}
          </Masonry>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Portfolio;
