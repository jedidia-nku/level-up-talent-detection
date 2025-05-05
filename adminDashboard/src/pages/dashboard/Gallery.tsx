import React, { useEffect, useState } from 'react'
import {motion} from "framer-motion";
import axios from "axios";
import { toast, ToastContainer } from 'react-toastify';

const Gallery: React.FC = () => {
      const [images, setImages] = useState<{ public_id: string; url: string }[]>([]);
      const [selectedImage, setSelectedImage] = useState<string | null>(null);
      const [showModal, setShowModal] = useState(false);
      const [filename, setFilename] = useState<string | null>(null);

    const fetchImages = async () => {
        try {
          const res = await axios.get("https://level-up-talent-detection.onrender.com/api/upload");
          setImages(res.data);
        } catch (err) {
          console.error("Failed to fetch images", err);
        }
      };
    
      
      useEffect(() => {
        fetchImages();
      }, []);

      const handleDelete = async (public_id: string) => {
        try {
          await axios.delete("http://localhost:5000/api/upload/image", {
            params: { public_id },
          });

          toast.success("Image deleted successfully!");

          setImages((prev) => prev.filter((img) => img.public_id !== public_id));

          setShowModal(false);
        } catch (error) {
          console.error("Image deletion error:", error);
          toast.error("Failed to delete image.");
        }
      };
      

  return (
    <div className="container mx-auto text-center mb-12 p-4">
    <motion.h2
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="text-3xl font-bold text-yellow-500">GALLERY
    </motion.h2>
      
    <motion.p
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }} className="text-gray-600">Providing Fresh Produce Every Single Day
    </motion.p>
      
    <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-12">
    {images.map((img) => (
    img.public_id && (
    <div key={img.public_id} className="cursor-pointer border p-3 rounded-md border-gray-300">
    <div  onClick={() => setSelectedImage(img.url)}>
    <motion.img
    initial={{ opacity:0, y: -100 }}
    whileInView={{ opacity:1, y: 0 }}
    transition={{
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.4,
    }}className="h-auto max-w-full rounded-lg" src={img.url} alt={img.public_id} 
    onError={(e) => e.currentTarget.style.display = 'none'}
    />
    </div>
    <div className="flex justify-end gap-2 mt-4 full">
    <button
    onClick={
        () => {
        setFilename(img.public_id);
        setShowModal(true);
    }} 
     className='flex gap-2 bg-red-300 border rounded-md px-2 py-1 hover:bg-red-400 hover:text-white trasition duration-500 ease-in-out'>Delete 
     <span className="hidden lg:flex">Photo</span>
     </button>
     </div>
      </div>)))}
      </div>
    {selectedImage && (
  <div
    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
    onClick={() => setSelectedImage(null)} // Close when clicked
  >
    <img
      src={selectedImage}
      alt="Full Screen"
      className="max-w-full rounded-lg h-[90%]"
    />
  </div>
)}  
{showModal && (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-30 flex items-center justify-center">
      <div className="bg-white p-6 rounded shadow-md w-80 text-center">
        <h2 className="text-lg font-semibold mb-4">Are you sure you want to delete this Image?</h2>
        <div className="flex justify-center gap-4">
        {filename && (
          <button
            onClick={() => handleDelete(filename)}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 transition"
          >
            Yes, Delete
          </button>
        )}
          
          <button
            onClick={() => setShowModal(false)}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400 transition"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  )}
  <ToastContainer />
    </div>
  )
}

export default Gallery
