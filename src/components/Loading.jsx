import React from 'react';
import { FiLoader } from 'react-icons/fi';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50">
      <FiLoader className="text-[#AF4C0F] animate-spin text-6xl" />
    </div>
  );
};

export default Loading;
