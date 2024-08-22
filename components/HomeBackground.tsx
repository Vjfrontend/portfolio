// components/DotAnimation.js
import React from 'react';

const DotAnimation = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="flex space-x-2">
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-75"></div>
        <div className="w-4 h-4 bg-blue-500 rounded-full animate-bounce delay-150"></div>
      </div>
    </div>
  );
};

export default DotAnimation;
