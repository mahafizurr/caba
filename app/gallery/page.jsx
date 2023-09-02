// pages/gallery.js
import React from "react";

const Gallery = () => {
  return (
    <div className="container mx-auto mt-8 p-4">
      <h1 className="bg-blue-600 text-white text-3xl text-center font-semibold mb-4 py-2">
        Image Gallery
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="bg-white p-2 shadow-md rounded-lg">
          <img
            src="/image/gallery/05.jpg"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-white p-2 shadow-md rounded-lg">
          <img
            src="/image/gallery/06.jpg"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-white p-2 shadow-md rounded-lg">
          <img
            src="/image/gallery/07.jpg"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-white p-2 shadow-md rounded-lg">
          <img
            src="/image/gallery/08.jpg"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-white p-2 shadow-md rounded-lg">
          <img
            src="/image/gallery/09.jpg"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-white p-2 shadow-md rounded-lg">
          <img
            src="/image/gallery/10.jpg"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-white p-2 shadow-md rounded-lg">
          <img
            src="/image/gallery/11.jpg"
            className="w-full h-auto rounded-lg"
          />
        </div>
        <div className="bg-white p-2 shadow-md rounded-lg">
          <img
            src="/image/gallery/12.jpg"
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
